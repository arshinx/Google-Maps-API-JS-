// Map
var map;

// Create a new blank array for all the listing markers.
var markers = [];

function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.7413549, lng: -73.9980244},
    zoom: 13 // up to level 21 of zooming
  });

  // These are the real estate listings that will be shown to the user.
  // Normally we'd have these in a database instead.
  var locations = [
    {title: 'Park Ave Penthouse', location: {lat: 40.7713024, lng: -73.9632393}},
    {title: 'Chelsea Loft', location: {lat: 40.7444883, lng: -73.9949465}},
    {title: 'Union Square Open Floor Plan', location: {lat: 40.7347062, lng: -73.9895759}},
    {title: 'East Village Hip Studio', location: {lat: 40.7281777, lng: -73.984377}},
    {title: 'TriBeCa Artsy Bachelor Pad', location: {lat: 40.7195264, lng: -74.0089934}},
    {title: 'Chinatown Homey Space', location: {lat: 40.7180628, lng: -73.9961237}}
  ];

  // Marker: Tribeca
  var tribeca = {lat: 40.719526, lng: -74.0089934};
  var marker = new google.maps.Marker({
    position: tribeca,
    map: map,
    title: 'First Marker!'
  });

  // InfoWindow: Greeting!
  var infoWindow = new google.maps.InfoWindow({
    content: 'Hello'
  });
  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
}
