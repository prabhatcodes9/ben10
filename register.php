<?php
   include("connect.php");

   $name = $_POST['name'];
   $email = $_POST['email'];
   $roll = $_POST['roll'];
   $semester = $_POST['semester'];
   $password = $_POST['password'];
   $confirmPassword = $_POST['confirmPassword'];

   if ($password == $confirmPassword) {
     // Use backticks for table name with special characters or rename the table
     $insert = mysqli_query($connect, "INSERT INTO `voter's list` (Name, `E-mail`, username, Role, Password, Status) VALUES ('$name', '$email', '$roll', '$semester', '$password', 0)");

     if ($insert) {
       echo '
         <script>
              alert("Registration successful!");
              window.location = "../index.html";
         </script>
       ';
     } else {
       echo '
         <script>
              alert("Error occurred during registration!");
              window.location = "../registration/register.html";
         </script>
       ';
     }

   } else {
     echo '
       <script>
            alert("Password and Confirm Password do not match!");
            window.location = "../registration/register.html";
       </script>
     ';
   }
?>
