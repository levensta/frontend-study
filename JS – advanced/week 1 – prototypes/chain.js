function Person() {
    this.type = 'human';
}

Person.prototype.getName = function () {
    return this.name;
};

function Student(name) {
    this.name = name;
}

// Student.prototype = Object.create(Person.prototype);
Object.setPrototypeOf(Student.prototype, Person.prototype)

Student.prototype.sleep = function () {};

/**
 * поле constructor не будет перезаписываться,
 * если использовать setPrototypeOf, а не create
 */
// Student.prototype.constructor = Student;

let billy = new Student('Billy');

console.log(billy.constructor.name);