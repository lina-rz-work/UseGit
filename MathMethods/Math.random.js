"use strict"

// console.log(Math.random());




function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInt(5, 15));





// Выведите на экран случайное целое число от 1 до 100.

// function getRandomNum(max, min) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(getRandomNum(100, 1));




// С помощью цикла заполните массив 10-ю случайными целыми числами.

let arr = [];

function getRandomNum(min, max) {
    arr.push(Math.floor(Math.random() * (max - min + 1) + min));
}

for (let i = 0; i < 10; i++) {
    getRandomNum(1, 100);
}

console.log(arr);