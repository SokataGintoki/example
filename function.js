"use strict";

function showFirstMessage() {
    console.log("Hello World!");
}

showFirstMessage();

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage("Hello World!");


let num = 20;

function showFirstMessage(text) {
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);


function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));


function ret() {
    let num = 50;
    //
    return num;
}

const anotherNum = ret();
console.log(anotherNum);



const logger = function() {
 console.log("Hello");
};

logger();



// const calc = (a, b) => {return a + b };                // стрелочная функция


// const calc = (a, b) => a + b ;                         // Если функция в одну строчку, можно опускать фигурные скобки


// const calc = (a, b) => {                               // тоже стрелочная функция
//     console.log('1');
//     return a + b;
// };


// Ещё разок про аргументы функций (д)


// function convert (amount) {
//     console.log(28 * amount);
// }

// convert(500);



// const usdCurr = 28,
//       eurCurr = 32;

// function convert (amount, curr) {
//     console.log(curr * amount);
// }

// convert(500, usdCurr);
// convert(500, eurCurr);


// return в функциях


const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
   return curr * amount;
}

function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));


function test() {
    for (let i = 0; i < 5; i ++) {
        console.log(i);
        if (i === 3) return
    }
    console.log('Done');
}

test();


function doNothing() {};
console.log(doNothing() === undefined);