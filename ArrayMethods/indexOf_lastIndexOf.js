"use strict"

let array = ['a', 'b', 'a', 'c', 'a', 'd'];
let indices = [];
let element = 'a';
let idx = array.indexOf(element);

while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
}

console.log(indices);



let arr = [1, 'h', 'love', 84, 29, 'feelings'];
let elem = 'love';

console.log(arr.indexOf(29, -2));

function check(a, x) {
    // console.log(a.indexOf(x) !== -1 ? 'contains' : 'does not contain');
    console.log(a.indexOf(x) !== -1);
}

check(arr, elem);



let arr2 = [1, 2, 3, 3, 4, 5, 3];

console.log(arr2.lastIndexOf(3, 5));

