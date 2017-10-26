// *** Map ***
var map, panorama;
var isMenuHidden = false;
var wikiTitle = ko.observable();
var wikiDesc  = ko.observable();
var wikiLink  = ko.observable(); // Properties for Wiki Data

// Create a new blank array for all the listing markers.
var markers = [];

function initMap() {

  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: locations[0].location,
    zoom: 13, // up to level 21 of zooming
    styles: styles,
    mapTypeControl: false // Allows changing map type to roads, etc.
  });

  // InfoWindow and bounds
  var largeInfowindow = new google.maps.InfoWindow();

  // Default Icon
  var defaultIcon = makeMarkerIcon('0091ff');

  // Highlighted Icon for hover
  var highlightedIcon = makeMarkerIcon('FFFF24');

  // The following group uses the location array to create an array of markers on initialize.
  for (var i = 0; i < locations.length; i++) {
    // Get the position from the location array.
    var position = locations[i].location;
    var title = locations[i].title;

    // Create a marker per location, and put into markers array.
    var marker = new google.maps.Marker({
      map: map,
      position: position,
      title: title,
      icon: defaultIcon,
      animation: google.maps.Animation.DROP,
      id: i
    });
    // Push the marker to our array of markers.
    markers.push(marker);
    // Create an onclick event to open an infowindow at each marker.
    marker.addListener('click', function() {
      populateInfoWindow(this, largeInfowindow);
    });

    // Change Icon when Hover Begins
    marker.addListener('mouseover', function() {
      this.setIcon(highlightedIcon);
    });

    // Change Icon when Hover Ends
    marker.addListener('mouseout', function() {
      this.setIcon(defaultIcon);
    });

    // document.getElementById('show-listings').addEventListener('click', showListings);
    // document.getElementById('hide-listings').addEventListener('click', hideListings);
    // *** Menu Button ***
    // document.getElementById('menu').addEventListener('click', hideMenu);
  }

  // *************** //
  // *** Helpers *** //
  // *************** //

  // This function populates the infowindow when the marker is clicked. We'll only allow
  // one infowindow which will open at the marker that is clicked, and populate based
  // on that markers position.
  function populateInfoWindow(marker, infowindow) {
    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker != marker) {
      // Marker
      infowindow.marker = marker;
      // Wikipedia API
      var search = marker.title;

      // Store Wiki Properties for use


      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker.setAnimation(null);
        infowindow.marker = null;
      });

      // *** Google Street View Service ***
      var streetViewService = new google.maps.StreetViewService();
      var radius = 50;
      // In case the status is OK, which means the pano was found, compute the
      // position of the streetview image, then calculate the heading, then get a
      // panorama from that and set the options
      function getStreetView(data, status) {
        if (status == google.maps.StreetViewStatus.OK) {
          var nearStreetViewLocation = data.location.latLng;
          var heading = google.maps.geometry.spherical.computeHeading(
            nearStreetViewLocation, marker.position);
            marker.setAnimation(google.maps.Animation.BOUNCE); // Bounce animation for markers
            var wikiInfo = '<br>Learn more about:<br><a target="_blank" href="' + wikiLink() + '">' + wikiTitle() + '!</a></div>';
            infowindow.setContent(
              "<h2>" +
                marker.title +
                '</h2><div id="pano"></div>' +
                '<div><br>Learn more about: <a target="_blank" href="' +
                wikiLink() +
                '"><strong>' +
                wikiTitle() +
                "</strong></a></div>"
            );
            // console.log(marker.title + " " + wikiTitle() + " " + wikiDesc() + wikiLink()); // debugging
            var panoramaOptions = {
              position: nearStreetViewLocation,
              pov: {
                heading: heading,
                pitch: 30
              }
            };

            console.log(document.getElementById('pano'));
            panorama = new google.maps.StreetViewPanorama(
              document.getElementById('pano'), panoramaOptions
            );
        } else {
          infowindow.setContent('<div>' + marker.title + '</div>' +
            '<div>No Street View Found</div>');
        }
      }

      // Search Wiki for location data
      var searchWiki = function(search) {
        $.ajax({
                url: "http://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=wikiCallback&limit=10&search=" + search,
                dataType: "jsonp",
            })
            .done(function(response) {
              if (response[0] !== 'undefined') {
                wikiTitle = ko.observable(response[0]);
                wikiDesc  = ko.observable(response[2][0]);
                wikiLink  = ko.observable(response[3][0]);

                if (wikiDesc() === "undefined") {
                  wikiDesc = ko.observable("No description found.");
                } else {
                  wikiDesc = ko.observable(wikiDesc() + " — Source: wikipedia.org");
                }
                infowindow.setContent(
                  "<h2>" +
                    marker.title +
                    '</h2><div id="pano"></div>' +
                    '<div><br>Learn more about: <a target="_blank" href="' +
                    wikiLink() +
                    '"><strong>' +
                    wikiTitle() +
                    '</strong></a><br><br><a class="min-width">' + wikiDesc() + "</a></div>"
                );
              }
            })
            .fail(function(response) {
                wikiTitle = ko.observable("Failed to load Wikipedia API");
                infowindow.setContent(
                  "<h2>" +
                    marker.title +
                    '</h2><div id="pano"></div>' +
                    '<div><br>Learn more about: <a target="_blank" href="' +
                    '"><strong>' +
                    "</strong>(Error Loading)</a></div>"
                );
            });
      };

      console.log(wikiDesc());

      // Use streetview service to get the closest streetview image within
      // 50 meters of the markers position
      streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
      console.log(marker.content);
      //marker.setContent(marker.content);
      searchWiki(search);
      // Open the infowindow on the correct marker.
      infowindow.open(map, marker);
    }
  }

  // This function will loop through the markers array and display them all.
  function showListings() {
    var bounds = new google.maps.LatLngBounds();
    // Extend the boundaries of the map for each marker and display the marker
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
      bounds.extend(markers[i].position);
    }
    map.fitBounds(bounds);
  } // Ends function

  // This function will loop through the listings and hide them all.
  function hideListings() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
      markers[i].setAnimation(null);
    }
  } // Ends function

  // This function takes in a COLOR, and then creates a new marker
  // icon of that color. The icon will be 21 px wide by 34 high, have an origin
  // of 0, 0 and be anchored at 10, 34).
  function makeMarkerIcon(markerColor) {
    var markerImage = new google.maps.MarkerImage(
      'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
      '|40|_|%E2%80%A2',
      new google.maps.Size(21, 34),
      new google.maps.Point(0, 0),
      new google.maps.Point(10, 34),
      new google.maps.Size(21,34));
    return markerImage;
  }

  // This function will hide the menu.
  function hideMenu() {

    var options_box = $('.options-box');
    var container   = $('.container');
    var map_element = $('#map');
    var menu        = $('#menu')

    if (container.css('left') < '0') {
      map_element.css('left', '+50%');
      map_element.css('width', '50%');
      //container.css('left', '0');
      //options_box.css('display', 'none');
    } else {
      //container.css('left', '-25%');
      map_element.css('left', '0');
      menu.css('left', '12%');
      map_element.css('width', '100%');
      //options_box.css('display', 'auto');
    };
  } // Ends function

}
