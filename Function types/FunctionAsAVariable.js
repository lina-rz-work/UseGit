"use strict"

// function func() {
// 	return '!';
// }

// console.log(func);



function func() {
    return 'some string';
}

console.log(func());
console.log(func);



func = function () {
    return 'some string2';
};

console.log(func());
console.log(func);



func = () => 'some string3';

console.log(func());
console.log(func);

