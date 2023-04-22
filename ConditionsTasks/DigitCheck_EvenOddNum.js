"use strict"

// Дано целое число. Напишите условие, которое проверит, равна ли последняя цифра этого числа нулю.

let num = 9807650;

if (String(num)[String(num).length - 1] == 0) {
    console.log('true');
} else {
    console.log('false');
}


// Пусть в переменной num хранится число. Определите, четное число или нет. 
// Число будет четным, если последний символ равен 0, 2, 4, 6 или 8, и нечетным в противном случае.


let num1 = 457679;
let str =  String(num1);
let lastValue = str[str.length - 1];
let lastNum = Number(lastValue);

lastNum % 2 === 0

if (lastNum == 0 || lastNum == 2 || lastNum == 4 || lastNum == 6 || lastNum == 8) {
    console.log('Четное');
} else {
    console.log('Нечетное');
}




console.log((num = 832) % 2 === 0 ? "even" : "odd");



