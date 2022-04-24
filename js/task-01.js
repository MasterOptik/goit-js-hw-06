const navEl = document.querySelectorAll('ul#categories li.item');
console.log('Number of categories:', navEl.length);
navEl.forEach(item => {
    console.log('Category:', item.firstElementChild.innerText);
    console.log('Elements:', item.lastElementChild.childElementCount) //   ЯКЩО Я ТУТ ВИКОРИСТОВУЮ lastElementChild ТО ВИБИВАЄ UNDEFINED
});