"use strict"

function check(num, func) {
	console.log(func(num));
}

// Найдем квадрат числа:
check(2, function(num) {
	return num * num; // возвращает квадрат
});

// Найдем куб числа:
check(2, function(num) {
	return num * num * num; // возвращает куб
});






/*Сделаем функцию, которая параметром будет принимать массив, а вторым параметром - функцию. 
Переданная функция должна будет применится к каждому элементу массива:*/

function test(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = func(arr[i]);
    }

    return arr;
}

function getSqr(elem) {
    return elem **= 2;
}

let result1 = test([1, 2, 3], getSqr); //вместо getSqr можно прямо здесь анонимную написать

console.log(result1);



function getCube(elem) {
    return elem **= 3;
}

let result2 = test([1, 2, 3], getCube); //вместо getCube можно прямо здесь анонимную написать

console.log(result2);