"use strict"

// let students = {
// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };

// console.log(students['group3'][0]);
// console.log(students.group3[0]);



// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };

// for (let num in data) {
// 	for (let value of data[num]) {
// 		console.log(value);
// 	}
// }



// С помощью вложенных циклов выведите на экран все строки с данными.
// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];

// for (let elem of data) {
// 	for (let prop in elem) {
// 		console.log(elem[prop]);
// 	}
// }




// С помощью вложенных циклов выведите на экран все строки с данными.
let data = [
	{
		1: [
			'data111',
			'data112',
			'data113',
		],
		2: [
			'data121',
			'data122',
			'data123',
		],
	},
	{
		1: [
			'data211',
			'data212',
			'data213',
		],
		2: [
			'data221',
			'data222',
			'data223',
		],
	},
	{
		1: [
			'data411',
			'data412',
			'data413',
		],
		2: [
			'data421',
			'data422',
			'data423',
		],
	},
];

for (let elem of data) {
	for (let prop in elem) {
		for (let subElem of elem[prop]) {
			console.log(subElem);
		}
	}
}