"use strict"

// Работа с узлами

// 1 Напишите код, который покажет разницу между lastChild и lastElementChild.
// let elem = document.querySelector('p');
// console.log(elem.lastChild);
// console.log(elem.lastElementChild); 


// 2 Напишите код, который покажет разницу между nextSibling и nextElementSibling.
// let par = document.querySelector('p');
// console.log(par.nextSibling);
// console.log(par.nextElementSibling);


// 3 Напишите код, который покажет разницу между previousSibling и previousElementSibling.
// let span = document.querySelector('span');
// console.log(span.previousSibling);
// console.log(span.previousElementSibling);




// Перебор узлов циклом
// Переберите циклом все узлы этого дива и выведите их в консоль.
// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;
// let elements = elem.children;

// console.log(nodes);
// console.log(elements);

// // for (let node of nodes) {
// //     console.log(node);
// // }




// nodeName
// Переберите циклом все узлы этого дива и выведите в консоль их названия.
// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;
// let elements = elem.children;

// for (let node of nodes) {
//     console.log(node.nodeName); // имя тега в верхнем регистре!
// }

// for (let elem of elements) {
//     console.log(elem.tagName);
// }




// nodeType
// Переберите циклом все узлы дива и выведите в консоль только узлы-элементы и текстовые узлы.
// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;

// for (let node of nodes) {
//     if (node.nodeType == 1 || node.nodeType == 8) {
//         console.log(node);
//     } 
// }

// console.log(nodes);




// Текст узлов
// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;

// console.log(nodes);

// 1 Переберите циклом все узлы этого дива и выведите в консоль тексты всех узлов.
// for (let node of nodes) {
//     console.log(node.textContent);
// }


// 2 Переберите циклом все узлы этого дива и выведите в консоль тексты всех комментариев и текстовых узлов.
// for (let node of nodes) {
//     if (node.nodeType == 8 || node.nodeType === 3) {
//         console.log(node.data);
//         // console.log(node.nodeValue);
//         // console.log(node.data === node.nodeValue);
//     }
// }


// 3 Переберите циклом все узлы этого дива и выведите в консоль тексты текстовых узлов и элементов.
// for (let node of nodes) {
//     if (node.nodeType === 3) console.log(node.data);

//     if (node.nodeType === 1) console.log(node.innerHTML);
// }


// 4 Переберите циклом все узлы этого дива и каждому узлу в конец запишите его тип.
// for (let node of nodes) {
//     node.textContent += node.nodeType;

//     // if (node.nodeType === 1) node.innerHTML += node.nodeType;

//     // if (node.nodeType === 3) node.data += node.nodeType;
//     // // if (node.nodeType === 3) node.nodeValue += node.nodeType;

//     // if (node.nodeType === 8) node.data += node.nodeType;
//     // // if (node.nodeType === 8) node.nodeValue += node.nodeType;
// }





