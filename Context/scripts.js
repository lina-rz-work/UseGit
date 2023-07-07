"use strict"

// Решения проблемы с контекстом
// 1 Решение через переменную
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', func);

// function func() {
//     let self = this;

// 	alert( square() );
	
// 	function square() {
// 		return self.value ** 2;
// 	}

//     console.log('внутренняя функция имеет доступ ко всем переменным внешней, но не имеет доступа ее this');
//     console.log('this внутренней функции равен undefined, так как функция ни к чему не привязана.');
// }



// 2 Решение через параметр
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', func);

// function func() {
// 	alert( square(this) );
	
// 	function square(param) {
// 		return param.value ** 2;
// 	}
// }



// 3 Решение через стрелочную функцию
// let elem = document.querySelector('#elem');

// elem.addEventListener('blur', func);

// function func() {
// 	let square = () => this.value ** 2;

// 	alert( square() );
// }




// call method
// 1 С помощью метода call и функции func выведите на экран value каждого из инпутов.
// let input1 = document.querySelector('#elem1');
// let input2 = document.querySelector('#elem2');
// let input3 = document.querySelector('#elem3');

// function func() {
// 	console.log(this.value);
// }

// func.call(input1);
// func.call(input2);
// func.call(input3);



// Добавьте в последнюю строчку метод call так, чтобы на экран вывелось 'hello, John Smit'. 
// Слово 'hello' должно взяться из value инпута, а 'John' и 'Smit' должны быть параметрами функциями.
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.call(elem, 'John', 'Smith');




// apply method
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.apply(elem, ['John', 'Smith']);    




// bind method
let elem = document.getElementById('elem');

function func(name, surname) {
	console.log(this.value + ', ' + name + ' ' + surname);
}

// // let newFunc = func.bind(elem);

// // newFunc('John', 'Smit'); 
// // newFunc('Eric', 'Luis'); 

func = func.bind(elem);

func('John', 'Smit'); 
func('Eric', 'Luis'); 
