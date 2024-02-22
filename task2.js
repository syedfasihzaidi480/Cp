document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if (username.value.length !== 8) {
      alert('Username must be 8 characters long');
      return;
    }
    if (!isNumeric(password.value)) {
      alert('Password must be numeric');
      return;
    }
    var username = /^[a-zA-Z0-9]+$/;
    if (!username.test(username.value)) {
      alert('Username can only contain alphanumeric characters');
      return;
    }
    alert('Validation successful! Form submitted.');
  });
  function isAlphabet(value) {
    return /^\d+$/.test(value);
  }
  function thoroughTesting() {
    testValidation('short', '123'); 
    testValidation('longuser', '123456');
    testValidation('validuser', '123abc');
    testValidation('anotheruser', 'abc');
    testValidation('user$123', '123456');
    testValidation('validuser', '123456');
    testValidation('', '');
    testValidation('validuser', '123456');
  }
  function testValidation(username, password) {
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    username.value = username;
    password.value = password;
    document.getElementById('signinForm').submit();
  } 