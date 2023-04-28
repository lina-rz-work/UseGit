"use strict"

// Проверьте, что в этом массиве есть элемент 'c'. Если есть - выведите '+', а если нет - выведите '-'.

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;

// for (let elem of arr) {
//     if (elem == 'c') {
//         flag = true;
//     }
// }

// if (flag === true) {
//     console.log('+');
// } else {
//     console.log('-');
// }



// Напишите код, который будет проверять число на то, простое оно или нет. 
// Простое число делится только на единицу и на само себя, и не делится на другие числа.

let num = 127;
let flag = false;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        flag = true;
    }
}

if (flag === true) {
    console.log('составное число');
} else {
    console.log('простое число');
}




// Напишите код, который выводит все простые числа из интервала от 2 до n.

function getPrimeNumber(number) {
    for (let i = 2; i <= number; i++) {
        let flag2 = true;

        for (let j = 2; j < i; j++){
            if (i % j == 0) {
                flag2 = false;
                break;
            } 
        }

        if (flag2 === true) {
            console.log(i);
        }
    }
}

getPrimeNumber(10);

