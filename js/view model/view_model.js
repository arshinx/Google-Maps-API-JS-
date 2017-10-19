// View Model using Knockout
function viewModel() {
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

    // -- Filter List of Waterfalls -- //
    self.filter = function() {

      // Reset list and markers — display
      self.waterfallsList.removeAll();
      locations.forEach(function(value, key){
        // Populate list
        self.waterfallsList.push(locations[key]);
        markers[key].setVisible(true);
      });

      // Filter listings/markers — hide
      locations.forEach(function(value, key){
        // Validate whether all elements are selected
        if (self.state() !== 'Select All') {
          if (value.state !== self.state()) {
            // Update list
            self.waterfallsList.remove(value);
            markers[key].setVisible(false);
          }
        });

    }

};

ko.applyBindings(new viewModel());
