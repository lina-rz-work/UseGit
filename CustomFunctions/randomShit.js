"use strict"

// Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.

// function showNumbers() {
//     let sum = 0

//     for (let i = 1; i <= 100; i++) {
//         sum += i;
//     }

//     console.log(sum);
// }

// showNumbers();



/*Сделайте функцию, которая параметром принимает число и проверяет, положительное это число или отрицательное. 
В первом случае пусть функция выводит в консоль текст '+++', а во втором '---'.*/

// function checkNumber(num) {
//     console.log(num > 0 ? '+++' : '---');
// }

// checkNumber(-100);



// let param1 = 1;
// let param2 = 2;
// let param3 = 3;

// function sum(num1, num2, num3) {
//     console.log(num1 + num2 + num3);
// }

// sum(param1, param2, param3);



// function func(num = 5) {
// 	console.log(num ** 2);
// }

// func(2);
// func();




/*Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа.
С помощью этой функции найдите куб числа 3 и запишите его в переменную res.*/

// function cube(num) {
//     return num ** 3;
// }

// let res = cube(3);

// console.log(res);




/*Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. 
С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. 
Просуммируйте полученные результаты и выведите их в консоль.*/

// function squareRoot(num) {
//     return Math.sqrt(num);
// }

// let sum = squareRoot(3) + squareRoot(4);

// console.log(sum);




// Найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части.

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function round(num) {
// 	return num.toFixed(3);
// }

// let res = round(sqrt(2));

// console.log(res);



// function func(a, b) {
// 	if (a > b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

