"use strict"

// Сформируйте с помощью двух вложенных циклов следующий массив:
// [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2, 3, 4, 5]]

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];

//     for (let j = 1; j <= 5; j++) {
//         arr[i].push(j);
//     } 
// }

// console.log(arr);




// Сформируйте с помощью двух вложенных циклов следующий массив:

// [
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x'],
// 	['x', 'x', 'x', 'x']
// ]

// let arr = [];

// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 4; j++) {
//         arr[i].push('x');
//     }
// }

// console.log(arr);




// Сформируйте с помощью трех вложенных циклов следующий массив:
// [
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// 	[
// 		[1, 2, 3, 4, 5],
// 		[1, 2, 3, 4, 5],
// 	],
// ]

let arr = [];
 for (let i = 0; i < 3; i++) {
    arr[i] = [];
    for (let j = 0; j < 2; j++) {
        arr[i][j] = [];
        for (let k = 1; k <= 5; k++) {
            arr[i][j].push(k);
        }
    }
 }

 console.log(arr);





 // Мы не можем опустить эту строчку, так как тогда во внутреннем 
// цикле попытка запушить данные в arr[i] выдаст ошибку.

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; // обратите внимание на эту строчку
	
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(j + 1);
// 	}
// }

// console.log(arr);

