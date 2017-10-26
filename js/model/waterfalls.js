// These are the real estate listings that will be shown to the user.
// Normally we'd have these in a database instead.
var locations = [
  {
    title: 'Cathedral Lakes',
    location: {lat: 37.843523, lng: -119.4209251},
    region: 'American Southwest'
  },
  {
    title: 'Havasu Creek',
    location: {lat: 36.2500547, lng: -112.6967555},
    region: 'American Southwest'
  },
  {
    title: 'Bridal Veil Falls',
    location: {lat: 45.5548104, lng: -122.179885},
    region: 'Pacific Northwest'
  },
  {
    title: 'Silver Falls State Park',
    location: {lat: 44.468169, lng: -122.6745195},
    region: 'Pacific Northwest'
  },
  {
    title: 'Buttermilk Falls',
    location: {lat: 43.4364603, lng: -72.7278752},
    region: 'Eastern US'
  },
  {
    title: 'Tinkers Creek State Park',
    location: {lat: 41.3834307, lng: -81.5326876},
    region: 'Eastern US'
  },
  {
    title: 'Niagara Falls',
    location: {lat: 43.0995002, lng: -79.0437609},
    region: 'Eastern US'
  }
];

// Regions
var regions = ko.observableArray([
  'Select All',
  'American Southwest',
  'Pacific Northwest',
  'Eastern US'
]);
