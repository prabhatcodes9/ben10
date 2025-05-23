document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const roll = document.getElementById('roll').value.trim();
  const password = document.getElementById('password').value;

  const studentData = JSON.parse(localStorage.getItem('studentData'));

  if (!studentData) {
    alert('No registered users found. Please register first.');
    return;
  }

  if (studentData.roll === roll && studentData.password === password) {
    alert('Login successful!');
    // Redirect or proceed
  } else {
    alert('Invalid roll number or password.');
  }
});