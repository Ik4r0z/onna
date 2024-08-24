<?php 
define('DB_HOST', 'localhost'); 
define('DB_USERNAME', 'root'); 
define('DB_PASSWORD', 'U1de8JA87Rrb'); 
define('DB_NAME', 'gps');

date_default_timezone_set('America/Sao_Paulo');

// Conecta com o banco de dados
$db = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME); 
 
// Exibir erro se não conseguir conectar
if ($db->connect_errno) { 
    echo "A conexão com o banco de dados falhou: ".$db->connect_error;
    exit();
}