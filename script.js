document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", function (event) {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    const isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username must be at least 3 characters long");
    }

    if (email.includes("@") && email.includes(".")) {
      return;
    } else {
      isValid = false;
      messages.push("Email must contain an '@' and a '.' sign");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password must be at least 8 characters long");
    }
    feedbackDiv.style.display = "block";
    if (isValid) {
      feedbackDiv.style.color = "#28a745";
      feedbackDiv.textContent = "Registration successful";
    } else {
      feedbackDiv.style.color = "#dc3545";
      feedbackDiv.innerHTML = messages.join("<br>");
    }
  });
});
