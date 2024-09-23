<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Conexion</title>
</head>
<body>
    <?php
        $enlace = mysqli_connect("localhost","root","","hola");
        if(!$enlace){
            echo "no se pudo";
            die("error");
        }
        echo "hola";
        echo "si se pudo";
        echo( mysqli_query($enlace, "select * from usuarios")); 
        mysqli_close($enlace);

    ?>
</body>
</html>