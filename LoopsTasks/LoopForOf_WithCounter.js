"use strict"

                            // Найдите сумму элементов, являющихся четными числами.

// let arr = [2, 5, 9, 3, 1, 4, 2];
// let sum = 0;

// for (let elem of arr) {
//     if (elem % 2 == 0) {
//         sum += elem;
//     }
// }

// console.log(sum);


// let arr = [2, 5, 9, 3, 1, 4, 2];
// let sum = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 == 0) {
//         sum += arr[i];
//     }
// }

// console.log(sum);




                            // Найдите сумму квадратов элементов этого массива.

// let arr = [2, 5, 9, 3, 1, 4];
// let sqrSum = 0;

// for (let arrElem of arr) {
//     sqrSum += arrElem ** 2;
//     console.log(sqrSum);
// }

// console.log(sqrSum);


// let arr = [2, 5, 9, 3, 1, 4];
// let sqrSum = 0;

// for (let i = 0; i <= arr.length - 1; i++) {
//     sqrSum += arr[i] ** 2;
// }

// console.log(sqrSum);



                            // Найдите произведение элементов этого массива.

// let arr = [2, 5, 9, 3, 1, 4];
// let multiplyAll = 1;

// for (let elem of arr) {
//     multiplyAll *= elem;
// }

// console.log(multiplyAll);


// let arr = [2, 5, 9, 3, 1, 4];
// let multiplyAll = 1;

// for (let i = 0; i <= arr.length - 1; i++) {
//     multiplyAll *= arr[i];
// }

// console.log(multiplyAll);






let arr = [15, 7, -32, 9, 0, -14, 83, -1];
let arr2 = [];

for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {
        arr2.push(arr[i]);
    }
}

// for (let elem of arr) {
//     if (elem > 0) {
//         arr2.push(elem);
//     }
// }

console.log(arr);
console.log(arr2);
