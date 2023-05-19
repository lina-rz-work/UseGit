"use strict"

// Возведите 2 в 10 степень.
// console.log(Math.pow(2, 10));



// Найдите квадратный корень из 245.
// console.log(Math.sqrt(245));



// Найдите квадратный корень из суммы кубов его элементов. 
// Для решения воспользуйтесь циклом for.
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
let result = 0;

for (let elem of arr) {
    sum += Math.pow(elem, 3);
}

result = Math.sqrt(sum);

console.log(result);



