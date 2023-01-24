'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {               // обращаемся к переменной btn, событие onclick обозначает, что 
//     alert('Click');                      // функция срабатывает после нажатия кнопки одинарного нажатия
// };                                       // кнопки мыши

// btn.onclick = function() {               // тоже самое что в примере выше, но если в коде, будут дважды
//     alert('Second click');               // выполнено одно и тоже событие к одной и той же переменной,
// };                                       // будет работать последнее

// let i = 0;
const deleteElement = (e) =>{   
    console.log(e.currentTarget);
    console.log(e.type);
    // i++; 
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn =>{
   btn.addEventListener('click', deleteElement, {once: true});
});


// btn.addEventListener('click', (e) =>{        // mouseenter событие срабатывает от наведения мышки
    // alert('Click');                       // callback функция
    // console.log(e.target);
    // e.target.remove();
// });

// btn.addEventListener('click', () =>{        // при использовании метода addEventListener можно использовать
//     alert('Second click');                  // несколько событий к одной переменной
// });

const link = document.querySelector('a');

link.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target);
});