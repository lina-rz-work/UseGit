"use strict"

// event
// let button = document.querySelector('#btn');

// button.addEventListener('click', function(event) {
//     console.log(event);
// })




// clientX
// let elem = document.getElementById('elem');

// document.addEventListener('mousemove', function(event) {
// 	// elem.innerHTML = event.clientX + ' : ' + event.clientY;
// 	elem.innerHTML = event.pageX + ' : ' + event.pageY;
// });




// event.type
// Допишите код функции func так, чтобы при клике на элемент этот элемент красился в зеленый цвет, а при двойном клике - в красный.
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);

// function func(event) {
//     elem.classList.remove('click_type', 'dblclick_type')

// 	return event.type == 'click' ? elem.classList.add('click_type') : elem.classList.add('dblclick_type');
// }




// event.target / this
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	console.log(event.target); // выведет наш абзац
// 	console.log(this);         // выведет наш див
// });


// 1 Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. 
// Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. 
// А если клик был по тегу ul - выведите информацию об этом в консоль.
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
//     console.log(event);
//     return event.target.tagName == 'LI' ? event.target.textContent += '!' : console.log('event target was ul');
// })


//just for fun 
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
//     return event.target.tagName === 'LI' ? event.target.classList.add('colored') : event.target.classList.add('click_type');
// })




// keypress / event.key / event.code
// let elem = document.querySelector('input');

// elem.addEventListener('keypress', function(event) {
// 	console.log(event.key);
// 	console.log(event.code);
// });


// 1 Дан абзац и инпут. В него вводится текст и нажимается клавиша Enter. 
// Сделайте так, чтобы в этот момент введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось.
// let input = document.querySelector('input');
// let par = document.querySelector('p');

// input.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         par.textContent = input.value;
//         input.value = null;
//     }
// })




// ctrlKey / altKey / shiftKey
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	if (event.ctrlKey) {
// 		console.log('нажат Ctrl');
// 	}
	
// 	if (event.altKey) {
// 		console.log('нажат Alt');
// 	}
	
// 	if (event.shiftKey) {
// 		console.log('нажат Shift');
// 	}
// });


// 1 Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Alt.
// let button = document.getElementById('btn');

// button.addEventListener('click', function(event) {
//     if (event.altKey) {
//         button.classList.add('colored');
//     }
// })


// 2 Сделайте так, чтобы по клику на любую li, в конец ее текста добавлялось число 1, если нажата клавиша Ctrl, и число 2, если нажата клавиша Shift.
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
//     if (event.target.tagName !== 'LI') {
//         return;
//     }

//     if (event.ctrlKey) {
//         event.target.textContent += 1;
//     }
//     if (event.shiftKey) {
//         event.target.textContent += 2;
//     }
// })




// preventDefault()
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function(event) {
// 	event.preventDefault();
// 	console.log('Вы не можете перейти по этой ссылке!');
// });


// 1 Даны ссылки. Сделайте так, чтобы по клику на ссылку ей в конец записывался ее href, а перехода по ссылке не происходило.
// let links = document.querySelector('.links');

// links.addEventListener('click', function(event) {
//     if (event.target.classList.contains('link')) {
//         event.preventDefault();
//         event.target.innerHTML += ` (${event.target.getAttribute('href')})`;
//     }
// })


// 2 Даны два инпута, абзац и ссылка. Пусть в инпуты вводятся числа. Сделайте так, чтобы по клику на ссылку в абзац записалась сумма введенных чисел.
// let input1 = document.getElementById('inp1');
// let input2 = document.getElementById('inp2');
// let par = document.querySelector('.par');
// let link = document.querySelector('.link');

// link.addEventListener('click', function(event) {
//     event.preventDefault();
//     par.innerHTML = Number(input1.value) + Number(input2.value);
// })



