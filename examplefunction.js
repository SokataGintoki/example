"use strict";

function sayHello(name) {
   return `Привет, ${name}!`;
}

sayHello('Антон');

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');


function returnNeighboringNumbers(number) {
 return [number - 1, number, number + 1];
}

returnNeighboringNumbers(4);

function returnNeighboringNumbers(number) {
    const trueMassive = [];
    for ( let i = number; i <= number + 1; i++) {
    trueMassive[i- 1] = i;
    }
    console.log(trueMassive);
}
   
   returnNeighboringNumbers(4);



   function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
        } else {
            str += `${num * i}---`;
        }
    }

    return str;
}

getMathResult(10, 5);