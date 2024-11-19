<?php
require 'config.php';

// Apagar todas as coordenadas
if (isset($_POST['apagar_historico'])) {
    $sql = "DELETE FROM tbl_gps";
    if ($db->query($sql) === TRUE) {
        $mensagem = "Nenhuma coordenada foi salva ainda.";
    } else {
        $mensagem = "Erro ao apagar o histórico: " . $db->error;
    }
}

// Obter todas as coordenadas
$sql = "SELECT * FROM tbl_gps WHERE 1";
$result = $db->query($sql);

if (!$result) {
    echo "Error: " . $sql . "<br>" . $db->error;
    exit;
}

$rows = $result->fetch_all(MYSQLI_ASSOC);
?>
<html>
<head>
    <title>Lista de links para locais no Google Maps</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #fff7ed; 
            color: #9b2c2c;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .container {
            background-color: #fff; 
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            text-align: center;
            width: 100%;
            max-width: 400px;
        }
        h1 {
            color: #7b1b1b;
            margin-bottom: 20px;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
        li {
            margin: 10px 0;
        }
        a {
            text-decoration: none;
            color: #9b2c2c;
        }
        button {
            background-color: #e53e3e;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            font-weight: 600;
        }
        button:hover {
            background-color: #9b2c2c;
        }
        .mensagem {
            margin-top: 20px;
            color: #9b2c2c;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Locais no Google Maps</h1>
        <form method="post">
            <button type="submit" name="apagar_historico">Apagar histórico</button>
        </form>
        <ul>
            <?php 
            if ($rows && count($rows) > 0) { 
                foreach ($rows as $location) { 
                    $latitude = $location['lat'];
                    $longitude = $location['lng'];
            ?>
                <li>
                    <a href="https://www.google.com/maps?q=<?php echo $latitude; ?>,<?php echo $longitude; ?>" target="_blank">
                        Ver localização (Lat: <?php echo $latitude; ?>, Lng: <?php echo $longitude; ?>)
                    </a>
                </li>
            <?php 
                } 
            } else { 
            ?>
                <p class="mensagem"><?php echo isset($mensagem) ? $mensagem : "Nenhuma coordenada foi salva ainda."; ?></p>
            <?php 
            } 
            ?>
        </ul>
    </div>
</body>
</html>
