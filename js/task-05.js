const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", () => {
  if (nameInput.value === "") {
    output.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});