"use strict"

// Дана строка. Проверьте, начинается ли эта строка на 'http://'.

let str = 'http:// Дана строка. Проверьте, начинается ли эта строка на http://';

console.log(str.startsWith('http://'));

console.log(str.startsWith('Проверьте'));

console.log(str.startsWith('Проверьте', 21));




// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

let str2 = 'http:// Дана строка. Проверьте, начинается ли эта строка на .html';

console.log(str2.endsWith('.html'));

console.log(str2.endsWith('строка'));

console.log(str2.endsWith('строка', 19));

