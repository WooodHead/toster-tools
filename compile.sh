#!/bin/bash

set -e

if [ -z "$1" ]; then
    BROWSERS=("chrome" "ff" "opera")
else
    BROWSERS=("$@")
fi

FILES=("icon" "js" "css" "_locales" "manifest.json" "popup.html")

$(which browserify) -t brfs src/content/content.js -o src/js/content.js

for ((i=0; i < ${#BROWSERS[@]}; i++))
do
    browser="${BROWSERS[$i]}"
    target=browsers/$browser

    [ -d "$target" ] && rm -rf $target
    [ -f "$target.zip" ] && rm -f $target.zip

    mkdir -p $target

    for ((j=0; j < ${#FILES[@]}; j++))
    do
        file_source="${FILES[$j]}"
        cp -r src/$file_source $target
    done
done