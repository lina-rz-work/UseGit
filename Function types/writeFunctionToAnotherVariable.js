"use strict"

function func1() {
    return 3;
}

let func2 = func1;

console.log(func1() + func2());

console.log(func1 + func2);

