Object.prototype.serialize = function () {};
let student = {
    name: 'Ivan',
    getName: function () { return this.name; }
};

Object.defineProperty(student, 'type', {
    enumerable: false,
    value: 'student'
});

for (let key in student) {
    console.log(key);
}