"use strict"


/*Сделайте функцию test, параметрами принимающую 3 функции. Передайте в нее первым параметром функцию, 
возвращающую 1, вторым - функцию, возвращающую 2, третьим - функцию, возвращающую 3. 
Выведите в консоль сумму результатов функций.*/

function test(func1, func2, func3) {
    console.log(func1 + func2 + func3);
    console.log(func1() + func2() + func3());
}

function func1() {
    return 1;
}

function func2() {
    return 2;
}

function func3() {
    return 3;
}

test(func1, func2, func3); //передаем исходный код




// function test(func1, func2, func3) {
//     console.log(func1 + func2 + func3);
//     console.log(func1() + func2() + func3());
// }

// function func1() {
//     return 1;
// }

// function func2() {
//     return 2;
// }

// function func3() {
//     return 3;
// }

// test(func1(), func2(), func3()); //передаем значения, а не исходный код



// test(
// 	function() {return 1;}, // первый параметр
// 	function() {return 2;},  // второй параметр
// 	function() {return 3;}  // второй параметр
// );

// function test(func1, func2, func3) {
//     console.log(func1 + func2 + func3);
//     console.log(func1() + func2() + func3());
// }




function test(func1, func2, func3) {
    return func1() + func2() + func3();
}

let func1 = function() {
    return 1;
}

let func2 = function() {
    return 2;
}

let func3 = function() {
    return 3;
}

console.log(test(func1, func2, func3));

