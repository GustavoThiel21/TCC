$(function () {
    //Basic Map
    /*var basicMap = new GMaps({
        el: '#gmap_basic_example',
        lat: -26.921762, 
        lng: -53.003835
    });*/

    //Markers
    var markers = new GMaps({
        div: '#gmap_markers',
        lat: -26.921762,
        lng: -53.003835
    });
    markers.addMarker({
        lat: -26.921762,
        lng: -53.003835,
        title: 'Localização',
        details: {
            database_id: 42,
            author: 'HPNeo'
        },
    });
    sleep(1);

    markers.addMarker({
        lat: -26.921762,
        lng: -53.003835,
        title: 'Marker with InfoWindow',
        infoWindow: {
            content: '<p>HTML Content</p>'
        }
    });

});