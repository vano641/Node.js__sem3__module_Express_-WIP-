// Задание №2
// 1. Создайте файл writePerson.js
// 2. Напишите код, который создаст файл person.json в директории
// запускаемого скрипта и запишет в файл следующий объект (person)

// Подсказки:
// - Для преобразования объекта в текст используйте функцию JSON.stringify()
// - Для определения пути к файлу, используйте модуль path и его метод .join(),
// а также глобальное свойство __dirname
// - Используйте синхронный метод записи в файл

const fs = require('fs'); // для чтения и записи фалов
const path = require('path'); // для работы с путями

const person = {
        name: 'Ivan',
        surname: 'Mysovsky',
        age: 30,
        city: 'Saint-Petersburg'
};

fs.writeFileSync(path.join(__dirname, 'person.json'), JSON.stringify(person, null, 2));
// node ./writePerson.js запускаем код и рядом в директории создается файл persone.json
