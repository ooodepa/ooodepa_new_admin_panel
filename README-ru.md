# README

**Языки документации**:

- [English](README.md)
- [Русский](README-ru.md)

**Меню**:

- [Задание](#задание)
- [Как запустить приложение](#как-запустить-приложение)
- [Стэк приложений](#стэк-приложений)
- [Структура проекта](#структура-проекта)

## Задание

Написать админ панель

## Как запустить приложение

### Разработка

```bash
git clone https://github.com/ooodepa/ooodepa_new_admin_panel.git
#git clone git@github.com:ooodepa/ooodepa_new_admin_panel.git
cd ooodepa_new_admin_panel
npm ci
cp .env.example .env
#copy .env.example .env
npm run start
```

### Продакшен

```bash
git clone https://github.com/ooodepa/ooodepa_new_admin_panel.git
#git clone git@github.com:ooodepa/ooodepa_new_admin_panel.git
cd ooodepa_new_admin_panel
cp .env.example .env
#copy .env.example .env
sh docker-build.sh
#docker login
#docker push pavelinnokentevichgalanin/ooodepa_admin_panel
#docker-compose -f docker-compose.prod.yml up --build
docker-compose -f docker-compose.prod.yml up
#docker-compose -f docker-compose.prod.yml down
```

## Стэк приложений

- **[VS Code](https://code.visualstudio.com/#alt-downloads)** - редактор кода
- **[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)** - браузер
- **[Node JS](https://nodejs.org/en/)** - для разработки приложения
  - **[React](https://reactjs.org/tutorial/tutorial.html)** - фреймворк для
    фронтенда
  - **[React props types](https://www.npmjs.com/package/prop-types)** - check
    props types
  - **[React-hook-form](https://react-hook-form.com/get-started)** - библиотека
    для проверки формы
  - **[Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)** -
    иконки
  - **[Font Inter](https://www.npmjs.com/package/typeface-inter)** - шрифт
  - **[Toastr](https://codeseven.github.io/toastr/demo.html)** - библиотека,
    чтобы выводить сообщения на экран, которые сами пропадают
- **[Docker, docker-compose](https://www.docker.com/)** - контейнеры
- **[GitHub pages](https://pages.github.com/)** - хостинг Jekyll от GitHub

## Структура проекта

```bash
sudo apt install tree
tree --charset ascii -a -I ".git|node_modules|build"
```

```bash
.
|-- .browserslistrc
|-- .dockerignore
|-- .env
|-- .env.example
|-- .eslintrc.js
|-- .gitignore
|-- .prettierignore
|-- .prettierrc.json
|-- Dockerfile
|-- LICENSE
|-- README-ru.md
|-- README.md
|-- docker-build.sh
|-- docker-compose.prod.yml
|-- docker-compose.yml
|-- docker-nginx-default.conf
|-- package-lock.json
|-- package.json
|-- public
|   |-- favicon.ico
|   |-- index.html
|   |-- logo192.png
|   |-- logo512.png
|   |-- manifest.json
|   `-- robots.txt
`-- src
    |-- App.jsx
    |-- components
    |   |-- AppContainer
    |   |   |-- AppContainer.jsx
    |   |   `-- AppContainer.module.css
    |   |-- AppForm
    |   |   |-- AppForm.jsx
    |   |   `-- AppForm.module.css
    |   |-- AppFormLabel
    |   |   |-- AppFormLabel.jsx
    |   |   `-- AppFormLabel.module.css
    |   |-- AppTableBlock
    |   |   |-- AppTableBlock.jsx
    |   |   `-- AppTableBlock.module.css
    |   |-- AppWrapper
    |   |   |-- AppWrapper.jsx
    |   |   `-- AppWrapper.module.css
    |   |-- BreadCrumbs
    |   |   |-- BreadCrumbs.jsx
    |   |   `-- BreadCrumbs.module.css
    |   |-- ContactTypesPage
    |   |   |-- ContactTypePage
    |   |   |   `-- ContactTypePage.jsx
    |   |   `-- ContactTypesPage.jsx
    |   |-- ContactsPage
    |   |   |-- ContactPage
    |   |   |   `-- ContactPage.jsx
    |   |   `-- ContactsPage.jsx
    |   |-- Error404Page
    |   |   `-- Error404Page.jsx
    |   |-- HomePage
    |   |   |-- HomePage.jsx
    |   |   `-- HomePage.module.css
    |   `-- SignInPage
    |       |-- SignInPage.jsx
    |       `-- SignInPage.module.css
    |-- const
    |   |-- env.css
    |   `-- global.css
    |-- index.js
    |-- packages
    |   `-- useForceUpdate.js
    `-- scripts
        |-- DateController
        |   |-- DateController.js
        |   `-- DateController.test.js
        |-- ToastController
        |   `-- ToastController.js
        `-- api
            `-- rest
                |-- AbstractApiCrud.js
                |-- auth
                |   |-- is-admin-token.js
                |   `-- sign-in.js
                |-- contact-types.js
                `-- contacts.js

24 directories, 58 files
```
