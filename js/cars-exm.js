const cars =[
    {
        id: 1,
        car: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaaaHQzbknX9_YwDn6Qkun4lhUMwSOeXUKHuify8GNzulgTk2OV5X67aumpLrp7EzHmIw&usqp=CAU",
    },
    {
        id: 2,
        car: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebDnSDztoYJ2wWgWFp95vflTFFDCmM3vJADwfkr-B&s",
    },
    {
        id: 33,
        car: "BMV",
        type: "5 series",
        price: 9000,
        img: "https://cdn1.riastatic.com/photosnew/auto/photo/bmw_x7__406732716fx.jpg",
    },
    {
        id: 3,
        car: "Honda",
        type: "Accord",
        price: 20000,
        number: "+380000000000",
        img: "https://cdn.riastatic.com/photosnew/auto/photo/honda_accord__463602148f.webp",
    },
    {
        id: 4,
        car: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://cdn.riastatic.com/photosnew/auto/photo/volvo_fh-13__456672556f.webp",
    },
];

// 1. Зарендерити ці автомобілі
const list = document.querySelector('.js-list');

// зробимо розмітку елементів. дестуктуризуємо їх (скажемо, що в нас є id, type, price ...)
// id додаємо як дата-атрибут 46 строка
const markup =  cars.map(({id, car, type, price, img}) => 
`<li data-id="${id}">
    <img src="${img}}" alt="${car}" width="300">
    <h2>${car}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
</li>`).join('');
// доавати требя як рядок тому робимо Join - воно відсортувало 

// додати розмітку
list.insertAdjacentHTML('beforeend', markup);


console.log(markup);




// 2. Зробити пошук по властивостям чи по моделі чи по марці