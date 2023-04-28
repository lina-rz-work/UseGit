"use strict"

// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];

// let obj = {};

// for (let i = 0; i <= 4; i++) {
// 	obj[keys[i]] = values[i];
// }

// console.log(obj);



// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};

// for (let i = 0; i <= arr1.length - 1; i++) {
//     obj[arr1[i]] = arr2[i];
// }

// console.log(obj);





// Переберите этот объект циклом и запишите в новый объект те элементы, которые являются четными числами.

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 6};
// let obj2 = {};

// obj2 = Object.assign(obj2, obj);     все элементы 

// for (let prop in obj) {
//     if (obj[prop] % 2 === 0) {
//         obj2 = Object.assign(obj2, {[prop]: obj[prop]});
//     }
// }

// console.log(obj2);


// let keys = Object.keys(obj);     мой вариант лол
// let values = Object.values(obj);

// for (let i = 0; i <= keys.length - 1; i++) {
//     if (values[i] % 2 === 0) {
//         obj2[keys[i]] = values[i];
//     }
// }

// console.log(obj2);






// Переберите этот объект циклом и создайте новый объект так, чтобы его ключами стали элементы старого объекта, 
// а значениями - ключи старого объекта.

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let obj2 = {};

                                            // 1 решение
// for (let prop in obj) {
//     obj2 = Object.assign(obj2, {[obj[prop]]: prop});
// }

// console.log(obj2);

                                            // 2 решение
// let keys = Object.keys(obj);
// let values = Object.values(obj);

// for (let i = 0; i <= keys.length - 1; i++) {
//     obj2[values[i]] = keys[i];
// }

// console.log(obj2);









// let obj = {x: 1, y: 2, z: 3};

// for (let prop in obj) {
//     obj[prop] **= 2;
// }

// console.log(obj);


