// View Model using Knockout
function viewModel() {
    var self = this;

    // Properties
    self.waterfallsList = ko.observableArray();
    self.selection      = ko.observable();
    self.state          = ko.observable();

};

ko.applyBindings(new viewModel());
