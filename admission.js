document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("admission-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const requiredFields = [
      "submission-code",
      "name",
      "gender",
      "district",
      "mobile",
      "email",
      "guardian-is",
      "guardian-phone",
      "guardian-name",
    ];
    let isValid = true;

    requiredFields.forEach((field) => {
      if (!formData.get(field)) {
        isValid = false;
        alert(`Please fill in the required field: ${field}`);
      }
    });

    if (!isValid) return;

    fetch("your-submission-endpoint-url", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          const newWindow = window.open("", "_blank");
          newWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <title>Submission Successful</title>
              <style>
                body {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  height: 100vh;
                  font-family: "Arial", sans-serif;
                  background-color: #f9f9f9;
                  color: #333;
                  margin: 0;
                }
                .container {
                  text-align: center;
                  padding: 20px;
                  background: white;
                  border-radius: 8px;
                  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                }
                h1 {
                  color: #003366;
                }
                p {
                  font-size: 1.2rem;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <h1>Submission Successful!</h1>
                <p>Thank you for submitting the admission form. Your submission code is: ${formData.get(
                  "submission-code"
                )}</p>
              </div>
            </body>
            </html>
          `);
        } else {
          alert("Form submission failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        alert(
          "An error occurred during form submission. Please try again later."
        );
      });
  });
});
