//при запуске инструмента, он будет проверять, есть ли такой инструмент с настройками webpack ми будет работать с его настройками

//настройка webpack
const path = require("path");

//две точки входа с одинаковыми точками входа но для каждого отдельно
module.exports = {
    entry: {
        main: "./src/index.js",
        menu: "./src/menu.js",
    },
    //говорит как мы будем собирать файлы и куда будем размещать готовый бандл
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    //будет показывать ошипки
    devtool: "eval-source-map",
};

//в терминале устанавливаем webpack
//  https://webpack.js.org/guides/getting-started/
//npm init -y
//npm install webpack webpack-cli --save-dev

//чтобы папка ушла из отображения GIT создаем новый фаил .gitignor
//и помещаем ф-ы: /node_modules   и    package-lock.json

//теперь папку node_modules можно удалить, а при скачке с GIT прописать команду
//npm i