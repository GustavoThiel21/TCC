$(function () {
     //Markers
    var markers = new GMaps({
        div: '#gmap_markers2',
        lat: -26.921762,
        lng: -53.003835,
        zoom: 17
    });
    
    markers.addMarker({
        lat: -26.9217185,
        lng: -53.0033865,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        }
    });

    
    
   /* markers.addMarker({
        lat: -26.921762,
        lng: -53.003835,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>HTML Content</p>'
        }
    });*/

});