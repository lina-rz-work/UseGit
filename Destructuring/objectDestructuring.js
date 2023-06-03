"use strict"

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// // let color  = options.color;
// // let width  = options.width;
// // let height = options.height;

// let {color, height, width} = options;

// console.log(height);



// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// // let c = options.color;
// // let w = options.width;
// // let h = options.height;

// let {color: c, width: w, height: h} = options;

// console.log(c);




// let options = {
// 	width:  400,
// 	height: 500,
// };

// // let color;
// // if (options.color !== undefined) {
// // 	color = options.color;
// // } else {
// // 	color = 'black';
// // }

// // let width  = options.width;
// // let height = options.height;

// let {color = 'black', width, height} = options;

// console.log(color);
// console.log(width);





let options = {
	width:  400,
	height: 500,
};

// let с;
// if (options.с !== undefined) {
// 	с = options.color;
// } else {
// 	с = 'black';
// }

// let w = options.width;
// let h = options.height;

let {c = 'black', width: w, height: h} = options;

console.log(c);
console.log(w);
