"use strict"

// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];

// console.log(arr[3][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);



// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
// let arr = [[1, 2], [3, 4], [5, 6]];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[0].length; j++) {
//         sum += arr[i][j];
//     }
// }

// console.log(sum);



// Обращаясь к каждому элементу массива найдите сумму всех его элементов.
let arr = [
	[
		[1, 2],
		[3, 4],
	],
	[
		[5, 6],
		[7, 8],
	],
];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        for (let k = 0; k < arr[0][0].length; k++) {
            sum += arr[i][j][k];
        }
    }
}
console.log(sum);



// let arr = [
//     [1, 2, 3, [4, 5, [6, 7]]], 
//     [8, [9, 10]]
// ];

// console.log(arr[0][3][2][1]);








// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;

// for (let elem of arr) {
//     for (let subElem of elem) {
//         sum += subElem;
//     }
// }
//  console.log(sum);




let arr1 = [
    [[1, 2], [3, 4]], 
    [[5, 6], [7, 8]]
];
let sum1 = 0;

for (let firstElem of arr1) {
    for (let secondElem of firstElem) {
        for (let thirdElem of secondElem) {
            sum1 += thirdElem;
        }
    }
}
console.log(sum1);