"use strict"

// Код ниже получает из массива строк новый массив, содержащий их длины:

var arr = ["Есть", "жизнь", "на", "Марсе"];

// var arrLength = [];
// for (var i = 0; i < arr.length; i++) {
//     arrLength[i] = arr[i].length;
// }

// let arrayLength = arr.map(function(elem) {
//     return elem.length;
// });

let arrayLength = arr.map((elem) => elem.length);

console.log(arrayLength); 





// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ];

let array = [1, 2, 3, 4, 5];

function getSums(arr) {
    let newArr = [];

    let res = arr.reduce(function(sum, elem) {
        newArr.push(sum);
        return sum + elem;
    });
    
    newArr.push(res);

    return newArr;
}

console.log(getSums(array));
console.log(getSums([-2,-1,0,1]));