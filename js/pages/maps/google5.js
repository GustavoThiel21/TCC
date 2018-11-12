$(function () {
     //Markers
    var markers = new GMaps({
        div: '#gmap_markers5',
        lat: -26.921762,
        lng: -53.003835,
        zoom: 17
        
    });
    
    markers.addMarker({
        lat: -26.9220108,
        lng: -53.0045653,
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