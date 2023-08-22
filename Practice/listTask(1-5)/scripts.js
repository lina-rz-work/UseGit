"use strict"

// Практика на изменение элементов
// 1 Дан массив. Выведите его элементы в виде списка ul.
// 2 Модифицируйте задачу так, чтобы по клику на любую li в ней появлялся инпут, с помощью которого ее можно будет поредактировать.

// лучше
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = ['one', 'two', 'three'];

// function createList(arr) {
//     const ul = document.createElement('ul');
    
//     arr.forEach(elem => {
//         const li = document.createElement('li');
//         li.textContent = elem;

//         li.addEventListener('click', function func() {
//             const input = document.createElement('input');
//             input.value = this.textContent;
            
//             input.addEventListener('blur', () => {
//                 this.textContent = input.value;
//                 this.addEventListener('click', func);
//             });
            
//             this.textContent = '';
//             this.append(input);
//             input.focus();

//             this.removeEventListener('click', func);
//         });

//         ul.append(li);
//     })
    
//     document.body.append(ul);
// }

// createList(arr);
// createList(arr2);




// 3 Модифицируйте задачу так, чтобы под списком был инпут, с помощью которого можно будет добавить новый элемент в конец списка ul. 
// Сделайте так, чтобы новые li также можно было редактировать.
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = ['one', 'two', 'three'];

// class List {
//     constructor(arr) {
//         this.arr = arr;
//         this.ul = document.createElement('ul');

//         this.create();
//     }

//     create() {
//         const ul = this.createList(this.arr);
//         const button = this.createButton();

//         document.body.append(ul, button);
//     }

//     createList(arr) {
//         arr.forEach(elem => { 
//             this.ul.append(this.createLi(elem));
//         })
        
//         return this.ul;
//     }

//     createButton() {
//         const button = document.createElement('input');
//         button.type = 'submit';
//         button.value = 'add';

//         button.addEventListener('click', () => {
//             this.ul.append(this.createLi('new element'));
//         })

//         return button;
//     }

//     createLi(elem) {
//         const li = document.createElement('li');
//         li.textContent = elem;

//         li.addEventListener('click', function func() {
//             const input = document.createElement('input');
//             input.value = this.textContent;
            
//             input.addEventListener('blur', () => {
//                 this.textContent = input.value;
//                 this.addEventListener('click', func);
//             });
            
//             this.textContent = '';
//             this.append(input);
//             input.focus();

//             this.removeEventListener('click', func);
//         });

//         return li;
//     }
// }

// const list = new List(arr);
// const list2 = new List(arr2);


// 4 Модифицируйте  задачу так, чтобы в конце каждой li стояла ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.
// 5 Модифицируйте предыдущую задачу так, чтобы в конце каждой li также стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть текст данного тега li.

// Класс
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = ['one', 'two', 'three'];

// class List {
//     constructor(arr) {
//         this.arr = arr;
//         this.ul = document.createElement('ul');
//     }

//     create() {
//         this.arr.forEach(elem => { 
//             this.ul.append(this.createLi(elem));
//         });

//         document.body.append(this.ul, this.createButton());
//     }

//     createButton() {
//         const button = document.createElement('input');
//         button.type = 'submit';
//         button.value = 'add';

//         button.addEventListener('click', () => {
//             this.ul.append(this.createLi('new element'));
//         })

//         return button;
//     }

//     createLi(elem) {
//         const li = document.createElement('li');

//         const span = document.createElement('span');
//         span.textContent = elem;
//         span.addEventListener('click', function func() {
//             const input = document.createElement('input');
//             input.value = span.textContent;
            
//             input.addEventListener('blur', () => {
//                 this.textContent = input.value;
//                 this.addEventListener('click', func);
//             });
            
//             this.textContent = '';
//             this.append(input);
//             input.focus();

//             this.removeEventListener('click', func);
//         });

//         const deleteLink = document.createElement('a');
//         deleteLink.href = '#';
//         deleteLink.textContent = '   delete';
//         deleteLink.addEventListener('click', () => {
//             deleteLink.parentElement.remove();
//         });

//         const crossLink = document.createElement('a');
//         crossLink.href = '#';
//         crossLink.textContent = '   cross';
//         crossLink.addEventListener('click', () => {
//             span.classList.add('crossed');
//         });

//         li.append(span);
//         li.append(deleteLink);
//         li.append(crossLink);

//         return li;
//     }
// }

// const list = new List(arr);
// list.create();

// const list2 = new List(arr2);
// list2.create();



// Литерал объекта (Сокращённая запись метода)
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = ['one', 'two', 'three'];

// const List = {
//     create(arr) {
//         const ul = document.createElement('ul');

//         arr.forEach(elem => {
//             ul.append(this.createLi(elem));
//         });

//         document.body.append(ul, this.createButton(ul));
//     },

//     createButton(ul) {
//         const button = document.createElement('input');
//         button.type = 'submit';
//         button.value = 'add';

//         button.addEventListener('click', () => {
//             ul.append(this.createLi('new element'));
//         });

//         return button;
//     },

//     createLi(elem) {
//         const li = document.createElement('li');

//         const span = document.createElement('span');
//         span.textContent = elem;
//         span.addEventListener('click', function func() {
//             const input = document.createElement('input');
//             input.value = span.textContent;

//             input.addEventListener('blur', () => {
//                 span.textContent = input.value;
//                 span.addEventListener('click', func);
//             });

//             span.textContent = '';
//             span.append(input);
//             input.focus();

//             span.removeEventListener('click', func);
//         });

//         const deleteLink = document.createElement('a');
//         deleteLink.href = '#';
//         deleteLink.textContent = '   delete';
//         deleteLink.addEventListener('click', () => {
//             li.remove();
//         });

//         const crossLink = document.createElement('a');
//         crossLink.href = '#';
//         crossLink.textContent = '   cross';
//         crossLink.addEventListener('click', () => {
//             span.classList.add('crossed');
//         });

//         li.append(span);
//         li.append(deleteLink);
//         li.append(crossLink);

//         return li;
//     }
// };

// List.create(arr);
// List.create(arr2);




// Литерал объекта (Не сокращённая запись метода)
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = ['one', 'two', 'three'];

// const List = {
//     create: function(arr) {
//         const ul = document.createElement('ul');

//         arr.forEach(function(elem) { 
//             ul.append(List.createLi(elem));
//         });

//         const button = List.createButton(ul);

//         document.body.append(ul, button);
//     },

//     createButton: function(ul) {
//         const button = document.createElement('input');
//         button.type = 'submit';
//         button.value = 'add';

//         button.addEventListener('click', function() {
//             ul.append(List.createLi('new element'));
//         });

//         return button;
//     },

//     createLi: function(elem) {
//         const li = document.createElement('li');

//         const span = document.createElement('span');
//         span.textContent = elem;
//         span.addEventListener('click', function func() {
//             const input = document.createElement('input');
//             input.value = span.textContent;
            
//             input.addEventListener('blur', function() {
//                 span.textContent = input.value;
//                 span.addEventListener('click', func);
//             });
            
//             span.textContent = '';
//             span.append(input);
//             input.focus();

//             span.removeEventListener('click', func);
//         });

//         const deleteLink = document.createElement('a');
//         deleteLink.href = '#';
//         deleteLink.textContent = '   delete';
//         deleteLink.addEventListener('click', function() {
//             li.remove();
//         });

//         const crossLink = document.createElement('a');
//         crossLink.href = '#';
//         crossLink.textContent = '   cross';
//         crossLink.addEventListener('click', function() {
//             span.classList.add('crossed');
//         });

//         li.append(span);
//         li.append(deleteLink);
//         li.append(crossLink);

//         return li;
//     }
// };

// List.create(arr);
// List.create(arr2);



// GPT
// const array = ['Элемент 1', 'Элемент 2', 'Элемент 3', 'Элемент 4', 'Элемент 5'];

// const list = document.getElementById('list');
// const newItemInput = document.getElementById('newItemInput');

// function createListItem(item) {
//     const listItem = document.createElement('li');
//     listItem.textContent = item;

//     listItem.addEventListener('click', function() {
//         const input = document.createElement('input');
//         input.value = item;

//         input.addEventListener('blur', function() {
//             item = input.value;
//             listItem.textContent = item;
//         });

//         listItem.textContent = '';
//         listItem.appendChild(input);
//         input.focus();
//     });

//     const deleteLink = document.createElement('a');
//     deleteLink.href = '#';
//     deleteLink.textContent = 'Удалить';

//     deleteLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         list.removeChild(listItem);
//     });

//     listItem.appendChild(deleteLink);

//     const crossLink = document.createElement('a');
//     crossLink.href = '#';
//     crossLink.textContent = 'Перечеркнуть';

//     crossLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         listItem.style.textDecoration = 'line-through';
//     });

//     listItem.appendChild(crossLink);

//     list.appendChild(listItem);
// }

// array.forEach(item => {
//     createListItem(item);
// });

// newItemInput.addEventListener('keydown', function(event) {
//     if (event.key === 'Enter' && newItemInput.value.trim() !== '') {
//         createListItem(newItemInput.value);
//         newItemInput.value = '';
//     }
// });


// * * FINAL SOLUTION * *
// Класс
// const arr = [1, 2, 3, 4, 5, 6];
// const arr2 = ['one', 'two', 'three'];

// class List {
//     constructor(arr) {
//         this.arr = arr;
//         this.ul = document.createElement('ul');
//     }

//     create() {
//         this.arr.forEach(elem => { 
//             this.ul.append(this.createLi(elem));
//         });

//         document.body.append(this.ul, this.createButton());
//     }


//     createLi(elem) {
//         const li = document.createElement('li');

//         li.append(this.createSpan(elem));
//         li.append(this.createDeleteLink());
//         li.append(this.createCrossLink());

//         return li;
//     }

//     createSpan(elem) {
//         const span = document.createElement('span');
//         span.textContent = elem;

//         span.addEventListener('click', function func() {
//             const input = document.createElement('input');
//             input.value = span.textContent;
            
//             input.addEventListener('blur', () => {
//                 this.textContent = input.value;
//                 this.addEventListener('click', func);
//             });
            
//             this.textContent = '';
//             this.append(input);
//             input.focus();

//             this.removeEventListener('click', func);
//         });

//         return span;
//     }

//     createDeleteLink() {
//         const link = document.createElement('a');
//         link.href = '#';
//         link.textContent = '   delete';

//         link.addEventListener('click', () => {
//             link.parentElement.remove();
//         });

//         return link;
//     }

//     createCrossLink() {
//         const link = document.createElement('a');
//         link.href = '#';
//         link.textContent = '   cross';

//         link.addEventListener('click', function() {
//             const span = this.parentElement.firstChild;
//             span.classList.toggle('crossed');
//         });

//         return link;
//     }

//     createButton() {
//         const button = document.createElement('input');
//         button.type = 'submit';
//         button.value = 'add';

//         button.addEventListener('click', () => {
//             this.ul.append(this.createLi('new element'));
//         })

//         return button;
//     }
// }

// const list = new List(arr);
// list.create();

// const list2 = new List(arr2);
// list2.create();





