"use strict"

"use strict"

let result = every([1, 2, 3, 4, 5], function(elem) {
	return elem > 0;
});

let result1 = every([1, 2, 3, 4, 5], (elem) => {
    return elem > 0;
});

let result2 = every([1, 2, 3, 4, 5], (elem) => elem > 0);


let result3 = every([1, 2, 3, 4, 5], elem => elem > 0);




let res = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);




let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let resultat = each(arr, (elem, index) => elem * index > 10);

