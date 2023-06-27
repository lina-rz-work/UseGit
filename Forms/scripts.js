"use strict"

// textarea
// Дан текстареа и абзац. По потери фокуса в текстареа запишите его текст в абзац.
// let textarea = document.querySelector('#textarea');
// let par = document.querySelector('.par');

// textarea.addEventListener('blur', function func() {
//     par.textContent += textarea.value;
//     textarea.removeEventListener('blur', func);
// })



// disabled
// let elem = document.querySelector('#elem');

// elem.disabled = true;


// 1 Дан инпут и кнопка. По нажатию на кнопку заблокируйте инпут.
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     input.disabled = true;
//     // input.className = 'hi';
//     // input.value = 'here is the value';
// })


// 2 Дан инпут и две кнопки. Пусть нажатие на первую кнопку блокирует инпут, а нажатие на вторую - отблокирует.
// let input = document.querySelector('#inp');
// let buttonBlock = document.getElementById('btn1');
// let buttonUnlock = document.getElementById('btn2');

// buttonBlock.addEventListener('click', () => {
//     input.disabled = true;
// })

// buttonUnlock.addEventListener('click', () => {
//     input.disabled = false;
// })


// // 3 Дан инпут и кнопка. По нажатию на кнопку узнайте, заблокирован инпут или нет.
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');

// input.disabled = false;


// button.addEventListener('click', () => {
//     if (input.disabled === true) {
//         alert('the input is blocked');
//     } else {
//         alert('the input is unlocked!!!');
//     }
// })




// checked
// Для примера узнаем состояние нашего чекбокса:
// let elem = document.querySelector('#elem');
// console.log(elem.checked);


// 1 Дан чекбокс и две кнопки. По нажатию на первую кнопку установите чекбокс в отмеченное состояние, а по нажатию на вторую - в неотмеченное.
// let checkbox = document.querySelector('#checkbox');
// let btnChecked = document.querySelector('#check');
// let btnUnchecked = document.querySelector('#uncheck');


// btnChecked.addEventListener('click', () => {
//     checkbox.checked = true;
// })

// btnUnchecked.addEventListener('click', () => {
//     checkbox.checked = false;
// })


// 2 Дан чекбокс, кнопка и абзац. 
// По нажатию на кнопку, если чекбокс отмечен, выведите в абзац слово 'привет', а если чекбокс не отмечен, то слово 'пока'.
// let checkbox = document.querySelector('#checkbox');
// let button = document.querySelector('#btn');
// let par = document.querySelector('.par');

// // checkbox.checked = true;

// button.addEventListener('click', () => {
//     if (checkbox.checked === true) {
//         par.textContent += 'привет';
//     }
//     if (checkbox.checked === false) {
//         par.textContent += 'пока';
//     }
// })  




// Чередование атрибутов
// Дан чекбокс и кнопка. Сделайте так, чтобы каждый клик по кнопке приводил к смене состояния чекбокса.
// let checkbox = document.querySelector('#checkbox');
// let button = document.querySelector('#btn');

// let changeСheckboxState = function() {
//     // if (checkbox.checked) {
//     //     checkbox.checked = false;
//     // } else {
//     //     checkbox.checked = true
//     // }

//     checkbox.checked = !checkbox.checked;
// }

// button.addEventListener('click', changeСheckboxState);




// radio
// Даны 3 радиокнопки, абзац и кнопка. По клику на кнопку выведите в абзац value отмеченной радиокнопки.
// let radios = document.getElementsByName('group1');
// let button = document.getElementById('btn');
// let par = document.querySelector('.par');

// let findRadioValue = function() {
//     for (let radio of radios) {
//         if (radio.checked) {
//             console.log(radio.value);
//         }
//     }
// }

// button.addEventListener('click', findRadioValue);





// change
// let elem = document.querySelector('#elem');

// elem.addEventListener('change', function() {
// 	console.log(this.value);
// });


// 1 Дан инпут и абзац. По изменению инпута выведите его текст в абзац.
// let input = document.getElementById('inp');
// let par = document.querySelector('.par');

// input.addEventListener('change', () => {
//     par.textContent = input.value;
// })


// 2 Дан чекбокс. По изменению чебокса выведите на экран его новое состояние.
// let checkbox = document.querySelector('#checkbox');

// checkbox.addEventListener('change', () => {
//     return checkbox.checked ? console.log('checked') : console.log('unchecked');
// })


// 4 Дан инпут. По его изменению проверьте, количество символов в нем меньше 5-ти или нет. 
// Если меньше - покрасьте границу инпута в зеленый цвет, а если больше - в красный. 
// let input = document.getElementById('inp');

// input.addEventListener('change', function func() {
//     input.classList.remove('valid_input', 'invalid_input');
//     return input.value.length < 5 ? input.classList.add('valid_input') : input.classList.add('invalid_input');
// })




// input
// let elem = document.querySelector('#elem');

// elem.addEventListener('input', function() {
// 	console.log(this.value);
// });


// 1 Дан инпут. Пусть в него вводится текст. Как только длина текста достигнет 5-ти, выведите на экран сообщение об этом.
// let elem = document.querySelector('#elem');

// elem.addEventListener('input', () => {
//     if (elem.value.length >= 5) {
//         console.log('длина текста достигла 5-ти');
//     }
// })


// 2 Дан инпут. Пусть в него разрешено ввести 5 символов. Дан также абзац. 
// По мере ввода символов в инпут пишите, сколько еще символов можно ввести. 
// Когда количество символов превысит 5-ти, то в абзац выводите то, на сколько символов превышена длина текста.
// let input = document.querySelector('#inp');

// input.addEventListener('input', () => {
//     if (input.value.length < 5) {
//         console.log(`add ${5 - input.value.length} symbols`);
//     } else if (input.value.length > 5) {
//         console.log(`remove ${input.value.length - 5} symbols`);
//     } else {
//         console.log('correct!');
//     }
// })




// focus и blur
// let elem   = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', function() {
// 	elem.focus();
// });

// 1 Даны два инпута. Сделайте так, чтобы после ввода двух символов фокус ввода переходил ко второму инпуту, 
// а после ввода двух символов в этот инпут - фокус из него убирался.
// let inputFirst = document.querySelector('.first_input');
// let inputSecond = document.querySelector('.second_input');

// inputFirst.addEventListener('input', () => {
//     if (inputFirst.value.length >= 2) {
//         inputSecond.focus();
//     }
// })

// inputSecond.addEventListener('input', () => {
//     if (inputSecond.value.length >= 2) {
//         inputSecond.blur();
//     }
// })




// Поиск ошибок в коде
// 1 По потери фокуса текст из textarea должен записаться в див:
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');

// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });


// 2 По клику на кнопку в див должно записаться или одно, или другое значение:
// let checkbox = document.querySelector('input');
// let button = document.querySelector('button');
// let div = document.querySelector('div');

// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent = '222';
// 	}
// });


// 3 По клику на кнопку, если чекбокс отмечен, то должно вывестись одно значение, а если не отмечен - другое:
// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector('button');

// button.addEventListener('click', function() {
// 	if (checkbox.checked == true) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });

