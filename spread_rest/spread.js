"use strict"

// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }

// console.log(func(...arr));



// Дан массив с числами. Используя Math.min и spread выведите на экран минимальное значение массива.

// let arr = [1, 2, 3, 4, 5];

// let res = Math.min(...arr);

// console.log(res);



let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5, 6];
let arr3 = [...arr2, 7, 8, 9];

let arr  = [0, ...arr3];
console.log(arr);




// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];

// console.log(arr2);



// let arr = [...'abcde'];

// console.log(...'abcde');
// console.log(arr);




function func(n1, n2, n3, n4, n5, n6, n7, n8) {
	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
}

console.log( func(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );