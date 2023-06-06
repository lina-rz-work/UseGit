"use strict"

// let date = new Date();

// /*Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014. 
// Используйте для всех частей даты (кроме года) созданную нами функцию для добавления нуля при необходимости.*/

// function addZero(num) {
//     return num > 9 ? num : '0' + num;
// }

// console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()));
// console.log(addZero(date.getDate()) + ':' + addZero(date.getMonth() + 1) + ':' + date.getFullYear());





// Дана дата в формате год-месяц-день. Преобразуйте эту дату в формат день.месяц.год.

// let date = '2023-06-05';

// let finalDate = date.split('-').reverse().join('/');

// console.log(finalDate);




//Определите, является ли текущий день недели выходным или рабочим днем.
// let date = new Date();

// let weekDay = date.getDay();

// function checkDay(day) {
//     return day > 0 && day < 6 ? 'weekday' : 'day off';
// }

// console.log(checkDay(weekDay));




//Определите сколько дней осталось до ближайшего воскресенья.
// let date = new Date();

// let weekDay = date.getDay();

// function daysToSatuerday(day) {
//     let sumDays = 0;

//     for (let i = day; i <= 6; i++) {
//         sumDays += 1;
//     }

//     return sumDays;
// }

// console.log(daysToSatuerday(weekDay));





// Выведите с помощью этого массива название текущего месяца.
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];

// let date = new Date();

// let curMonth = date.getMonth() + 1;

// console.log(curMonth);

// console.log(months[curMonth - 1]);



//Узнайте, какой день недели был в ваш день рождения.
// let date = new Date(1998, 5, 5);

// let day = date.getDay();

// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);


//318
// let date = new Date();
// let nextDate = new Date(2025, 0, 1);
// let diff = nextDate.getTime() - date.getTime();

// // console.log(date.getTime());
// // console.log(nextDate.getTime());
// console.log(diff / (1000 * 60));
// console.log(diff / (1000 * 60 * 60));




// Выведите на экран количество месяцев, прошедшее между вашим рождением и текущим моментом времени.
// let now = new Date();
// let birthDay = new Date(1998, 5, 5);

// let diff = now.getTime() - birthDay.getTime();

// console.log((diff / (1000 * 60 * 60 * 24 * 365)).toFixed(0));



//319
// let ww2 = new Date(1945, 8, 2);
// let now = new Date();

// let diff = now - ww2;

// console.log((diff / (1000 * 60 * 60 * 24 * 365)).toFixed(1));



//320
// let date = new Date(2018, 15, 1).toLocaleDateString();
// console.log(date); // какая дата будет?

// let date = new Date(2018, 3, 31).toLocaleDateString();
// console.log(date); // какая дата будет?



// let date = new Date(2018, 1, 31).toLocaleDateString();
// console.log(date); // какая дата будет?


// let date = new Date(2018, 12, 33).toLocaleDateString();
// console.log(date); // какая дата будет?


// let date = new Date(2018, 33, 33).toLocaleDateString();
// console.log(date); // какая дата будет?


// let date = new Date(2018, 5, 0).toLocaleDateString();
// console.log(date); // какая дата будет?


// let date = new Date(2018, 0, 0).toLocaleDateString();
// console.log(date); // какая дата будет?


// let date = new Date(2018, -12, -33).toLocaleDateString();
// console.log(date); // какая дата будет?


// let date = new Date(2018, 0, 1, 23, 60, 0).toLocaleDateString();
// console.log(date); // какая дата будет?




/*321 Оформите этот способ решения проблемы в виде функции, 
которая параметрами будет принимать месяц и год и возвращать номер последнего дня этого месяца.*/

// function getDaysAmount(year, month) {
//     let date = new Date(year, month, 0);

//     return date.getDate();
// }

// console.log(getDaysAmount(2023, 2));




//322
/*Сделайте функцию isLeap, которая параметром будет принимать год и возвращать true, 
если этого год високосный, и false - если нет.*/

// function isLeap(year) {
//     let date = new Date(year, 2, 0);
//     return date.getDate() == 29 ? 'leap year' : 'not a leap year';
// }

// console.log(isLeap(2024));




/*323 Сделайте функцию checkDate, которая будет выполнять описанную проверку. 
Пусть функция возвращает true, если дата корректна и false, если нет. 
Пример работы этой функции для 31 января и 32 января:*/

// function checkDate(year, month, date) {
//     let curDate = new Date(year, month, date);

//     return curDate.getFullYear() == year && curDate.getMonth() == month && curDate.getDate() == date ? true : false;
// }

// console.log(checkDate(2025, 0, 31)); // выведет true
// console.log(checkDate(2025, 0, 32)); // выведет false




// 324 Определите, какой день недели будет 31 декабря текущего года.

// let curYear = new Date();
// let date = new Date(curYear.getFullYear(), 11, 31);
// let weekDay = date.getDay();

// console.log(weekDay);




// 325 Определите, какой день недели был месяц назад в такой же день месяца, как сегодня.

// let now = new Date();
// let then = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

// let thenDay = then.getDay();

// console.log(thenDay);



// 326 Определите, какой день недели будет 31 декабря следующего года.

// let now = new Date();
// let nextYear = new Date(now.getFullYear() + 1, 11, 31);

// let weekDay = nextYear.getDay();

// console.log(weekDay);



// Определите, какой день недели был год назад в такую же дату, как сегодня.

// let now = new Date();
// let nextYear = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());

// let weekDay = nextYear.getDay();

// console.log(weekDay);




// 327 Определите, сколько дней между 1 января и 10 сентября текущего года.

// let now = new Date();
// let jan = new Date(now.getFullYear(), 0, 1);
// let sep = new Date(now.getFullYear(), 8, 10);

// let dif = sep - jan;

// console.log(dif / (1000 * 60 * 60 * 24));




// 328 Определите, сколько часов прошло между вчерашним полднем и текущим моментом времени.

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);

// let dif = now - date;

// console.log((dif / (1000 * 60 * 60)).toFixed(1));





//329 Определите, сколько часов прошло между началом дня и текущим моментом времени.

// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());

// console.log(((now - date) / (1000 * 60 * 60)).toFixed(2));




// 330 Определите, сколько часов осталось до конца дня.

// let now2  = new Date();
// let date2 = new Date(now2.getFullYear(), now2.getMonth(), now2.getDate(), 23, 59, 59);

// console.log(((date2 - now2) / (1000 * 60 * 60)).toFixed(2));




/* 331 Рассмотрите промежуток от 2000 года до текущего года. 
Определите, сколько раз 1 января в этом промежутке попадало на выходной день, то есть на субботу или на воскресенье.*/

let now = new Date();
let then = new Date(2000, 0, 1);
let res = 0;

for (let year = then.getFullYear(); year <= now.getFullYear(); year++) {
    let date = new Date(year, 0, 1);

    if (date.getDay() == 0 || date.getDay() == 6) {
        res += 1;
        console.log(year);
    } else {
        res;
    }
}

console.log(res);
