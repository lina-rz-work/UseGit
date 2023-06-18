"use strict"

//                                      Add Event Listener to Multiple Elements 
// 361 Дан список ul, в каждом пункте которого записано число. Сделайте так, чтобы по клику на любую li ее число увеличивалось на единицу.
// Чтобы каждая li увеличивала свое значение только если ее значение меньше 10.


// My solution

let element = document.getElementById('holder');

element.addEventListener('click', function func(e) {
	if (e.target.classList.contains('num_list')) {
		e.target.textContent = Number(e.target.textContent) + 1;
	}

	if (Number(e.target.textContent) >= 9) {
		e.target.className = 'num_list_changed';
	}
});



// Evgeny's solution

// let element = document.getElementById('holder');
// element.addEventListener('click', function func(e) {
// 	if (!e.target.classList.contains('num_list')) {
// 		return;
// 	}

// 	let value = Number(e.target.textContent);
// 	e.target.textContent = ++value;

// 	if (value < 9) {
// 		return;
// 	}

// 	e.target.className = 'num_list_changed';
// });




// Mom's solution

// let ul = document.querySelector('ul');
// ul.addEventListener('click', function func(event) {
//     if (event.target.tagName === 'LI') {
//         if (Number(event.target.textContent) < 10) {
//             event.target.textContent = Number(event.target.textContent) + 1;
//         }
//     }   
// });