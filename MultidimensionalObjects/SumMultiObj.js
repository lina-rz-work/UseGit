"use strict"

// Найдите сумму элементов приведенного объекта.
// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// }
// let sum = 0;

// for (let prop in obj) {
// 	let subObj = obj[prop];
// 	for (let subProp in subObj) {
// 		sum += subObj[subProp];
// 	}
// }

// console.log(sum);



// Выведите на экран элемент 'b2' и элемент 'c1'.
// let obj = {
// 	a: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	b: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// 	4: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	}
// }

// console.log(obj['b'][2]);
// console.log(obj.c[2]);
// console.log(obj[4]['key1']);
// console.log(obj[4].key1);




// Вручную, без цикла, найдите сумму всех элементов-чисел.
// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {d: 3, e: 4,}, f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// }

// let sum = obj['key1'].a + obj.key1['b'] + obj['key1']['c'].d + obj.key1.c.e + obj['key1'].f + obj.key2.g + obj['key2']['h'];

// console.log(sum);



// Используя циклы, найдите сумму элементов этого объекта.
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let sum = 0;

// for (let key in obj) {
// 	let subObj = obj[key];
// 	for (let subKey in subObj) {
// 		sum += subObj[subKey];
// 	}
// }

// console.log(sum);




// Используя циклы, найдите сумму элементов этого объекта.
let obj1 = {
	1: {
		1: {
			1: 111,
			2: 112,
			3: 113,
		},
		2: {
			1: 121,
			2: 122,
			3: 123,
		},
	},
	2: {
		1: {
			1: 211,
			2: 212,
			3: 213,
		},
		2: {
			1: 221,
			2: 222,
			3: 223,
		},
	},
	3: {
		1: {
			1: 311,
			2: 312,
			3: 313,
		},
		2: {
			1: 321,
			2: 322,
			3: 323,
		},
	},
}
let sum = 0;

for (let key1 in obj1) {
	let obj2 = obj1[key1];
	for (let key2 in obj2) {
		let obj3 = obj2[key2];
		for (let key3 in obj3) {
			sum += obj3[key3];
		}
	}
}

console.log(sum);