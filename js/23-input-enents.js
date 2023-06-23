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

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);

// повісили слухателя на зміни
// refs.input.addEventListener('change', onInputChange);

// стандартна подія input
// refs.input.addEventListener('input', onInputChange);

// щоб виконати нашу задачу: щоб змінювалось значення спану!
refs.input.addEventListener('input', onInputChange);


refs.licenseCheckbox.addEventListener('change', onLicenseChange)

function onInputFocus() {
console.log('input отримав фокус - подія focus');
};

function onInputBlur() {
    console.log('input загубив фокус - подія blur');
};

function onInputChange(event) {
    // з цього ми можемо отримати значееня инпута
console.log(event.currentTarget.value);
refs.nameLable.textContent = event.currentTarget.value;
// кнопка повинна бути активною при чекнутому чекбоксі!
// використовуємо подію чендж

}

function onLicenseChange(event) {
    console.log(event.currentTarget.checked);
    refs.b
}