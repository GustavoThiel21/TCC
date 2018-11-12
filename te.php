<!DOCTYPE html>
<html>
  <head>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <title>Simple Polylines</title>
    <style>
      /* Always set the map height explicitly to define the size of the div
       * element that contains the map. */
      
      /* Optional: Makes the sample page fill the window. */
      html, body {
        height: 100%;
        margin: 0;
        padding: 0;
      }
    </style>
  </head>
  <body>
  <?php
   //include "relatorio.php";  
  ?>
  <div id="map" style="height: 100%;"></div>
    <script>

      // This example creates a 2-pixel-wide red polyline showing the path of
      // the first trans-Pacific flight between Oakland, CA, and Brisbane,
      // Australia which was made by Charles Kingsford Smith.

      function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: {lat: -26.921762, lng: -53.003835}
        });

        var flightPlanCoordinates = [
          {lat: -26.921762, lng: -53.003835},
          {lat: -26.9217185, lng: -53.0033865},
          {lat: -26.9211562, lng: -53.0035407},
          {lat: -26.9213589, lng: -53.0047367},
          {lat: -26.9220108, lng: -53.0045653},
          {lat: -26.9218846, lng: -53.0038935}
        ];
        var flightPath = new google.maps.Polyline({
          path: flightPlanCoordinates,
          geodesic: true,
          strokeColor: '#FF0000',
          strokeOpacity: 1.0,
          strokeWeight: 2
        });

        flightPath.setMap(map);

        flightPath.addMarker({
        lat: -26.921762,
        lng: -53.003835,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        infoWindow: {
            content: '<p>Início</p>'
        },
        //animation: google.maps.Animation.DROP,
        label: '1º'
    });
      }
    </script>
    <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgk7MxorTEmATR3tRHq3irI_G2PdkgRF4&callback=initMap">
    </script>
  </body>
</html>