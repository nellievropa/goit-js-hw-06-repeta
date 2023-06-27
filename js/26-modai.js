
// 1. відкрити -натиснути кнопку і закрити- натиснути кнопку
// [] - це селектор атрибуту
const refs = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
    
};
// відкрити- вішаємо слухача

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal);


function onOpenModal() {
    window.addEventListener('keydown', onEscKeyPress);
// отримати доступ до боди
// console.log(document.body);
// додати класс із CSS - classList.add('show-modal');
document.body.classList.add('show-modal');
}

// закрити вікно кнопкою "Закрити"

function onCloseModal() {
    // і відписуємось від  window.addEventListener('keydown', onEscKeyPress); перед закриттям модалки
    window.removeEventListener('keydown', onEscKeyPress);
    document.body.classList.remove('show-modal'); 
}

// 2. Закрити модалку при кліку по бекдропу(сірому фону)

refs.backdrop.addEventListener('click', onBackdropClick);

function onBackdropClick(event) {
    // console.log('click on backdrop!');
    // click спрацьовує і на модальному вікні! обережно!
    // всплитие собитий!!! и клик ловиться навіть на тексті!!!
    // console.log(event.currentTarget);
    // це де ця подія відбулася буквально! і показує -ДЕ діє
    console.log(event.target);

    if (event.currentTarget === event.target) {
        console.log('Клікнули в бекдроп')
        // якщо ми знаємо умову, при якій можемо закрити вікно, просто визиваємо функцію
        onCloseModal();
    }
};

// 3.Закрити по кллаише ESC
// вешаем слушателя события сначала на виндов
// window.addEventListener('keypress', onEscKeyPress);
// keypress  не працює, бо реагує тільки на символи вводу
// тому використовуємо 
// window.addEventListener('keydown', onEscKeyPress);
// проблема в тому, що при підкюченні схухача на window
// ми слухаємо взагалі всі події, навіть при закритій модалці
// тому ми переміщаємо window.addEventListener('keydown', onEscKeyPress); в функцію відкриття модалки

function onEscKeyPress(event) {
// console.log(event.code);
// onCloseModal();
// так працює і закривається при натисканні любої клавіші!
// томe треба додати умову с Code:
// можна ще змінну додати
const ESC_KEY_CODE = "Escape";
if(event.code === ESC_KEY_CODE) {
    onCloseModal();
}

};

// 6
const inputContent = document.querySelector('#validation-input');
const maxLength = 6;
// const maxLength =document.querySelector('input[data-length="6"]');
inputContent.addEventListener('blur', onInputBlur);

function onInputBlur(event) {

    // console.log(event.currentTarget);
    const content = event.currentTarget;

 if(content.value.length === maxLength) {
    content.classList.add('valid');
 }else{
content.classList.add('invalid');
 }
}

// 7
const inputFont = document.querySelector('#font-size-control');
console.log(inputFont.value)
const spanSize = document.querySelector('#text');
console.log(spanSize.style.fontSize);

inputFont.addEventListener('input', onFontSiseControl);

function onFontSiseControl(event) {
// console.log(event.currentTarget.value);
spanSize.style.fontSize = event.currentTarget.value + 'px';
}



