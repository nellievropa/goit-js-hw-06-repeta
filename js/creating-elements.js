// щоб подивитися на body, header, footer -швидкий доступ до розділів документу
console.log(document.body);
console.log(document.head);

// створимо заголовок
const titleEl = document.createElement('h1');
// значення повинно бути валідне, бо перевірки немає
// щоб додати клас тегу використовуємо classList : сlass="page-title
titleEl.classList.add('page-title');
// щоб додати між тегами текст використовуємо textContent
titleEl.textContent = "Це заголовок сотрінка :)";
console.log(titleEl);
// так ми створили елемент тільки в пам'яті , і розмітці його ще немає
// а після того, як ми створили і його наповнили змістом, додамо на сторінку до батька body

document.body.appendChild(titleEl);
// він додався в самий кінець, навіть після скриптів!!!
// appendChild додає в самий КІНЕЦЬ!!!

// створимо зображення і наповнимо його
const imageEl = document.createElement('img');
imageEl.src="https://kartinkin.net/uploads/posts/2022-02/thumbs/1644872596_8-kartinkin-net-p-kotiki-kartinki-8.jpg";
imageEl.alt = 'мимишний котик';
// якщо хочемо додати ще й ширину, але не знаємо чи є такий атрибут, то перевіряємо так
console.log(imageEl.width);
// показало, що довжина 0, тому додаємо її
imageEl.width = 640;
// такий запис додає прямо в тег як атрибут
// а можна ще записати так
// imageEl.setAttribute('width', 640);
// цей інтерфейс громіздкий, але додається значення з останнього запису!!!!

console.log('imageEl', imageEl);

// додамо картинку в body
document.body.appendChild(imageEl);

// додамо їх в Hero
const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);

// щоб зверненнь до ДОМ було меньше, треба це робити за одну операцію
// це сучасний метод вставити більш ніж один елемент(сусідів) за одну операцію
// heroEl.append(titleEl, imageEl);
heroEl.prepend(titleEl, imageEl);

// СТВОРЮЄМО І ДОДАЄМО НОВИЙ ПУНКТ МЕНЮ!
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особистий кабінет';
navLinkEl.href = '/profile';

// console.log(navItemEl);
// console.log(navLinkEl);

// ми хочемо додати ці 2 елементи в UL , але разом - це важливо
// посилання вкладаємо в Лі, а потім вже Лі додаємо в UL

navItemEl.appendChild(navLinkEl);
console.log(navItemEl);

// отримуємо посилання на UL

const navEl = document.querySelector('.site-nav');

// додаємо останнім
navEl.appendChild(navItemEl);

// Якщо хочемо поставили першим використовуємо інший метод
// ParentElement.insertBefore(elem, nextSibling)
// ParentElement - куди додаємо
// elem - це наш створений елемент,
// nextSibling - перед яким вставляємо

navEl.insertBefore(navItemEl, navEl.firstElementChild);
// перед останнім
navEl.insertBefore(navItemEl, navEl.lastElementChild);

// якщо ми хочемо поставити 2-м -- це означає -перед 3-м елементом

navEl.insertBefore(navItemEl, navEl.children[3]);