"use strict"

// Создание элементов из массива
// Модифицируйте код так, чтобы по клику на абзац к его содержимому прибавлялась единица.
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];

//1 looping through and adding the function to multiple elements..
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;

//     p.addEventListener('click', () => {
// 		p.textContent = Number(p.textContent) + 1;
// 	});
	
// 	parent.appendChild(p);
// }

//2 Event Delegation Method <3
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
	
// 	parent.appendChild(p);
// }

// parent.addEventListener('click', event => {
// 	if (event.target.tagName === 'P') {
// 		event.target.textContent = Number(event.target.textContent) + 1; 	
// 	}
// });




// Практика на создание списков ul
// 1 Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li.
// const parentUl = document.querySelector('#elem');
// const arr = ['one', 'two', 'three', 'four', 'five'];

// for (let elem of arr) {
// 	const li = document.createElement('li');
// 	li.innerHTML = elem;
// 	// li.addEventListener('click', () => li.innerHTML += '!'); // event delegation method better!!!
	
// 	parentUl.appendChild(li);
// }

// 2 Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных элементов на экран выводился текст этого элемента.
// parentUl.addEventListener('click', event => {
// 	if (event.target.tagName === 'LI') {
// 		alert(event.target.innerHTML);
// 	}
// });

// 3 Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец добавлялся '!'.
// parentUl.addEventListener('click', event => {
// 	if (event.target.tagName === 'LI') {
// 		event.target.innerHTML += '!';
// 	}
// });

// 4 Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не приводило к добавлению второго '!'.
// const parentUl = document.querySelector('#elem');
// const arr = ['one', 'two', 'three', 'four', 'five'];

// looping through and adding/removing the function to multiple elements..
// for (let elem of arr) {
// 	const li = document.createElement('li');
// 	li.innerHTML = elem;
// 	li.addEventListener('click', function func() {
// 		li.innerHTML += '!'; 

// 		this.removeEventListener('click', func);
// 	});
	
// 	parentUl.appendChild(li);
// }

//event delegation method
// for (let elem of arr) {
// 	const li = document.createElement('li');
// 	li.innerHTML = elem;
	
// 	parentUl.appendChild(li);
// }

// const addedExclamation = {};

// parentUl.addEventListener('click', event => {
// 	if (event.target.tagName === 'LI') {

// 		if (!addedExclamation[event.target.textContent]) {
// 		  event.target.textContent += '!';

// 		  addedExclamation[event.target.textContent] = true;
// 		}
// 	}
// });




// Создание HTML таблиц
// 1 Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните эту таблицу 5-ю рядами с 5-ю колонками.
// 2 Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 10 рядов на 5 колонок.
// 3 Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.
// const table = document.querySelector('#table');

// for (let i = 0 ; i < 10; i++) {
// 	const tr = document.createElement('tr');

// 	for (let j = 0; j < 5; j++) {
// 		const td = document.createElement('td');
// 		td.textContent = 'x';

// 		tr.appendChild(td);
// 	}

// 	table.appendChild(tr);
// }

// 4 Реализуйте генератор таблиц, ширина и высота таблиц задается в двух инпутах (например, таблица 5 на 10 ячеек).
// const width = document.querySelector('.width');
// const height = document.querySelector('.height');
// const button = document.querySelector('#btn');
// const table = document.querySelector('#table');

// button.addEventListener('click', () => {
// 	table.querySelectorAll('tr').forEach(elem => elem.remove());

// 	if (height.value > 10 || width.value > 10) {
// 		alert('Please, enter not more than 10');
// 		return;
// 	}
	
// 	for (let i = 0 ; i < height.value; i++) {
// 		const tr = document.createElement('tr');
	
// 		for (let j = 0; j < width.value; j++) {
// 			const td = document.createElement('td');
// 			td.textContent = 'x';
	
// 			tr.appendChild(td);
// 		}
	
// 		table.appendChild(tr);
// 	}
// });




// Последовательное заполнение HTML таблиц
// 1 Выведите на экран HTML таблицу размером 5 рядов на 5 колонок так, чтобы в ее ячейках последовательно стояли числа от 1 до 25.
// const table = document.querySelector('#table');
// let count = 1;

// for (let i = 0 ; i < 5; i++) {
// 	const tr = document.createElement('tr');

// 	for (let j = 0; j < 5; j++) {
// 		const td = document.createElement('td');
// 		td.textContent = count;
// 		count++;

// 		tr.appendChild(td);
// 	}

// 	table.appendChild(tr);
// }

// 2 Модифицируйте предыдущую задачу так, чтобы в ячейках таблицы были записаны четные числа в промежутке от 2 до 50.
// const table = document.querySelector('#table');
// let count = 2;

// for (let i = 0 ; i < 5; i++) {
// 	const tr = document.createElement('tr');

// 	for (let j = 0; j < 5; j++) {
// 		const td = document.createElement('td');
// 		td.textContent = count;
// 		count += 2;

// 		if (td.textContent <= 50) { //  Добавляем ячейку в таблицу только если число меньше или равно 50
// 			tr.appendChild(td);
// 		}
// 	}

// 	table.appendChild(tr);
// }




// Создание HTML таблицы из массива
// 1 Выведите элементы приведенного массива в виде HTML таблицы table.
// 2 Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов.
// const table = document.querySelector('#table');
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// for (let subArr of arr) {
// 	const tr = document.createElement('tr');

// 	for (let number of subArr) {
// 		const td = document.createElement('td');
// 		td.innerHTML = number ** 2;

// 		tr.appendChild(td);
// 	}

// 	table.appendChild(tr);
// }




// Создание HTML таблицы из массива объектов
// 1 Выведите элементы этого массива в виде HTML таблицы.
// const employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// class Table {
// 	constructor(employees) {
// 		this.employees = employees;

// 		this.createTable();
// 	}

// 	createTable() {
// 		const table = document.createElement('table');

// 		table.append(this.createHeaders());
// 		table.append(...this.createValues());

// 		document.body.append(table);
// 	}

// 	createHeaders() {
// 		return this.createRow(Object.keys(this.employees[0]), 'th');
// 	}

// 	createValues() {
// 		let values = [];
// 		for (let employee of this.employees) {
            
// 			values.push(this.createRow(Object.values(employee), 'td'));
// 		}

// 		return values;
// 	}

// 	createRow(values, tag) {
// 		const tr = document.createElement('tr');
		
// 		for (let value of values) {
// 			const elem = document.createElement(tag);
// 			elem.innerHTML = value;

// 			tr.appendChild(elem);
// 		}

// 		return tr;
// 	}
// }

// const company = new Table(employees);

// const company2 = new Table([
// 	{name: 'employee1', speciality: 'geologist'},
// 	{name: 'employee2', speciality: 'housewife'},
// 	{name: 'employee3', speciality: 'programmer'},
// 	{name: 'employee4', speciality: 'millionare'},
// ]);

// const company3 = new Table([
// 	{name: 'employee1'},
// ]);

// 2 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
// 3 Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
// const employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// class Table {
// 	constructor(employees) {
// 		this.employees = employees;
//         this.keys = [];
//         this.values = [];

// 		this.createTable();
//         this.addControls();
// 	}

// 	createTable() {
// 		const table = document.createElement('table');

// 		table.append(this.createHeaders());
// 		table.append(...this.createValues());

// 		document.body.append(table);
// 	}

// 	createHeaders() {
//         this.keys = Object.keys(this.employees[0]);

// 		return this.createRow(this.keys, 'th');
// 	}

// 	createValues() {
// 		for (let i = 0; i < this.employees.length; i++) {
//             let value = Object.values(this.employees[i]);
// 			this.values.push(this.createRow(value, 'td'));
// 		}

// 		return this.values;
// 	}

// 	createRow(values, tag) {
// 		const tr = document.createElement('tr');
		
// 		for(let value of values) {
// 			const elem = document.createElement(tag);
// 			elem.innerHTML = value;

// 			tr.appendChild(elem);
// 		}

// 		return tr;
// 	}

//     addControls() {
//         const indexAge = this.keys.findIndex(elem => elem === 'age');
//         const indexSalary = this.keys.findIndex(elem => elem === 'salary');

//         this.values.forEach(function(elem) { // увеличить возраст на 1
//             if (indexAge !== -1) {
//                 const arr = elem.querySelectorAll('td');
//                 arr[indexAge].addEventListener('click', function() {
//                     this.innerHTML = Number(this.innerHTML) + 1;
//                 });
//             }
//         });

//         this.values.forEach(function(elem) { // увеличить зарпату на 10%
//             if (indexSalary !== -1) {
//                 const arr = elem.querySelectorAll('td');
//                 arr[indexSalary].addEventListener('click', function() {
//                     this.innerHTML = Number(this.innerHTML) * 0.1 + Number(this.innerHTML);
//                 });
//             }
//         });
//     }
// }

// const company = new Table(employees);

// const company2 = new Table([
// 	{name: 'employee1', salary: 400, age: 30},
// 	{name: 'employee2', salary: 500, age: 31},
// 	{name: 'employee3', salary: 600, age: 32},
// ]);

// const company3 = new Table([
// 	{name: 'employee1', age: 30},
// 	{name: 'employee2', age: 31},
// ]);

// const company4 = new Table([
// 	{name: 'employee1', salary: 400},
// 	{name: 'employee2', salary: 500},
// ]);





// Добавление рядов и колонок в HTML таблицу
// 1 Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
// const table = document.querySelector('#table');
// const button = document.querySelector('#btn');

// button.addEventListener('click', () => {
// 	const tr = document.createElement('tr');

// 	for (let i = 1; i <= 3; i++) {
// 		const td = document.createElement('td');
// 		td.textContent = 'x';
	
// 		tr.appendChild(td);
// 	}

// 	table.appendChild(tr);
// });


// 2 Дана кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
// const table = document.querySelector('#table tbody');
// const button = document.querySelector('#btn');

// button.addEventListener('click', () => {
// 	const length = table.firstChild.children.length;
// 	// const length = table.rows[0].cells.length; // тоже хорошо!!!
// 	const tr = document.createElement('tr');

// 	for (let i = 1; i <= length; i++) {
// 		const td = document.createElement('td');
		
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);


// 	// const trs = document.querySelectorAll('#table tr');		//мое решение
// 	// for (let tr of trs) {
// 	// 	const td = document.createElement('td');
// 	// 	tr.appendChild(td);
// 	// }

// 	for (let i = 0; i < table.rows.length; i++) {		// решение jpt
// 		const newCell = table.rows[i].insertCell();
// 		newCell.innerHTML = "Новая ячейка";
// 	}
// });




// Изменение ячеек HTML таблицы
// 1 Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
// const tds = document.querySelectorAll('#table td');
// const button = document.querySelector('#btn');

// button.addEventListener('click', () => {
// 	tds.forEach(elem => elem.innerHTML *= 2);
// });




// Самоудаление новых элементов
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. 
// Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
// const parent = document.querySelector('#parent');
// const button = document.querySelector('#button');

// button.addEventListener('click', () => {
// 	console.log();
// 	const li = document.createElement('li');
// 	li.textContent = Number(parent.lastElementChild.textContent) + 1;

// 	parent.appendChild(li);
// });

// parent.addEventListener('click', event => {
// 	if (event.target.tagName === 'LI') {
// 		event.target.remove();
// 	}
// });




// Ссылка на удаление элемента
// 1 Сделаем ссылку, с помощью которой этот абзац можно будет удалить.
// const p = document.querySelector('#elem');
// const ref = document.querySelector('#remove');

// ref.addEventListener('click', event => {
// 	p.remove();
// 	event.preventDefault();
// });





// Создание ссылок для удаление элементов
// 1 Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// const elems = document.querySelectorAll('#parent li');

// for (let elem of elems) {
// 	const ref = document.createElement('a');
// 	ref.href = '';
// 	ref.text = 'remove';

// 	elem.appendChild(ref);

// 	ref.addEventListener('click', event => {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

// 2 Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда таблицы будет стоять ссылка на удаление этого ряда.
// const table = document.querySelector('#table tbody');
// const button = document.querySelector('#btn');

// button.addEventListener('click', function func() {
// 	const trs = table.querySelectorAll('tr');

// 	for (let tr of trs) {
// 		const td = document.createElement('td');
// 		const ref = document.createElement('a');

// 		ref.href = '';
// 		ref.textContent = 'remove';
// 		ref.addEventListener('click', event => {
// 			tr.remove();
// 			event.preventDefault();
// 		});

// 		td.append(ref);
// 		tr.append(td);
// 	}

// 	this.removeEventListener('click', func);
// });




// Редактирование отдельного элемента
// 1 Модифицируйте приведенный код так, чтобы текст абзаца менялся не по потери фокуса, а по мере ввода текста в инпут.
// const elem = document.querySelector('#elem');
// const input = document.querySelector('#input');

// input.value = elem.textContent; // записываем в инпут текст абзаца

// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });

// 2 Давайте теперь сделаем так, чтобы инпута изначально не было на странице, а он появлялся по клику на абзац. 
// Cделаем так, чтобы по потери фокуса в инпуте менялся текст абзаца.
// const p = document.querySelector('#elem');

// p.addEventListener('click', () => {
// 	const input = document.createElement('input');
// 	input.value = p.textContent;

// 	input.addEventListener('blur', function() {
// 		p.textContent = this.value;
// 		this.remove();
// 	});

// 	p.parentElement.append(input);
// });




// Прячем текст при редактировании элемента
// 1 Давайте теперь сделаем так, чтобы при редактировании инпут появлялся в самом абзаце - вместо текста этого абзаца. 
// Пусть затем при окончании редактирования инпут будет убираться, а вместо него опять появляться текст абзаца.

// Трепачев
// const elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	const input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.textContent = '';
// 	elem.appendChild(input);
// 	input.focus(); // При клике на абзац сразу устанавливаем фокус на инпут
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
	
// 	elem.removeEventListener('click', func);
// });




// Редактирование в группе элементов
// Давайте сделаем так, чтобы по клику на любой абзац в нем появлялся инпут для редактирование.
// const elems = document.querySelectorAll('p');

// for (let elem of elems) {
//   	elem.addEventListener('click', function func() {
//     	const input = document.createElement('input');
//     	input.value = elem.textContent;

// 		elem.textContent = '';
// 		elem.append(input);
// 		input.focus();

// 		input.addEventListener('blur', function() {
// 			elem.textContent = this.value;
// 			elem.addEventListener('click', func);
// 		});

//     	elem.removeEventListener('click', func);
//   	});
// }


// 1 Дан тег ul. Сделайте так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого можно будет поредатировать текст этой li.
// const parent = document.querySelector('#parent');

// parent.addEventListener('click', function func(e) {
// 	if (e.target.tagName === 'LI') {
// 		const input = document.createElement('input');

// 		input.value = e.target.textContent;
// 		e.target.textContent = '';
// 		input.classList.add('input');

// 		e.target.append(input);
// 		input.focus();

// 		input.addEventListener('blur', function() {
// 			e.target.textContent = this.value;
// 		});
// 	}
// });


// 2 Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней появлялся инпут для редактирования текста этой ячейки.
// const table = document.querySelector('#table');

// table.addEventListener('click', function(e) {
// 	if (e.target.tagName === 'TD') {
// 		const input = document.createElement('input');

// 		input.value = e.target.textContent;
// 		e.target.textContent = '';
// 		input.classList.add('input');

// 		e.target.append(input);
// 		input.focus();

// 		input.addEventListener('blur', function() {
// 			e.target.textContent = this.value;
// 		});
// 	}
// });




// Одновременное редактирование и удаление элементов
// 1 Добавьте ссылку на удаление в конец каждого абзаца. Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.
// const parent = document.querySelector('#parent');
// const elems = parent.querySelectorAll('p');

// for (let elem of elems) {
//     const ref = document.createElement('a');
    
//     ref.href = '';
//     ref.textContent = 'remove';

//     ref.addEventListener('click', function(event) {
//         event.preventDefault();
//         this.previousElementSibling.textContent = '';
//     })

//     elem.append(ref);
// }

// parent.addEventListener('click', (e) => {
//     if (e.target.tagName === 'SPAN') {
//         const input = document.createElement('input');

//         input.value = e.target.textContent;
//         e.target.textContent = '';

//         input.addEventListener('blur', function() {
//             e.target.textContent = this.value;
//         });

//         e.target.append(input);
//         input.focus();
//     }
// });


// 2 Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность редактирования, 
// а затем добавьте в конец каждого абзаца ссылку на удаление.
// const parent = document.querySelector('#parent');
// const elems = parent.querySelectorAll('p');

// for (let elem of elems) {
//     const span = document.createElement('span');
//     const ref = document.createElement('a');

//     span.textContent = elem.textContent;
//     elem.textContent = '';
    
//     ref.href = '';
//     ref.textContent = 'remove';

//     ref.addEventListener('click', function(event) {
//         event.preventDefault();
//         this.previousElementSibling.textContent = '';
//     })

//     elem.append(span);
//     elem.append(ref);
// }

// parent.addEventListener('click', (e) => {
//     if (e.target.tagName === 'SPAN') {
//         const input = document.createElement('input');
        
//         input.value = e.target.textContent;
//         e.target.textContent = '';

//         input.addEventListener('blur', function() {
//             e.target.textContent = this.value;
//         });

//         e.target.append(input);
//         input.focus();
//     }
// });


// Решение GPT
// const paragraphs = document.querySelectorAll('#parent p');

// function wrapTextInSpanAndEnableEditing(paragraph) {
//     const text = paragraph.textContent;
//     paragraph.innerHTML = `<span contenteditable="true">${text}</span> <a href="#" onclick="deleteParagraph(this)">Удалить</a>`;
// }

// // Функция для удаления абзаца при клике на ссылку "Удалить"
// function deleteParagraph(deleteLink) {
//     const paragraph = deleteLink.parentNode;
//     paragraph.parentNode.removeChild(paragraph);
// }

// // Применяем функцию к каждому абзацу
// paragraphs.forEach(paragraph => {
//     wrapTextInSpanAndEnableEditing(paragraph);
// });


// Решение GPT в телеге
// const paragraphs = document.querySelectorAll('#parent p');

// paragraphs.forEach(paragraph => {
//     const span = document.createElement('span');
//     span.contentEditable = true;
//     span.innerText = paragraph.innerText;
//     paragraph.innerHTML = '';
//     paragraph.appendChild(span);

//     const deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.innerText = 'Удалить';
//     deleteLink.addEventListener('click', () => {
//         paragraph.remove();
//     });
//     paragraph.appendChild(deleteLink);
// });


// Решение короткое но не предпочтительное!
// const paragraphs = document.querySelectorAll('#parent p');

// paragraphs.forEach(paragraph => {
//     paragraph.innerHTML = `<span contenteditable="true">${paragraph.textContent}</span> <a href="#">Удалить</a>`;

//     const link = paragraph.querySelector('a');
//     link.addEventListener('click', () => paragraph.remove());
// });





// Стилизация элементов на JavaScript
// 1 Добавьте в конец каждого абзаца ссылку, по клику на которую текст абзаца будет перечеркиваться (а ссылка - нет).
// 2 Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).
// const paragraphs = document.querySelectorAll('p');

// function wrapTextContent(paragraph) {
//     const span = document.createElement('span');
    
//     span.textContent = paragraph.textContent;
//     paragraph.textContent = '';

//     paragraph.append(span);
// }

// function crossParagraph(paragraph) {
//     const link = document.createElement('a');

//     link.href = '#';
//     link.textContent = 'Зачеркнуть';

//     link.addEventListener('click', function(event) {
//         event.preventDefault();

//         const elem = paragraph.querySelector('span');
//         elem.classList.add('crossed');

//         this.remove();
//     })

//     paragraph.append(link);
// }

// paragraphs.forEach(paragraph => {
//     wrapTextContent(paragraph);
//     crossParagraph(paragraph);
// });


// Решение GPT, знал контекст
// function crossParagraph(paragraph) {
//     const span = document.createElement('span');
//     span.textContent = paragraph.textContent;
//     paragraph.textContent = '';
//     paragraph.appendChild(span);
  
//     const link = document.createElement('a');
//     link.href = '#';
//     link.textContent = 'Зачеркнуть';
  
//     link.addEventListener('click', function(event) {
//         event.preventDefault();
//         span.style.textDecoration = 'line-through';
//         this.remove();
//     });
  
//     paragraph.appendChild(link);
// }
  
// document.addEventListener('DOMContentLoaded', function() {
//     const paragraphs = document.querySelectorAll('p');
//     paragraphs.forEach(crossParagraph);
// });


// 3 Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого фона.
// 4 Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило ряд в зеленый фон, а второе нажатие отменяло это действие.
// const trs = document.querySelectorAll('#table tr');
// const button = document.querySelector('#btn');

// function addLinkAndPaintRow() {
//     this.removeEventListener('click', addLinkAndPaintRow);
    
//     for (let tr of trs) {
//         const td = document.createElement('td');
//         const link = document.createElement('a');

//         link.href = '#';
//         link.textContent = 'paint green';
//         link.addEventListener('click', function(event) {
//             event.preventDefault();

//             tr.classList.toggle('paint_green');
//         })

//         td.append(link);
//         tr.append(td);
//     }
// }

// button.addEventListener('click', addLinkAndPaintRow);




// Кнопки для скрытия и показа элемента
// 1 Модифицируйте мой код так, чтобы была только одна кнопка. Пусть по первому клику на эту кнопку элемент показывается, а по второму - скрывается.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {
// 	elem.classList.toggle('hidden');
// });




// Много элементов с кнопками показа
// Первый способ
// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         const elem = document.querySelector('#' + this.dataset.elem);
//         elem.classList.toggle('hidden');
//     });
// }

// Второй способ
// const elems = document.querySelectorAll('p');
// const buttons = document.querySelectorAll('button');

// for (let i = 0; i < elems.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         elems[i].classList.toggle('hidden');
//     });
// }

// Третий способ
// const buttons = document.querySelectorAll('button');

// for (let button of buttons) {
//     button.addEventListener('click', function() {
//         this.previousElementSibling.classList.toggle('hidden');
//     });
// }




// Активация элементов
// 1 Дана HTML список ul. Сделайте так, чтобы по нажатию на любой пункт списка он активировался красным фоном.
// const parent = document.querySelector('#parent');

// parent.addEventListener('click', event => {
//     if (event.target.tagName === 'LI') {
//         event.target.classList.toggle('active');
//     }
// });




// Чередование стилей активации
// 1 Разберите мой код, а затем самостоятельно повторите решение этой задачи.
// const table = document.querySelector('#table');

// let color = 'color1';

// table.addEventListener('click', event => {
//     if (event.target.tagName === 'TD') {
//         event.target.classList.remove('color1', 'color2');

//         if (color === 'color1') {
//             color = 'color2';
//         } else {
//             color = 'color1';
//         }
//         event.target.classList.add(color);
//     }
// });

// 2 Расскажите, как работает приведенный мною код.
// let tds = document.querySelectorAll('#table td');

// let color = 'color1';

// table.addEventListener('click', event => {    
//     if (event.target.tagName === 'TD') {
//         event.target.classList.remove('color1', 'color2', 'color3');

//         if (color === 'color1') {
//             color = 'color2';
//         } else if (color === 'color2') {
//             color = 'color3';
//         } else {
//             color = 'color1';
//         }

//         event.target.classList.add(color);
//     }
// });




// Практика на изменение элементов
// Задачи 1-5 см папку listTask(1-5)




// 6 Выведите этих работников в HTML таблице.
// 7 Добавьте ячейкам созданной таблицы возможность редактирования.
// 8 Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
// 9 Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. 
//   Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку новый работник добавляется в таблицу. 
//   Реализуйте редактирование ячеек для вновь добавленных работников.

// Решение через функцию
// function createTable(records) {
//     const table = document.createElement('table');
//     const headers = createRow(Object.keys(records[0]), 'th');
//     const elems = [];

//     for (let i = 0; i < records.length; i++) {
//         elems.push(createRow(Object.values(records[i]), 'td'));
//     }
    
//     table.append(headers);
//     table.append(...elems);

//     return table;
// }

// function createRow(values, tag) {
//     const tr = document.createElement('tr');

//     for(let i = 0; i < values.length; i++) {
//         const cell = document.createElement(tag);
//         cell.innerHTML = values[i];
        
//         if (tag === 'td') { // 7 Добавьте ячейкам созданной таблицы возможность редактирования.
//             cell.contentEditable = true;
//         }

//         tr.append(cell);
//     }
    
//     if (tag === 'td') { // 8 Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
//         tr.append(createDeleteLink());
//     }

//     return tr;
// }

// function createDeleteLink() {
//     const td = document.createElement('td');
//     const link = document.createElement('a');

//     link.href = '#';
//     link.textContent = 'delete';
//     link.addEventListener('click', e => {
//         e.preventDefault();
//         td.parentElement.remove();
//     });

//     td.append(link);

//     return td;
// }

// function createInputFields(records, table) {
//     const container = document.createElement('div');
//     const inputs = [];
//     for (let i = 0; i < records.length; i++) {
//         const input = document.createElement('input');
//         input.placeholder = Object.keys(records[0])[i];
//         inputs.push(input);
//     }

//     const button = document.createElement('button');
//     button.textContent = 'add';
//     button.addEventListener('click', () => {
//         const record = inputs.map(input => input.value);
//         inputs.map(input => input.value = '');

//         const tr = createRow(record, 'td');

//         table.append(tr);
//     })

//     container.append(...inputs, button);

//     return container;
// }

// function createTableComponent(records) {
//     const table = createTable(records);
//     const inputFields = createInputFields(records, table);
    
//     document.body.append(table, inputFields);
// }

// const employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// createTableComponent(employees);

// createTableComponent([
// 	{name: 'employee1', salary: 400},
// 	{name: 'employee2', salary: 500},
// ]);



// Решение через класс !!!!!!!!
// class Table {
//     constructor(records) {
//         this.records = records;
//     }

//     create() {
//         const headers = this.createHeaders();
//         const records = this.createRecords();
        
//         this.table = document.createElement('table');
//         this.table.append(headers, ...records);
//         document.body.append(this.table);
//     }

//     createHeaders() {
//         return this.createRow(Object.keys(this.records[0]), 'th');
//     }

//     createRecords() {
//         const arr = [];

//         this.records.forEach(record => {
//             arr.push(this.createRow(Object.values(record), 'td'));
//         });

//         arr.forEach(tr =>{
//             this.editCells(tr); // 7 Добавьте ячейкам созданной таблицы возможность редактирования.
//             this.createDeleteLink(tr); // 8 Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.
//         })

//         return arr;
//     }

//     createRow(elements, tag) {
//         const tr = document.createElement('tr');

//         elements.forEach(element => {
//             const cell = document.createElement(tag);
//             cell.innerHTML = element;
//             tr.append(cell);
//         });

//         return tr;
//     }

//     editCells(tr) {        
//         const cells = tr.querySelectorAll('td');
//         cells.forEach(cell => {
//             cell.contentEditable = true;
//             cell.focus();
//         })
//     }

//     createDeleteLink(tr) {
//         const td = document.createElement('td');
//         const link = document.createElement('a');

//         link.href = '#';
//         link.textContent = 'delete';
//         link.addEventListener('click', event => {
//             event.preventDefault();
//             tr.remove();
//         });

//         td.append(link);
//         tr.append(td);
//     }

//     createNewRecord(record) {
//         const newRecord = this.createRow(record, 'td');
        
//         this.editCells(newRecord);
//         this.createDeleteLink(newRecord);

//         this.table.append(newRecord);
//     }
// }

// class InputFields {
//     constructor(table) {
//         this.table = table;
//         this.inputsNum = Object.keys(table.records[0]).length;
//     }

//     create() {
//         const container = document.createElement('div');
//         this.inputs = this.createInputs();
//         const button = this.createButton();

//         container.append(...this.inputs, button);
//         document.body.append(container);
//     }

//     createInputs() {
//         const inputs = [];
//         for (let i = 0; i < this.inputsNum; i++) {
//             const input = document.createElement('input');
//             input.classList.add('input_8');
//             inputs.push(input);
//         }

//         return inputs;
//     }

//     createButton() {
//         const button = document.createElement('button');
//         button.textContent = 'click';

//         button.addEventListener('click', () => {
//             const values = [];
//             this.inputs.forEach(input => {
//                 values.push(input.value);
//                 input.value = '';
//             });
//             this.table.createNewRecord(values);
//         });

//         return button;
//     }
// }

// class TableComponent {
//     createTable(records) {
//         this.table = new Table(records);
//         this.table.create();
//     }

//     createInputFields() {
//         const inputFields = new InputFields(this.table);
//         inputFields.create();
//     }
// }

// const employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];

// const company = new TableComponent();
// company.createTable(employees);
// company.createInputFields(); // 9 Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. 


// const company2 = new TableComponent();
// company2.createTable([
// 	{name: 'employee1', salary: 400},
// 	{name: 'employee2', salary: 500}
// ]);


// const company3 = new TableComponent();
// company3.createTable([
// 	{name: 'employee1'},
// 	{name: 'employee2'}
// ]);
// company3.createInputFields();



// ***********CRUD***********
// class Resource {
//     constructor() {
//         this.creator = new Creator();
//         this.reader = new Reader();
//         this.updater = new Updater();
//         this.deleter = new Deleter();
//     }

//     creator() {
//         return this.creator;
//     }

//     reader() {
//         return this.reader;
//     }

//     updater() {
//         return this.updater;
//     }

//     deleter() {
//         return this.deleter;
//     }
// }

// class Reader {

// }

// class Creator {

// }

// class Updater {

// }

// class Deleter {

// }

// const resource = new Resource();
// resource.creator.




// 10 Выведите на экран каждого работника в своем теге li тега ul.

class Item {
    create(object) {
        const li = document.createElement('li');
        li.classList.add('item_style');

        const keys = Object.keys(object);
        const values = Object.values(object);
        
        for (let i = 0; i < keys.length; i++) {
            const span  = document.createElement('span');
            span.classList.add('span_style');
            span.contentEditable = true;
            // this.edit(span);
            span.append(values[i]);

            li.append(keys[i], ': ', span);
        }

        li.append(new DeleteLink().create());

        return li;
    }
    
    edit(span) { // 11 Сделайте так, чтобы по клику на имя, возраст или зарплату работника появлялся инпут для редактирования этого поля.
        span.addEventListener('click', function func() {
            const input = document.createElement('input');
            input.classList.add('input_8');
            input.value = this.textContent;
            this.textContent = '';

            input.addEventListener('blur', () => {
                this.textContent = input.value;
            });

            this.append(input);
            input.focus();
        })
    }
}

class DeleteLink { //12 Добавьте в конец каждого тега li ссылку на удаление этого li из списка.
    create() {
        const link = document.createElement('a');
        link.classList.add('delete_link');
        link.textContent = 'delete';
        link.href = '#';

        link.addEventListener('click', function(e) {
            e.preventDefault();
            this.parentElement.remove();
        })

        return link;
    }
}

class Form { // 13 Под списком сделайте форму для добавления нового работника.
    constructor(list) {
        this.list = list;
        this.objects = list.objects;
    }

    create() {
        const formContainer = document.createElement('div');
        this.inputs = this.createInputs();
        const button = this.createButton();

        formContainer.append(...this.inputs, button);
        
        return formContainer;
    }

    createInputs() {
        const inputs = [];

        this.objects.forEach(() => {
            const input = document.createElement('input');
            inputs.push(input);
        });

        return inputs;
    }

    createButton() {
        const button = document.createElement('button');
        button.textContent = 'add';
        button.addEventListener('click', () => {
            const newObject = {};
            const keys = Object.keys(this.objects[0]);
            const values = this.inputs.map(input => input.value);

            for (let i = 0; i < keys.length; i++) {
                newObject[keys[i]] = values[i];
            }

            this.inputs.forEach(input => input.value = '');

            const li = new Item().create(newObject);
            this.list.ul.append(li);
        })

        return button;
    }
}


class List {
    constructor(objects) {
        this.objects = objects;
    }

    create() {
        this.ul = document.createElement('ul');

        this.objects.forEach(object => {
            const li = new Item().create(object);
            this.ul.append(li);
        })

        document.body.append(this.ul);
    }

    addForm() {
        document.body.append(new Form(this).create());
    }
}

const employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

const list = new List(employees);
list.create();
list.addForm();

