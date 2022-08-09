<?php

include ("conec.php");
$email= $_POST['email'];
$clave= $_POST['clave'];

$consulta1="SELECT * FROM resgistros WHERE email='$email' and  clave ='$clave'";
$resultado = mysqli_query($conexion, $consulta1);

$filas=mysqli_num_rows($resultado);
if($filas > 0) {
    header("location:pokedex.html");
}else{ ?>
    <script > 
alert("Fallo al momento de iniciar sesión");
</script>
    <?php
}

mysqli_free_result($resultado);
mysqli_close($conexion);

?>