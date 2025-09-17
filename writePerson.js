
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
