const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", (event) => {
  console.log(validationInput.value.length);
  if (validationInput.value.length === 6) {
    validationInput.classList.add("valid");
    validationInput.classList.remove("invalid");
    console.log(validationInput.classList);
  } else {
    validationInput.classList.add("invalid");
    console.log(validationInput.classList);
  }
});