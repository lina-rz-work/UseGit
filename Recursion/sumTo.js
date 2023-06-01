"use strict"

// function sumTo(n) {
//     let sum = 0;

//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }

//     return sum;
// }

// console.log(sumTo(5));
// console.log(sumTo(100000));




// function sumTo(n) {
//     let sum = 0;

//     if (n >= 1) {
//         sum += n + sumTo(n - 1);
//     }

//     return sum;
// }

// console.log(sumTo(5));
// console.log(sumTo(100000));



function sumTo(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}

console.log(sumTo(5));


