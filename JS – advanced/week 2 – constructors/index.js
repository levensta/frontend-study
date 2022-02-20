module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
    Object.defineProperty(this, "c", {
        value: [],
        enumerable: false
    });
}


// Методы коллекции
Collection.prototype.values = function () {
    return this.c;
};

Collection.prototype.at = function (index) {
    return this.c[index - 1] !== undefined ?
        this.c[index - 1] : null;
}

Collection.prototype.count = function () {
    return this.c.length;
}

Collection.prototype.append = function (item) {
    if (item instanceof Collection) {
        // почему-то это не работает
        // this.c = this.c.concat(value.c);
        for (let i = 1; i <= item.count(); i++) {
            this.append(item.at(i));
        }
    }
    else {
        this.c.push(item);
    }
}

Collection.prototype.removeAt = function (index) {
    if (this.c[index - 1] === undefined) {
        return false;
    }
    this.c.splice(index - 1, 1);
    return true;
}

/**
 * Создание коллекции из массива значений
 */
Collection.from = function (arr) {
    return Object.create(Collection.prototype, {
        c: {
            value: arr,
            enumerable: false
        }
    });
};
