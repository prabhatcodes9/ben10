<?php
  
  $connect = mysqli_connect("localhost", "root", "", "e-voting for ben10") or die("connection failed");

  if($connect){
    echo "Connected!";
  }
  else{
    echo "Not Connected";
  }

  ?>