<?php
//erro: erro da API JavaScript do Google Maps: ApiNotActivatedMapError
//solução: clique no link "APIs e serviços"
//          clique no botão "Ativar APIs e serviços"
//			    Selecione "API Maps JavaScript" e clique em ativar

require 'config.php';

$sql = "SELECT * FROM tbl_gps WHERE 1";
$result = $db->query($sql);
if (!$result) {
  { echo "Error: " . $sql . "<br>" . $db->error; }
}

$rows = $result -> fetch_all(MYSQLI_ASSOC);

//print_r($row);

//header('Content-Type: application/json');
//echo json_encode($rows);


?>
<html>
<head>
<title>Adicione marcadores para mostrar locais no Google Maps</title>
</head>
<style>
body {
	font-family: Arial;
}

#map-layer {
	margin: 20px 0px;
	max-width: 700px;
	min-height: 400;
}
</style>
<body>
	<h1>Adicione marcadores para mostrar locais no Google Maps</h1>
	<div id="map-layer"></div>

	<script
		src="https://maps.googleapis.com/maps/api/js?key=ENTER_API_KEY&callback=initMap"
		async defer></script>
		
        <script>
      var map;
      function initMap() {
        
        var mapLayer = document.getElementById("map-layer");
		var centerCoordinates = new google.maps.LatLng(-33.890541, 151.274857);
		var defaultOptions = { center: centerCoordinates, zoom: 10 }

		map = new google.maps.Map(mapLayer, defaultOptions);


<?php foreach($rows as $location){ ?>
        var location = new google.maps.LatLng(<?php echo $location['lat']; ?>, <?php echo $location['lng']; ?>);
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
    <?php } ?>
        
      }
    </script>
</body>
</html>