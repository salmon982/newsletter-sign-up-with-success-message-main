const form = document.querySelector("#form");
const errorMessage = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorMessage.textContent = '';
  errorMessage.style.display = "none";

  let email = document.querySelector("#email");
  email.classList.remove("input-error");

  if (email.value.trim() === '' || !emailValid(email.value)) {
    errorMessage.style.display = 'block';
    errorMessage.textContent = "Valid email required";
    email.classList.add("input-error");
    return false;
  } else {
    const successURL = `./success.html?email=${encodeURIComponent(email.value)}`;
    window.location.href = successURL;
  }

  function emailValid(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
