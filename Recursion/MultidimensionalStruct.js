"use strict"

// С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.

// let object = {
//     a: 1, 
//     b: {c: 2, d: 3, e: 4}, 
//     f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}
// };

// function func(obj) {
//     for (let prop in obj) {
//         if (typeof obj[prop] == 'object') {
//             func(obj[prop]);
//         } else {
//             console.log(obj[prop]);
//         }
//     }
// }

// func(object);





/*Напишите код, который развернет наш многомерный массив в одномерный.
Для приведенного ниже массива это будет выглядеть вот так: [1, 2, 7, 8, 3, 4, 5, 6, 7] */

let array = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
let newArr = [];

function func(arr) {
    for (let elem of arr) {
        if (typeof elem == 'object') {
            func(elem);
        } else {
            newArr.push(elem);
        }
    }

    return newArr;
}

console.log(func(array));