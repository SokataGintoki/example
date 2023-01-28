'use strict';

function pow (x, n) {
    let result = 1;
    for (let i = 0; i < n; i++){
        result *= x;
    }
    return result;
}

function pow (x, n) {
    if ( n === 1) {
        return x;
    } else {
        return x * pow(x, n-1);
    }
}


pow (2, 2) // 4
pow (2, 3) // 8
pow (2, 4) // 16

let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basics: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }],
        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};

function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for(let course of Object.values(data)){  // получаем значение объекта
      if (Array.isArray(course)) {           // проверка на массив
        students += course.length;           // добавляем длину массива к общему кол-ву студентов

        for( let i = 0; i < course.length; i++) { // создаем цикл, который складывает прогресс
            total += course[i].progress;         // в общую сумму, цикл работает, от количества длины массива
        }
      }  else {                                 // если же это не массив а объект
        for(let subCourse of Object.values(course)) { // создаем переменную, которая 
            students += subCourse.length;
            for( let i = 0; i < subCourse.length; i++) {
                total += subCourse[i].progress; 
        }
      }
    }
}
    return total / students;
}

console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecursion(data) {   // создаем функцию, которая считает средний прогресс всех студентов
   if (Array.isArray(data)) {                  // проверка data на массив
    let total = 0;                             // объявляем переменную тотал

    for (let i = 0; i < data.length; i++) {    // если это массив, создаем цикл, который работает до конца 
        total += data[i].progress;             // длины массива, складываем прогресс, всех студентов
    }

    return [total, data.length];               // возвращаем общий прогресс и кол-во студентов
   } else {                                    // иначе если не массив
    let total = [0, 0];                        // сразу формируем массив с 0 общим прогрессом и 0 кол-вом
                                               // студентов 

    for (let subData of Object.values(data)) {
        const subDataArr = getTotalProgressByRecursion(subData);
        total[0] += subDataArr[0];
        total[1] += subDataArr[1];
    }
    return total;
   }
}

const result = getTotalProgressByRecursion(students);

console.log(result[0]/result[1]);