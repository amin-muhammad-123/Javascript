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
$query = "SELECT * from categories";
$result = mysqli_query($conn,$query);
if (!$result) {
    die (mysqli_error($conn));
}
else echo "<br/>" . "DATA IS FETCH";

echo "<table border = '2'>"

while ($row = mysqli_fetch_array($result)) {
    echo "<br/>" . $row ['CategoryID']. " " . $row['CategoryName']. " " . $row['Description'];
}
}
echo "</table>";
?>