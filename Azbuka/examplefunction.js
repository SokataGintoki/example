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
   
   returnNeighboringNumbers(15);


   function returnNeighboringNumbers(number) {
    const trueMassive = [];
    for ( let i = number; i <= number + 2; i++) {
    trueMassive[i- number] = i - 1;
    }
    console.log(trueMassive);
}
   
   returnNeighboringNumbers(15);



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


// Продвинутые задания на использование функций 

// Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба. Эта функция принимает в 
// себя целое число со значением длины ребра куба. Ответ выведите в формате строки, который изображен в 
// примерах. Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку 
// "При вычислении произошла ошибка". НЕ ИСПОЛЬЗУЙТЕ ОПЕРАТОР СТЕПЕНИ

function calculateVolumeAndArea(number) {
    if (number > 0 && Number.isInteger(number)){
 console.log(`Объём куба:${number * number * number}, площадь всей поверхности: ${6 * number * number}`);
} else {
    console.log("При вычислении произошла ошибка");
}
}

calculateVolumeAndArea(5);
calculateVolumeAndArea(15);
calculateVolumeAndArea(15.5);
calculateVolumeAndArea('15');
calculateVolumeAndArea(-15);
calculateVolumeAndArea('Hello');

// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Функция принимает 
// только целое число от 1 до 36. Если переданный аргумент не число, отрицательное или дробное - возвращается 
// сообщение: "Ошибка. Проверьте правильность введенного номера места". Если число 0 или больше 36, то сообщение: 
// "Таких мест в вагоне не существует".

function getCoupeNumber(num) {
   if (num === 0 || num > 36) {
    console.log("Таких мест в вагоне не существует");
 } else if ( num === 1 || num === 2 || num === 3 || num === 4) {
    console.log('1');
 } else if ( num === 5 || num == 6 || num === 7 || num === 8) {
    console.log('2');
 } else if ( num === 9 || num === 10 || num === 11 || num === 12) {
    console.log('3');
 } else if ( num === 13 || num === 14 || num === 15 || num === 16) {
    console.log('4');
 } else if ( num === 17 || num === 18 || num === 19 || num === 20) {
    console.log('5');
 } else if ( num === 21 || num === 22 || num === 23 || num === 24) {
    console.log('6');
 } else if ( num === 25 || num === 26 || num === 27 || num === 28) {
    console.log('7');
 } else if ( num === 29 || num === 30 || num === 31 || num === 32) {
    console.log('8');
 } else if ( num === 33 || num === 34 || num === 35 || num === 36) {
    console.log('9');
 } else  {
    console.log("Ошибка. Проверьте правильность введенного номера места");
 } 

 }

 getCoupeNumber(33);
 getCoupeNumber(7);
 getCoupeNumber(300);
 getCoupeNumber(0);
 getCoupeNumber(7.7);
 getCoupeNumber(-10);
 getCoupeNumber('Hello');


// его решение.
 // function calculateVolumeAndArea(length) {
//     if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//         return "При вычислении произошла ошибка";
//     }

//     let volume = 0,
//         area = 0;

//     volume = length * length * length;
//     // length ** 3 - это тоже самое, что и выше или варианты через цикл.
//     // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
//     area = 6 * (length * length);

//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }

// calculateVolumeAndArea(5);

// function getCoupeNumber(seatNumber) {
//     if (typeof (seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
//         return "Ошибка. Проверьте правильность введенного номера места";
//     }

//     if (seatNumber === 0 || seatNumber > 36) {
//         return "Таких мест в вагоне не существует";
//     }

//     return Math.ceil(seatNumber / 4);
//     // тут очень много вариантов решения, но выбрал один из элегантных :)
// }

// getCoupeNumber(33);