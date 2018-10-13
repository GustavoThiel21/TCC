<?php
include "conecta.php";
$usuario=$_POST["usuario"];
$senha=$_POST["senha"];
$consulta = mysql_query("select * from  usuario where login= '$usuario' and senha='$senha'");
	$linha = mysql_num_rows($consulta);
	if($linha==0) {
		echo"<script>alert('Usuario ou senha Invalidos');</script>";
    echo "<script>window.location ='sign-in.php';</script>";
    }
 	else{
 	
 	 	$consulta1 ="select login from  usuario where login= '$usuario' and senha='$senha'";
 	 $editar1 =mysql_query($consulta1);
  list($usuario)=@mysql_fetch_row($editar1);
  
 
  session_start();	
 	$_SESSION['usuario']= $usuario;
 	 
	 header("Location:index.php");
	  }
     
?>