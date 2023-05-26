"use strict"

// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

// let arr = [1, 2, 3, 4, 5];

// function each(arr, callback) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }

//     return result;
// }

// let resArr = each(arr, function(elem) {return elem * 2;});

// console.log(resArr);




// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.
// let array = ['one', 'two', 'three', 'four'];

// function each(arr, callback) {
//     let result = [];

//     for (let elem of arr) {
//         result.push(callback(elem));
//     }

//     return result;
// }

// let resArr = each(array, function(element) {
//     return element.split('').reverse().join('');
// });

// console.log(resArr);






// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.
let array = ['one', 'two', 'three', 'four'];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return result;
}

let resArr = each(array, function(str) {
    return str.split('')[0].toUpperCase() + str.slice(1);
})

console.log(resArr);






let arr = [1, 2, 3, 4, 5];

function cube(num) {
	return num ** 3;
}

let newArray = each(arr, cube);

console.log(newArray);