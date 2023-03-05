const loginForm = document.querySelector(".login-form");

function callSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all fields");
  }

  const data = { email: email.value, password: password.value };
  console.log(data);
  event.currentTarget.reset();
}

loginForm.addEventListener("submit", callSubmit);