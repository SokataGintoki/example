'use strict';

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("Hello");
    }
};

const jonh = Object.create(soldier);

const john = {
    health: 100
};
 
// john.__proto__ = soldier;           // старый не актуальный способ установления прототипа для джона от солдата

Object.setPrototypeOf(john, soldier)  // актуальный метод

// console.log(john.armor);
jonh.sayHello();