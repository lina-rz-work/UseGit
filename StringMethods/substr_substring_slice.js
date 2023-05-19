"use strict"

// let str = 'he still have feelings for you';
// let sub1 = str.substr(14, 8);

// console.log(sub1);



// let str2 = 'he is now thinking of you...';
// let sub2 = str2.substring(10, 18);

// console.log(sub2);



// let sub3 = str2.slice(19, -3);
// let sub4 = str2.slice(10, 25);

// console.log(sub3);
// console.log(sub4);




// Дана строка 'я учу javascript!'. Вырежьте из нее слово 'учу' 
// и слово 'javascript' тремя разными способами (через substr, substring, slice).

let str = 'я учу javascript!'

let substr = str.substr(2, 3);
let substr1 = str.substr(-11, 10);
console.log(substr);
console.log(substr1);

let substring = str.substring(2, 5);
let substring1 = str.substring(6, 16);
console.log(substring);
console.log(substring1);

let slice = str.slice(2, 5);
let slice1 = str.slice(6, 16);
let slice2 = str.slice(-11);
console.log(slice);
console.log(slice1);
console.log(slice2);