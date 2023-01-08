"use strict";

function first() {
    // какой-то код
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    callback();
    console.log(`Я учу:${lang}`);
}

learnJS('JavaScript', function (){
 console.log('Я прошел этот урок!');
}
);


function learnJS(lang, callback) {
    console.log(`Я учу:${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);