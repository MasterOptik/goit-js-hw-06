const navEl = document.querySelectorAll('ul#categories li.item');
console.log('Number of categories:', navEl.length);
navEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').innerText);
    console.log('Elements:', item.querySelectorAll('li').length)
})
