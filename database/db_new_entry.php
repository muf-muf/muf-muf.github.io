<?php
$servername = "localhost";
$username = "root";
$password = "iNMtBB51Wv7Rr1xK";
$dbname = "kampeerbeheer";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO tenten (name_id, name, xp)
VALUES 
	('superior_dragon_bones', 'Superior Dragon Bones', 150)";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>