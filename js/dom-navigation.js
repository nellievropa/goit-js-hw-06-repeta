// UL батько для LI і предок для всього, що вкладене в LI
// сусіди це вкладення в LI: а, span, p - вони ж і діти LI
// LI між собою сусіди
// elem.parentNode - вибере батьківський elem.
// elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
// elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.
// elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.
// elem.previousSibling - вибере елемент «зліва» від elem (його попереднього сусіда).
// elem.previousElementSibling - вибере вузол-елемент «зліва» від elem (його попереднього сусіда).
// elem.nextSibling - вибере елемент «праворуч» від elem (його наступного сусіда)
// elem.nextElementSibling - вибере вузол-елемент «праворуч» від elem (його наступного сусіда).


// отримати посилання на UL

const navEl = document.querySelector('.site-nav');
// щоб швидко отримати посилання на перший елемент UL напишемо так

const firstNavItemEl = navEl.querySelector('.site-nav__item');
console.log(firstNavItemEl);

// Увага!! текстові вузли - це перенос рядка і рядок тексту також -- тому вони нас НЕ цікавлять!!
// тільки елементи тегів!
// тому теж саме ми можемо написати коротше

const firstNavItemEl1 = navEl.firstElementChild;
console.log(firstNavItemEl1);
// і ми отримали теж саме посилання

// якщо потрібен список всіх дітей

console.log(navEl.children.length);
// для більш глибоких вкладень не підійде!!! тільки для дітей!!!перша вкладеність
// якщо потрібен 2-й або н-й дитина, то використовуємо індех
console.log(navEl.children[1]);

// остання дитина 
console.log(navEl.lastElementChild);




