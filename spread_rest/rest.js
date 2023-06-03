"use strict"

func(1, 2, 3, 4, 5);

function func(a, b) {
    console.log(a);    // выведет 1
	console.log(b);    // выведет 2
}

func1(1, 2, 3, 4, 5);

function func1(a, b, ...rest) {
	console.log(a);    // выведет 1
	console.log(b);    // выведет 2
	console.log(rest); // выведет [3, 4, 5]
}


// Напишите функцию, которая будет принимать параметрами произвольное количество чисел и возвращать их среднее арифметическое.

// function arithmeticMean(...rest) {
//     return rest.reduce(function(sum, elem) {
//         return sum + elem;
//     }, 0) / rest.length;
// }

function arithmeticMean(...rest) {
    return rest.reduce((sum, elem) => sum + elem, 0) / rest.length;
}

console.log(arithmeticMean(1, 2, 3, 4, 5, 6));




let arrs   = [ [1, 2, 3,], [4, 5, 6], [7, 8, 9] ];

// let result = [].concat(...arrs);

console.log(...arrs);
