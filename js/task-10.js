const inputNumber = document.querySelector('input');
const buttonCreate = document.querySelector('button[data-create]');
const buttonDestroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

buttonCreate.addEventListener("click", createBoxesAmount);
buttonDestroy.addEventListener("click", destroyBoxes);

let allBoxes = '';
let boxSize = 30;


function createBoxesAmount() {
  createBoxes(inputNumber.value);
  inputNumber.value = '';
}

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
    let randomHexColor = getRandomHexColor(); 
    let box = `<div style="background-color: ${randomHexColor}; width: ${boxSize}px; height: ${boxSize}px"></div>`;
    allBoxes += box;
    boxSize += 10; 
  }
  boxes.innerHTML = allBoxes;
};

function destroyBoxes() {
  boxes.innerHTML = '';
  allBoxes = '';
  boxSize = 30;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}