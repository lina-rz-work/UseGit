"use strict"

// Сделайте функцию func1, которая будучи вызвана вот так: func1()(), вернет число 1. 
// Сделайте аналогичную функцию func2, возвращающую число 2. Найдите сумму результатов этих функций.

function func1() {
    return function() {
        return 1;
    }
}

function func2() {
    return function() {
        return 2;
    }
}

let result = func1()() + func2()();

console.log(result);




// Сделайте функцию func, которая будучи вызвана вот так: func()()()()(), вернет '!'.

// function func() {
//     return function func1() {
//         return function func2() {
//             return function func3() {
//                 return function func4() {
//                     return '!';
//                 }
//             }
//         }
//     }
// }

// console.log(func()()()()());



// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4), вернет сумму переданных в параметры чисел.

function func(num) {
    return function func1(num1) {
        return function func2(num2) {
            return num + num1 + num2;
        }
    }
}

let result1 = func(2)(3)(4);

console.log(result1);




// Сделайте функцию func, которая будучи вызвана вот так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.

function func(num) {
    let arr = [];

    arr.push(num);

    return function(num1) {
        arr.push(num1);

        return function(num2) {
            arr.push(num2);

            return function(num3) {
                arr.push(num3);

                return function() {
                    return arr;
                }
            }
        }
    }
}

let resArr = func(2)(3)(4)(5)();

console.log(resArr);