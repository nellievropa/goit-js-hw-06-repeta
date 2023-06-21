// Створюємо і додаємо колекції кнопок, що відповідають кольорам


const colorPickerOption = [
    { label: 'red', color: '#F44336'},
    { label: 'green', color: '#4CAF50'},
    { label: 'blue', color: '#2196F3'},
    { label: 'grey', color: '#607D8B'},
    { label: 'pink', color: '#E91E63'},
    { label: 'indigo', color: '#3F5185'},
];

// const option = colorPickerOption[2];

// const buttonEl = document.createElement('button');
// buttonEl.type = "button";
// buttonEl.textContent = option.label;
// ми можемо створити потрібну нам властивість елементу за допомогою style
// buttonEl.style.backgroundColor = option.color;
// заінлайнили стиль
// buttonEl.style.width = 40;


// console.log(buttonEl);

// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// const elements = colorPickerOptions.map(option => {
//     // в option приходить такий об'єкт   { label: 'red', color: '#F44336'},
//      const buttonEl = document.createElement('button');
//     buttonEl.type = "button";
//     // додаємо клас із CSS
//     buttonEl.classList.add('color-picker__option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
    
//     return buttonEl;
// });
// console.log(elements);
// colorPickerContainerEl.append(...elements);
// зверху НОВА школа з використанням МАР - взяли масив данних і повернули масив розмітки



// варіант СТАРОЇ  школи створення масиву знизу

// перебираємо масив і створюємо на кожній ітерації кнопку
// for(let i = 0; i < colorPickerOption.length; i += 1) {
// const option = colorPickerOption[i];

// const buttonEl = document.createElement('button');
// buttonEl.type = "button";
// // додаємо клас із CSS
// buttonEl.classList.add('color-picker__option');
// buttonEl.textContent = option.label;
// buttonEl.style.backgroundColor = option.color;

// elements.push(buttonEl);
// };
// console.log(elements);

// spred використовуємо що розібрати масив на елементи
// colorPickerContainerEl.append(...elements);



// напишемо ФУНКЦІЮ, яка отримує масив данних для створення розмітки колорпікера
const colorPickerContainerEl = document.querySelector('.js-color-picker');
const makeColorPickerOptions = options => {
    return options.map(option => {
        // в option приходить такий об'єкт   { label: 'red', color: '#F44336'},
        const buttonEl = document.createElement('button');
        buttonEl.type = "button";
        // додаємо клас із CSS
        buttonEl.classList.add('color-picker__option');
        buttonEl.textContent = option.label;
        buttonEl.style.backgroundColor = option.color;
        
        return buttonEl;
    });
    
};
const elements = makeColorPickerOptions(colorPickerOptions);
colorPickerContainerEl.append(...elements);



