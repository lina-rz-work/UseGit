"use strict"

// Передача параметров в модуль через замыкания
// ;(function(selector1, selector2) {
// 	let inputs = document.querySelectorAll(selector1);
// 	let btn = document.querySelector(selector2);
//     btn.textContent = 'click';
	
// 	btn.addEventListener('click', function() {
// 		const sum = [...inputs]
//         .map(input => input.value)
//         .reduce((sum, num) => sum + Number(num), 0);

//         console.log(sum);
// 	});
// })('.inp', '#btn');





// Передача настроек модуля через замыкания
// + Параметры по умолчанию
// let config = {
// 	root:  '#parent',
// 	// type:  'p',
// 	amount: 10
// }

// ;(function({root, type = 'p', amount = 5}) {
// 	let parent = document.querySelector(root);
	
// 	for (let i = 1; i <= amount; i++) {
// 		let elem = document.createElement(type);
// 		parent.append(elem);
// 	}
// })(config);




// Экспорт переменных и функций в модулях через замыкания
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';

//     window.str3 = str3;
	
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
//     window.func2 = func2;

// 	function func3() {
// 		alert('функция модуля');
// 	}
// })();

// console.log(window);
// console.log(str3);
// func2();
// func3(); // func3 is not defined





// Экспорт объекта в модулях через замыкания
// ;(function() {
// 	let str1 = 'переменная модуля';
// 	let str2 = 'переменная модуля';
// 	let str3 = 'переменная модуля';
	
// 	function func1() {
// 		alert('функция модуля');
// 	}
// 	function func2() {
// 		alert('функция модуля');
// 	}
// 	function func3() {
// 		alert('функция модуля');
// 	}
// 	function func4() {
// 		alert('функция модуля');
// 	}
// 	function func5() {
// 		alert('функция модуля');
// 	}

//     window.module = {func1: func1, func2: func2, func3: func3};
// })();

// console.log(window);



