// forgot.js
let otp;

document
  .getElementById("forgot-password-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const email = document.querySelector(
      '.input-group input[type="email"]'
    ).value;

    // Validate the email format
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // Simulate sending an OTP to the user's email
    otp = generateOTP();
    console.log("OTP sent to email:", email, "OTP:", otp); // For demonstration purposes
    alert(
      "An OTP has been sent to your email address. Please check your email."
    );

    // Display the OTP verification form
    displayOTPForm();
  });

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

function generateOTP() {
  // Generate a 6-digit OTP
  return Math.floor(100000 + Math.random() * 900000).toString();
}

function displayOTPForm() {
  const container = document.querySelector(".forgot-password-container");
  container.innerHTML = `
    <h1>Enter OTP</h1>
    <p>Enter the OTP sent to your email address</p>
    <form id="otp-form">
      <div class="input-group">
        <i class="fas fa-key"></i>
        <input type="text" placeholder="OTP" id="otp-input" required />
      </div>
      <button type="submit">Verify OTP</button>
    </form>
  `;

  document
    .getElementById("otp-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const userOTP = document.getElementById("otp-input").value;

      // Validate the entered OTP
      if (userOTP !== otp) {
        alert("Invalid OTP. Please try again.");
        return;
      }

      // Display the change password form
      displayChangePasswordForm();
    });
}

function displayChangePasswordForm() {
  const container = document.querySelector(".forgot-password-container");
  container.innerHTML = `
    <h1>Change Password</h1>
    <p>Enter your new password</p>
    <form id="change-password-form">
      <div class="input-group">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="New Password" id="new-password" required />
      </div>
      <div class="input-group">
        <i class="fas fa-lock"></i>
        <input type="password" placeholder="Confirm New Password" id="confirm-password" required />
      </div>
      <button type="submit">Change Password</button>
    </form>
  `;

  document
    .getElementById("change-password-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      const newPassword = document.getElementById("new-password").value;
      const confirmPassword = document.getElementById("confirm-password").value;

      // Validate the new passwords
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
      }

      // Simulate password change
      console.log(
        "Password changed successfully for new password:",
        newPassword
      );
      alert("Your password has been changed successfully.");

      // Clear the password input fields after submission
      document.getElementById("new-password").value = "";
      document.getElementById("confirm-password").value = "";
    });
}
