"use strict"

// Возьмите из этого массива те элементы, у которых первая цифра 1 или 2, и найдите их сумму.

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     let str = String(arr[i]);

//     if (Number(str[0]) === 1 || Number(str[0]) === 2) {
//         sum += Number(str);         // sum += +elem;
//     }
// }

// console.log(sum);




// let obj = {a: 10, b: 20, c: 30, d: 40, e: 50};
// let sum = 0;

// for (let elem in obj) {
//     let str = String(obj[elem]);

// 	if (str[0] === '1' || str[0] === '2') {
// 		sum += +str;
// 	}
// }

// console.log(sum);





// Напишите скрипт, который будет находить факториал числа. 
// Факториал - это произведение всех целых чисел от единицы до заданного числа.

// function factorial(num) {
//     let res = 1;
//     for (let i = 1; i <= num; i++) {
//         res *= i;
//     }
//     console.log(res);
// }

// factorial(5);





// Дан массив с числами. С помощью цикла выведите на экран все элементы, 
// значение которых совпадает с их порядковым номером в массиве.

// let arr = [1, 10, 2, 30, 4, 21, 32, 7];

// for (let i = 0; i < arr.length; i++) {
//     if (i == arr[i]) {
//         console.log(arr[i]);
//     }
// }



// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

// let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// for (let elem of arr) {
//     if (elem == 'Saturday' || elem == 'Sunday') {
//         document.write("<b>" + elem + "<br/>"); 
//     } else {
//         document.write(elem + "<br/>")
//     }
// }

// let day = 'Friday';

// for (let elem of arr) {
//     if (elem == day) {
//         document.write("<i>" + elem + "</i><br/>");
//     } else {
//         document.write(elem + "<br/>");
//     }
// }




// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };

// for (let key in obj) {
//     if (obj[key] <= 400) {
//         obj[key] += obj[key] * 0.1;
//     }   
// }

// console.log(obj);





// Найдите сумму ключей этого объекта и поделите ее на сумму значений.

// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let sumKey = 0;
// let sumValue = 0;

// for (let key in obj) {
//     sumKey += Number(key);
//     sumValue += obj[key];
// }

// console.log(sumKey);
// console.log(sumValue);
// console.log(sumKey / sumValue);



// Запишите ключи этого объекта в один массив, а значения - в другой.

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let keys = [];
// let values = [];

// for (let key in obj) {
//     keys.push(key);
//     values.push(obj[key]);
// }

// console.log(keys);
// console.log(values);





// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};

// for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = i + 1;
// }

// console.log(obj);
