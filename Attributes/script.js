"usr strict"

// getAttribute
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');

// console.log(value);
// console.log(value === elem.value);


// let elem = document.querySelector('#elem');
// let atr = elem.getAttribute('class');

// // elem.setAttribute('class', 'hi');      //same as below
// // elem.className = 'hi';     //same as above

// console.log(atr);




// setAttribute
// Установите атрибут value в значение 'text'.
// let input = document.querySelector('#elem');
// input.setAttribute('value', 'text');


// Установите атрибут class в значение 'valid'.
// let input = document.querySelector('#elem');
// input.setAttribute('class', 'valid');



// removeAttribute
// Удалите атрибут value.
// let input = document.querySelector('#elem');
// input.removeAttribute('value');



// hasAttribute
// Проверьте наличие атрибута value.
// let input = document.querySelector('#elem');
// console.log(input.hasAttribute('value'));



// Пользовательские атрибуты data-
// 1 Сделайте так, чтобы по клику на див в конец его текста добавилось содержимое его атрибута data-text.
// let text = document.querySelector('#elem');

// text.addEventListener('click', () => {
//     text.textContent += text.dataset.text;
// });


// 2 Сделайте так, чтобы по клику на любой из дивов ему в конец записывался его порядковый номер.
// let texts = document.querySelectorAll('div');

// for (let text of texts) {
//     text.addEventListener('click', () => {
//         text.textContent += text.dataset.num;
//     })
// }


// 3 Дана кнопка. Сделайте так, чтобы эта кнопка считала количество кликов по ней, записывая их в какой-нибудь пользовательский атрибут. 
// Пусть по клику на другую кнопку на экран выводится, сколько кликов было сделано по первой кнопке.
// let button1 = document.querySelector('.first_btn');
// let button2 = document.querySelector('.second_btn');
// let count = 0;

// button1.addEventListener('click', () => {
//     button1.setAttribute('data-count', ++count);
// })

// button2.addEventListener('click', () => {
//     alert(button1.dataset.count);
// })


// 4 В этом инпуте в атрибуте data-length содержится количество символов, которое нужно ввести в инпут. 
// Сделайте так, чтобы по потери фокуса, если количество введенных символов не совпадает с заданным, выводилось сообщение об этом.
// let input = document.querySelector('#elem');

// input.addEventListener('blur', () => {
//     let valueLength = input.value.length;
//     let dataLength = input.dataset.length;

//     if (valueLength > dataLength || valueLength < dataLength) {
//         alert(`Please enter ${dataLength} characters`);
//     }
// })


// 5 В этом инпуте атрибуты data-min и data-max содержат диапазон. 
// Сделайте так, чтобы по потери фокуса, если количество введенных символов не попадает в этот диапазон, выводилось сообщение об этом.
// let input = document.querySelector('#elem');

// input.addEventListener('blur', () => {
//     if (input.value.length < input.dataset.min) {
//         alert(`the number of characters must be more than ${input.dataset.min}`);
//     } else if (input.value.length > input.dataset.max) {
//         alert(`the number of characters must be less than ${input.dataset.max}`);
//     }
// })




// Имена атрибутов с дефисами
// Сделайте так, чтобы по клику на див в конец его текста добавлялась стоимость покупки, равная цене, умноженной на количество.
// let product = document.querySelector('#elem');

// product.addEventListener('click', function func() {
//     product.textContent += product.dataset.productPrice * product.dataset.productAmount;
//     product.removeEventListener('click', func);
// })




// Обращение к атрибутам через методы
// let elem = document.querySelector('#elem');

// console.log(elem.dataset.num);
// console.log(elem.getAttribute('data-num'));    // выведет 1000

// console.log(elem.dataset.myNum);
// console.log(elem.getAttribute('data-my-num')); // выведет 2000


// 1 Даны абзацы. Переберите их циклом и каждому абзацу в атрибут data-num запишите порядковый номер этого абзаца. Используйте метод setAttribute.
// let pars = document.querySelectorAll('.par');

// for (let i = 0; i < pars.length; i++) {
//     pars[i].setAttribute('data-num', i + 1);
// }




// classList
// 1 Узнайте количество классов.
// let paragraph = document.querySelector('#elem');

// console.log(paragraph.classList.length);


// 2 Переберите в цикле классы.
// let paragraph = document.querySelector('#elem');

// for (let className of paragraph.classList) {
//     console.log(className);
// }



// classList.add
// Добавьте класс xxx
// let par = document.querySelector('#elem');

// par.classList.add('xxx');



// classList.remove
// let par = document.querySelector('#elem');

// par.classList.remove('zzz');



// classList.contains
// Проверьте наличие класса ggg.
// let par = document.querySelector('#elem');

// let contains = par.classList.contains('ggg');

// console.log(contains);



// classList.toggle
// Дан элемент. Добавьте ему класс www, если его нет и удалите - если есть.
let par = document.querySelector('#elem');

// par.classList.toggle('www'); 



// console.log(par.className);
// console.log(par.getAttribute('class'));


// par.className = 'hello';
// console.log(par.className);
// console.log(par.getAttribute('class'));


par.setAttribute('class', 'hi');
console.log(par.className);
console.log(par.getAttribute('class'));


