"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(Object.keys(options).length);

// console.log(options['colors']['border']);

delete options.name;

console.log(options);

let counter = 0;
for (let  key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
         console.log(`Свойство ${key}, имет значение ${options[key]}`);
         counter++;
}
    }
console.log(counter);

// случайный пример объекта 

const buylist = {
    milk: '2 pack',
    bread: 4,
    beer: 16,
    meat: '2 kilo',
    chease: 500,
    chokolate: 5,
    water: '2 bottle',
    syrop: 1,
    vegetables: {
       potato: 2000,
       tomat: 1000,
       ogurec: 500,
       luk: 500
    },
    games: 2
};

console.log(Object.keys(buylist).length);

console.log(buylist.water);

delete buylist.games;

// let counter = 0 ;
for (let key in buylist) {
    if (typeof(buylist[key]) === 'object') {
    for(let i in buylist[key]) {
        console.log(`Покупка ${i} в количестве ${buylist[key][i]}`);
        counter++;
    }
} else {
    console.log(`Покупка ${key}, в количестве ${buylist[key]}`);
    counter++;
}
}

console.log(counter);



// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
//  };

//  options.makeTest();

//  const {border, bg} = options.colors;
//  console.log(border);