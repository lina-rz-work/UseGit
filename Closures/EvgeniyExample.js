"use strict"

let firstClassFunc = function () {
    return "test first";
};

let highOrderFunc = function () {
    return function () {
        return "test high 1";
    };
};

let highOrderFunc2 = function (func) {
    return func();
};

let carringFunc = function (a) {
    return function (b) {
        return a + b;
    };
};


console.log(firstClassFunc());

console.log(highOrderFunc()());

console.log(highOrderFunc2(() => "test hight 2"));

console.log(carringFunc(2)(3));
