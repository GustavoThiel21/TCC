/*$(function () {
     //Markers
    var markers = new GMaps({
        div: '#gmap_markers1',
        lat: -26.921762,
        lng: -53.003835,
        zoom: 17
    });
    
    markers.addMarker({
        lat: -26.921762,
        lng: -53.003835,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        }
    });
 
    var path = [
        [-26.921762, -53.003835],
        [-26.9217185, -53.0033865],
        [-26.9211562, -53.0035407],
        [-26.9213589, -53.0047367],
        [-26.9220108, -53.0045653],
        [-26.9218846, -53.0038935]
      ];
  
      var staticMapPolyline = GMaps({
          size: [$('#gmap_static_map_polyline').width(), 400],
          lat: -12.043333,
          lng: -77.028333,
  
          polyline: {
              path: path,
              strokeColor: '#131540',
              strokeOpacity: 0.6,
              strokeWeight: 6
              // fillColor: '#ffaf2ecc'
          }
      });
  
      $('<img/>').attr('src', staticMapPolyline).appendTo('#gmap_static_map_polyline');
  
});*/$(function () {
    //Basic Map
    var basicMap = new GMaps({
        el: '#gmap_basic_example',
        lat: -12.043333,
        lng: -77.028333
    });

    //Markers
    var markers = new GMaps({
        div: '#gmap_markers',
        lat: -12.043333,
        lng: -77.028333
    });
    markers.addMarker({
        lat: -12.043333,
        lng: -77.03,
        title: 'Lima',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        click: function (e) {
            if (console.log)
                console.log(e);
            alert('You clicked in this marker');
        }
    });
    markers.addMarker({
        lat: -12.042,
        lng: -77.028333,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>HTML Content</p>'
        }
    });

    //Static maps
    var staticMap = GMaps.staticMapURL({
        size: [$('#gmap_static_map').width(), 400],
        lat: -12.043333,
        lng: -77.028333
    });

    $('<img/>').attr('src', staticMap).appendTo('#gmap_static_map');

    //Static maps with markers
    var staticMapWithMarkers = GMaps.staticMapURL({
        size: [$('#gmap_static_map_with_markers').width(), 400],
        lat: -12.043333,
        lng: -77.028333,
        markers: [
            { lat: -12.043333, lng: -77.028333 },
            {
                lat: -12.045333, lng: -77.034,
                size: 'small'
            },
            {
                lat: -12.045633, lng: -77.022,
                color: 'blue'
            }
        ]
    });

    $('<img/>').attr('src', staticMapWithMarkers).appendTo('#gmap_static_map_with_markers');

    //Static maps with polyline
    var path = [
        [-12.040397656836609, -77.03373871559225],
        [-12.040248585302038, -77.03993927003302],
        [-12.050047116528843, -77.02448169303511],
        [-12.044804866577001, -77.02154422636042],
        [-12.040397656836609, -77.03373871559225],
    ];

    var staticMapPolyline = GMaps.staticMapURL({
        size: [$('#gmap_static_map_polyline').width(), 400],
        lat: -12.043333,
        lng: -77.028333,

        polyline: {
            path: path,
            strokeColor: '#131540',
            strokeOpacity: 0.6,
            strokeWeight: 6
            // fillColor: '#ffaf2ecc'
        }
    });

    $('<img/>').attr('src', staticMapPolyline).appendTo('#gmap_static_map_polyline');

    //Panorama
    var panorama = GMaps.createPanorama({
        el: '#gmap_panorama',
        lat: 42.3455,
        lng: -71.0983
    });
});