"use strict";

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    let square = 0,
        volume = 0;

    data.shops.forEach(function(shop){
        square += shop.width *shop.length;
    });

    volume = data.height * square;

    if (data.budget >= volume * data.moneyPer1m3) {
        console.log ('Бюджета достаточно');
    } else {
        console.log('Бюджета недостаточно');
    }
};

isBudgetEnough(shoppingMallData);



const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard','Takesi', 'Sam'];

function sortStudentsByGroups (arr) {
    arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    console.log( a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`);
}

sortStudentsByGroups(students);