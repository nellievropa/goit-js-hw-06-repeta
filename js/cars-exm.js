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

const favoriteList = document.querySelector('.js-favorite-list');
// оголошуємо, що у нас є форма
const form = document.querySelector('.js-search-form')
// на форму потрібе прослуховувач подій и колбек функція onSearch
form.addEventListener("submit", onSearch)
// додати в обране
list.addEventListener('click', onClick);
// зробимо розмітку елементів. дестуктуризуємо їх (скажемо, що в нас є id, type, price ...)
// id додаємо як дата-атрибут <li data-id="${id}">
// щоб не повторюват макет , ми робим функцію
// вона приймає массив arr
function createMarkup(arr) {
     const markup = arr
        .map(
        ({ id, car, type, price, img }) => 
`<li data-id="${id}">
    <img src="${img}}" alt="${car}" width="300">
    <h2>${car}</h2>
    <h3>${type}</h3>
    <p>${price}</p>
    <div class="js-favorite">$</div>
</li>`).join('');
    // за допомогою  join всі елементи масиву ставимо в рядок
    return markup;
}
// по кліку на доллар будемо додавати в обране
// const markup =  cars.map(({id, car, type, price, img}) => 
// `<li data-id="${id}">
//     <img src="${img}}" alt="${car}" width="300">
//     <h2>${car}</h2>
//     <h3>${type}</h3>
//     <p>${price}</p>
// </li>`).join('');
// доавати требя як рядок тому робимо Join - воно відсортувало 

// додати розмітку
// після строки 50 змінюємо і тут
list.insertAdjacentHTML('beforeend', createMarkup(cars));
// list.insertAdjacentHTML('beforeend', markup);
// console.log(markup);

// сам колбек
function onSearch(event) {
    // щоб збити сабмит
    event.preventDefault();
    // той елемент, на який додали прослуховувач подій
    const form = event.currentTarget;
    // дестуктуризуємо елемети форми
    const { query, select } = form.elements;
// щоб знайти щось нам потрібно відфільтрувати масив
//   item - це наш об'єкт, один елемент з масиву {}
    // нам потрібен доступ до ключа об'єкту через рядок[]- це дужки рядка
    // [select.value] - це те, що ввів користувач - або марка або тип  car: "Honda",
        // type: "Accord", але якщо воно в квадратних дужках
    // щоб прибрати пробіли на початку та в кінці - додаємо trim()
    // toLowerCase -приеде всі літери до нижнього регістру
    const searchCars = cars.filter(
        (item) => item[select.value].toLowerCase() === query.value.trim().toLowerCase());
    console.log(searchCars);

// потім нам знову треба перебрати масив -рендерим - ми робим це в   строці

    // це елементи комунікації, тому нам з них потрібно value
    // query.value- це те , що ввів кліент
    // console.dir(query.value);
    // console.log(select.value);

    // 2. Зробити пошук по властивостям чи по моделі чи по марці

// після того, як знайшли співпадіння
//  innerHTML замінить весь масив тільки на ті авто, що ми вибрали
list.innerHTML = createMarkup(searchCars);

}

// створимо колбек функцію для додавання в обране

function onClick(event) {
    // якщо той елемент, по якому я кликну, содержить в списку классів класс js-favorite
    if (event.target.classList.contains('js-favorite')) {
        // console.log(event.target);
        // додали класс з СSS
        event.target.classList.add('.js-favorite-active')
        // щоб взяти id нашого елементу, треба піднятися до батьківського елементу за допомогою методу closest
        // const id = event.target.closest('li');
        // .щоб взяти тільки число - деструктуризувати робимо 
        const { id } = event.target.closest('li').dataset;
        
        // щоб знайти машину з тим ID, ми деструктуризуємо Id і порівнюємо з тим, по якому клікнули і беремо тільки його ім'я,щоб додати у список фаворитів
        // const currentCar = cars.find(({ id: carId }) => carId === Number(id).car);
        // addFavorite(currentCar);
        // це можна записати ще й так
         const {car, type} = cars.find(({ id: carId }) => carId === Number(id));
        
        
        addFavorite(`${car} ${type}`)
        // console.log(currentCar);
    }
}

function addFavorite(currentCar) {
    favoriteList.insertAdjacentHTML('beforeend', `<li>${currentCar}</li>`);
}
 // прослуховуємо завжди ВЕСЬ список UL
    // console.log(event.currentTarget)
    // а подія спрацювала там де був курсор( на фото, назві тощо)
    //  console.log(event.target)