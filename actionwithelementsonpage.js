'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
box.style.width = '500px';

box.style.cssText = 'background-color: brown; width: 500px';

btns[1].style.color = 'yellow';
btns[1].style.backgroundColor = 'green';
btns[1].style.borderRadius = '30%';

circles[1].style.backgroundColor = 'orange';

for (let i = 0; i < hearts.length; i++) {
    hearts[i].style.backgroundColor = 'purple';
}

hearts.forEach(item => {
    item.style.backgroundColor = 'yellow';
});

const div = document.createElement('div');
const text = document.createTextNode('Авэ всем');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[1]);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[1].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[1]);

div.innerHTML = `<h1>Hello World</h1>`;
div.insertAdjacentHTML('beforebegin','<h2>Hello</h2>');   // вставляет html-код, перед элементом div
div.insertAdjacentHTML('afterbegin','<h2>Hello</h2>');    // вставляет html-код в начало элемента
div.insertAdjacentHTML('beforeend','<h2>Hello</h2>');    // вставляет html-код в конец элемента
div.insertAdjacentHTML('afterend','<h2>Hello</h2>');    // вставляет html-код после элемента

// div.textContent = 'Hello';