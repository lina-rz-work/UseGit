"use strict"

// 1 Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, 
// который каждую секунду будет увеличивать текст абзаца на 1.
// let button = document.querySelector('#inp');
// let par = document.querySelector('.number');
// let timer;

// function func() {
//     timer = setInterval(function() {
//         par.textContent = Number(par.textContent) + 1;
//     }, 1000);

//     button.removeEventListener('click', func);

//     button.addEventListener('click', function func2() {
//         clearInterval(timer);
//         button.removeEventListener('click', func2);
//         button.addEventListener('click', func);
//     });
// }

// button.addEventListener('click', func);




// 2 Дана кнопка. Дан абзац, текстом которого является число, например, 10. По нажатию на кнопку запустите таймер, 
// который каждую секунду будет уменьшать текст абзаца на 1. Как только значение абзаца станет равно нулю - остановите таймер.
// let button = document.querySelector('#inp');
// let par = document.querySelector('.number');
// let initialValue = Number(par.textContent);
// let timer = null;

// function func() {
//     if (timer !== null) {
//         return;
//     }

//     par.textContent = initialValue;

//     timer = setInterval(function() {
//         par.textContent = Number(par.textContent) - 1;

//         if (par.textContent <= 0) {
//             clearInterval(timer);
//             timer = null;
//         }
//     }, 1000);
// }

// button.addEventListener('click', func);





// 3 Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
// let input = document.querySelector('#inp');

// function squre() {
//     let self = this;

//     setInterval(function() {
//         self.value = Number(self.value) ** 2;
//     }, 1000);
// }

// input.addEventListener('change', squre);



// 4 Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, 
// начиная с введенного числа. Когда отсчет дойдет до нуля - он должен закончится.
// let input = document.querySelector('#inp');
// let par = document.querySelector('.par');
// let timerId = null;

// function func() {
//     if (timerId !== null) {
//         return;
//     }

//     let self = this;
//     par.textContent = self.value;

//     timerId = setInterval(function() {
//         par.textContent = Number(par.textContent) - 1;

//         if (par.textContent <= 0) {
//             clearInterval(timerId);
//             timerId = null;
//         }
//     }, 1000);
// }

// input.addEventListener('blur', func);




// 5 Дан инпут, кнопка и абзац. В инпут вводится какое-то число. 
// По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: 
// пусть каждую секунду число в абзаце уменьшается на единицу, пока не дойдет до нуля.
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');
// let par = document.querySelector('.par');
// let timerId = null;

// function func() {
//     if (timerId !== null) {
//         return;
//     }

//     par.textContent = input.value;

//     timerId = setInterval(function() {
//         par.textContent = Number(par.textContent) - 1;

//         if (par.textContent <= 0) {
//             clearInterval(timerId);
//             timerId = null;
//         }
//     }, 1000);
// }

// button.addEventListener('click', func);




// 6 Дан абзац и две кнопки. Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, 
// а по нажатию на вторую таймер останавливался.
// мое решение
// let buttonStart = document.querySelector('#start');
// let buttonStop = document.querySelector('#stop');
// let buttonRestart = document.querySelector('#restart');
// let par = document.querySelector('.par');

// let timerId = null;

// par.textContent = 0;

// function startTimer() {
//     if (timerId !== null) {
//         return;
//     }

//     timerId = setInterval(function() {
//         par.textContent = Number(par.textContent) + 1;
//     }, 1000);
// }

// buttonStart.addEventListener('click', startTimer);

// buttonStop.addEventListener('click', () => {
//     clearInterval(timerId);
//     timerId = null;
// });

// buttonRestart.addEventListener('click', function() {
//     par.textContent = 0;
// });



// Решение как у Трепачева
// let buttonStart = document.querySelector('#start');
// let buttonStop = document.querySelector('#stop');
// let buttonRestart = document.querySelector('#restart');
// let par = document.querySelector('.par');
// let timerId;

// par.textContent = 0;

// function startTimer() {
//     timerId = setInterval(function() {
//         par.textContent = Number(par.textContent) + 1;
//     }, 1000);

//     buttonStart.removeEventListener('click', startTimer);
// }

// function stopTimer() {
//     clearInterval(timerId);
//     buttonStart.addEventListener('click', startTimer);
// }

// buttonStart.addEventListener('click', startTimer);
// buttonStop.addEventListener('click', stopTimer);
// buttonRestart.addEventListener('click', () => par.textContent = 0);




// 7 Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
// let par = document.querySelector('.par_blink');

// setInterval(() => par.classList.toggle('blink'), 1000);




// 8 Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие часики.
// let par = document.querySelector('.clock');

// // прмер Жени
// setInterval(() => {
//     par.textContent = new Date().toLocaleTimeString()
// }, 1000);


// // мой лол..
// setInterval(function() {
//     let date = new Date;
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     let seconds = date.getSeconds();

//     let arr = [hours, minutes, seconds];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] <= 9) {
//             arr[i] = `0${arr[i]}`;
//         }
//     }

//     [hours, minutes, seconds] = arr;

//     par.textContent = `${hours}:${minutes}:${seconds}`;
// }, 1000);