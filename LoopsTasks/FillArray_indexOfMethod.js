"use strict"

// Запишите в новый массив элементы, значение которых начинается с цифры 1 или цифры 2.
let obj = {
	1: 125,
	2: 225,
	3: 128,
	4: 356,
	5: 145,
	6: 281,
	7: 452,
};
let arr = [];
let allowedNumbers = [1, 2];

for (let key in obj) {
    let current = String(obj[key]);
    if (allowedNumbers.indexOf(Number(current[0])) !== -1) {
        arr.push(obj[key]);
    }
}

// for (let key in obj) {
//     let str = String(obj[key]);
//     if (str[0] <= 2) {
//         arr.push(obj[key]);
//     }
//     // if (str[0] == 1 || str[0] == 2) {
//     //     arr.push(obj[key]);
//     // }
// }

console.log(arr);