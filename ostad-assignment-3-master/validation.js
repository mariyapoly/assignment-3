// 9.JS DOM Working with Form Input:

const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const errorMessagesDiv = document.getElementById('errorMessages');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Clear previous error messages
  errorMessagesDiv.innerHTML = '';

  // Perform form field validation
  let isValid = true;

  // Validate name
  const nameValue = nameInput.value.trim();
  if (nameValue === '') {
    displayErrorMessage('Name is required');
    isValid = false;
  } else if (!/^[a-zA-Z]+$/.test(nameValue)) {
    displayErrorMessage('Name should contain only letters');
    isValid = false;
  }

  // Validate email
  const emailValue = emailInput.value.trim();
  if (emailValue === '') {
    displayErrorMessage('Email is required');
    isValid = false;
  } else if (!isValidEmail(emailValue)) {
    displayErrorMessage('Invalid email address');
    isValid = false;
  }

  // Validate password
  const passwordValue = passwordInput.value.trim();
  if (passwordValue === '') {
    displayErrorMessage('Password is required');
    isValid = false;
  } else if (!isValidPassword(passwordValue)) {
    displayErrorMessage('Invalid password');
    isValid = false;
  }

  // Validate confirm password
  const confirmPasswordValue = confirmPasswordInput.value.trim();
  if (confirmPasswordValue === '') {
    displayErrorMessage('Confirm Password is required');
    isValid = false;
  } else if (passwordValue !== confirmPasswordValue) {
    displayErrorMessage('Passwords do not match');
    isValid = false;
  }

  if (isValid) {
    // Submit the form or perform further actions
    console.log('Form submitted successfully');
  }
});

function displayErrorMessage(message) {
  const errorMessage = document.createElement('p');
  errorMessage.textContent = message;
  errorMessagesDiv.appendChild(errorMessage);
}

function isValidEmail(email) {
  // Email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function isValidPassword(password) {
  // Password validation regex patterns
  const lengthPattern = /.{8,}/;
  const uppercasePattern = /[A-Z]/;
  const lowercasePattern = /[a-z]/;
  const digitPattern = /\d/;

  return (
    lengthPattern.test(password) &&
    uppercasePattern.test(password) &&
    lowercasePattern.test(password) &&
    digitPattern.test(password)
  );
}