const magicBtn = document.querySelector('.js-magic-btn');
// console.log(document);

// navEl -навігація по елементу
// navRef - навігація по посиланню(ссилке)

// це метод, в який передаємо CSS селектор
const navEl = document.querySelector('ul');
console.log(navEl);

// querySelector повертає ОДИН! елемент, не колекцію!

// const navItemEl = document.querySelector('li');
// console.log(navItemEl);

// ця команда поверне тільки перший знайдений елемент!!! схожа з командою find і потрібна для пошуку одного елементу!!!
// якщо нічого на знайшло повертає- null
// якщо записати так, як нижче з крапкою спереду- це ми звертаємось до CSS селектора

const navItemEl1 = document.querySelector('.site-nav_item');
console.log(navItemEl1);

// щоб отримати список селекторів, використовуємо 
const navNavLink = document.querySelectorAll('.site-nav_link');
console.log(navNavLink);
// повертає колецію документів в тому порядку, як він зустрів їх в УСЬОМУ документі, не масив. аналог filter
// якщо нічого на знайшло повертає- NodeList -пустий масив

// якщо ми хочемо звернутися тільки до одного елементу чи  розділу, можна шукати через селектор классу


const navLinksEl = navEl.querySelectorAll('.site-nav_link');
console.log(navLinksEl);

// всі ці посилання ми можемо підвязати до кнопки нашої і додавши слухача події 
// ми отримаєм всі ці посилання після клацання кнопки


magicBtn.addEventListener('click', () => {
    const navEl = document.querySelector('.site-nav');
console.log(navEl);
    
    const navLinksEl = document.querySelectorAll('.site-nav_link');
console.log(navLinksEl);
});