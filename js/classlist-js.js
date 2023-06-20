// Інтерфейс classlist
// як працювати з класами:
const magicBtn = document.querySelector('.js-magic-btn');

// додати слухача події
// magicBtn.addEventListener('click', () => {
//     const navEl = document.querySelector('.site-nav');
// console.log(navEl.classList);
// navEl.classList.add('super-cool', 'qterere');
// })

const navEl = document.querySelector('.site-nav');
console.log(navEl.classList);
// classList - властивість, в якій зберігається об'єкт і його методи
// за допомогою методів classList ми можемо змінювати властивості об'єкту

// додати класс на ul за допомогою методу add
navEl.classList.add('super-cool');

// видалити клас
// navEl.classList.remove('super-cool');

// toggle - це переключення - спочатку додасть а потім видалить клас , якщо натиснути кнопку
// magicBtn.addEventListener('click', () => {

// navEl.classList.toggle('qterere');
// })

// метод риплейс бере старий клас і замінює його на новий

navEl.classList.replace('super-cool', 'quterwu');

// щоб подивитись, чи взагалі є такий клас на елементі  є метод contains
// повертає true or false
console.log( navEl.classList.contains('quterwu'));

// ми знаємо, що знаходимось на сторінці Portfolio

// const currentPageUrl = '/portfolio';
const currentPageUrl = '/about';
// будемо шукати властивість href у посилань а (і можемо у різних шукати і додавати з таким записом)
const linkEl =document.querySelector(`.site-nav__link[href='${currentPageUrl}']`);
console.log(linkEl);
// отримуємо посилання  на а
// a[href='/about'] заміняємо а на .site-nav__link щоб звернутися, бо це одне й те саме

// хочемо додати колір з CSS current

linkEl.classList.add('site-nav__link--current');
