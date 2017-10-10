// Map
var map;
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13 // up to level 21 of zooming
  });

  // Marker: Tribeca
  var tribeca = {lat: 40.719526, lng: -74.0089934};
  var marker = new google.maps.Marker({
    position: tribeca,
    map: map,
    title: 'First Marker!'
  });

  // InfoWindow: Greeting!
  var infoWindow = new google.maps.infoWindow({
    content: "Hello"
  });
  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
}
