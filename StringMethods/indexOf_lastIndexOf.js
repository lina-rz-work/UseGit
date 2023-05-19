"use strict"

// Дана строка 'abcde'. Определите позицию буквы 'c' в этой строке.

// let str = 'abcde';

// console.log(str.indexOf('c'));



// Дана строка. Проверьте, есть ли в этой строке символ 'a'.

// let str = 'bcdea';

// if (str.indexOf('a') !== -1) {
//     console.log('exists');
// } else {
//     console.log('doesn`t exist');
// }

// console.log(str.lastIndexOf('a') !== -1 ? 'exists' : 'does not exist');



// Дана строка. Проверьте, начинается ли эта строка с символа 'a'.

// let str = 'nacde';

// if (str[0].indexOf('a') !== -1) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// console.log((str.slice(0, 1) == 'a') ? 'yes' : 'no');




// Дана строка. Проверьте, заканчивается ли эта строка на символ 'a'.

// let str = 'cvghja';

// if (str[str.length - 1].indexOf('a') !== -1) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// console.log(str.slice(-1) == 'a' ? 'true' : 'false');

// console.log(str.lastIndexOf('a') == str.length - 1 ? 'true' : 'false');




// Дана строка. Проверьте, начинается ли эта строка на 'http://'.

// let str = 'http://code.mu/ru/javascript/book/prime/inbuilt/string/';


// if (str.indexOf('http://') === 0) {
//     console.log('true');
// } else {
//     console.log('false');
// }

// console.log(str.indexOf('http://') === 0 ? 'true' : 'false');

// let isExists = str.indexOf('http://') === 0;

// console.log(isExists);




// Дана строка. Проверьте, заканчивается ли эта строка на '.html'.

let newStr = '.html Дана строка. .html Проверьте, начинается ли эта строка на .html';

// console.log(newStr.lastIndexOf('.html'));

if (newStr.slice(newStr.lastIndexOf('.html')) === '.html') {
    console.log('+');
} else {
    console.log('-');
}

console.log(newStr.slice(newStr.lastIndexOf('.html')) === '.html' ? 'true' : 'false');

console.log(newStr.slice(-5) === '.html' ? 'true' : 'false');





let mySite = "http://webpupil.ru";

function ifContainSubstr(value) {
    console.log(value.indexOf('http://') !== -1 ? 'contains an indication of the protocol' : 'does not contain an indication of the protoco');
}

ifContainSubstr(mySite);




// Пример: использование метода indexOf() для подсчёта вхождений буквы в строку

var str = 'Быть или не быть, вот в чём вопрос.';
var count = 0;
var pos = str.indexOf('в');

while (pos !== -1) {
  count++;
  pos = str.indexOf('в', pos + 1);
}

console.log(count); // отобразит 3