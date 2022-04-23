// const input = document.querySelector('#validation-input',)
// input.addEventListener('focus', onInputFocus);
// input.addEventListener('blur', onInputBlur);
// if (input.textContent = 'data-length= "6"') {
//     input.classList.add('#validation-input.valid')
// } else input.className.add('#validation-input.invalid')

// function onInputFocus();
// function onInputBlur();
// spanEl.textContent = currentTarget.value;


const input = document.querySelector('#validation-input');

input.addEventListener('blur', function () {
    if (input.value.length == input.dataset.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
});
console.log(input.dataset.length)