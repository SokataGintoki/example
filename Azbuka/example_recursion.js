'use strict';

function factorial(num) {
    if (typeof(num) == !Number || !Number.isInteger(num)){
    console.log('не работает');
} else {
    let result = 1;
 for ( let i = num; i >= 1; i--) {
    result *= i;
 }
 console.log(result);
}
};

factorial(6);
factorial(3);
factorial(5);
factorial(10);
factorial(13);
factorial(4);
factorial(1.3);
factorial('ssad');
factorial(7);
factorial(2.5);

// решение учителя

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return "Ошибка, проверьте данные";
    }

    if (n >= 1) {
        return n * factorial(n - 1);
    } else {
        return 1;
    }

    // Более короткий вариант, который вы можете встретить
    // Но не учитывает отрицательные значения
    // return n ? n * factorial(n - 1) : 1;
}

factorial(6);
factorial(3);
factorial(5);
factorial(10);
factorial(13);
factorial(4);
factorial(1.3);
factorial('ssad');
factorial(7);
factorial(2.5);