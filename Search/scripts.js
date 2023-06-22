"use strict"

// firstElementChild 
// Найдите первого потомка этого элемента и сделайте его текст красного цвета.
// let elem = document.querySelector('#elem')
// let firstLi = elem.firstElementChild;

// firstLi.classList.add('colored');




// lastElementChild
// Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
// let lastLi = elem.lastElementChild;

// lastLi.classList.add('colored');




// children
// Найдите всех потомков этого элемента и добавьте им в конец текст '!'.
// let allLi = elem.children;

// console.log(allLi);

// for (let li of allLi) {
//     li.textContent += '!'
// }




// parentElement
// Найдите его родителя и задайте ему красную границу.
// let elem = document.querySelector('#elem');
// let parent = elem.parentElement;

// parent.classList.add('colored_border');

// console.log(parent);




// closest
// 1 Найдите ближайшего родителя элемента, являющегося тегом div.
// let elem = document.querySelector('#elem');
// let parentDiv = elem.closest('div');

// console.log(parentDiv);

// 2 Найдите ближайшего родителя этого элемента, являющегося элементом с классом www.
// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');

// console.log(parent);




// previousElementSibling / nextElementSibling
// 1 Найдите его соседа сверху и добавьте ему в конец текст '!'.
// let elem = document.querySelector('#elem');
// let prevElem = elem.previousElementSibling;

// prevElem.textContent += '!';


// 2 Найдите его соседа снизу и добавьте ему в конец текст '!'.
// let elem = document.querySelector('#elem');
// let nextElem = elem.nextElementSibling;

// nextElem.textContent += '!';


// 3 Найдите соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'.
// let elem = document.querySelector('#elem');
// let nextNextElem = elem.nextElementSibling.nextElementSibling;

// nextNextElem.textContent += '!';


// 4 Поменяйте местами текст соседа сверху и текст соседа снизу.
// let elem = document.querySelector('#elem');
// let prevElem = elem.previousElementSibling;
// let nextElem = elem.nextElementSibling;
// let saving = prevElem.textContent;

// prevElem.textContent = nextElem.textContent;
// nextElem.textContent = saving;




// getElementById
// Получите элемент с помощью метода getElementById и установите ему какой-нибудь текст.
// let elem = document.getElementById('elem');

// elem.textContent = 'some text';




// getElementsByTagName
// Получите все теги li по имени тега и сделайте их текст красного цвета.
// let elems = document.getElementsByTagName('li');

// for (let elem of elems) {
//     elem.classList.add('colored');
// }




// getElementsByClassName
// Получите элементы по имени класса и сделайте их текст красного цвета.
// let elems = document.getElementsByClassName('www');

// for (let elem of elems) {
//     elem.classList.add('colored');
// }




// Поиск элементов внутри другого элемента
// Найдите внутри родителя элементы с классом www и запишите их в переменную elems1. 
// Затем найдите внутри родителя элементы с классом ggg и запишите их в переменную elems2.
let parent = document.querySelector('#parent');
let elems1 = parent.querySelectorAll('.www');
let elems2 = parent.querySelectorAll('.ggg');

console.log(elems1);
console.log(elems2);


