"use strict"

// Самостоятельно, не подсматривая в мой код, реализуйте счетчик вызова функции, работающий на замыканиях.

// function getIncrement() {
//     let count = 0;

//     return function() {
//         return count++;
//     }
// }

// let increment = getIncrement();
// let increment2 = getIncrement();

// console.log(increment());
// console.log(increment());
// console.log(increment());

// console.log(increment2());




/*Пусть функция в замыкании хранит число 10. Сделайте так, 
чтобы каждый вызов функции уменьшал это число на 1 и выводил в консоль уменьшенное число.*/

/*Модифицируйте предыдущую задачу так, чтобы отсчет доходил до 0, 
а затем каждый последующий вызов функции выводил в консоль сообщение о том, что отсчет окончен.*/


// function getNum() {
//     let num = 10;

//     return function() {
//         num--;
//         return num < 0 ? console.log('отсчет окончен') : console.log(num);
//     }
// }

// let result = getNum();

// for (let i = 0; i < 15; i++) {
//     result();
// }




function test() {
	let counter = 0;
	
	return function() {
		return function() {
			console.log(counter);
			counter++;
		};
	};
}

let func = test();

let func1 = func();
let func2 = func();
func1();
func2();
func1();
func2();


