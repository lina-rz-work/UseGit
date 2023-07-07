"use strict"

let elem = document.querySelector('ul');
let button = document.querySelector('button');

elem.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.textContent += '!';
    }
})

button.addEventListener('click', () => {
    let item = document.createElement('li');
    
    item.textContent = 'item';

    elem.appendChild(item);
})

