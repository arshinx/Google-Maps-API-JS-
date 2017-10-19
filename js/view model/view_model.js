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

};

ko.applyBindings(new viewModel());
