"use strict"

// Функции для работы с DOM элементом
// Модифицируйте созданную мною функцию так, чтобы параметром она принимала не id элемента, а произвольный CSS селектор.
// function setText(selector, text) {
// 	let elem = document.querySelector(selector);
// 	elem.textContent = text;
// }

// setText('.elem1', 'text111');
// setText('.elem2', 'text222');

// Cделайте функцию setAttr, которая будет менять атрибут DOM элементу. 
// Пусть первым параметром функция принимает селектор элемента, вторым - имя атрибута, а третьим - его новое значение.

// function setAttr(selector, attrName, valueAttr) {
// 	const elem = document.querySelector(selector);
// 	elem.setAttribute(attrName, valueAttr);
// }

// setAttr('#elem1', 'class', 'newValue1');
// setAttr('#elem2', 'class', 'newValue2');




// Функции для работы с группой DOM элементов
// function setText(selector, text) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let elem of elems) {
// 		elem.textContent = text;
// 	}
// }

// setText('.elem', 'text');

// Сделайте функцию appendText, которая первым параметром будет принимать селектор, а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.

// function appendText(selector, text) {
// 	const elems = document.querySelectorAll(selector);

// 	for (let elem of elems) {
// 		elem.append(text);
// 	}
// }

// appendText('.elem', ' + new text');




// Передача коллбэка для работы с DOM
// function mapFunction(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let elem of elems) {
// 		elem.textContent = func(elem.textContent);
// 	}
// }

// function getSquare(value) {
// 	return Number(value) ** 2;
// }

// function getCube(value) {
// 	return Number(value) ** 3;
// }

// function addExclamation(value) {
// 	return value += '!';
// }

// mapFunction('.elem', getSquare);
// mapFunction('.elem', getCube);
// mapFunction('.elem', addExclamation);





// Передача порядкового номера в коллбэк
// function mapFunction(selector, func) {
// 	let elems = document.querySelectorAll(selector);
	
// 	for (let i = 0; i < elems.length; i++) {
// 		func(elems[i], i);
// 	}
// }

// mapFunction('.elem', function(elem, index) {
// 	elem.textContent = index + elem.textContent;
// });




// Передача DOM элемента параметром функции
// function setText(elem, text) {
// 	elem.textContent = text;
// }

// let elem1 = document.getElementById('elem1');
// setText(elem1, 'text1');

// let elem2 = document.getElementById('elem2');
// setText(elem2, 'text2');


// Сделайте функцию appendText, которая первым параметром будет принимать DOM элемент, а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст в конец этого элемента.
// function appendText(elem, text) {
// 	elem.textContent += text;
// }

// appendText(elem1, '+ new text1');
// appendText(elem2, '+ new text2');


// Даны абзацы. Получите их, переберите циклом и каждому добавьте в конец '!' с помощью функции appendText, сделанной в предыдущей задаче.
// function addExclamation(elems) {
// 	elems.forEach(elem => {
// 		appendText(elem, '!');
// 	})
// }

// addExclamation([elem1, elem2]);


// Сделайте функцию setValue, которая первым параметром будет принимать ссылку на инпут, а вторым - текст. 
// // Сделайте так, чтобы данная функция устанавливала переданный текст в value инпута.
// function setValue(input, text) {
// 	input.value = text;
// }

// const input = document.querySelector('#inp');

// setValue(input, 'some value');





// Передача группы DOM элементов параметрами функций
// function setText(elems, text) {
// 	for (let elem of elems) {
// 		elem.textContent = text;
// 	}
// }

// let elems = document.querySelectorAll('.elem');
// setText(elems, 'text');


// Сделайте функцию appendText, которая первым параметром будет принимать массив DOM элементов, а вторым - текст. 
// Сделайте так, чтобы данная функция добавляла текст в конец переданных элементов.
// function appendText(elems, text) {
// 	elems.forEach(elem => {
// 		elem.textContent += text;
// 	})
// }

// appendText(elems, ' + new text');


// Сделайте функцию appendElem, которая первым параметром будет принимать ссылку на DOM объект, в котором лежит тег ul, а вторым - текст. 
// Сделайте так, чтобы данная функция создавала новую li с переданным текстом и добавляла ее в конец переданного тега ul.
// function appendElem(elem, text) {
// 	const li = document.createElement('li');
// 	li.textContent = text;

// 	elem.append(li);
// }

// const list = document.querySelector('#list');

// appendElem(list, 'new string');
// appendElem(list, 'new string');


// Дан массив и ul. С помощью функции appendElem, созданной в предыдущей задаче, запишите каждый элемент массива в отдельную li в этом ul.
// const arr = [1, 2, 3, 4, 5, 6];

// function getList(list, arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		appendElem(list, arr[i]);
// 	}
// }

// getList(list, arr);




// Функция для создания HTML таблиц
// const div = document.querySelector('#elem');

// function createTable(rows, cols, parent) {
// 	const table = document.createElement('table');
	
// 	for (let i = 0; i < rows; i++) {
// 		const row = table.insertRow();

// 		for (let i = 0; i < cols; i++) {
// 			const cell = row.insertCell();
// 		}
// 	}

// 	parent.appendChild(table);
// }

// createTable(3, 4, div);
// createTable(2, 3, div);


// // const div = document.querySelector('#elem');

// // function createTable(rows, cols, parent) {
// // 	const table = document.createElement('table');
	
// // 	for (let i = 0; i < rows; i++) {
// // 		const row = document.createElement('tr');

// // 		for (let i = 0; i < cols; i++) {
// // 			const cell = document.createElement('td');
// // 			row.append(cell);
// // 		}

// // 		table.append(row);
// // 	}

// // 	parent.appendChild(table);
// // }

// // createTable(3, 4, div);
// // createTable(2, 2, div);




// Возврат таблицы из функции 
// 1
// function createTable(rows, cols, parent) {
// 	const table = document.createElement('table');
	
// 	for (let i = 0; i < rows; i++) {
// 		const row = table.insertRow();

// 		for (let i = 0; i < cols; i++) {
// 			const cell = row.insertCell();
// 			cell.textContent = 'meow';
// 		}
// 	}

// 	return table;
// }

// let div = document.querySelector('#elem');

// let table = createTable(3, 4);
// table.style.color = 'red';

// div.appendChild(table);


// 2
// function createTable(rows, cols, parent) {
// 	const table = document.createElement('table');
	
// 	for (let i = 0; i < rows; i++) {
// 		const row = table.insertRow();

// 		for (let i = 0; i < cols; i++) {
// 			const cell = row.insertCell();
// 		}
// 	}

// 	return table;
// }

// const div = document.querySelector('#elem');
// const table = createTable(4, 4, div);

// div.append(table);




// Функция для создания таблицы из массива
const div = document.querySelector('#elem');

function createTableByArr(arr) {
	const table = document.createElement('table');
	for (let i = 0; i < arr.length; i++) {
		const row = table.insertRow();
		for (let j = 0; j < arr[i].length; j++) {
			const cell = row.insertCell();
			cell.innerHTML = arr[i][j];
		}
	}

	return table;
}

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const table = createTableByArr(arr);

div.appendChild(table);


