// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var normalizeHashTags = require('./ex01.js');

assert.deepEqual(
    normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
    'web, coursera, javascript, script, programming',
    'Список "web, coursera, JavaScript, Coursera, script, programming"' +
    ' содержит хэштеги "web, coursera, javascript, script, programming"'
);

console.info('OK!');
