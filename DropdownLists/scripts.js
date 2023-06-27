"use strict"

// select
// let select = document.querySelector('#select');

// console.log(select.value);

// select.addEventListener('change', function(){
// 	console.log(this.value);
// });


// 1 Дан селект, абзац и кнопка. По клику на кнопку выведите текст выбранного пункта списка в абзац.
// let select = document.getElementById('select');
// let button = document.querySelector('button');
// let par = document.querySelector('p');

// button.addEventListener('click', () => {
//     par.textContent = select.value;
// })


// 2 Сделайте выпадающий список годов от 2020 до 2030. 
// При выборе какого-нибудь пункта списка выведите сообщение о том, високосный этот год или нет.
// let select = document.querySelector('#select');

// function isLeapYear(year) {
//     return (year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0);
// }

// select.addEventListener('change', function(){
// 	console.log(isLeapYear(this.value));
// });





// Атрибут value
// select.addEventListener('change', function(){
// 	console.log(this.value);
// });


// 1 Сделайте выпадающий список с названиями дней недели. В качестве атрибутов value пунктов списка добавьте номера дней недели от 1 до 7. 
// // По изменению списка выведите на экран сообщение о том, выбран выходной день или рабочий.
// let select = document.getElementById('select');

// select.addEventListener('change', () => {
//     return select.value < 6 ? console.log('week day') : console.log('day off');
// })




// Изменение выбранного пункта списка 
// let select = document.querySelector('#select');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	select.value = 'one';
// });


// 1 Сделайте выпадающий список с названиями месяцев. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий месяц.
// let select = document.getElementById('select');
// let date = new Date;

// select.value = date.getMonth() + 1;




// selectedIndex
// 1 Дан инпут и селект. 
// // В инпут вводится какое-то число. По потери фокуса сделайте выделенным пункт списка, номер которого равен значению из инпута.
// let input = document.querySelector('#inp')
// let select = document.getElementById('select');

// input.addEventListener('blur', () => {
//     select.selectedIndex = input.value - 1;
// })


// 2 Сделайте выпадающий список с названиями дней недели. Сделайте так, чтобы JavaScript по умолчанию выбирал в этом списке текущий день.
// let select = document.getElementById('select');
// let date = new Date;

// select.selectedIndex = date.getDay() - 1;




// Массив пунктов
// 1 Переберите все пункты списка циклом и в конец текста каждого пункта добавьте значение его атрибута value.
// let select = document.querySelector('#select');

// for (let option of select) {
//     option.textContent += option.value;
// }




// Работа с пунктами
// 1 Переберите пункты списка циклом и для выбранного пункта в конец текста добавьте восклицательный знак, 
// а для невыбранных пунктов - вопросительный.
// let select = document.getElementById('select');

// for (let option of select) {
//     if (option.selected) {
//         option.text += '!';
//     } else {
//         option.text += '?';
//     }
// }

// select.addEventListener('change', () => {
//     for (let option of select) {
//     if (option.selected) {
//         option.text = option.text.slice(0, -1) + '!';
//     } else {
//         option.text = option.text.slice(0, -1) + '?';
//     }
// }
// })




// Выбор пункта списка
// Дан выпадающий список и кнопка. По клику на кнопку сделайте отмеченным последний пункт списка.
// let select = document.getElementById('select');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     let option = select[select.length - 1];
//     option.selected = true;
// })



// Получение выбранного option
// 1 Дан селект и кнопка. По нажатию на кнопку выведите на экран текст отмеченного пункта списка.
// let select = document.getElementById('select');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     console.log(select[select.selectedIndex]);
// })


// 2 Дан селект и кнопка. По нажатию на кнопку добавьте в конец текста выбранного пункта восклицательный знак.
// let select = document.getElementById('select');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     select[select.selectedIndex].text += "!";
// })
