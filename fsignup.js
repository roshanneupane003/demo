// signup.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const username = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Basic client-side validation
    if (username === "" || email === "" || password === "") {
      showError("Error: All fields are required");
      return;
    }

    if (!validateEmail(email)) {
      showError("Error: Invalid email address");
      return;
    }

    // Simulate server-side validation
    if (username.length < 4 || password.length < 6) {
      showError(
        "Error: Username must be at least 4 characters and password must be at least 6 characters"
      );
      return;
    }

    // If validation passes, submit the form (this is where you would send the data to the server)
    alert("Sign up successful");
  });

  function showError(message) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.textContent = message;
    form.appendChild(errorMessage);

    setTimeout(() => {
      errorMessage.remove();
    }, 3000);
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
});
