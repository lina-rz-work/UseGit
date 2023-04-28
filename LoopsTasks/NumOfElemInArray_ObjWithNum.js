"use strict"

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;

// for (let elem of arr) {
//     if (elem == 3) {
//         counter++;
//     }
// }

// console.log(counter);



// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = {};

// for (let elem of arr) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }

// console.log(count);




// Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов.

let str = 'Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов';
let count = {};

for (let char in str) {
    if (count[str[char]] === undefined) {
        count[str[char]] = 1;
    } else {
        count[str[char]]++;
    }
}

console.log(count);


// for (let char in str) {
//     console.log(str[char]);
// }

