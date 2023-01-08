"use strict";

// const arr = [1, 2, 3, 6, 8];
// // arr[99] = 0;
// // console.log(arr.length);
// // console.log(arr);

// arr.forEach( function(num, i, arr) {
//     console.log(`${i}: ${num} внутри массива ${arr}`);
// });

// // arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let key of arr) {
//     console.log(key);
// }

// const str = prompt("","");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));


const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}