"use strict"

// Сделайте из этого массива следующий: [1, 2, 3]
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.slice(0, 3);

// console.log(arr2);



// Используя массив [1, 2, 3, 4, 5], запишите в новую переменную следующий массив: [4, 5]

// let arr = [1, 2, 3, 4, 5];
// let newArr = arr.slice(3);

// console.log(newArr);




// Using slice, create newCar from myCar.
const myHonda = {
    color: "red",
    wheels: 4,
    engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Change the color of myHonda.
myHonda.color = "purple";
myHonda["color"] = "pink";
console.log("The new color of my Honda is", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);



console.log([1, 2, , 4, 5].slice(1, 4)); // [2, empty, 4]





// let array = [1, 2, 3, 4, 5];
// let del = array.splice(1, 2);

// console.log(arr);
// console.log(del);



// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]
// let arr = [1, 2, 3, 4, 5];

// arr.splice(1, 2);

// console.log(arr);



// С помощью метода splice сделайте из него массив: [1, 2, 3, 'a', 'b', 'c', 4, 5]
// let arr = [1, 2, 3, 4, 5];

// arr.splice(3, 0, 'a', 'b', 'c');

// console.log(arr);




// С помощью метода splice сделайте из него массив: [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']
let arr = [1, 2, 3, 4, 5];

arr.splice(1, 0, 'a', 'b');

arr.splice(-1, 0, 'c')

arr.splice(arr.length, 0, 'e');

console.log(arr);