// View Model using Knockout
function viewModel() {
    var self = this;

    // Properties
    self.locationsList = ko.observableArray();
};

ko.applyBindings(new viewModel());
