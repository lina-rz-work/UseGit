"uase strict"

// Создание и вставка элементов. Методы createElement() и appendChild();
// 1 Вставьте в конец li с текстом 'item'.
// let elem = document.querySelector('#elem');
// let li = document.createElement('li');

// li.textContent = 'item';

// elem.appendChild(li);


// 2 Сделайте так, чтобы по клику на кнопку в конец списка добавлялся li с текстом 'item'.
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');

// button.addEventListener('click', () => {
//     let li = document.createElement('li');

//     li.textContent = 'item';

//     elem.appendChild(li);
// })




// Привязывание событий при вставке элементов
// 1 Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в конец ol добавлялся тег li. 
// Сделайте так, чтобы по клику на любой из добавленных li в конец его текста записывался восклицательный знак.
// const ol = document.createElement('ol');
// const btn = document.createElement('button');
// btn.textContent = 'click';

// document.body.appendChild(ol);
// document.body.appendChild(btn);

// btn.addEventListener('click', () => {
//     const li = document.createElement('li');
//     li.textContent = 'list';

//     li.addEventListener('click', () => {
//        li.textContent += '!';
//     });

//     ol.appendChild(li);
// });

// решение через event 
// btn.addEventListener('click', () => {
//     let li = document.createElement('li');
//     li.textContent = 'list';

//     ol.appendChild(li); 
// });

// ol.addEventListener('click', event => {
//     if (event.target.tagName === 'LI') {
//         event.target.textContent += '!';
//     }
// });




// Создание элементов в цикле. 
// 1 Дан пустой ul. Запустите цикл, который вставит в него 10 тегов li. Сделайте так, чтобы текстом каждой li был ее порядковый номер.
// const ul = document.createElement('ul');

// document.body.appendChild(ul);

// for (let i = 1; i <= 10; i++) {
//     const li = document.createElement('li');

//     ul.appendChild(li);

//     li.textContent = i;
// }




// Навешивание обработчиков в цикле
// 1 Дан див. Запустите цикл, который добавит в наш див 5 инпутов. 
// // Пусть дан также абзац. Сделайте так, чтобы каждый из новых инпутов по потери фокуса записывал свой текст в абзац.
// const div = document.createElement('div');
// const p = document.createElement('p');

// document.body.appendChild(div);
// document.body.appendChild(p);

// for (let i = 1; i <= 5; i++) {
//     const input = document.createElement('input');
//     input.style.margin = '5px';
    
//     div.appendChild(input);

//     input.addEventListener('blur', () => {
//         p.textContent += input.value;
//     });
// }




// Удаление элементов. Метод remove()
// 1 Сделайте так, чтобы любая li удалялась по клику на нее.
// const elems = document.querySelectorAll('li');

// for (let elem of elems) {
//     elem.addEventListener('click', () => {
//         elem.remove();
//     });
// }

// решение через event
// const ul = document.querySelector('ul');

// ul.addEventListener('click', event => {
//     if (event.target.tagName = 'LI') {
//         event.target.remove();
//     }
// })


// 2 Сделайте так, чтобы по каждому клику на кнопку удалялся последний элемент из #parent.
// const ul = document.querySelector('#parent');
// const button = document.querySelector('#button');

// button.addEventListener('click', () => {
//     ul.lastElementChild.remove();
// });




// Вставка элементов в начало или в конеw. Методы prepend() и append()
// 1 Вставьте ему в начало элемент с текстом 'start', а в конец - элемент с текстом 'finish'.
// const ul = document.querySelector('#elem');

// const start = document.createElement('li');
// const finish = document.createElement('li');

// start.textContent = 'start';
// finish.textContent = 'finish';

// ul.prepend(start);
// ul.append(finish);




// Вставка перед. Метод insertBefore()
// 1 Дан элемент #elem. Вставьте перед этим элементом элемент с текстом 'new'.
// 2 Модифицируйте предыдущую задачу так, чтобы клик на вставленный элемент приводил к тому, что в конец его текста будет добавляться '!'.
// const parent = document.querySelector('#parent');
// const elem = document.querySelector('#elem');

// const li = document.createElement('li');
// li.textContent = 'new';

// li.addEventListener('click', () => li.textContent += '!');

// parent.insertBefore(li, elem);




// Смежная вставка. Метод insertAdjacentElement()
// const elem = document.querySelector('#elem');

// const p = document.createElement('p');
// p.textContent = '!!!';

// elem.insertAdjacentElement('beforebegin', p);
// elem.insertAdjacentElement('afterend', p);
// elem.insertAdjacentElement('afterbegin', p);
// elem.insertAdjacentElement('beforeend', p);


// Метод insertAdjacentHTML()
// Метод insertAdjacentText()




// Клонирование элементов. Метод cloneNode()
// const input = document.querySelector('.inp');
// const button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     const newInp = input.cloneNode(true);
//     newInp.style.margin = '5px';

//     input.insertAdjacentElement('afterend', newInp);
//     input.insertAdjacentHTML('afterend', '<br/>');
// });




// matches()
// 1 Проверьте, является ли этот элемент элементом с классом www.
// 2 Дан элемент. Проверьте, является ли этот элемент абзацем.
// let elem = document.querySelector('#elem');

// console.log(elem.matches('.www'));
// console.log(elem.matches('p'));-


// 3 Даны две переменные elem1 и elem2, содержащие два элемента.
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');

// console.log(elem2.matches('#elem1 p'));




// contains()
// 3 Даны две переменные elem1 и elem2, содержащие два элемента.
let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');

console.log(elem1.contains(elem2));