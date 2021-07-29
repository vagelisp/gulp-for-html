 ### Gulp script for simple HTML projects
[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-quick-start)

## ➤ 🚀 Quick start

1.  **Getting ready.**

    ### Clone repository
    git clone https://github.com/vagelisp/gulp-for-html

    ### Install node modules using npm
    npm install

    ### Install node modules using yarn
    yarn


[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-whats-inside)

## ➤ 🧐 What's inside?

    .
    ├── js
	├── css
	├── images
    ├── .gitignore
    ├── gulpfile.js
    ├── package.json
    └── README.md

1.  **`/js`**: This directory contains all js files including the init.js

2.  **`/css`**: This directory will contain all of the css files including the main.scss

3.  **`/images`**: This directory will contain all the image files

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`gulp-file.js`**: This file the main gulp script.

6. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

7. **`README.md`**: You are reading this right now.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-deploy)


## ➤ 🧐 Gulp tasks

1. **`gulp`**: runs CSS task and then adds a watcher on CSS folder.
2. **`gulp watch`**: runs JS & CSS tasks and then watch for changes on JS and CSS folder.
3. **`gulp images`**: runs images task.
4. **`gulp js`**: runs js task.
5. **`gulp css`**: runs css task.
6. **`gulp watch-all`**: runs JS,CSS * Image tasks and then watch for changes all folders.
7. **`gulp serve`**: serves the html files and adds watchers on all folders
8. **`gulp serve-no-images`**: serves the html files and adds watchers on all folders except the images folder
9. **`gulp js:watch`**: starts a watcher for the JS folder.
10. **`gulp css:watch`**: starts a watcher for the CSS folder.
11. **`gulp images:watch`**: starts a watcher for the Images folder.

[![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/colored.png)](#-deploy)
