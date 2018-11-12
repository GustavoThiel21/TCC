$(function () {
     //Markers
    var markers = new GMaps({
        div: '#gmap_markers3',
        lat: -26.921762,
        lng: -53.003835,
        zoom: 17
        
    });
    
    markers.addMarker({
        lat: -26.9211562,
        lng: -53.0035407,
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