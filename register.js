document.getElementById('registrationForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const roll = document.getElementById('roll').value;
  const semester = document.getElementById('semester').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  const rollPattern = /^IITP\d{6}$/;
  if (!rollPattern.test(roll)) {
    alert("Roll Number must be in the format IITP followed by 6 digits (e.g. IITP002599).");
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  const studentData = {
    email,
    roll,
    semester,
    password
  };

  localStorage.setItem('studentData', JSON.stringify(studentData));

  alert("Registration Successful!");
  this.reset();
});