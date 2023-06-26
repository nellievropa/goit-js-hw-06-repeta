// вчимося реагувати на події(кліки.. тощо)
// є ПЕРЕЛІК доступних подій!!!! 

const targetBtn = document.querySelector('.js-target-btn');
const addListenerBtn = document.querySelector('.js-add-listener');
const removeListenerBtn = document.querySelector('.js-remove-listener');

// отримуємо посилання на елемент
//  потім можемо додати слухача!
// потім додаємо першу подію - клік!! строкою
// другий аргумент- колбек функція, яка виконається після кліку
// targetBtn.addEventListener('click', onTargetButtonClick);

// обробити клік на таргет баттон
    // function handleahdleTargetButtonClick() {
    //     console.log('Click');
    // }
   

// функуції треба грамотно найменовувать 
// handle: handleEvent 
// Handler: eventHandler
// on: onSubjectEvent

// оборбНИК кліка на таргет баттон
// function targetButtonClickHandler() {
//     console.log('Click');
// }

// function onTargetButtonClick() {
//     console.log('Click');
// }

// targetBtn.addEventListener('click', () => {
//     console.log('Click');
// });

// addListenerBtn.addEventListener('click', () => {
//     console.log('Вішаю слухача події на цільову кнопку');

//     targetBtn.addEventListener('click', () => {
//         console.log('Click по цільовій кнопці');
//     });
// });

// removeListenerBtn.addEventListener('click', () => {
//     console.log('Знімаю слухача події з цільової кнопки');

//     targetBtn.removeEventListener('click', ()=> {
       
//     })
// });
// подія не знялася бо у функцій console.log('Click по цільовій кнопці'); різне посилання 
// тому колбек функція виносятся в окрему змінну

function onTargetBTNClick () {
    console.log('Click по цільовій кнопці');
}

//  і тоді попередній код може бути записаний так( передаємо посилання на функцію)
// у цих функцій обов'язково є event -перший параметр () прибираємо
// addListenerBtn.addEventListener('click', event => {
//         console.log(event);
//         console.log('Вішаю слухача події на цільову кнопку');
    
//         targetBtn.addEventListener('click', onTargetBTNClick);
//     });


// removeListenerBtn.addEventListener('click', event => {
//     console.log(event);
//         console.log('Знімаю слухача події з цільової кнопки');
    
//         targetBtn.removeEventListener('click', onTargetBTNClick);
//     });



// function logMessage(event) {
//     console.log(event);
//     console.log('Click on button');
// }

// Приклад квадратик, що рухається

// const button = document.querySelector('.js-click');
// const container = document.querySelector('.js-container');
// button.addEventListener('click', onClick);
// ми можемо додати клик на любий об'єкт, наприклад-на квадратик і він буде рухатись при кліку по ньому
// для цього  88 строку змінюємо і addEventListener додаєм на контайнер

// container.addEventListener('click', onClick1);

// let step = 0;

// function onClick1(event) {
//     step += 5;
//     container.style.marginLeft = `${step}px`;
//     // якщо хочемо щоб квадратик рухався по діагоналі додаєм просто
//     container.style.marginTop = `${step}px`;

//     console.log(event.currentTarget);
// }

// currentTarget = наш елемент


// <!-- по кліку на 3 крапки читач переходить до всього тексту -->
   
    // const title = document.querySelector('.js-title');
    // const MaxLength = 13;
    // довжина з крапками 
    // const totalLength = MaxLength + 3;
// ми хочемо, щоб п кліку текст обрізався, а потім був виден весь
// тому додаємо слухача
// title.addEventListener('click', onClick);

// function onClick(event) {
    
    // event.currentTarget винесемо в змінну
    // const innerTitle = event.currentTarget;
    // const str = innerTitle.textContent.slice(0,MaxLength);
// тепер пишему умову коли, що ми будемо бачити
// if(innerTitle.textContent.length > totalLength) {
   // і замінюємо event.currentTarget всюди , де використовуємо на innerTitle
//    const str = innerTitle.textContent.slice(0,MaxLength);
//    const remainder = innerTitle.textContent.slice(MaxLength);
   // щоб додати залишок до data atribute звертаємось до innerTitle
//    innerTitle.setAttribute('data-title', remainder);
   // обрізаємо титул в HTML і додаємо ... -додаэмо змінну MaxLength в початок
//    innerTitle.textContent = str+'...';
// } else {
    // отримати кінець
    // const  remainder = innerTitle.dataset.title;
    // взяти початок і додати до нього кінець, який тільки но створили
    // innerTitle.textContent = str + remainder;
    // getAttribute
//     console.log(remainder);
// }


// }

// якщо ми обробляєм елемент, на який клікаємо, то треба використовувати event.current
// щоб максимально абстрагуватися від HTML
// тому  const str = title.textContent.slice(0,13); заміняємо на

    // треба обрізати текст Н1- тбто ми його модифікуємо slice працює і з РЯДКАМИ!!!
    // const str = title.textContent.slice(0,13);
    //  все те, що вирізали буде тут
// const remainder = title.currentTarget.textContent.slice(13);
//     console.log(str);
//     console.log(remainder);

// Приклад коли багато подібних абзаців, а змінні названі правильно і нічого міняти не треба!
// бо код працює!

const title = document.querySelector('.js-title');
const title1 = document.querySelector('.js-title1');
const title2 = document.querySelector('.js-title2');
const MaxLength = 13;
const totalLength = MaxLength + 3;
title.addEventListener('click', onClick);
title1.addEventListener('click', onClick);
title2.addEventListener('click', onClick);

function onClick(event) {
    const innerTitle = event.currentTarget;
    const str = innerTitle.textContent.slice(0,MaxLength);

    if(innerTitle.textContent.length > totalLength) {
        const remainder = innerTitle.textContent.slice(MaxLength);
        innerTitle.setAttribute('data-title', remainder);
        innerTitle.textContent = str+'...';
    } else {
// якщо рядок коротший за 13 символів
        const  remainder = innerTitle.dataset.title;
        if (remainder) {
            innerTitle.textContent = str + remainder;
            console.log(remainder);
        }
      
        }              
};
// обов'язково використовуємо event and currentTarget!!!