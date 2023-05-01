const form = document.getElementById("checkout-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const cardInput = document.getElementById("card");

// Regular expressions for validation
const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\d{10}$/;
const cardRegex = /^\d{16}$/;

// Function to validate the form inputs
function validateForm() {
    let isValid = true;

    if (!nameRegex.test(nameInput.value)) {
        document.getElementById("name-error").textContent = "Please enter a valid name";
        isValid = false;
    } else {
        document.getElementById("name-error").textContent = "";
    }

    if (!emailRegex.test(emailInput.value)) {
        document.getElementById("email-error").textContent = "Please enter a valid email";
        isValid = false;
    } else {
        document.getElementById("email-error").textContent = "";
    }

    if (!phoneRegex.test(phoneInput.value)) {
        document.getElementById("phone-error").textContent = "Please enter a valid phone number";
        isValid = false;
    } else {
        document.getElementById("phone-error").textContent = "";
    }

    if (!cardRegex.test(cardInput.value)) {
        document.getElementById("card-error").textContent = "Please enter a valid card number";
        isValid = false;
    } else {
        document.getElementById("card-error").textContent = "";
    }

    return isValid;
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    if (validateForm()) {
        // Code to submit the form data to the server
        console.log("Form submitted successfully!");
    } else {
        console.log("Form validation failed!");
    }
}

// Add event listener to the form submit button
form.addEventListener("submit", handleSubmit);
