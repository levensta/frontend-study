console.log(Object.prototype.toString()); // Тут будет "[object Object]"

let student = {};
let lecturer = {};

lecturer.toString = function () { return 'Woohoo!' }

// Что выведут эти console.log
console.log(student.toString());
console.log(lecturer.toString());
console.log(lecturer.toString.call(student));