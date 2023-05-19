"use strict"

// Дана строка '1-2-3-4-5'. С помощью метода split запишите каждое число этой строки в отдельный элемент массива.

let str = '1-2-3-4-5';
let arr = str.split('-');

console.log(arr);



// Дана строка '12345'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.

let str1 = '12345';
let arr1 = str1.split('');

console.log(arr1);





function splitString(stringToSplit, separator) {
    var arrayOfStrings = stringToSplit.split(separator);
    console.log(arrayOfStrings);
}
  
var tempestString = 'И как хорош тот новый мир, где есть такие люди!';
var monthString = 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек';

var space = ' ';
var comma = ',';

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);




// С помощью метода join слейте его в строку '1-2-3-4-5'.

let arr3 = [1, 2, 3, 4, 5];
let str3 = arr3.join('-');
let str4 = arr3.join('');
let str5 = arr3.join(' ');

console.log(str3);
console.log(str4);
console.log(str5);