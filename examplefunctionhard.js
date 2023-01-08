"use strict";

function getTimeFromMinutes(num) {
if (typeof(num) !== 'number' || !Number.isInteger(num) || num < 0) {
    console.log ("Ошибка, проверьте данные");
} else {
    const a = Math.floor(num / 60);
    const b = num % 60;
    if ( a === 0 || a === 5 || a === 6 || a === 7 || a === 8 || a === 9 || a === 10 || a === 11 || a === 12){
        console.log (`Это ${a} часов и ${b} минут`);
    } else if ( a === 1) {
        console.log (`Это ${a} час и ${b} минут`);
    } else if ( a === 2 || a === 3 || a === 4){
        console.log(`Это ${a} часа и ${b} минут`);
    }
}
}

getTimeFromMinutes(150);
getTimeFromMinutes(50);
getTimeFromMinutes(0);
getTimeFromMinutes(-150);


function findMaxNumber(num1,num2,num3,num4) {
    if (typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number'){
        console.log('0');
    } else if (num1 > num2 && num1 > num3 && num1 > num4){
        console.log(num1);
    } else if (num2 > num1 && num2 > num3 && num2 > num4){
        console.log(num2);
    } else if (num3 > num1 && num3 > num2 && num3 > num4){
        console.log(num3);
    } else if (num4 > num1 && num4 > num2 && num4 > num3){
        console.log(num4);
    }
    }

    findMaxNumber(1, 5, 6, 11);
    findMaxNumber(1, 5, '6', '10');
    findMaxNumber(1, 5);
    findMaxNumber(1, 5,'hello', 11);
    findMaxNumber(1, 5, 11, 24);

//решение учителя!!!



function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180)

function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10');



// ЗАДАЧА НА ЧИСЛА ФИБОНАЧЧИ(**)


function fib(num) {
    let trueStr = '';
   for  (let i = 0; i <= num; i++);
        trueStr += i;
        console.log(trueStr);
    if (typeof(num) !== 'number'){
        console.log('pustaya stroka');
    }
}

fib(3);
fib('2');
fib(9);
fib(7);
fib(5);


// РЕШЕНИЕ УЧИТЕЛЯ

function fib(num) {       // создаем функцию fib с одним аргументом num
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) { // если тип аргумента не число или аргумент
        console.log(''); // меньше либо равен нулю или аргумент не целое число, то выводим пустую строку
    }

    let result = '';  // задаем переменную, в которую будем записывать результат 
    let first = 0;    // 
    let second = 1;

    for (let i = 0; i < num; i++) {
        if(i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }
        let third = first + second; 
        first = second;  
        second = third;  
    }
    console.log(result);
}

fib(3);
fib('2');
fib(9);
fib(7);
fib(5);