# Toster wysiwyg panel

[![Latest release](https://img.shields.io/github/release/yarkovaleksei/toster-wysiwyg-panel.svg)](https://github.com/yarkovaleksei/toster-wysiwyg-panel/releases/latest)  [![Build Status](https://travis-ci.org/yarkovaleksei/toster-wysiwyg-panel.svg?branch=master)](https://travis-ci.org/yarkovaleksei/toster-wysiwyg-panel)  [![Dependencies total](https://david-dm.org/yarkovaleksei/toster-wysiwyg-panel.svg)](https://david-dm.org/yarkovaleksei/toster-wysiwyg-panel.svg)  [![Chrome Web Store - version](https://img.shields.io/chrome-web-store/v/kpfolongmglpleidinnhnlefeoljdecm.svg)](https://chrome.google.com/webstore/detail/toster-wysiwyg-panel/kpfolongmglpleidinnhnlefeoljdecm?hl=ru&gl=RU)  [![Chrome Web Store - rating](https://img.shields.io/chrome-web-store/rating/kpfolongmglpleidinnhnlefeoljdecm.svg)](https://chrome.google.com/webstore/detail/toster-wysiwyg-panel/kpfolongmglpleidinnhnlefeoljdecm?hl=ru&gl=RU)

- - -
+ [Описание](#Описание)
+ [Установка](#Установка)
+ [Установка из репозитория](#Установка-из-репозитория)
+ [Установка в Opera](#Установка-в-opera)
+ [Установка в Google Chrome](#Установка-в-google-chrome)
+ [Установка в Firefox](#Установка-в-firefox)
+ [Разработчикам](#Разработчикам)
+ [Подготовка к работе](#Подготовка-к-работе)
+ [Проверка](#Проверка)
+ [Сборка](#Сборка)
+ [Упаковка в zip перед публикацией](#Упаковка-в-zip-перед-публикацией)
+ [Подписывание расширения для Firefox](#Подписывание-расширения-для-firefox)

[Наверх](#toster-wysiwyg-panel)

- - -
# Внимание

## Актуальная версия расширения только для Google Chrome

Opera и Firefox долго пропускают расширение для публикации. 

Если расширение недоступно по приведенной ссылке, то используйте установку из zip-архива, как описано [здесь](#Установка-из-репозитория)

[Наверх](#toster-wysiwyg-panel)

- - -
### Описание

**Расширение для браузеров [Google Chrome](https://chrome.google.com/webstore/detail/toster-wysiwyg-panel/kpfolongmglpleidinnhnlefeoljdecm), Opera и [Firefox](https://addons.mozilla.org/en-US/firefox/addon/toster-wysiwyg-panel/)**

**Что умеет расширение?**

1. Расширение добавляет функционал редактора формы ответа к форме комментария для сайта [toster.ru](https://toster.ru)
2. Возможность отправки ответа или комментария нажатием комбинации Ctrl+Enter
3. Проверка новых уведомлений (опция и интервал проверки включается в настройках)
4. HTML5 Notification уведомление, клик по которому откроет страницу со списком уведомлений (нуждается в доработке)
5. Вывод количества непрочитанных уведомлений на иконку расширения в виде текста на красном фоне
6. Комбинация Alt+T открывает popup с настройками
7. Добавлена возможность отключать и включать все опции в настройках:
    - Включить/отключить AJAX проверку
    - Включить/отключить HTML5 уведомления
    - Включить/отключить вывод на иконку расширения
    - Интервал AJAX проверки в секундах
    - Включить/отключить тулбар с кнопками
    - Включить/отключить отправку сообщения комбинацией Ctrl+Enter

- - -
[![Screenshot](img/screen-form.png)](img/screen-form.png)

[![Screenshot](img/screen-settings.png)](img/screen-settings.png)

[![Screenshot](img/screen-notify.png)](img/screen-notify.png)

[Наверх](#toster-wysiwyg-panel)

- - -
### Установка

[![Chrome web store](img/chrome.png)](https://chrome.google.com/webstore/detail/toster-wysiwyg-panel/kpfolongmglpleidinnhnlefeoljdecm)  [![Firefox Add-ons](img/ff.jpg)](https://addons.mozilla.org/en-US/firefox/addon/toster-wysiwyg-panel/)  ![Ожидание публикации](img/opera.png)

[Наверх](#toster-wysiwyg-panel)

- - -
### Установка из репозитория

Скачиваем [отсюда](https://github.com/yarkovaleksei/toster-wysiwyg-panel/releases/latest) нужный файл для своего браузера:

- Opera и Google Chrome - **source.zip**
- Firefox - *.xpi файл расширения

[Наверх](#toster-wysiwyg-panel)

- - -
#### Установка в Opera

Распаковываем архив:

```bash
$ cd ~/Загрузки
$ unzip source.zip -d ./source
```

Теперь открываем браузер:

1. Жмем Ctrl+Shift+E
2. Нажимаем кнопку как на скрине
![Screenshot](img/opera-how-to.png)
3. Выбираем нашу папку (source), куда распакован архив, и нажимаем кнопку "Open"

[Наверх](#toster-wysiwyg-panel)

- - -
#### Установка в Google Chrome

Распаковываем архив:

```bash
$ cd ~/Загрузки
$ unzip source.zip -d ./source
```

Теперь открываем браузер:

1. Вводим в строку браузера *chrome://extensions/*
2. Нажимаем кнопку как на скрине
![Screenshot](img/chrome-how-to.png)
3. Выбираем нашу папку (source), куда распакован архив, и нажимаем кнопку "Open"

[Наверх](#toster-wysiwyg-panel)

- - -
#### Установка в Firefox

1. Нажимаем правой кнопкой мыши на скачанный xpi файл. Имя файла примерно такое: *toster_wysiwyg_panel-X-X-X-xxxx.xpi*
2. Выбираем в контекстном меню пункт "Открыть с помощью..."
3. Выбираем из предложенных вариантов Firefox

Откроется браузер:

1. Нажимаем кнопку как на скрине
![Screenshot](img/ff-how-to.jpg)

- - -
Готово! Теперь можно пользоваться Тостером и не нервничать :smile:

[Наверх](#toster-wysiwyg-panel)

- - -
### Разработчикам

[Наверх](#toster-wysiwyg-panel)

- - -
#### Подготовка к работе

```bash
$ git clone git@github.com:yarkovaleksei/toster-wysiwyg-panel.git
$ cd toster-wysiwyg-panel
$ npm install
```

[Наверх](#toster-wysiwyg-panel)

- - -
#### Проверка

```bash
$ npm run lint
```

[Наверх](#toster-wysiwyg-panel)

- - -
#### Сборка

```bash
$ npm run compile
```

[Наверх](#toster-wysiwyg-panel)

- - -
#### Упаковка в zip перед публикацией

```bash
$ npm run zip
```

[Наверх](#toster-wysiwyg-panel)

- - -
#### Подписывание расширения для Firefox

Чтобы иметь возможность подписать файл для Firefox надо пройти по [этой ссылке](https://addons.mozilla.org/en-US/developers/addon/api/key/) и сохранить ваши ключи в файл .jwtsign в папке репозитория.

Файл должен выглядеть так:

```bash
APIKEY="user:123456789:999"
SECRETKEY="e1373f71d00aad90183b410c2e8661265a71845fd0805bd2bdca5fe66a635cfb"
```

Команда для создания и подписи файла:

```bash
$ npm run ffsign
```
