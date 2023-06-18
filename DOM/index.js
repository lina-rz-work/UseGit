"use strict"

// let button = document.querySelector('#button');

// console.log(button);

// button.addEventListener('click', () => console.log('!!!'));



// function func() {
//     console.log('named function works');
// }
// button.addEventListener('click', func);



// button.addEventListener('mouseover', function() {
// 	console.log('1');
// });
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// });






// 339 Запишите ссылку на каждый из абзацев в отдельную переменную и выведите содержимое каждой из этих переменных в консоль.

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// console.log(elem1); 
// console.log(elem2); 
// console.log(elem3); 




// 340
// let firstPar = document.querySelector('#block p');

// console.log(firstPar);


// let firstParagr = document.querySelector('.block p');

// console.log(firstParagr);


// let firstParagraph = document.querySelector('.www');

// console.log(firstParagraph);




// 341 

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');

// button1.addEventListener('click', function() {
//     alert('1');
// })

// button2.addEventListener('click', () => alert('2'));

// button3.addEventListener('click', () => console.log('3'));




//342 Сделайте так, чтобы по клику на первую кнопку выполнилась функция func1, а по клику на вторую - функция func2.
// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', func1);
// button2.addEventListener('click', func2);




// 343 Один обработчик ко многим элементам 
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');

// function func() {
// 	console.log('message');
// }

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);




// 344 Несколько обработчиков одного события
// let elem = document.querySelector('#elem');

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }

// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);




// 345 Обработчики разных событий

// let button2 = document.querySelector('#button2');

// button2.addEventListener('dblclick', () => console.log('double click event has been processed'));

// button2.addEventListener('mouseover', function() {
//     console.log('mouse is over');
// });

// button2.addEventListener('mouseout', () => console.log('mouse is out'));




//346 Работа с текстом элементов
// let elem = document.querySelector('#elem');

// elem.textContent = 'new text!!!';

// console.log(elem.textContent);


// 1 Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.
// 2 Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст.

// let btn = document.querySelector('#btn');
// let paragraph = document.querySelector('#paragraph');

// // btn.addEventListener('click', () => console.log(paragraph.textContent));

// btn.addEventListener('click', () => paragraph.textContent = 'new text for the 2nd task');


// 3 Даны два абзаца, содержащие своим текстом какие-то числа, и кнопка. 
// По нажатию на кнопку выведите на экран сумму хранящихся чисел.

// let num1 = document.querySelector('#num1');
// let num2 = document.querySelector('#num2');
// let button = document.querySelector('#button');

// button.addEventListener('click', () => console.log(Number(num1.textContent) + Number(num2.textContent)));



// 4 Даны три абзаца с числами, див, и кнопка. По нажатию на кнопку запишите в текст дива сумму чисел.
// let num1 = document.querySelector('#num1');
// let num2 = document.querySelector('#num2');
// let num3 = document.querySelector('#num3');
// let div = document.querySelector('.sum_result');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => div.textContent = Number(num1.textContent) + 
//     Number(num2.textContent) + Number(num3.textContent));


// 5 Дан абзац с числом и кнопка. По нажатию на кнопку прибавьте к значению абзаца единицу и запишите полученное число обратно.
// let par = document.querySelector('.initial_value');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => par.textContent = Number(par.textContent) + 1);


// 6 Дан абзац с текстом и кнопка. По нажатию на кнопку запишите в конец текста абзаца восклицательный знак.
// let par = document.querySelector('.initial_text');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => par.textContent += '!!!');




// 347 Работа с HTML кодом элементов
// let elem = document.querySelector('#elem');

// elem.innerHTML = '<i>!!!</i>';

// console.log(elem.innerHTML);


// 1 Дан абзац и кнопка. По клику на кнопку прочитайте HTML код абзаца и выведите его в консоль.
// 2 Дан абзац и кнопка. По клику на кнопку запишите в абзац новый текст так, чтобы он был жирным.

// let par = document.querySelector('#elem');
// let btn = document.querySelector('#btn');

// // btn.addEventListener('click', () => console.log(par.innerHTML));

// btn.addEventListener('click', () => par.innerHTML = '<b>New text</b>');




// 348 Атрибуты тегов как свойства
// let par = document.querySelector('#elem');

// par.type = 'submit';

// console.log(par.id);
// console.log(par.type);


// 1 Дана также кнопка. По нажатию на кнопку выведите на экран содержимое атрибута type указанного выше инпута.
// 2 Дана также кнопка. По нажатию на кнопку запишите в атрибут type значение submit.

// let input = document.querySelector('#elem');

// // input.addEventListener('click', () => console.log(input.type));

// input.addEventListener('click', () => input.type = 'submit');


// 3 Пусть у вас есть ссылка в виде тега a, кнопка и абзац. По нажатию на кнопку выведите в абзац содержимое атрибута href ссылки.

// let ref = document.querySelector('.first_href');
// let btn = document.querySelector('#btn');
// let par = document.querySelector('.show_the_href');

// btn.addEventListener('click', () => par.innerHTML = ref.href);


// 4 Пусть у вас есть ссылка и кнопка. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках.

// let ref = document.querySelector('.second_href');
// let btn = document.querySelector('#btn');

// btn.addEventListener('click', () => ref.innerHTML += `(${ref.href})`);


// 5 Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. Пусть даны также кнопка и абзац. 
//Сделайте так, чтобы по клику на кнопку в абзац записался путь к картинке из ее атрибута src.

// let img = document.querySelector('.image');
// let btn = document.querySelector('#btn');
// let par = document.querySelector('.src_content');

// btn.addEventListener('click', () => par.innerHTML = img.src);


// 6 Дана картинка в теге img и кнопка. По нажатию на кнопку в атрибут width запишите значение 200.
// let image = document.querySelector('.image');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => image.width = 200);


// 7 Дана картинка в теге img и кнопка. Пусть в атрибуте width задана некоторая ширина. 
//Сделайте кнопку, по нажатию на которую ширина картинки будет увеличиваться в 2 раза.

// let image = document.querySelector('.image');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => image.width *= 2);


/* 8 Пусть у вас есть две картинки. Сделайте на странице тег img и две кнопки. 
По нажатию на первую кнопку запишите в атрибут src путь к первой картинке, а по нажатию на вторую - путь ко второй картинке. */
// let image = document.querySelector('.image');
// let button1 = document.querySelector('#btn1');
// let button2 = document.querySelector('#btn2');

// button1.addEventListener('click', () => image.src = "../DOM/images/Matthew Dix.png");

// button2.addEventListener('click', () => image.src = "../DOM/images/Nick Karvounis.png");




// 349
// let elem = document.querySelector('#elem');
// console.log(elem.value);

// elem.value = 'new text';
// console.log(elem.value);


// 1 Дан инпут и кнопка. По нажатию на кнопку запишите в инпут какой-нибудь текст.
// let input = document.querySelector('#input');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => input.value = 'Put address here');


// 2 Дан инпут, абзац и кнопка. По нажатию на кнопку запишите в абзац текст из инпута.

// let input = document.querySelector('#input');
// let paragraph = document.querySelector('.paragraph');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => paragraph.innerHTML = input.value);


// 3 Даны два инпута и кнопка. В первый инпут пользователем вводится число. 
// По нажатию на кнопку запишите во второй инпут квадрат введенного числа.

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => input2.value = input1.value ** 2);


//Даны два инпута и кнопка. По нажатию на кнопку запишите в первый инпут значение второго инпута, 
//а во второй инпут - значение первого. Ваш код должен работать универсально, для любых значений инпутов.

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {
//     let repo = input2.value;
//     input2.value = input1.value;
//     input1.value = repo;
// });


// 5 *************************************************************************************************
//Даны 5 инпутов, абзац и кнопка. В инпут вводятся числа. По нажатию на кнопку запишите среднее арифметическое введенных чисел в абзац.

// let inputs = document.querySelectorAll('.input');
// let button = document.querySelector('#btn');
// let par = document.querySelector('.result');


// button.addEventListener('click', function() {
//     let sum = 0

//     for (let input of inputs) {
//         sum += Number(input.value);
//     }

//     return par.innerHTML = sum / inputs.length;
// });

// button.addEventListener('click', function() {
//     par.innerHTML = [...inputs].reduce(function(sum, input) {
//         return sum + Number(input.value);
//     }, 0) / inputs.length;
// });


// button.addEventListener('click', function() {
//     par.innerHTML = [...inputs].reduce((sum, input) => sum + Number(input.value), 0) / inputs.length;
// });


// button.addEventListener('click', function() {
//     const func = (sum, input) => sum + Number(input.value);
//     par.innerHTML = [...inputs].reduce(func, 0) / inputs.length;
// });




// 350 Фокус текстовых полей
//1 Дан инпут. По получению фокуса запишите в него число 1, а по потери фокуса - число 2.
// let input = document.querySelector('#input');

// input.addEventListener('focus', () => input.value = 1);
// input.addEventListener('blur', () => input.value = 2);


//2 Дан инпут. Пусть в него вводится число. По потери фокуса выведите на экран квадрат этого числа.
// let input = document.querySelector('#input');

// input.addEventListener('blur', () => alert(input.value ** 2));


//3 Дан инпут, в котором изначально есть какой-то текст. По получению фокуса инпутом очистите содержимое этого инпута.

// let input = document.querySelector('#input');

// input.addEventListener('focus', function() {
//     input.value = '';
// });




//351 Исключения при работе с атрибутами
//1 Дана также кнопка. По нажатию на кнопку прочитайте и выведите на экран значение атрибута class нашего дива.

// let block = document.querySelector('.content_no-gap');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => alert(block.className));


//2 Дана также кнопка. По нажатию на кнопку запишите в атрибут class нашего дива какой-нибудь класс.

// let block = document.querySelector('#elem');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => block.className = 'content_no-gap');

// button.addEventListener('click', () => console.log(block.className));


//3 Дан див с несколькими CSS классами, записанными через пробел:
//Дана также кнопка. По нажатию на кнопку получите массив CSS классов нашего дива.

// let block = document.querySelector('.aaa_bbb_ccc');
// let button = document.querySelector('#btn');

// // button.addEventListener('click', () => console.log(block.className.split('_')));

// button.addEventListener('click', getArray);

// function getArray() {
//     return console.log(block.className.split('_'));
// }


//352 Цепочки методов и свойств
// Переделайте приведенный выше код так, чтобы вместо введения переменной image использовалась цепочка.

// let image = document.querySelector('#image');
// console.log(image.src);

// console.log(document.querySelector('#image').src);




// 353 Преимущества и недостатки цепочек 
// Укажите на недостатки данного кода. Исправьте их.

// // console.log(document.querySelector('#image').src);
// // console.log(document.querySelector('#image').width);
// // console.log(document.querySelector('#image').height);

// let image = document.querySelector('#image');

// console.log(image.src, image.width, image.height);





// 354 Объект this                  ?????????????????
// 1 Дан инпут. По получению фокуса этим инпутом запишите в него число 1, а по потери фокуса - число 2. 
// Для обращения у инпуту внутри функции-обработчика используйте объект this.

// let input = document.querySelector('#input');

// input.addEventListener('focus', function() {
// 	this.value = 1;
// });

// input.addEventListener('blur', function() {
// 	this.value = 2;
// });


// 2 Дана кнопка, значением которой служит число 1. 
// Сделайте так, чтобы по клику на эту кнопку ее значение каждый раз увеличивалось на единицу.

// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {
//     this.value = Number(this.value) + 1;
// });




// 355 Преимущество this

//1 Даны 5 абзацев с какими-то текстами. По клику на любой абзац запишите в конец его текста восклицательный знак.

// let pars = document.querySelectorAll('#par');

// let [par1, par2, par3, par4, par5] = [...pars];

// par1.addEventListener('click', func);
// par2.addEventListener('click', func);
// par3.addEventListener('click', func);
// par4.addEventListener('click', func);
// par5.addEventListener('click', func);

// function func() {
//     this.textContent += '!!!';
// }


// 2  Даны 3 инпута, в которых записаны какие-то числа. По потери фокуса в любом из инпутов возведите стоящее в нем число в квадрат.

// let input1 = document.querySelector('#inp1');
// let input2 = document.querySelector('#inp2');
// let input3 = document.querySelector('#inp3');

// input1.addEventListener('blur', func);
// input2.addEventListener('blur', func);
// input3.addEventListener('blur', func);

// function func() {
//     this.value **= 2;
// }





// 356 Получение группы элементов querySelectorAll
// 1 Даны абзацы и кнопка. По нажатию на кнопку найдите все абзацы, переберите из циклом 
// и установите текст каждого абзаца в значение 'text'.

// let paragraphs = document.querySelectorAll('.www');
// let button = document.querySelector('#btn');

// button.addEventListener('click', func);

// function func() {
//     for (let par of paragraphs) {
//         par.textContent = 'text';
//     }
// }


// 2 Даны абзацы с текстом и кнопка. По нажатию на кнопку запишите в конец текста каждого абзаца его порядковый номер.

// let paragraphs = document.querySelectorAll('.www');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function () {
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].textContent += Number([i]) + 1;
//     }
// });


// 3 Даны инпуты с числами, абзац и кнопка. По нажатию на кнопку найдите сумму чисел из инпутов и запишите эту сумму в текст абзаца.
// let inputs = document.querySelectorAll('#inp');
// let button = document.querySelector('#btn');
// let par = document.querySelector('.result');

// button.addEventListener('click', func);

// // function func() {
// //     return par.textContent = [...inputs].reduce(function(sum, inp) {
// //         return sum + Number(inp.value);
// //     }, 0);
// // }

// function func() {
//     return par.textContent = [...inputs].reduce((sum, inp) => sum + Number(inp.value), 0);
// }




// 357 Добавление обработчиков в цикле (Именованные)
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }

// function func() {
// 	console.log(this.textContent);
// }


// 1 Даны также инпуты. Сделайте так, чтобы по потери фокуса в любом из наших инпутов выполнялась приведенная функция.

// function func() {
// 	this.value = Number(this.value) + 1;
// }

// let inputs = document.querySelectorAll('#inp');

// for (let input of inputs) {
//     input.addEventListener('blur', func);
// }


// 2 Даны абзацы с числами. Сделайте так, чтобы по клику на любой абзац его число в нем возводилось в квадрат.

// let paragraphs = document.querySelectorAll('.par');

// for (let par of paragraphs) {
//     par.addEventListener('click', func);
// }

// function func() {
//     this.textContent = Number(this.textContent) ** 2;
// }




// 358 Добавление Анонимных обработчиков в цикле
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
// }


// 1 Сделайте функцию-обработчик анонимной.
// let divs = document.querySelectorAll('div');

// for (let div of divs) {
// 	div.addEventListener('click', function() {
//         this.textContent++;
//     });
// }




// 359 Отвязывание событий
// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// 	this.removeEventListener('click', func);
// }


// 1 Дана ссылка и кпнока. По нажатию на кнопку добавьте в конец текста ссылки содержимое ее атрибута href в круглых скобках. 
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let link = document.querySelector('.idol_ref');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function func() {
//     link.textContent += `   (${link.href})`;
//     this.removeEventListener('click', func);
// });


// 2 Дана кнопка, значением которой служит число 1. Сделайте так, чтобы по клику на эту кнопку ее значение 
// каждый раз увеличивалось на единицу. После того, как значение кнопки достигнет 10 - отвяжите обработчик события, 
// чтобы кнопка больше не реагировала на нажатие.

// let button = document.querySelector('#btn');

// button.addEventListener('click', func);

// function func() {
//     this.value = Number(this.value) + 1;

//     if (this.value >= 10) {
//         this.removeEventListener('click', func);
//     }
// }




// 360 Отвязывание обработчиков событий в цикле
// 1 Даны абзацы. По нажатию на любой из абзацев добавьте ему в конец восклицательный знак. 
// Сделайте так, чтобы это добавление происходило лишь по первому нажатию.

// let pars = document.querySelectorAll('.par');

// // for (let par of pars) {
// //     par.addEventListener('click', function func() {
// //         this.textContent += '!';
// //         this.removeEventListener('click', func);
// //     })
// // }

// for (let par of pars) {
//     par.addEventListener('click', func);
// }

// function func() {
//     this.textContent += '!';
//     this.removeEventListener('click', func);
// }




// 361 Отвязывание анонимных функций
// 1 Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.

// let lists = document.querySelectorAll('.num_list');

// for (let li of lists) {
//     li.addEventListener('click', function func() {
//         li.textContent = Number(li.textContent) + 1;
//         li.removeEventListener('click', func);
//     });
// }


// 3 Модифицируйте предыдущую задачу так, чтобы каждая li увеличивала свое значение только если ее значение меньше 10.

// let lists = document.querySelectorAll('.num_list');

// for (let li of lists) {
//     li.addEventListener('click', function func() {
//         li.textContent = Number(li.textContent) + 1;
        
//         if (Number(li.textContent) >= 9) {
//             li.removeEventListener('click', func);
//         }
//     });
// }




// 362 Советы по написанию кода 
// Получите года, сумма цифр которых равна 6. Найдите сумму полученных годов.

// let years = document.querySelectorAll('li');
// let arr = [];

// const func = (sum, num) => sum + Number(num);

// for (let year of years) {
//     let sum = (year.textContent.split('').reduce(func, 0));

//     if (sum == 6) {
//         arr.push(sum);
//     }
// }

// console.log(arr.reduce(func, 0));


// let years = document.querySelectorAll('li');

// const allowedSum = 6;
// const func = (sum, num) => sum + Number(num);

// let sum = [...years]
//     .map((year) => year.textContent.split('').reduce(func, 0))
//     .filter((sum) => sum === allowedSum)
//     .reduce(func, 0);

// console.log(sum);




// 363 Поиск ошибок в коде с DOM
// 1 Код должен добавить текст в конец каждого абзаца:
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//     elem.textContent += '!';
// }


// 2 По клику на абзац его значение должно увеличиться на единицу:
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + 1;
// 	});
// }


// 3 По клику на кнопку текст абзаца должен стать жирным:
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
// 	elem.innerHTML = `<b>${elem.innerHTML}</b>`;
// });


// 4 По клику на кнопку должна вывестись сумма чисел из абзацев:
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	let sum = 0;
	
// 	for (let elem of elems) {
// 		sum += Number(elem.textContent);
// 	}
	
// 	console.log(sum);
// });


// 5 По клику на абзац ему в конец должен добавиться заданный текст:
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', () => {
// 		elem.textContent += '!';
// 	});
// }


// 6 По клику на кнопку текст каждого абзаца должен стать жирным:
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
// 	for (let elem of elems) {
// 		elem.innerHTML = `<b>${elem.innerHTML}</b>`;
// 	}
// });


// 7 По клику на кнопку в консоль должна вывестись сумма чисел из абзацев:
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;

// button.addEventListener('click', function() {
//     for (let elem of elems) {
//         sum += Number(elem.textContent);
//     }

//     console.log(sum);
// });


// 8 В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма чисел из инпутов:
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('input');
// let sum = 0;

// button.addEventListener('click', function() {
//     for (let elem of elems) {
//         sum += Number(elem.value);
//     }

// 	console.log(sum);

// 	sum = 0;
// });


// 9 В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = Number(inp1.value) + Number(inp2.value);
// });


// 10 В первые два инпута вводятся числа. По клику на кнопку в абзац должна вывестись сумма этих чисел:
// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
// 	res.textContent = Number(inp1.value) + Number(inp2.value);
// });


// 11 По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом его data атрибута:
// let button = document.querySelector('#btn');
// let inputs = document.querySelectorAll('input');

// button.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		input.classList.remove('right', 'wrong');
// 		input.classList.add(input.value === input.dataset.text ? 'right' : 'wrong');
// 	}
// });


// 12 По клику на кнопку нужно проверить, что текст в каждом инпуте совпадает с текстом соответствующего элемента массива:
// let inputs = document.querySelectorAll('input');
// let button = document.querySelector('#btn');

// let texts = ['text1', 'text2', 'text3'];

// button.addEventListener('click', function() {
// 	for (let i = 0; i < inputs.length; i++) {
// 		let input = inputs[i];
// 		input.classList.remove('right', 'wrong');
// 		input.classList.add(input.value === texts[i] ? 'right' : 'wrong');
// 	}
// });


// 13 В инпуты вводятся числа. По клику на кнопку в консоль должна вывестись сумма введенных чисел:
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
// 	for (let input of inputs) {
// 		sum += Number(input.value);
// 	}
	
// 	console.log(sum);
// 	sum = 0;
// });


// 14 В первые два инпута вводятся числа. По клику на кнопку в третий инпут должна вывестись сумма этих чисел:
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
// 	inp3.value = Number(inp1.value) + Number(inp2.value);
// });


// 15 В инпут вводится число. По потери фокуса в консоль должна вывестись сумма цифр этого числа:
let inp = document.querySelector('#inp');

inp.addEventListener('blur', function() {
	let digits = inp.value.split('').reduce((sum, elem) => sum + Number(elem), 0);
	console.log(digits);
});




