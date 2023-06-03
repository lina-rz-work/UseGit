"use strict"

// function func([name, surname, department, position, salary]) {
//     console.log(salary);
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );



// function func([name, surname, ...info]) {
//     console.log(name);
//     console.log(surname);
//     console.log(info);
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );





// function func([name, surname, department, position = 'trainee']) {
// 	// let name       = employee[0];
// 	// let surname    = employee[1];
// 	// let department = employee[2];
	
// 	// let position;
// 	// if (arr[3] !== undefined) {
// 	// 	position = arr[3];
// 	// } else {
// 	// 	position = 'джуниор';
// 	// }
//     console.log(surname);
//     console.log(position);
// }

// func( ['John', 'Smit', 'development'] );
// func( ['Alina', 'Mukhamathanova', 'development', 'programmer']);





function func(department, [name, surname], [year, month, day]) {
    console.log(department);
    console.log(name);
    console.log(day);
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] );




// function func({color, width, height}) {
// 	// let color  = options.color;
// 	// let width  = options.width;
// 	// let height = options.height;
//     console.log(color);
//     console.log(width);
//     console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );




function func({color ='black', width, height}) {
	// let width  = options.width;
	// let height = options.height;
	
	// let color;
	// if (options.color !== undefined) {
	// 	color = options.color;
	// } else {
	// 	color = 'black';
	// }
    console.log(color);
    console.log(width);
    console.log(height);
}

func( {color: 'red', width: 400, height: 500} );

