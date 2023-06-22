"use strict"

// Пусть дан массив ['1', '2', '3', '4', '5', '6']. 
// Давайте сделаем из него строку '16-25-34'. 
// Для решения задачи используем комбинацию методов shift, pop, push и join:

// let arr = ['1', '2', '3', '4', '5', '6'];
// let result = [];

// for (let i = 0; i < 6; i++) {
//     result.push(arr.shift());
//     // console.log(result);
//     i++;
//     result.push(arr.pop());
//     console.log(result);
// }

// console.log(result);




// for ( let k = 0; k < 3; k++) {
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j = 1; j++) {
//             result.push(arr.shift());
//             break;
//         }
//         result.push(arr.pop());
//         break;
//     }
//     result.push('-');
// }

// result.pop();

// let str = result.join('');

// console.log(str);



let arr = ['1', '2', '3', '4', '5', '6'];
let result = [];

while(arr.length > 0) {
    result.push(arr.shift() + arr.pop());
}

console.log(result.join('-'));

