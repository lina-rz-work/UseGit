"use strict"

// let arr = [4, 9, 1, 6, 2];

// function sum(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;
// 	}
	
// 	return res;
// }

// let result = sum(arr) / arr.length;

// console.log(result);




// let arr1 = [14, 85, 3, 19, 72, 5, 10];
// let arr2 = [14, 82, 4, 20, 72, 6, 12];

// function sum(arr) {
//     let res = 0;

//     for (let elem of arr) {
//         res += elem;
//     }

//     return res;
// }

// function round(num) {
//     return num.toFixed(2);
// }

// let result = round(sum(arr1) / sum(arr2));

// console.log(result);



let arr = [4, 9, 1, 6, 2];

function multiplyElements(arr) {
	let res = 1;
	
	for (let elem of arr) {
		res *= elem;
	}
	
	return res;
}

console.log(multiplyElements(arr));


