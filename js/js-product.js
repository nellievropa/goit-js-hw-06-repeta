//для  js масивів з  type=module ТІЛЬКИ!!! повинна бути папка data і
// щоб імопртувати(дістати з папки ) данні звертаємось так
import products from './data/product.js';
// назву файлу можна надати самому (якщо немає в папці)
// при цьому файл products НЕ підключений до HTML!!!

console.log(products);


// практикуємо створювати карточку продукта

// const product = {
//     name: 'SomethingNew',
//     description: 'There is coulld be everything',
//     price: 2000,
//     available: true,
//     onSale: true,
// };



// треба створити такий елемент

// {
//     <article class='product'>
//     <h2 class='product__name'>Найменування</h2>
//     <p class='product__descr'>Опис</p>
//     <p class='product__price'>Ціна</p>
//     </article>
// }


// функція для створення картки продукту ШАБЛОН
// створили елемент
// const productEl = document.createElement('article');
// додали йому класс
// productEl.classList.add('product');
//  добавляємо назву :
// 1. створюємо елемент Н2
// const nameEl = document.createElement('h2');
// 2.додаємо йому  класс
// nameEl.classList.add('product__name');
// наповнюємо його назву
// nameEl.textContent = product.name;


//  створюємо абзаци
// const descrEl =document.createElement('p');
// descrEl.textContent = product.description;
// descrEl.classList.add('product__descr');


// const priceEl =document.createElement('p');
// priceEl.textContent = `Ціна: ${product.price} кредитів`;
// priceEl.classList.add('product__price');


// console.log(nameEl);
// console.log(descrEl);
// console.log(priceEl);

// тепер додамо в article всі його елементи 

// productEl.append(nameEl,descrEl, priceEl );
// console.log(productEl);


//  створимо файл із забранного масиву продуктів
// напишемо ФУНКЦІЮ, яка із цього об'єкту створить 1 карточку продукта
// ця функція буде за один раз створювати всі попередні (nameEl,descrEl, priceEl )
// product повинен мати параметри name, descr, price
// const makeProductCard = product => 
// і тоді ми запишемо це так, використовуючи деструктуризацію

// створимо елемент із HTML (div) в який будемо додавати наші картки

const productContainerEl = document.querySelector('.js-products');

const makeProductCard = ( { name, description, price }) => {
    const productEl = document.createElement('article');
    productEl.classList.add('product');

    const nameEl = document.createElement('h2');
nameEl.classList.add('product__name');
nameEl.textContent = name;

const descrEl =document.createElement('p');
descrEl.textContent = description;
descrEl.classList.add('product__descr');

const priceEl =document.createElement('p');
priceEl.textContent = `Ціна: ${price} кредитів`;
priceEl.classList.add('product__price');

productEl.append(nameEl,descrEl, priceEl );

return productEl;
};

console.log(makeProductCard(products[3]));

// це колбек функція-- посилання на зовнішню функцію
const elements = products.map(makeProductCard);
console.log(elements);
productContainerEl.append(...elements);
console.log(productContainerEl);


// це ж саме можна було б записати так
const elements1 = products.map(product => {
    return `Product element`;
});
console.log(elements1);
