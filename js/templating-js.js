// ПАРС строк

const titleEl = document.querySelector('.title');
//  це 2 способи звернутися до всластивості елементу з однаковим результатом
console.log(titleEl.textContent);
// верхній повертає тільки текстовий контент(вміст);
// але нижній варіант повертає всю вкладену розмітку у вигляді однієї строки
console.log(titleEl.innerHTML);

// використовуючи innerHTML ми можем змінювати HTML із JS коду
// просто зміним текст
// titleEl.innerHTML = 'fhfgryrtvxv ';
// отримаємо посилання! не просто текст !! а працююче посилання
// titleEl.innerHTML = '<a href="">ЦЕ Посилання</a>';

// щоб видалити весь текст з тегу
// titleEl.innerHTML = '';

// додавати щось нове через += в innerHTML НЕ МОЖНА! дуже перегружає браузер!!

// innerHTML для того щоб видалити все або ВСЕ перезаписати

// Додати СУСІДНІЙ HTML

titleEl.insertAdjacentHTML('beforebegin', '<a href="">ЦЕ поза елементом до Посилання</a>');
titleEl.insertAdjacentHTML('afterend', '<a href="">ЦЕ поза елементом після Посилання</a>');
titleEl.insertAdjacentHTML('afterbegin', '<a href="">ЦЕ внутрі і перед Посилання</a>');
titleEl.insertAdjacentHTML('beforeend', '<a href="">ЦЕ внутрі і післяПосилання</a>');

