// Дан массив с числами. С помощью созданной нами функции each увеличьте каждый элемент в два раза.

let array = [1, 2, 3, 3, 4, 5, 3];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

   return result;
}

function doubleElement(element) {
    return element *= 2;
}

let resArray = each(array, doubleElement);

console.log(resArray);




// Дан массив со строками. С помощью созданной нами функции each переверните символы каждой строки в обратном порядке.

let array2 = ['do', 'you', 'still', 'care', 'of', 'it'];

function reverseStr(str) {
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }

    return newStr;
}

let arrReversElem = each(array2, reverseStr);

console.log(arrReversElem);




// Дан массив со строками. С помощью созданной нами функции each сделайте заглавным первый символ каждой строки.

let fruits = ['apple', 'orange', 'pear', 'watermellon', 'peach'];

function upperCase(fruit) {
    return fruit[0].toUpperCase() + fruit.slice(1);
}

let arrUpperFruits = each(fruits, upperCase);

console.log(arrUpperFruits);