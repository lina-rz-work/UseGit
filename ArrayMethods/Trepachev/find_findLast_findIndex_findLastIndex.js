"use strict"

// Проверьте, есть ли в этом массиве число 3.

let arr = [1, 2, 3, 4, 5];

function check(elem) {
    return elem !== 1 ;
}

let res = arr.find(check);
let res2 = arr.findLast(check);

console.log(res);
console.log(res2);




let arr2 = ['a', 'b', 'c', 'd','c'];

function checkValue(elem) {
	return elem === 'c';
}

let res3 = arr2.findIndex(checkValue);
let res4 = arr2.findLastIndex(checkValue);

console.log(res3);
console.log(res4);