"use strict";

for (let i = 0; i < 3; i++) {         // Задается цикл с тремя аргументами
    console.log(i);                   // Первым действием выводим переменную i
    for (let j = 0; j < 3; j++) {     // Вложенный цикл. Выполняется  с каждым условием вышестоящего цикла
        console.log(j);               // Полностью выполняется условие вложенного цикла
    }                     // Возвращаемся к главному циклу. Выполняем следующее условие
}                         // Повторяем каждое отдельное условие главного цикла с полностью вложенным условием



let result = '';                   // Задаем переменную, в которой записывается результат
const length = 10;                  // Задаем переменную длины 

for (let i = 1; i < length; i++) { // Главный цикл, который формирует длину

    for(let j = 0; j < i; j++) {   // Вложенный цикл, формирующий внутренности каждой строки
        result += "*";             // Выполнение вложенного цикла. Каждый раз кол-во звезд увеличивается на 1
    }                              // Закрытие вложенного цикла. Повторяется с каждым отдельным условием главного цикла
    result += '\n';                // Элемент главного цикла. Означает перенос строки
}

console.log(result);               // Результат


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 5; k++) {
            if (k === 2) continue first;       // Continue - продолжение, first - метка. Переход к метке.
            console.log(`Third level: ${k}`);
        }
    }
}


first: for (let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 5; k++) {
            if (k === 2) break first;       // Break - прерывание. После этой комманды, код останавливается
            console.log(`Third level: ${k}`);
        }
    }
}