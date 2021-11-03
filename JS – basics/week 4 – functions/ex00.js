let PRIORITY = {
    filterIn: 0,
    select: 1
};

/**
 * @param obj
 * @returns {boolean} - пустой ли объект
 */
function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}

/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    // создаем копию массива объектов
    let copyCollection = collection.map(a => Object.assign({}, a));

    if (arguments.length > 1) {
        let operations = [].slice.call(arguments, 1);
        // Сортируем массив операций по приоритету
        operations.sort(function (operationOne, operationTwo) {
            // Для определения операции будем использовать название соответствующей функции
            return PRIORITY[operationOne.name] - PRIORITY[operationTwo.name];
        });
        for (let i = 0; i < operations.length; ++i) {
            copyCollection = operations[i](copyCollection);
        }
        // удаляем пустые объекты, если они есть
        for (let i = 0; i < copyCollection.length; ++i) {
            if (isEmpty(copyCollection[i])) {
                copyCollection.splice(i--, 1);
            }
        }
    }

    return copyCollection;
}

/**
 * @params {String[]}
 */
function select() {
    let fields = [].slice.call(arguments);

    return function select(collection) {
        for (let i = 0; i < collection.length; ++i) {
            let keysObj = Object.keys(collection[i]);
            // оставляем только те свойства, которые нам передали (fields)
            for (let j = 0; j < keysObj.length; ++j) {
                if (!fields.includes(keysObj[j])) {
                    delete collection[i][keysObj[j]];
                }
            }
        }

        return collection;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    // здесь происходит замыкание, внутри функции, которую мы возвращаем,
    // будет доступны внешние переменные property, values
    return function filterIn(collection) {
        for (let i = 0; i < collection.length; ++i) {
            let currentObj = collection[i];
            // если текущий объект содержит нужное свойство,
            // то проверяем значение в массиве допустимых
            if (currentObj.hasOwnProperty(property)) {
                if (!values.includes(currentObj[property])) {
                    collection.splice(i--, 1);
                }
            }
            // то, что не подходит, выкидываем из массива
            else {
                collection.splice(i--, 1);
            }
        }
        return collection;
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
