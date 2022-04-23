const input = document.querySelector('#name-input',)
// Вешаем обработчик события на инпут
input.addEventListener('input', onInputChange)
// Выбираем р
const spanEl = document.querySelector('#name-output',)
// if (input.textContent = "") {
//     spanEl.textContent = Anonymous
// }
// console.log(spanEl)


function onInputChange(event) {
    console.log(event.currentTarget.value);
    spanEl.textContent = event.currentTarget.value;
    if (event.currentTarget.value == "") {
        spanEl.textContent = 'Anonymous';
    }

}