"use strict"

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];
// // let salary     = arr[4];

// let [name, surname, department, position, salary] = arr;

// console.log(position);



// function func() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// // let arr = func();

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];

// let [name, surname, department, position, salary] = func();

// console.log(salary);



// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// // let department = arr[2];
// // let position   = arr[3];

// let [, , department, position,] = arr;

// console.log(position);




// let arr = ['John', 'Smit', 'development'];

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];

// // let position;
// // if (arr[3] !== undefined) {
// // 	position = arr[3];
// // } else {
// // 	position = 'trainee';
// // }

// let [name, surname, department, position = 'trainee'] = arr;

// console.log(position);





let arr = [, 12];

let func = () => (new Date).getDate();
let func1 = () => (new Date).getMonth();
let func2 = () => (new Date).getFullYear();

let [year = func2(), month = func1(), day = func()] = arr;

console.log(year);
console.log(month);
console.log(day);


// let arr2 = ["Jane", "John"];

// let [wife, husband] = arr2;

// console.log(wife);
// console.log(husband);



