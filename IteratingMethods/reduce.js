"use strict"

// Найдем сумму элементов массива:

let arr = [1, 2, 3, 4, 5, 6];

let res = arr.reduce(function(sum, elem) {
    return sum + elem;
}, 0);

console.log(res);




// Давайте найдем сумму все положительных чисел массива:

let array = [1, -2, -3, 4, 5, -6];

let result = array.reduce((sum, elem) => elem > 0 ? sum + elem : sum, 0);

console.log(result);



