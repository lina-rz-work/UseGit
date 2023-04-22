"use strict"


// let num = 479;
// let rest = num % 3;

// if (rest == 0) {
//     console.log('делится нацело')
// } else {
//     console.log('делится с остатком ' + rest);
// }


// let num1 = 987;

// if (num1 % 3 == 0) {
//     console.log('Делится на 3');
// } else {
//     console.log('есть остаток');
// }





// В переменной month лежит какое-то число из интервала от 1 до 12. 
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = 1;

if (month <= 2 && month > 11) {
    console.log('winter');
} else if (month >= 3 && month <= 5) {
    console.log('spring');
} else if (month >= 6 && month <= 8) {
    console.log('summer');
} else {
    console.log('autumn');
}