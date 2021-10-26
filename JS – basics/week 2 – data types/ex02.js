// Телефонная книга

var phoneBook = {};

function addContact(name, phones) {
    if (!phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = [];
    }
    phoneBook[name] = phoneBook[name].concat(phones);
}

function removePhone(phone) {
    for (var name in phoneBook) {
       var index = phoneBook[name].indexOf(phone);
       if (index != -1) {
           phoneBook[name].splice(index, 1);
           if (phoneBook[name].length === 0) {
               delete phoneBook[name];
           }
           return true;
       }
    }
    return false;
}

function show() {
    // Получаем список всех имен контактов (ключи)
    var names = Object.keys(phoneBook);

    // Сортируем имена (функция sort меняет массив)
    names.sort();

    // Тут для итерации по контактам подходит функция map,
    //  поскольку нам для каждого контакта нужно вернуть список его телефонов
    return names.map(function (name) {
        // Получаем список телефонов контакта
        var phones = phoneBook[name];

        // Формируем строчку для контакта
        return name + ': ' + phones.join(', ');
    });
}

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var params = command.split(' ');

    if (params[0] === "ADD") {
        return addContact(params[1], params[2].split(','));
    }
    else if (params[0] === "REMOVE_PHONE") {
        return removePhone(params[1]);
    }
    else if (params[0] === "SHOW") {
        return show();
    }
};
