//Завдання : клікнути на картку і отримати модальне вікно з повною інформацією

const cars = [
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


const container = document.querySelector('.js-container');

// переберем наш масив і створимо новий із Ли  з img: і  car: 
// щоб мати змогу найти наш елемент нам потрібен ще   id: з дата значеннм
const markup = cars.map(
    ({ img, car, id }) => ` <li data-car-id="${id}" class="js-target" class="js-card">
<img class="js-target" src="${img}" 
alt="${car}"
wigth="200">
<h2 class="js-target">${car}</h2>
</li>`
);
// щоб мати можливість відслідковувати елемент, задаємо клас і вішаємо його на всіх дітей Ли , щоб отримати результат- клік по Лі
// додамо нашу розмітку в контайнер

container.insertAdjacentHTML('beforeend', markup.join(''))
// додаємо слухача подій
container.addEventListener('click', onClick);

function onClick(event) {
const {target} = event;
    if(!target.classList.contains("js-target")) {
        return;
    }
    // console.log(event.target);
    // впевнились, що клікаємо на картку
// метод клосест дає нам першого спільного батька зі спільним классом
// тому ми задаємо нашу картку через такі умови
    const carId = target.dataset.carId ?? target.closest('.js-card').dataset.carId;
    console.log(carId);
}