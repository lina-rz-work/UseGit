"use strict"

// let person = {
//     name: 'John',
//     age: 30,
//     isAdmin: true,
// }

// person.color = 'Black';
// person['favourite dish'] = 'Mashed potatoes';

// for (let prop in person) {
//     console.log(person[prop]);
// }




// let user = {};

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// for (let prop in user) {
//     console.log(user[prop]);
// }




// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.

// function isEmpty(schedule) {
//     for (let key in schedule) {
//         return false;
//     }
//     return true;
// }


// let schedule = {};

// console.log((isEmpty(schedule))); // true

// schedule["8:30"] = "get up";

// console.log((isEmpty(schedule))); // false




// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let key in salaries) {
//         sum += salaries[key];
//     }
//     console.log(sum);
// }

// sumSalaries(salaries);




// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
  
function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof menu[key] === 'number') {
            menu[key] *= 2;
        }
    }
}

multiplyNumeric(menu);

console.log(menu);

