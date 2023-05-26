"use strict"

let func1 = function() {
    return 1;
}

let func2 = function() {
    return 2;
}

console.log(func1() + func2());
console.log(func1 + func2);
console.log(typeof func1);