// Подiя submit
// formData потрібна щоб одразу зібрати всі данні з об'єкту


const form = document.querySelector('.js-register-form');

// обробимо форму відправки

form.addEventListener('submit', onFormSubmit);

// зробимо зовнішню функцію, і посилання на неї додамо в form.addEventListener('submit')
// ще нам потрібно предотвратити перезагрузку сторінки!! це важливо preventDefault -попередити за замовчуванням

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements
    console.log(formElements);

    // спочатку звертаємось до посилань, потім берем у них VALUE

    const mail = formElements.email.value;
    const password = formElements.password.value;
    const subscription = formElements.subscription.value;

    // щоб відправити на сервер збираємо данні

    const formData = {
        mail,
        password,
        subscription,
    }

    console.log(formData);

}
// таж сама функція з fomrData записується так

// function onFormSubmit(event) {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);

// console.log(formData);

// щоб впесвнитися, що дані вірні, ще можна визивати так

// formData.forEach((value, name) => {
//     console.log('onFormSubmit -> name', name);
//     console.log('onFormSubmit -> value', value);
// });
// }