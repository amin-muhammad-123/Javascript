<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
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
    $query= mysqli_query($conn,"select * from customers");

    if(!$query){
        die(mysqli_error($conn));   
    }
    else {echo "<br/>" . "your query is running";
    }
    }


    ?>


</body>
</html>