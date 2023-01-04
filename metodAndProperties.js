"use strict";

const str = "teSt";              // создаем переменную str и присваиваем значение "test"
const arr = [1, 2, 4];           // создаем переменную arr и присваиваем массив 

console.log(str.length);         // выводим на экран длину переменной str 
console.log(arr.length);         // выводим на экран длину массива arr
console.log(str[2]);             // выводим на экран 2 элемент переменной str, помни нумерация идёт с 0
console.log(str.toUpperCase());  // метод для замены шрифта на заглавные буквы. Выводим на экран переменную str
console.log(str.toLowerCase());  // метод для замены шрифта на строчные буквы. Выводим переменную str с данным методом


const fruit = "Some fruit";      // Создаем переменную fruit со строкой внутри "Some fruit"

console.log(fruit.indexOf("r")); // метод для поиска символов и их индекс (поиск подстроки)


const logg = "Hello world";      // задаем переменную logg и присваиваем ему строку Hello world

console.log(logg.slice(6));      // метод для вырезания части текста из строки, задаются 2 аргумента, возможно 1
console.log(logg.substring(6, 11)); // примерно такой же метод как выше
console.log(logg.substr(6, 5));  // 1ый аргумент это позиция с какой начинаем, 2ой аргумент, сколько символов вырезать


const num = 12.2;                // создаем переменную num и приравниваем её к числу 12.2
console.log(Math.round(num));    // Math.round метод округления числа. В аргумент пишем то, что хотим округлить


const test = "12.2px";           // создаем переменную test и задаем ей значение 12.2 пикселя
console.log(parseInt(test));     // метод parseInt переводит число в другую систему исчисления
console.log(parseFloat(test));   // метод parsFloat возвращает в десятичном варианте число или строку