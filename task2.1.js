document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    var requiredFields = document.querySelectorAll('[required]');
    for (var i = 0; i < requiredFields.length; i++) {
      if (!requiredFields[i].value.trim()) {
        alert('Please fill out all required fields');
        return;
      }
    }
    if (!validateInputFormat()) {
      return;
    }
    if (username.value.length !== 8) {
      alert('Username must be 8 characters long');
      return;
    }
    if (!isAlphabet(password.value)) {
      alert('Password must be numeric');
      return;
    }
    var birthday = document.getElementById('Birthday').value;
    if (!isValidDate(birthday)) {
      alert('Invalid date format for Birthday');
      return;
    }
    var usernamePattern = /^[a-zA-Z0-9]+$/;
    if (!usernamePattern.test(username.value)) {
      alert('Username can only contain alphanumeric characters');
      return;
    }

    alert('Validation successful! Form submitted.');
  });
  function isNumeric(value) {
    return /^\d+$/.test(value);
  }
  function isValidDate(dateString) {
    var regex = /^\d{4}-\d{2}-\d{2}$/;
    return regex.test(dateString);
  }
  function validateInputFormat() {
    return true;
  }