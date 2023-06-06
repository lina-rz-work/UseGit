"use stict"

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



