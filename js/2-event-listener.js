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
addListenerBtn.addEventListener('click', event => {
        console.log(event);
        console.log('Вішаю слухача події на цільову кнопку');
    
        targetBtn.addEventListener('click', onTargetBTNClick);
    });


removeListenerBtn.addEventListener('click', event => {
    console.log(event);
        console.log('Знімаю слухача події з цільової кнопки');
    
        targetBtn.removeEventListener('click', onTargetBTNClick);
    });



function logMessage(event) {
    console.log(event);
    console.log('Click on button');
}