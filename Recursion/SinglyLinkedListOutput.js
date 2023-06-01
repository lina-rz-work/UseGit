"use strict"

// Напишите функцию printList(list), которая выводит элементы списка по одному.

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Решение через цикл

// function printList(list) {
//     let arr = [];
//     let tmp = list;

//     while (tmp) {
//         arr.push(tmp.value);
//         tmp = tmp.next;
//     }

//     for (let elem of arr.reverse()) {
//         console.log(elem);
//     }
// }

// printList(list);





// Решение через рекурсию

// function printList(list) {
//     let arr = [];

//     for (let prop in list) {
//         if (typeof list[prop] == 'object') {
//             printList(list[prop]);
//         } else {
//             arr.push(list[prop]);
//         }
//     }

//     for (let elem of arr.reverse()) {
//         console.log(elem);
//     }
// }

// printList(list);




// Pешение через рекурчию сайт JS. PERFECT!

// function printReverseList(list) {

//     if (list.next) {
//       printReverseList(list.next);
//     }
    
//     console.log((list.value));
// }
  
// printReverseList(list);








