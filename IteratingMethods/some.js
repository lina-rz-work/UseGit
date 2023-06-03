"use strict"

// Дан массив с числами. Проверьте то, что в массиве есть хотя бы одно число больше нуля.


let arr = [-27, -5, -14, 1, -3];

let check = arr.some(elem => elem > 0);

console.log(check);



let array = [-27, -5, -14, 1, -3];

let check2 = array.some((elem, index) => elem * index > 30);

console.log(check2);
