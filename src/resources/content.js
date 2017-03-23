/* global Device, Ext, browser, chrome */
/* eslint class-methods-use-this: "off" */
/* eslint no-use-before-define: "off" */
const utils = require( '../js/utils' );

const {
    $,
    $$,
    createElement
} = utils;

const Device = ( () => {
    if ( typeof browser === 'undefined' ) {
        return chrome;
    }
    return browser;
} )();

const callbackMessage = ( request, sender, callback ) => {
    window.Ext.callbackMessage( request, sender, callback );
};

class Extension {
    constructor( ...args ) {
        this.Options = {
            ajax: false,
            interval: 10,
            show_toolbar: true,
            use_kbd: true,
            use_notifications: false,
            use_badge_icon: false
        };
    }

    addKeyDownListener() {
        const textareas = $$( 'textarea.textarea' );
        for ( let i = 0; i < textareas.length; i++ ) {
            const textarea = textareas[ i ];
            const form = textarea.form;
            const button = $( 'button[type="submit"]', form );
            textarea.addEventListener( 'keydown', ( event ) => {
                if ( !event ) {
                    const event = window.event;
                }
                if ( ( event.ctrlKey || event.metaKey ) && ( event.keyCode === 13 || event.keyCode === 10 ) ) {
                    if ( this.Options.use_kbd ) {
                        button.click();
                    }
                }
            } );
        }
    }

    showToolbar() {
        const toolbars = $$( 'div.twpwyg_toolbar' );

        if ( toolbars && toolbars.length ) {
            if ( this.Options.show_toolbar ) {
                for ( let i = 0; i < toolbars.length; i++ ) {
                    toolbars[ i ].classList.remove( 'hidden' );
                }
            } else {
                for ( let i = 0; i < toolbars.length; i++ ) {
                    toolbars[ i ].classList.add( 'hidden' );
                }
            }
        } else {
            if ( !this.Options.show_toolbar ) {
                return;
            }

            const commentForms = $$( 'form.form_comments[role$="comment_form"]' );

            if ( commentForms ) {
                const script = document.createElement( 'script' );
                script.src = Device.extension.getURL( 'resources/twpwyg.js' );

                $( 'head' ).appendChild( script );

                const toolbar_url = Device.extension.getURL( 'resources/toolbar.html' );

                fetch( toolbar_url, {
                        credentials: 'include'
                    } )
                    .then( response => response.text() )
                    .then( ( body ) => {
                        for ( let i = 0; i < commentForms.length; i++ ) {
                            const form = commentForms[ i ];
                            const field_wrap = form.querySelector( 'div.field_wrap' );

                            const div = document.createElement( 'div' );
                            div.appendChild( createElement( body ) );
                            field_wrap.insertBefore( div, field_wrap.firstChild );
                        }
                    } )
                    .catch( console.error );
            }
        }
    }

    callbackMessage( request, sender, callback ) {
        if ( request && request.cmd ) {
            this.Options = Object.assign( {}, this.Options, request.data || {} );
            this.showToolbar();
            this.addKeyDownListener();
        }
    }

    sendMessageToBackgroundScript( request ) {
        Device.runtime.sendMessage( request, {}, callbackMessage );
    }
}

window.Ext = new Extension();

Device.runtime.onMessage.addListener( callbackMessage );

window.Ext.sendMessageToBackgroundScript( {
    cmd: 'options'
} );
