"use strict"

// Атрибут style + свойства с дефисом
// Дан див и кнопка. По клику на кнопку добавьте диву ширину, высоту и границу.
// let block = document.querySelector('.block');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     block.style.width = '150px';
//     block.style.height = '100px';
//     block.style.color = 'lightgreen';
//     block.style.fontSize = '30px';
//     block.style.borderStyle = 'solid';
//     block.style.borderColor = 'blueviolet';
// })



// Стилизация с помощью CSS классов
// Дан абзац. Даны кнопки 'перечеркнуть', 'сделать жирным', 'сделать красным'. 
// Пусть по нажатию на каждую кнопку заданное действие происходит с абзацем (становится красным, например).
// let paragraph = document.querySelector('.paragraph');
// let buttonCross = document.querySelector('#btn1');
// let buttonBold = document.querySelector('#btn2');
// let buttonRed = document.querySelector('#btn3');

// buttonCross.addEventListener('click', () => {
//     paragraph.classList.toggle('cross');
// })

// buttonBold.addEventListener('click', () => {
//     paragraph.classList.add('bold');
// })

// buttonRed.addEventListener('click', () => {
//     paragraph.classList.add('red');
// })



// Применение cтилизации
let button = document.querySelector('#button');
let elem = document.querySelector('#elem');
let image = document.querySelector('.img_block');
let imgFlower = document.querySelector('.img_flower');

// button.addEventListener('click', function() {
// 	elem.classList.toggle('active');
// });

// button.addEventListener('click', () => {
//     image.classList.toggle('active');
// })

button.addEventListener('click', () => {
    imgFlower.classList.toggle('active');
})