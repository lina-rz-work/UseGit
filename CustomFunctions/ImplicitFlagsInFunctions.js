"use strict"

/*Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, 
что все элементы в этом массиве являются четными числами.*/

// let arr = [14, 85, 3, 19, 72, 5, 10];
// let arr2 = [14, 82, 4, 20, 72, 6, 12];

// function checkEvenNumbers(arr) {
//     for (let elem of arr) {
//         if (elem % 2 !== 0) {
//             return 'odd numbers';
//         }
//     }

//     return 'even numbers';
// }

// console.log(checkEvenNumbers(arr));
// console.log(checkEvenNumbers(arr2));




/*Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными.*/

// function checkEvenDigits(num) {
//     let str = String(num);

//     for (let i = 0; i < str.length; i++) {
//         if (Number(str[i]) % 2 == 0) {
//             return 'some/all digits are even';
//         }
//     }

//     return "all digits are odd";
// }

// console.log(checkEvenDigits(159735));




/*Сделайте функцию, которая параметром будет принимать массив и проверять, 
есть ли в этом массиве два одинаковых элемента подряд.*/

let arr = [14, 85, 3, 19, 72, 72, 5, 10];

function checkIdenticalElements(arr) {
    console.log(arr.length);

    for (let i = 1; i < arr.length; i++) {
        console.log(arr[i - 1], arr[i]);

        if (arr[i] === arr[i - 1]) {
            return i - 1; //Индекс вхождения
        }
    }

    return -1;
}

console.log(checkIdenticalElements(arr));