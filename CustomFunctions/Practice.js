"use strict"

// Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

// let arr = [1, 2, 3, 4, 5];

// function calcSum(arr) {
//     let sum = 0;

//     for (let elem of arr) {
//         sum += elem;
//     }

//     return sum;
// }

// console.log(calcSum(arr));




// Сделайте функцию, которая параметром будет принимать число и возвращать массив его делителей.

// function getNumberDivisors(num) {
//     let arr = [];

//     for (let i = 1; i <= num; i++) {
//         if (num % i == 0) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }

// console.log(getNumberDivisors(12));




// Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.
// let string = 'He still loves you';

// function getSymbols(str) {
//     let arr = str.split('');
//     return arr;
// }

// console.log(getSymbols(string));



// Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.
// let string = 'something meaningful';

// function getReverseStr(str) {
//     let newStr = str.split('').reverse().join('');
//     return newStr;
// }

// console.log(getReverseStr(string));





// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву этой строки.
// let string = 'something meaningful';

// function changeFirstLetterCase(str) {
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(changeFirstLetterCase(string));




// Сделайте функцию, которая параметром будет принимать строку и делать заглавной первую букву каждого слова этой строки.
// let string = 'he still loves you';

// function changeLetterCase(str) {
//     let newStr = '';
//     let arr = str.split(' ');
    
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }

//     return newStr = arr.join(' ');
// }

// console.log(changeLetterCase(string));




// Сделайте функцию, заполняющую массив целыми числами от 1 до заданного.

// function fillArray(num) {
//     let arr = [];

//     for (let i = 1; i <= num; i++) {
//         arr.push(i);
//     }

//     return arr;
// }

// console.log(fillArray(16));




// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// let number = 1374;

// function calcSum(num) {
//     let str = String(num);
//     let sum = 0;

//     for (let i = 0; i < str.length; i++) {
//         sum += Number(str[i]);
//     }

//     return sum;
// }

// console.log(calcSum(number));




// Сделайте функцию, которая параметром будет год и проверять, високосный он или нет.
// let year = 1992;

// function checkLeapYear(year) {
//     return year % 4 == 0;
// }

// console.log(checkLeapYear(year));




// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.
// let seconds = 86400;

// function getAmountOfDays(sec) {
//     let days = sec / 60 / 60 / 24;
//     return days;
// }

// console.log(getAmountOfDays(seconds));




// Сделайте функцию, которая будет возвращать случайный элемент из массива.
// let arr = [1, 72, 3, 14, 5];
// let arr = ['PHP', 'JavaScript', 'Python', 'Perl', 'Ruby', 'Go', 'Java'];

// function getRandomElem(arr) {
//     let rand = Math.floor(Math.random() * arr.length);
//     return arr[rand];
// }

// console.log(getRandomElem(arr));


// // Определяем массив
// let arr = ['PHP', 'JavaScript', 'Python', 'Perl', 'Ruby', 'Go', 'Java'];

// // Получаем случайный ключ массива
// let rand = Math.floor(Math.random() * arr.length);

// console.log(arr[rand]);//




// Сделайте функцию, которая параметром будет принимать число и проверять, простое оно или нет.
let number = 133;

function isPrimeNumber(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return 'not a prime number';
        } else {
            return 'prime number';
        }
    }
}

console.log(isPrimeNumber(number));