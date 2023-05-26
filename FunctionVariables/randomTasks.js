"use strict"

// function func(num) {
// 	num = 2; // меняем локальную переменную
// }

// let num = 1;
// func(num);
// console.log(num); // выведет 1 - ничего не поменялось



// let str = 'qwerty';

// function test(str2) {
//     str2 = 'fhjgjh';
// }

// test(str);
// console.log(str);





function func(arr) {
	let newArr = arr;
	newArr[0] = '!';
}

let arr = [1, 2, 3];
func(arr);
console.log(arr);