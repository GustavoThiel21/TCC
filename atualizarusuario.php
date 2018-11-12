<?php

include "conecta.php";

$codigo=$_POST["codigo"];
$nome = $_POST["nome"];
$nome=preg_replace( '/[`^~\'"]/', null, iconv( 'UTF-8', 'ASCII//TRANSLIT', $nome ) );
$telefone =$_POST["telefone"];
$email =$_POST["email"];
$usuario = $_POST["usuario"];
$senha =$_POST["senha"];


$update= mysql_query("update usuario set idusuario='$codigo',login='$usuario',senha='$senha',nome='$nome',email='$email',telefone='$telefone' where idusuario='$codigo'") or die ("ERRO");
if ($update != ''){

    session_start();	
    $_SESSION['usuario']= $usuario;   

echo "<script>alert('Usuario Atualizado com Sucesso');</script>";
echo "<script>window.location ='perfil.php';</script>"; 
         
            }					
else{
				
echo "<script>alert('Erro ao atualizar os dados');</script>";	
echo "<script>window.location ='perfil.php';</script>";
            		
				}





?>
