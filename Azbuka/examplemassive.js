"use strict";

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    if ((family.length) === 0) {
        console.log('Семья пуста');
    } else {
        console.log(`Семья состоит из: ${family.join(' ')}`);
    }
    
};

showFamily();

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];
function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

standardizeStrings(favoriteCities);


const someString = 'This is some strange string';

function reverse(str) {
    const rev = str.split('');
    const trueRev = rev.reverse();
    const realnum = trueRev.join('');
    console.log(realnum);
}

reverse(someString);


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
     let str ='';
     if ((arr.length) === 0) {
        console.log('Нет доступных валют');
     } else for (let i = 0; i <arr.length; i++) {
        if (arr[i] === missingCurr) {
            continue;
        }
        str +=`${arr[i]}\n`;
     }
     console.log(str);
    }
     
availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY');
