// мають деякі особливості

const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),
};

// додаєм слухача події на window(все вікно- це також об'єкт)
// 'keydown' реагує на абсолютно всі клавіші!!!!
window.addEventListener('keydown', onKeydown);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeydown(event) {
// console.log(event);
// console.log('.event.key', event.key);
}

// 'keypress' РЕАГУЄ ТІЛЬКИ НА ТІ КЛАВІШІ, що генерують символи
// 2 важливих властивості code:- фізична клавіша на клавіатурі, and key: - буква того алфавыту на якому ви працюэте зараз

window.addEventListener('keypress', onKeypress)
function onKeypress(event) {
    console.log('.event.key', event.key);
    console.log('.event.code', event.code);
    // отримати значення клавіші на любій мові

    refs.output.textContent += event.key;
}

function onClearOutput() {
    // щоб очистити всю інформацію робимо пусту строку після натискання на clearBtn
    refs.output.textContent = '';
}


// Події миші

const boxRef = document.querySelector('.js-box');

// працюють, коли мишка в зоні квадрату чи коли виходить з зони квадрату
// діє і на дітей і на потомків
boxRef.addEventListener('mouseenter', onMouseEnter);
boxRef.addEventListener('mouseleave', onMouseLeave);
// болтлива подія, бо надто часто відбувається!!!!
boxRef.addEventListener('mousemove', onMouseMove);

// це аналог ховера- колір зміниться при наведенні миші і повернеться назад,
// коли її прибрати з квадрата
function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box--active');
}
function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box--active');
}
function onMouseMove(event) {
    console.log(event);
    // const box = event.currentTarget;
    // box.classList.add('box-active');
}

// 'mouseover' працює тільки над батьківським елементом і НЕ працює над дітьми!
// 'mouseout'
boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseLeave);