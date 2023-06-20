const magicBtn = document.querySelector('.js-magic-btn');
// як достукатись та працювати з властивостями
// картинка
// const imageEl = document.querySelector('.hero__image');
// console.log('imageEl', imageEl);
// ми можемо звернутися до властивостей самого елементу
// console.log(imageEl.src);
// можно змінити занчення властивості
// imageEl.src ='https://klike.net/uploads/posts/2022-05/1653975017_3.jpg';
// якщо прив'язати до кліку по кнопці- буде меджік!!!

magicBtn.addEventListener('click', () => {
    const imageEl = document.querySelector('.hero__image');
console.log('imageEl', imageEl);
console.log(imageEl.src);
imageEl.src ='https://klike.net/uploads/posts/2022-05/1653975017_3.jpg';
imageEl.alt = 'This is a new cat';

});

const heroTitleEl = document.querySelector('.hero__title');
console.log('heroTitleEl', heroTitleEl);
// для текстових елементів, що стоять між відкриваючим і закриваючим тегами!!!!!, використовують іще textContent
console.log(heroTitleEl.textContent);
// і можемо його змінити
heroTitleEl.textContent = 'я солодкий котик!!!';

// Набір методів ДЛЯ РОБОТИ З АТРИБУТАМИ!!
const imageEl = document.querySelector('.hero__image');
// GET(atribute name)
// imageEl.getAttribute('src');
console.log(imageEl.getAttribute('src'));
// теж саме і це (для атрибутів, які йдуть як властивості об'єктів) - використовується частіще
console.log(imageEl.src);

// щоб видалити атрибут
// imageEl.removeAttribute('src');

// перевірити, чи є такий атрибут
console.log(imageEl.hasAttribute('src'));
// повертає тру або фолсе

// DATA- атрибути дозволяють додати тобі самому необхідну операцію з елементом
// js-actions додаємо класу додакове значення для роботи з ним тільки в JS!!!
// data- це данні 
// зараз просимо вибрати всі кнопки в класі
const actions = document.querySelectorAll('.js-actions button');
console.log(actions);
// показати першу- додает індексу кнопки є влативість dataset
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);
console.log(actions[2].dataset.action);
// action- це ключ, а add -це значення ключа


magicBtn.addEventListener('click', () => {
    const inputEl = document.querySelector('.js-input');
    console.log(inputEl.value);
    inputEl.value = "wibvrtd15874";
})
// у инпута є властивість value! але спочатку його треба ввести на полі інпута, а вже тоді перевіряти або ввести одразу






