// View Model using Knockout
function viewModel() {
    var self = this;

    // Properties
    self.waterfallsList = ko.observableArray();

};

ko.applyBindings(new viewModel());
