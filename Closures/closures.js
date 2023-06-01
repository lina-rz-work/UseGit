"use strict"

"use strict"

function test() {
	let num = 1;
	
	return function() {
		console.log(num);
		num++;
	};
}

let func1 = test(); // первый счетчик
func1();  //выведет 1
func1();  //выведет 2
func1();  //выведет 3
func1();  //выведет 4

let func2 = test(); // второй счетчик
func2();  //выведет 1
func2();  //выведет 2




// function makeWorker() {
//     let name = "Pete";
  
//     return function() {
//         console.log(name);
//     };
// }

// let name = "John";

// // create a function
// let work = makeWorker();

// // call it
// work();



function createIncrement() {
    let count = 0;

    function increment() {
        count++;
    }

    let message = `Count is ${count}`;

    function log() {
        console.log(message);
    }

    return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();
