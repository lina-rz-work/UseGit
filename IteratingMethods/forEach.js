"use strict"

let arr = [1, 2, 3, 4, 5];
let sum = 0;

arr.forEach(function(elem) {
	sum += elem;
});



// for (let elem of arr) {
//     sum += elem;
// }

console.log(sum);





// Дан массив с числами. Используя метод forEach найдите сумму квадратов элементов этого массива.

let array = [1, 2, 3, 4, 5];
let sqrSum = 0;

array.forEach(function(elem) {
	sqrSum += elem ** 2;
})

console.log(sqrSum);