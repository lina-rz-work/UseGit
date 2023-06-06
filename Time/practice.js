"use strict"

// 332 Определите, сколько секунд прошло с начала дня до настоящего момента времени.

// let now = new Date();
// let beggining = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// console.log(((now - beggining) / 1000).toFixed(0));




// Определите, сколько секунд осталось до конца дня.

// let now2 = new Date();
// let end = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate() + 1);

// console.log(((end - now2) / 1000).toFixed(0));




// Определите, сколько дней осталось до нового года.
// let now = new Date();
// let endYear = new Date(now.getFullYear(), 11, 31 + 1);

// console.log(((endYear - now) / (1000 * 60 *60 * 24)).toFixed(0));




//Определите, сколько пятниц 13-е в текущем году.

// let now = new Date();
// let res = 0;

// for (let month = 0; month <= 11; month++) {
//     let date = new Date(now.getFullYear(), month, 13);
//     console.log(date.getDay());

//     if (date.getDay() == 5) {
//         res += 1;
//     }
// }

// console.log(res);




// Определите, какой год был 3 месяца назад.
// let now = new Date();
// let then = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());

// console.log(then.getFullYear());




//Определите, какой день недели будет в последнем дне текущего месяца.
// let now = new Date();
// let lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);

// console.log(lastDay.getDate());




// Напишите код, который будет определять, високосный ли текущий год.
// function isLeapYear(year) {
//     let date = new Date(year, 2, 0);

//     return date.getDate() == 29 ? 'leap year' : 'not leap year';
// }

// console.log(isLeapYear(2004));




// Напишите код, который будет находить предыдущий високосный год.

function prevLeapYear(year) {
    for (year -= 1;; year--) {
        let date = new Date(year, 2, 0);

        if (date.getDate() == 29) {
            return year;
        }
    }
}

console.log(prevLeapYear(2004));

// function isLeapYear(year) {
//     if ((year % 4 == 0 && year % 100 !== 0) || year % 400 == 0) {
//         return 'leap year';
//     } else {
//         return 'not a leap year';
//     }
// }

// for (let year = 1690; year <= 1750; year++) {
//     if (isLeapYear(year) == 'leap year') {
//         console.log(year);
//     }
// }




// 335 строковое сравнение

// let date1 = '2020-11-31';
// let date2 = '2020-12-01';

// function compare(firstDATE, secDate) {
//     return firstDATE > secDate ? `${firstDATE} is bigger` : `${secDate} is bigger`;
// }

// console.log(compare(date1, date2));




// 336 сравнение объектов
/*Получите объект с датой, содержащий текущий момент времени. 
Получите объект с датой, содержащий полдень текущего дня. 
Сравните два этих объекта и определите, был ли уже полдень или нет.*/

let now = new Date();
let noon = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);

function compare(now, noon) {
    return now > noon ? 'noon passed' : 'noon has not passed yet';
}

console.log(compare(now, noon));



