'use strict';

// touchstart - событие срабатывает при возникновении касания к этому элементу
// touchmove - при касании к элементу начинает двигаться палец, срабатывает эта событие
// touchend - как только наш палец оторвался от элемента, срабатывает это событие
// touchenter - оно будет срабатывать, когда мы ведем пальцем по экрану и наскакиванем на предел этого элемента
// touchleave - когда наш палец, не оторвался от экрана, а продолжил сколзить и ушел за пределы элемента
// touchcancel - возникает тогда, когде точка соприкосновения, больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
   const box = document.querySelector('.box');

   box.addEventListener('touchstart', (event) =>{
       event.preventDefault();
       console.log('Start');
       console.log(event.touches);
       console.log(event.targetTouches);
   });
   box.addEventListener('touchmove', (event) =>{
    event.preventDefault();
    console.log('Move');
});
   box.addEventListener('touchend', (event) =>{
    event.preventDefault();
    console.log('End');
});
});

// touches - выдает список всех пальцев, которые сейчас взаимодействуют с экраном
// targetTouches -  все пальцы которые взаимодействуют с конкретным элементом
// changedTouches - список пальцев, которые участвуют в текущем событии