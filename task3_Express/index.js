// Задание http server №4
// 1. Инициализируйте проект NPM. 
// 2. Установите библиотеку express.
// 3. Создайте файл index.js.
// 4. В файле напишите код который реализует два обработчика по URL “/” и URL
// “/about”.
// 5. В каждом обработчике верните HTML код, в котором есть заголовок и ссылка
// на соседнюю страницу.

// 1) Переходим в директорию => cd task3_Express => npm init -y
// 2) npm i express

const express = require('express');

const app = express(); // создвем придожение express

app.get('/', (req, res) => {
    res.send('<h1>Welcome</h1>\n<a href="/about">to about</a>');
});

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>\n<a href="/">to home</a>');
});

app.listen(3000);

// Запускам http сервер (для остановки ctrl + c) =>  node index.js 
// Проверяем в браузере http://localhost:3000/

