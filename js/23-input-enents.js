// При введенні іменіі і при згоді з ліцензією активується Анонім 
// потрібні посилання на всі поля і кнопки
// створюємо змінні

// НЕОБОВ₴ЯЗКОВО: є птерн "Об'єкт посилань" Refs - посилання
const refs = {
    input: document.querySelector('.js-input'),
    nameLable: document.querySelector('.js-button > span'),
    license: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

// звертатится до елемента треба буде так: refs.input

// const input =document.querySelector('.js-input');
// const nameLable =document.querySelector('.js-button > span');
// const license =document.querySelector('.js-license');
// const btn =document.querySelector('.js-button');

// перша подия input

refs.input.addEventListener('focus', onInputFocus);
refs.input.addEventListener('blur', onInputFocus);

function onInputFocus() {
console.log('input отримав фокус - подія focus');
};

function onInputBlur() {
    console.log('input загубив фокус - подія blur');
};

function onInputChange() {

}

function onLicenseChange() {
    
}