"use strict"

// function test(func) {
// 	console.log(func(3));
// }


//Anonymous function
// test(function(num) {
//     return num **= 3;
// });



//Function Declaration
// function func(num) {
//     return num **= 3;
// }

// test(func);



//Function Expression
// let func = function(num) {
//     return num **= 3;
// }

// test(func);




/*Пусть передаваемая функция теперь принимает два параметра и возвращает их сумму. 
При вызове передаваемой функции внутри test передайте в передаваемую функцию число 2 и число 3. 
Выведите алертом результат.*/

function test(func) {
	console.log(func(2, 3));
}

function func(num1, num2) {
    return num1 + num2;
}

test(func);



/*Вызовите функцию newTest, первым параметром передав число 3, вторым параметром функцию, 
возводящую число в квадрат, а третьим - функцию, возводящую число в куб. 
Выведите результат работы в консоль.*/

function newTest(num, func1, func2) {
	return func1(num) + func2(num);
}

function getSqrt(num) {
    return num ** 2;
}

function getCube(num) {
    return num ** 3;
}

console.log(newTest(3, getSqrt, getCube));