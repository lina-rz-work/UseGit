"use strict"

// Сумма элементов массива при рекурсии

function getSum(arr) {
	let sum = arr.shift();
	
	if (arr.length !== 0) {
		sum += getSum(arr);
	}
    // console.log(sum);
	
	return sum;
}

console.log(getSum([1, 2, 3]));





// С помощью рекурсии найдите сумму элементов этого объекта.

// let object = {
// 	a: 1, 
// 	b: {c: 2, d: 3, e: 4}, 
// 	f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
// };

// function func(obj) {
// 	let sum = 0;

// 	for (let prop in obj) {
// 		if (typeof obj[prop] == 'object') {
// 			sum += func(obj[prop]);
// 		} else {
// 			sum += obj[prop];
// 		}
// 	}

// 	return sum;
// }

// console.log(func(object));




// С помощью рекурсии слейте элементы этого массива в одну строку: 'abcdefgjk'

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];

// function func(arr) {
// 	let str = '';

// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			str += func(elem);
// 		} else {
// 			str += elem;
// 		}
// 	}

// 	return str;
// }

// console.log(func(arr));






