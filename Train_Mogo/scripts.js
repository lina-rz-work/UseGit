"use strict"

// let accordionItem = document.querySelector('.we_do_accordion_item');
// let accordionHeader = document.querySelector('.we_do_accordion_header');


// accordionHeader.addEventListener('click', () => {
//     accordionItem.classList.toggle('active');
// })

let accordionItems = document.querySelectorAll('.we_do_accordion_item');
let accordionHeaders = document.querySelectorAll('.we_do_accordion_header');


for (let i = 0; i < accordionItems.length; i++) {
    accordionHeaders[i].addEventListener('click', () => {
        accordionItems[i].classList.toggle('active');
    })
}