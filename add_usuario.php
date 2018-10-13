<?php

include 'conecta.php';

$usuario = $_POST["usuario"];
$senha =$_POST["senha"];
$nome = $_POST["nome"];
$nome=preg_replace( '/[`^~\'"]/', null, iconv( 'UTF-8', 'ASCII//TRANSLIT', $nome ) );
$email =$_POST["email"];
$telefone =$_POST["telefone"];

$consulta = mysql_query("select * from usuario where login = '$usuario'");
$linha = mysql_num_rows($consulta);
if ($linha != 0) {
    echo "<script>alert('Usuário já cadastrado!');</script>";
    echo "<script>window.location='basic-form-elements.php'</script>";
} else {
$sql = "insert into usuario(login,senha,nome,email,telefone) values(
'$usuario', '$senha', '$nome','$email','$telefone')";
if (mysql_query($sql)) {
        echo "<script>alert('Cadastro efetuado com sucesso');</script>";
    } else {
        echo "<script>alert('Erro ao efetuar cadastro');</script>";
    }
    session_start();	
    $_SESSION['usuario']= $usuario;
     
   echo "<script>window.location='index.php'</script>";
}

?>
