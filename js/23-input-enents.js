// При введенні іменіі і при згоді з ліцензією активується Анонім 
// потрібні посилання на всі поля і кнопки
// створюємо змінні

// НЕОБОВ₴ЯЗКОВО: є птерн "Об'єкт посилань" Refs - посилання
const refs = {
    input: document.querySelector('.js-input'),
    nameLable: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

// звертатится до елемента треба буде так: refs.input

// const input =document.querySelector('.js-input');
// const nameLable =document.querySelector('.js-button > span');
// const license =document.querySelector('.js-license');
// const btn =document.querySelector('.js-button');

// перша подия input

refs.input.addEventListener('focus', onInputFocus);

function onInputFocus() {
    console.log('input отримав фокус - подія focus');
    };

refs.input.addEventListener('blur', onInputBlur);
function onInputBlur() {
    console.log('input загубив фокус - подія blur');
};

// повісили слухателя на зміни
// refs.input.addEventListener('change', onInputChange);
// function onInputChange(event) {
//     // з цього ми можемо отримати значееня инпута
// console.log(event.currentTarget.value);
// refs.nameLable.textContent = event.currentTarget.value;
// кнопка повинна бути активною при чекнутому чекбоксі!
// використовуємо подію чендж

// }
// стандартна подія input
// refs.input.addEventListener('input', onInputChange);

// щоб виконати нашу задачу: щоб змінювалось значення спану!
refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
console.log(event.currentTarget.value);
refs.nameLable.textContent = event.currentTarget.value;
}
// span имеет только textContent!!!!

// кнопка повинна активуватись тільки коли чекнутий чебокс
// для чекбоксів і радіобатонів використовується подія 'change'
refs.licenseCheckbox.addEventListener('change', onLicenseChange)

function onLicenseChange(event) {
    console.log(event.currentTarget.checked);  
    console.log('refs.disabled:', refs.btn.disabled);
//  кнопка вимкнена     коли чекбокс НЕ активна
      refs.btn.disabled = !event.currentTarget.checked;
}