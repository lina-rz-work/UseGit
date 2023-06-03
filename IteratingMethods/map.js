"use strict"

// Дан массив со строками. Используя метод map в конец значению каждого элемента массива добавьте символ '!'.

// let arr = ['one', 'two', 'three', 'four', 'five'];

// let res = arr.map(function(elem) {
//     return elem + '!';
// })

// console.log(res);




// Дан массив со строками. Используя метод map переверните символы каждой строки в обратном порядке.

let arr = ['one', 'two', 'three', 'four', 'five'];

let res = arr.map((elem) => elem.split('').reverse().join(''));

console.log(res);




// Используя метод map преобразуйте этот массив в следующий:

let arr3 = ['123', '456', '789'];

// let res3 = arr3.map(function(elem) {
//     return elem.split('').map(function(elem2) {
//         return Number(elem2);
//     });
// })

let res3 = arr3.map(function(elem) {
    return elem.split('').map((elem2) => Number(elem2));
})

console.log(res3);




/*Дан массив с числами. Используя метод map запишите в каждый элемент массива значение этого элемента, 
умноженное на его порядковый номер в массиве.*/

let arr4 = [1, 2, 3, 4, 5];

let res4 = arr4.map((elem, index) => elem * index);

console.log(res4);




// Давайте теперь применим метод map к каждому подмассиву и возведем каждый его элемент в квадрат:

let arr5 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let res5 = arr5.map(function(elem) {
	return elem.map(function(num) {
        return num ** 2;
    });
});

console.log(res5);

