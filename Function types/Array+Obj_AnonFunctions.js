"use strict"

let arr = [
    function() {
        return 1;
    },
    function() {
        return 2;
    },
    function() {
        return 3;
    },
];

for (let func of arr) {
    console.log(func());
}

console.log(arr[2]);
console.log(arr[2]());
console.log(arr[0]() + arr[1]() + arr[2]());




let obj = {
    func1: function() {
        return 1;
    },
    func2: function() {
        return 2;
    },
    func3: function() {
        return 3;
    },
};

for (let func in obj) {
    console.log(obj[func]());
}

console.log(obj.func1() + obj.func2() + obj.func3());




/*Сделайте объект с тремя функциями, каждая из которых будет принимать параметром массив с числами. 
Сделайте так, чтобы первая функция возвращала сумму элементов массива, 
вторая функция - сумму квадратов, а третья - сумму кубов.*/

let object = {
    func1: function(arr) {
        let sum = 0;

        for (let elem of arr) {
            sum += elem;
        }

        return sum;
    },
    func2: function(arr) {
        let sqrSum = 0;

        for (let elem of arr) {
            sqrSum += elem ** 2;
        }

        return sqrSum;
    },
    func3: function(arr) {
        let cubeSum = 0;

        for (let elem of arr) {
            cubeSum += elem ** 3;
        }

        return cubeSum;
    },
}

let arr1 = [1, 2, 3];

console.log(object.func1(arr1));
console.log(object.func2(arr1));
console.log(object.func3(arr1));



