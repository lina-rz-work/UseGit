"use strict"

/*Давайте напишем код, который преобразует первую букву 
каждого слова в верхний регистр. Сразу приведу решение с комментариями:*/

let str = 'word1 word2 word3';
let arr = str.split(' ');
let arr2 = [];

// for (let elem of arr) {
//     arr2.push(elem.slice(0, 1).toUpperCase() + elem.slice(1));
// }

// let res = arr2.join(' ');

// console.log(res);

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    console.log(arr);
}

let res = arr.join(' ');

console.log(res);




/*Преобразуйте строку 'var_test_text' в 'VarTestText'.
Написанный код должен работать для любых строк такого типа 
(то есть для строк, в которых слова разделены символов подчеркивания).*/

let string = 'var_test_text_love';
let array = string.split('_');
let newArray = [];


for (let elem of array) {
    newArray.push(elem.slice(0, 1).toUpperCase() + elem.slice(1));
}

let result = newArray.join('');

console.log(result);





// Дана строка со словами. Напишите скрипт, который переставит слова в строке в обратном порядке.

let someStr = 'скрипт который переставит слова в строке в обратном порядке';

let newStr = someStr.split(' ').reverse().join(' ');

console.log(newStr);