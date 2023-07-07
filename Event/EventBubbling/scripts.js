"use strict"

// bubbling
// 1 Самостоятельно напишите код, который будет демонстрировать всплытие событий. Проверьте на нем всплытие различных типов событий.
// 2 Всплывать могут не все события. Экспериментально найдите хотя бы одно событие, которое не будет всплывать.
// let firstBlock = document.querySelector('.first_block');
// let secondBlock = document.querySelector('.second_block');
// let thirdBlock = document.querySelector('.third_block');

// thirdBlock.addEventListener('click', function(event) {
//     console.log('third block was pressed');
//     console.log(event);
// })

// secondBlock.addEventListener('click', function(event) {
//     console.log('second block was pressed');
//     console.log(event);
// })

// firstBlock.addEventListener('click', function(event) {
//     console.log('first block was pressed');
//     console.log(event);
// })


// my example
// let elem = document.getElementById('elem');

// elem.addEventListener('click', function(event) {
//     console.log('click on ul');
//     console.log(event);
// })

// elem.firstElementChild.addEventListener('click', function(event) {
//     console.log('click on li');
//     console.log(event);
// })





// Получение целевого элемента при всплытии событий
// 1 Навешайте на див обработчик клика. В этом обработчике определите, в каком из тегов сработало событие.
// let elem = document.querySelector('div');

// elem.addEventListener('click', function(event) {
//     console.log(event.target);
// });


// 2 Модифицируйте предыдущую задачу. Сделайте так, чтобы при клике на li, ей в конец добавлялся восклицательный знак, 
// а при клике на ul в консоль выводилась информация об этом.
// let elem = document.querySelector('div');

// elem.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         event.target.textContent += '!';
//     }

//     if (event.target.tagName === 'UL') {
//         console.log('the click was on ul');
//     }
// });





// stopPropagation()
let parent = document.querySelector('#parent');
let button = document.querySelector('button');
let block  = document.querySelector('#block');

button.addEventListener('click', function(event) {
	block.classList.add('active');
    event.stopPropagation();
});

parent.addEventListener('click', function() {
	block.classList.remove('active');
});