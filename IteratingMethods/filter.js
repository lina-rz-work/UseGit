"use strict"

// Дан массив с числами. Оставьте в нем только положительные числа.

let arr = [-2, 25, 1, -5, -1, 11, 3, 42, -1, 3];

// let res = arr.filter(function(elem) {
//     return elem > 0 && elem < 10;
// });

let res = arr.filter(elem => elem > 0 && elem < 10);

console.log(res);



// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.

let arrStr = ['nine', 'ten', 'eleven', 'thirteen', 'fourteen'];

// let resStr = arrStr.filter(function(elem) {
//     return elem.length > 5;
// })

let resStr = arrStr.filter(elem => elem.length > 5);

console.log(resStr);




/* Дан массив с числами. Оставьте в нем только те числа, 
произведение которых на их порядковый номер меньше 30.*/

let array = [-2, 25, 1, -5, -1, -11, 3, 42, -1, 3];

let result = array.filter(function(elem, index) {
    return elem * index < 30;
});

console.log(result);




// Оставьте в нем только обычные элементы.

let complexArray = [1, 2, [3, 4], 5, [6, 7]];

let newArr = complexArray.filter(function(elem) {
    return !Array.isArray(elem);
})

console.log(newArr);