const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments'
];
const ingredientsEl = document.querySelector('ul#ingredients');

const elements = ingredients.map(ingredient => {
  const titleEl = document.createElement('li');
  titleEl.classList.add('item');
  titleEl.textContent = ingredient;
  return titleEl;
})
console.log(elements);
ingredientsEl.append(...elements);