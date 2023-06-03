"use strict"


let arr = [25, 1,  -11, 3, 42, -3];

let check = arr.every(elem =>  elem > 0);

console.log(check);




let arr2 = [-2, 25, 1, -5, -1, 2, 3];

let check2 = arr2.every(function(elem, index) {
    return elem * index < 30;
});

console.log(check2);