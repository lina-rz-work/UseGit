"use strict"


// Не подсматривая в мой код, самостоятельно реализуйте такой же счетчик.
    //    console.log(num);
    //    num++;

    
// Модифицируйте работу счетчика так, чтобы он считал до 5, а потом отсчет начинался сначала.

let func = (function() {
    let num = 1;

    return function() {
        if (num <= 5) {
            console.log(num);
            num++;
        } else {
            num = 1;
        }
    }
})();

for (let i = 0; i <= 15; i++) {
    func();
}