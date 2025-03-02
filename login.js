// login.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const errorMessage = document.querySelector(".error-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const username = form.querySelector('input[type="text"]').value;
    const password = form.querySelector('input[type="password"]').value;

    // Basic client-side validation
    if (username === "" || password === "") {
      showError("Error: All fields are required");
      return;
    }

    // Simulate server-side validation
    if (username !== "admin" || password !== "password") {
      showError("Error: Invalid username or password");
      return;
    }

    // If validation passes, submit the form (this is where you would send the data to the server)
    alert("Login successful");
  });

  function showError(message) {
    errorMessage.style.display = "block";
    errorMessage.querySelector("p").textContent = message;
  }

  // Add event listeners for social login buttons
  document.querySelector(".facebook-login").addEventListener("click", () => {
    alert("Facebook login not implemented");
  });

  document.querySelector(".google-login").addEventListener("click", () => {
    alert("Google login not implemented");
  });
});
