"use strict"

// 1 Дан инпут и абзац. По потери фокуса в инпуте запишите значение инпута в конец текста абзаца.
// let input = document.querySelector('#inp');
// let paragraph = document.querySelector('.paragraph');

// input.addEventListener('blur', () => {
//     paragraph.textContent += input.value;
// })


// 2 Дано несколько инпутов, абзац и кнопка. По нажатию на кнопку получите числа, стоящие в этих инпутах и запишите их сумму в абзац.
// let inputs = document.querySelectorAll('.inp');
// let button = document.querySelector("#btn");
// let par = document.querySelector('.par');

// const funcArrSum = (sum, num) => sum + Number(num);

// button.addEventListener('click', () => {
//     par.innerHTML = [...inputs].map((elem) => elem.value).reduce(funcArrSum, 0);
// })


// 3 Дан инпут. В него вводится число. По потери фокуса найдите сумму цифр этого числа.
// let input = document.querySelector('#inp');

// input.addEventListener('blur', () => {
//     let sum = [...input.value].reduce((sum, elem) => sum + Number(elem), 0);     // см 4
//     console.log(sum);
// })


// 4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let input = document.querySelector('#inp');

// input.addEventListener('blur', () => {
//     let arr = input.value.split(',');

//     let result = arr.reduce((sum, elem) => sum + Number(elem), 0) / arr.length;     // см 3

//     console.log(result);
// })


// *4 Дан инпут. В него вводятся числа через запятую. По потери фокуса найдите среднее арифметическое этих чисел (сумма делить на количество).
// let input = document.querySelector('#inp');

// const arithMean = function() {
//     let arr = this.value.split(',');

//     let result = arr.reduce((sum, elem) => sum + Number(elem), 0) / arr.length;

//     console.log(result);
// };

// input.addEventListener('blur', arithMean)


// 5 Даны 4 инпута. В первый инпут вводится ФИО через пробел. По потери фокуса запишите фамилию, имя и отчество в остальные 3 инпута.
// let fullNameInput = document.querySelector('#full_name');
// let restInputs = document.querySelectorAll('.rest');

// fullNameInput.addEventListener('blur', () => {
//     let arr = fullNameInput.value.split(' ');

//     for (let i = 0; i < arr.length; i++) {
//         restInputs[i].value = arr[i];
//     }
// })


// 6 Дан инпут. В него вводится ФИО через пробел. ФИО вводится с маленькой буквы. Сделайте так, чтобы по потери фокуса инпутом, 
// введенные фамилия, имя и отчество автоматически стали записанными с большой буквы (в этом же инпуте).

// let input = document.querySelector('#inp');

// const capitalize = function(elem) {
//     return elem[0].toUpperCase() + elem.slice(1);
// };

// const capitalize = (elem) => {
//     return elem[0].toUpperCase() + elem.slice(1);
// };

// const capitalize = (elem) => elem[0].toUpperCase() + elem.slice(1);

// input.addEventListener('blur', () => {
//     input.value = input.value.split(' ').map(capitalize).join(' ');
// })


// 7 Дан инпут. В него вводится текст. По потери фокуса узнайте количество слов в этом тексте.
// let input = document.querySelector('#inp');

// input.addEventListener('blur', () => {
//     console.log(input.value.split(' ').length);
// })


// 8 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса в этом же инпуте поставьте эту дату в формате 2016-12-31.
// let input = document.querySelector('#inp');

// input.addEventListener('blur', () => {
//     input.value = input.value.split('.').join('-');
// })


// 9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');
// let isEqual = undefined;

// button.addEventListener('click', () => {
//     let arr1 = [...input.value];
//     let arr2 = arr1.slice(0).reverse();

//     isEqual = arr1.every((value, index) => value === arr2[index]);
// });

// const removeNewClass = function() {
//     input.classList.remove('right', 'wrong');
// }

// button.addEventListener('click', () => {
//     removeNewClass();
//     input.classList.add(isEqual == true ? 'right' : 'wrong');
// });

// input.addEventListener('focus', removeNewClass);


// *9 Дан инпут. В него вводится слово. По нажатию на кнопку проверьте то, что это слово читается с начала и с конца одинаково (например, мадам).
// let inp = document.querySelector('#inp');

// const func = () => {
//     let res = [...inp.value].reverse().join('');
//     return inp.value == res ? console.log(true) : console.log(false);
// }
// inp.addEventListener('blur', func);


// 10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let input = document.querySelector('#inp');

// const func = () => {
//     let isTrue = [...input.value].some((elem) => Number(elem) === 3);

//     console.log(isTrue);
// }

// input.addEventListener('blur', func);


// *10 Дан инпут. В него вводится число. Проверьте по потери фокуса, что это число содержит внутри себя цифру 3.
// let input = document.querySelector('#inp');

// const func = () => {
//     console.log([...input.value].includes('3'));
// }

// input.addEventListener('blur', func);


// 11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let paragraphs = document.querySelectorAll('.par');
// let button = document.querySelector('#btn');

// const func = (elem, index) => {
//     elem.textContent += index + 1;
// };

// button.addEventListener('click', () => {
//     [...paragraphs].map(func);
// });


// *11 Даны несколько абзацев и кнопка. По нажатию на кнопку запишите в конец каждого абзаца его порядковый номер.
// let paragraphs = document.querySelectorAll('.par');
// let button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     for (let i = 0; i < paragraphs.length; i++) {
//         paragraphs[i].textContent += i + 1;
//     }
// });


// 12 Даны ссылки. Добавьте в конец каждой ссылки ее href в круглых скобках.
// let links = document.querySelectorAll('a');

// for (let link of links) {
//     link.innerHTML += ` (${link.href})`;
// }


// 13 Даны ссылки. Если ссылка начинается с http://, то добавьте ей в конец стрелку → (делается так: &rarr;).
// let links = document.querySelectorAll('a');

// for (let link of links) {
//     if (link.href.slice(0, 7) === 'http://') {
//         link.textContent += '\u2192';
//         // link.textContent += '→';
//         // link.innerHTML += '&rarr;';
//     }
// }


// 14 Даны несколько абзацев с числами. По нажатию на любой абзац запишите в него квадрат числа, которое в нем находится.
// let paragraphs = document.querySelectorAll('.par');

// const square = function() {
//     this.textContent = Number(this.textContent) ** 2;  // нельзя arrow func!
// }

// for (let par of paragraphs) {
//     par.addEventListener('click', square);
// }


// 15 Дан инпут. В него вводится дата в формате 31.12.2016. По потери фокуса узнайте день недели (словом), который приходится на эту дату.
// let input = document.querySelector('#inp');

// const getDay = () => {
//     let arr = input.value.split('.');
    
//     let [day, month, year] = arr;

//     let date = new Date(year, month - 1, day);

//     let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

//     console.log(days[date.getDay()]);
// };

// input.addEventListener('blur', getDay)


// 16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. 
// Сделайте так, чтобы это значение не могло стать меньше нуля.
// let input = document.querySelector('#inp');
// let increase = document.querySelector('#increase');
// let decrease = document.querySelector('#decrease');

// increase.addEventListener('click', () => {
//     input.value = Number(input.value) + 1;
// })

// decrease.addEventListener('click', () => {
//     input.value = Number(input.value) - 1;
//     if (Number(input.value) < 0) {
//         input.value = 0;
//     }
// })


// * 16 Дан инпут. Реализуйте кнопочки +1, -1, которые будут увеличивать или уменьшать на 1 значение инпута. 
// Сделайте так, чтобы это значение не могло стать меньше нуля.
// let buttons = document.getElementById('buttons');

// buttons.addEventListener('click', (e) => {
//     if(e.target.classList.contains('increase')) {
//         input.value = Number(input.value) + 1;
//     }

//     if(e.target.classList.contains('decrease')) {
//         input.value = Number(input.value) - 1;
//             if (Number(input.value) < 0) {
//                 input.value = 0;
//             }
//     }
// })


// 17 Дан инпут. Даны абзацы. Пусть в этот инпут записывается суммарное количество нажатий по этим абзацам.
// let input = document.querySelector('#inp');
// let paragraphs = document.querySelectorAll('.par');
// let counter = 0;

// for (let par of paragraphs) {
//     par.addEventListener('click', () => {
//         input.value = ++counter;
//     })
// }


// 18 На странице есть дивы. В них есть текст. Обойдите все дивы и обрежьте тот текст, который в них стоит так, 
// чтобы он стал длиной 10 символов. И добавьте троеточие в конец обрезанного текста
// let elems = document.querySelectorAll('.text_content');

// // for (let elem of elems) {
// //     elem.textContent = elem.textContent.slice(0, 10) + '...';
// // }

// let button = document.querySelector('#btn');

// button.addEventListener('click', () => {
//     for (let elem of elems) {
//         elem.textContent = elem.textContent.slice(0, 10) + '...';
//     }
// })


// 19 Дан инпут. В него вводится число. По потери фокуса проверьте, что в нем лежит число от 1 до 100. 
// Если это так - покрасьте инпут в зеленый цвет, а если не так - в красный.
// let input = document.querySelector('#inp');

// const checkNumber = function() {
//     this.classList.remove('right', 'wrong');
//     this.classList.add(this.value >= 1 && this.value <= 100 ? 'right' : 'wrong')
// }

// input.addEventListener('blur', checkNumber)


// 20 Дан инпут и кнопка. По нажатию на кнопку сгенерируйте случайную строку из 8-ми символов и запишите в инпут.
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');

// const getRandom = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// button.addEventListener('click', () => {
//     let str ='abcdefghijklmnopqrstuvwxyz';
//     let arr = [];

//     for (let i = 1; i <= 8; i++) {
//         let rand = str.charAt(getRandom(0, 25));
//         arr.push(rand);
//     }

//     input.value = arr.join('');
// })


// 21 Дан инпут и кнопка. Пользователь вводит в инпут какую-то строку. 
// По нажатию на кнопку перемешайте введенные символы случайным образом и запишите ее обратно в инпут.
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');

// const getRandomNum = function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// const getRandomStr = function() {
//     let arr = [...input.value];
//     let res = [];

//     for (let i = arr.length - 1; i >= 0; i--) {
//         res.push(arr.splice(getRandomNum(0, i), 1));
//     }

//     input.value = res.join('');
// }

// button.addEventListener('click', getRandomStr);


// 22 Дан инпут, кнопка и абзац. В инпут вводится температура в градусах Фаренгейта. По клику на кнопку выведите в абзац температуру в градусах Цельсия.
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');
// let par = document.querySelector('.par');

// const changeFahrToCelsius = (temp) => ((temp - 32) * (5 / 9)).toFixed(2);

// button.addEventListener('click', () => {
//     par.textContent = changeFahrToCelsius(input.value);
// })


// 23 Дан инпут, кнопка и абзац. В инпут вводится число. По нажатию на кнопку выведите в абзац факториал этого числа.
// let input = document.querySelector('#inp');
// let button = document.querySelector('#btn');
// let par = document.querySelector('.par');

// const getFactorial = (num) => {
//     if (num == 1) {
//         return 1;
//     }
//     return getFactorial(num - 1) * num;
// };

// button.addEventListener('click', () => {
//     par.textContent = getFactorial(input.value);
// })


// 24 Даны 3 инпута, кнопка и абзац. В инпуты вводятся коэффициенты квадратного уравнения. 
// По нажатию на кнопку найдите корни этого уравнения и выведите их в абзац.
let inputs = document.querySelectorAll('.inp');
let button = document.querySelector('#btn');
let par = document.querySelector('.par');


const solveQuadratic = () => {
    let [a, b, c] = [...inputs].map((elem) => elem.value);
    let D = b ** 2 - 4 * a * c;

    if (D > 0) {
        let x1 = (-b + D ** (1 / 2)) / (2 * a);
        let x2 = (-b - D ** (1 / 2)) / (2 * a);
        par.textContent = `${x1}, ${x2}`;
    } else if (D == 0) {
        let x = -b / (2 * a);
        par.textContent = x;
    } else {
        par.textContent = 'нет корней';
    }
};

button.addEventListener('click', solveQuadratic);




