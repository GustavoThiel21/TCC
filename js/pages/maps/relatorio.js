$(function () {
     //Markers

     var markers = new GMaps({
        div: '#gmap_static_map_polyline',
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
        },
        infoWindow: {
            content: '<p>Início</p>'
        },
        //animation: google.maps.Animation.DROP,
        label: '1º'
    });

    markers.addMarker({
        lat: -26.9217185,
        lng: -53.0033865,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
       // animation: google.maps.Animation.DROP,
        label: '2º'
    });

    markers.addMarker({
        lat: -26.9211562,
        lng: -53.0035407,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        //animation: google.maps.Animation.DROP,
        label: '3º'
    });

    markers.addMarker({
        lat: -26.9213589,
        lng: -53.0047367,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        //animation: google.maps.Animation.DROP,
        label: '4º'
    });
    
    markers.addMarker({
        lat: -26.9220108,
        lng: -53.0045653,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
        //animation: google.maps.Animation.DROP,
        label: '5º'
    });
//Static maps with polyline

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

});