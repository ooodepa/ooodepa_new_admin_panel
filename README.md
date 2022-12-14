# README

**Documentation languages**:

- [English](README.md)
- [Русский](README-ru.md)

**Menu**:

- [Task](#task)
- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
- [Project structure](#project-structure)

## Task

Write admin panel

## How to run app

### Development

```bash
git clone https://github.com/ooodepa/ooodepa_new_admin_panel.git
#git clone git@github.com:ooodepa/ooodepa_new_admin_panel.git
cd ooodepa_new_admin_panel
npm ci
cp .env.example .env
#copy .env.example .env
npm run start
```

### Production

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

## Application stack

- **[VS Code](https://code.visualstudio.com/#alt-downloads)** - code editor
- **[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)** - browser
- **[Node JS](https://nodejs.org/en/)** - for application development
  - **[React](https://reactjs.org/tutorial/tutorial.html)** - frontend framework
  - **[React props types](https://www.npmjs.com/package/prop-types)** - check
    props types
  - **[React-hook-form](https://react-hook-form.com/get-started)** - library for
    form validation
  - **[Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react)** -
    icons
  - **[Font Inter](https://www.npmjs.com/package/typeface-inter)** - font
  - **[Toastr](https://codeseven.github.io/toastr/demo.html)** - library to
    display messages on the screen that disappear on their own
- **[Docker, docker-compose](https://www.docker.com/)** - containers
- **[GitHub pages](https://pages.github.com/)** - Jekyll hosting from GitHub

## Project structure

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
