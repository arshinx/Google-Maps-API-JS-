// View Model using Knockout
function WaterfallMapModel() {
  var self = this;

  // Properties
  self.waterfallsList = ko.observableArray();
  self.selection      = ko.observable();
  self.state          = ko.observable();

  // Functions

  // -- Waterfalls list -- //
  locations.forEach(function(value, key){
    // Populate list
    self.waterfallsList.push(locations[key]);
  });

  // Select
  // Select the button and the marker for pop-up
    self.select = function() {

      // select
      self.selection(this.title);

      // trigger info-window
      locations.forEach(function(value, key) {
          if (value.title === self.selection()) {
            // trigger click-event
              google.maps.event.trigger(markers[key], 'click');
          }
      });
    }; // Ends function

  // -- Filter List of Waterfalls -- //
  self.filter = function() {

    // Reset list and markers — display
    self.waterfallsList.removeAll();
    locations.forEach(function(value, key){
      // Populate list
      self.waterfallsList.push(locations[key]);
      markers[key].setVisible(true);
    });
    var a;

    // Filter listings/markers — hide
    locations.forEach(function(value, key){
      // Validate whether all elements are selected
      if (self.state() !== 'Select All') {
        if (value.region !== self.state()) {
          // Update list
          a = self.waterfallsList.remove(value);
          markers[key].setVisible(false);
        }
      }
    });
  }; // Ends Function

  // Menu (unused)
  var menu = function() {

  }; // Ends function

}

// Bind Model (KnockoutJS)
ko.applyBindings(new WaterfallMapModel());

// Handle Google Maps API Load Failiure
var mapLoadingFailed = function() {
    alert("Error: Cannot load GoogleMaps API");
    console.log("Error: Cannot load Google Maps API");
    $('h1').append('<br>' + "Error: Cannot load GoogleMaps API");
};
