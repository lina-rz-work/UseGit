"use strict"

// Основы работы с функцией setInterval
// setInterval(timer, 3000);

// function timer() {
// 	console.log('!');
// }




// Счетчик через функцию setInterval
// let i = 0;

// setInterval(() => console.log(++i), 1000);


// 1 Пусть дана переменная, в которой изначально хранится число 100. 
// Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль.
// let num = 100;

// setInterval(() => console.log(--num), 1000);




// Номер таймера
// let timerId = setInterval(function() {
// 	console.log('!')
// }, 1000);

// alert(timerId); // выведет номер таймера


// Остановка таймера
// let i = 0;

// let timerId = setInterval(function() {
// 	console.log(++i);
	
// 	if (i >= 10) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


// 1 Пусть дана переменная, в которой изначально хранится число 10. 
// Запустите таймер, который каждую секунду будет уменьшать значение этой переменной на 1 и выводить это значение в консоль. 
// Как только значение переменной достигнет нуля - остановите таймер.
// let num = 10;

// let timer = setInterval(function() {
//     console.log(--num);

//     if (num <= 0) {
//         clearInterval(timer);
//     }
// }, 1000);





// Кнопка для запуска таймера
// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
// 	let i = 0;
	
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
// });


// 1 Сделайте кнопку, по нажатию на которую в консоль будет выводится обратный отсчет, начиная с 100.
// let start = document.querySelector('#start');

// start.addEventListener('click', function() {
//     let num = 10;

//     let timer = setInterval(function() {
//         console.log(num--);

//         if (num <= 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// })


// пример Жени
// let _timer = null;
// const btn = document.querySelector('#start');

// btn.addEventListener('click', function() {
//     if (_timer !== null) {
//         return;
//     }

//     const duration = 10;
//     const timestamp = Date.now();

//     const handler = () => {
//         const delta = Date.now() - timestamp;
//         const distance = Math.floor(delta / 1000);
//         const result = duration - distance + 1;

//         console.log(result);

//         if (distance < duration) {
//             return;
//         }

//         clearInterval(_timer);
//         _timer = null;
//         // console.log(_timer);
//     };
    
//     _timer = setInterval(handler, 1000);
// })




// Многократное нажатие на кнопку
// let start = document.querySelector('#start');

// start.addEventListener('click', function func() {
// 	let i = 0;
	
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
	
// 	this.removeEventListener('click', func); // отвязываем обработчик
// });


// 1 Возьмите ваше решение предыдущей задачи. Проверьте, что многократное нажатие на кнопку приводит к ускорению отсчета. Исправьте эту проблему.
// Решение похожее на Женино
// let start = document.querySelector('#start');
// let timer = null;

// start.addEventListener('click', function func() {
//     if (timer !== null) {
//         return;
//     }
    
//     let num = 10;

//     timer = setInterval(function() {
//         console.log(num--);

//         if (num <= 0) {
//             clearInterval(timer);
//             timer = null;
//         }
//     }, 1000);
// });



// let start = document.querySelector('#start');

// start.addEventListener('click', function func() {
//     let num = 10;

//     let timer = setInterval(function() {
//         console.log(num--);

//         if (num <= 0) {
//             clearInterval(timer);
//         }
//     }, 1000);
// }, {once: true}); // вместо removeEventListener





// Кнопки для запуска и остановки 
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');

// let timerId; // сделаем переменную глобальной

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });


// stop.addEventListener('click', function() {
//     console.log(timerId);
// 	clearInterval(timerId);
// });


// 1 Пусть дана переменная, в которой изначально хранится число 100. Даны также две кнопки. По нажатию на первую кнопку 
// запустите таймер, который каждую секунду будет уменьшать значение переменной на 1 и выводить новое значение в консоль. 
// Как только значение переменной достигнет нуля - остановите таймер.
// По нажатию на вторую кнопку остановите таймер. 
// Также остановите таймер, если вторая кнопка не была нажата, но значение переменной достигло нуля.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let num = 10;
// let timerId;

// start.addEventListener('click', function() {
//     timerId = setInterval(function() {
//         console.log(--num);

//         if (num <= 0) {
//             clearInterval(timerId);
//             num = 10;
//         }
//     }, 1000);

// })

// stop.addEventListener('click', function() {
//     clearInterval(timerId);
// })


// 2 Некоторый программист написал код, который по нажатию на кнопку запускает таймер, выводящий в консоль текущий момент времени.
// // После запуска кода, однако, оказалось, что кнопка остановки не работает. Исправьте ошибку автора кода.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;

// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getHours() + ' ' + date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 6 Приведенный мною в теоретической части код не учитывает то, что на кнопку старт можно сделать несколько нажатий. 
// Для исправления этой проблемы можно по нажатию на кнопку старт отвязывать событие от этой кнопки, 
// а по нажатию на кнопку стоп - привязывать обратно. Исправьте проблему.
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;


// function func() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getHours() + ' ' + date.getMinutes() + ' ' + date.getSeconds());

// 	}, 1000);

//     start.removeEventListener('click', func);
// }

// start.addEventListener('click', func);

// stop.addEventListener('click', function() {
//     console.log(timerId);
// 	clearInterval(timerId);
//     start.addEventListener('click', func);
// });




// Practice
// let elem = document.querySelector('#elem');

// let timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;

// 	if (elem.value <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);




// Таймеры и потеря контекста
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	function func() {
// 		console.log(this.value); // будет выводится ошибка (убери value и увидишь undefined!)
// 	};

// 	func();
// });

// elem.addEventListener('blur', function() {
// 	setInterval(function() {
// 		console.log(this.value); // будет выводится undefined (убери value и увидишь window!)
// 	}, 1000);
// });




// 1 Напишите текст, в котором вы дадите объяснение автору кода, почему возникла его ошибка.	
// let elem = document.querySelector('#elem');
// let initialValue = elem.value;
// let timer = null;

// function func() {
	
// 	if (timer !== null) {
// 		return;
// 	}
	
// 	let self = this;
// 	self.value = initialValue;

// 	timer = setInterval(function() {
// 		self.value = Number(self.value) + 1;

// 		if (self.value >= 10) {
// 			clearInterval(timer);
// 			timer = null;
// 		}
// 	}, 1000);

// }

// elem.addEventListener('click', func);

