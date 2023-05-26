"use strict"

// С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.

function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num) {
	return num.toFixed(3);
}

let res = round(sum(sqrt(2), sqrt(3), sqrt(4)));

console.log(res);
