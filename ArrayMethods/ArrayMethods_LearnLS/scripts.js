"use strict"

// 1 Переведите текст вида border-left-width в borderLeftWidth

// const camelize = (str) => {
//     let arr = str.split('-');

//     for (let i = 1; i < arr.length; i++) {
//         arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
//     }

//     let res = arr.join('');

//     return res;
// };

// console.log(camelize('border-left-width'));


// const camelize = (str) => {
//     return str.split('-').map((elem, index) => {
//         return index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1);
//     }).join('');
// };

// console.log(camelize('border-left-width'));


// const camelize = (str) => {
//     return str.split('-').map((elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1)).join('');
// };

// console.log(camelize('border-left-width'));


// const camelize = (str) => {
//     const camelizeElement = (elem, index) => index === 0 ? elem : elem[0].toUpperCase() + elem.slice(1);

//     return str.split('-').map(camelizeElement).join('');
// };

// console.log(camelize('border-left-width'));




// 2 Напишите функцию filterRange(arr, a, b), которая принимает массив arr, 
// ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
// Функция должна возвращать новый массив и не изменять исходный.
// let arr = [5, 3, 8, 1];

// const filterRange = (arr, a, b) => {
//     let newArr = arr.filter((elem) => elem >= a && elem <= b);

//     return newArr;
// }

// let filtered = filterRange(arr, 1, 4);

// console.log(arr);
// console.log(filtered);




// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, 
// которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// let arr = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, a, b) => {
//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// };

// filterRangeInPlace(arr, 1, 4); 

// console.log(arr); // [3, 1]




// 4 Сортировать в порядке по убыванию
// let arr = [5, 2, 1, -10, 8];

// arr.sort((a, b) => b - a);

// console.log(arr); // 8, 5, 2, 1, -10




// 5 У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];

// const copySorted = () => arr.slice(0).sort();

// let sorted = copySorted(arr);

// console.log(sorted); // CSS, HTML, JavaScript
// console.log(arr); // HTML, JavaScript, CSS (без изменений)




// 6 
// class Calculator 
// {
//     calculate(expression) {
//         return eval(expression);
//     }
// }

// let calc = new Calculator();

// console.log(calc.calculate("3 + 7")); // 10




// 7 У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map((elem) => elem.name);

// console.log(names); // Вася, Петя, Маша




// 8 У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.slice(0).map((elem) => {
//     elem = JSON.parse(JSON.stringify(elem));
//     elem.fullName = `${elem.name}` + ` ${elem.surname}`;
//     delete elem.surname;
//     delete elem.name;
//     return elem;
// });

// console.log(users); 
// console.log(usersMapped); 


// - - - - - - - - - лучше
// let usersMapped = users.map(user => ({
//     fullName: `${user.name} ${user.surname}`,
//     id: user.id
// }));

// console.log(users); 
// console.log(usersMapped); 




// 9 Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// // function sortByAge(arr) {
// //     arr.sort((a, b) => a.age > b.age ? 1 : -1);
// // }

// const sortByAge = (arr) => {
//     arr.sort((a, b) => {
//         return a.age - b.age;
//     });
// };

// sortByAge(arr);
// console.log(arr);

// теперь: [vasya, masha, petya]
// console.log(arr[0].name); // Вася
// console.log(arr[1].name); // Маша
// console.log(arr[2].name); // Петя




// 10 Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// let arr = [1, 2, 3];

// mine
// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function shuffle(array) {
//     array.sort((a, b) => a > b ? getRandomInt(-1, 1) : getRandomInt(-1, 1));
// }

//learn js but not quite correct
// function shuffle(array) {
//     array.sort(() => Math.random() - 0.5);
// }

//learn js, good solution
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
//       [array[i], array[j]] = [array[j], array[i]]; // "деструктурирующее присваивание"
//     }
// }

// shuffle(arr);
// console.log(arr);

// shuffle(arr);
// console.log(arr);

// shuffle(arr);
// console.log(arr);




// 11 Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// const getAverageAge = (array) => {
//     let sum = 0;
//     array.forEach(elem => {
//         sum += elem.age;
//     });
//     let res = sum / array.length;
//     return res;
// };

// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28




// 12 Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.
// // function unique(arr) {
// //     let res = [];

// //     res.push(arr[0]);
    
// //     arr.filter((elem) => {
// //         let check = res.every((checkElem) => elem !== checkElem);

// //         if (check == true) {
// //             res.push(elem);
// //         }
// //     })

// //     return res;
// // }

// function unique(arr) {
//     let result = [];
  
//     for (let str of arr) {
//       if (!result.includes(str)) {
//         result.push(str);
//       }
//     }
  
//     return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
// "харе", "харе", "кришна", "кришна", ":-O",
// ];

// console.log(unique(strings)); // кришна, харе, :-O




// 13 Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.
let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

// function groupById(arr) {
//     let obj = {};
//     for (let user of arr) {
//         obj[user.id] = user; 
//     }
//     return obj;
// }

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
}

let usersById = groupById(users);

console.log(usersById);

