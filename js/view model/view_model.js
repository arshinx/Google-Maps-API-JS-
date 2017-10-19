// View Model using Knockout
function waterfallMapModel() {
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

  // Highlight
  // Highlights the button and the marker
    self.highlight = function() {

        self.selection(this.title);
        locations.forEach(function(value, key) {
            // markers[key].setIcon();
            if (value.title === self.selection()) {
                new google.maps.event.trigger(markers[key], 'click');
            };
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
  } // Ends Function

  // Menu
  var menu = function() {

  }; // Ends function

};

ko.applyBindings(new waterfallMapModel());

// Google Error Handler
var googleError = function() {
    alert("Failed to load GoogleMaps API");
    $('#map').append('<br>' + "Failed to load GoogleMaps API");
    $('#map').css({'font-size': '3em', 'color': '#f21'})
}
