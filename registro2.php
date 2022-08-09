<?php


include ("conec.php");

if(isset($_POST['btn-register'])){
    if(strlen($_POST['email2']) >= 1 && strlen($_POST['usuario2']) >= 1 && strlen($_POST['clave2']) >= 1){
        $email2 = trim ($_POST['email2']);
        $usuario2 = trim ($_POST['usuario2']);
        $clave2 = trim ($_POST['clave2']);
        $consulta="INSERT INTO registros( email, usuario, clave) VALUES ('$email2','$usuario2','$clave2')";
        $resultado2 = mysqli_query($conexion, $consulta);
        
if($resultado2) {
    echo "exito";
}else{

    ?>
    <script > 
alert("Fallo al momento de registrar");
</script>
    <?php
}

    }
}
?>