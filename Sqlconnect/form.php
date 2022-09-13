<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

<form action="" method="post">
<input type="text" name="name" placeholder="enter your name"><br><br>
<input type="text" name="fname" placeholder="enter your father name"><br><br>
<input type="text" name="qualification" placeholder="enter your qualification"><br><br>
<input type="number" name="age" placeholder="enter your age"><br><br>
<input type="email" name="email" placeholder="enter your email"><br><br>
<input type="password" name="pwd" placeholder="enter your password"><br><br>
<input type="submit" value="submit"><br><br>
</form>

<?php
$server= "localhost";
$user= "root";
$pwd= "";
$dbname= "w3schools";
$conn = mysqli_connect($server,$user,$pwd,$dbname);

if(!$conn){
    die(mysqli_error($conn));
}

else { echo "connection is established";
$name = $_POST['name'];
$sqlquery = "INSERT INTO ud(name) VALUES ('$name')";
$query= mysqli_query($conn,$sqlquery);

if(!$query){
    die(mysqli_error($conn));   
}
else {echo "<br/>" . "your query is running";
}
}
?>
</body>
</html>