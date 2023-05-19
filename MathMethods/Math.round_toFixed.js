"use strict"

// Найдите квадратный корень из 379. 
// Результат округлите до целых, до десятых, до сотых.

let res = Math.sqrt(379);

console.log(res);

console.log(Math.round(res));
console.log(typeof Math.round(res));

console.log(res.toFixed());
console.log(typeof res.toFixed());
console.log(res.toFixed(1));
console.log(res.toFixed(2));