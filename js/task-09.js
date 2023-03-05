function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btn = document.querySelector("button.change-color");
const backgroundColor = document.querySelector("span.color");
const body = document.querySelector("body");

btn.addEventListener("click", changeColor);

function changeColor() {
  const color = getRandomHexColor();
  body.setAttribute("style", `background-color:${color}`);
  backgroundColor.textContent = color;
}