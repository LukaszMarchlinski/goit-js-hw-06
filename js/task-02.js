const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const allIngredients = document.querySelector("#ingredients"); ingredients.forEach((ingredient) =>
{  
const newElement = document.createElement("li");
  newElement.textContent = ingredient;
  newElement.classList.add("item");
  allIngredients.append(newElement);
  });