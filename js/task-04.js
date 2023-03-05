let counterValue = 0;
const subtraction = document.querySelector("button[data-action='decrement']");
const addition = document.querySelector("button[data-action='increment']");
const myValue = document.querySelector("#value");
const countSubtraction = function () {
  counterValue -= 1;
  myValue.textContent = counterValue;
};

const countAddition = function () {
  counterValue += 1;
  myValue.textContent = counterValue;
};

subtraction.addEventListener("click", countSubtraction);
addition.addEventListener("click", countAddition);
