document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');
    const confirmPasswordInput = document.getElementById('confirmPasswordInput');
    const termsCheckbox = document.getElementById('termsCheckbox');
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', function() {
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;

      if (name === '' || email === '' || password === '' || confirmPassword === '') {
        alert('Please fill in all fields.');
      } else if (!emailIsValid(email)) {
        alert('Invalid email address.');
      } else if (password !== confirmPassword) {
        alert('Passwords do not match.');
      } else if (!termsCheckbox.checked) {
        alert('Please agree to the terms and conditions.');
      } else {
        window.location.href = 'homePage_hitoyz.html';
      }
    });

    function emailIsValid(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  });

