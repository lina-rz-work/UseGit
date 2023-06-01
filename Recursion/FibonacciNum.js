"use strict"

// 1, 1, 2, 3, 5, 8, 13,

function fib(n) {
    let num = 1;

    if (n <= 2) {
        return num = 1;
    } else {
        return num = fib(n - 1) + fib(n - 2);
    }
}

function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

for (let i = 1; i <= 7; i++) {
    console.log(fib(i));
}






// 1, 1, 2, 3, 5, 8, 13,

// function fib(n) {
//     let prevNum = 0;
//     let nextNum = 1;
//     let FibNum = 1;

//     for (let i = 3; i <= n; i++) {
//         prevNum = nextNum;
//         nextNum = FibNum;
//         FibNum = prevNum + nextNum;
//         // console.log(FibNum);
//     }

//     return FibNum;
// }

// for (let i = 1; i <= 7; i++) {
//     console.log(fib(i));
// }

// console.log(fib(77));


