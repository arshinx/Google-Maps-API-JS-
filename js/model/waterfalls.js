// These are the real estate listings that will be shown to the user.
// Normally we'd have these in a database instead.
var locations = [
  {
    title: 'Cathedral Lakes Waterfall',
    location: {lat: 37.843523, lng: -119.4209251},
    region: 'American Southwest'
  },
  {
    title: 'Navajo Falls',
    location: {lat: 36.2500547, lng: -112.6967555},
    region: 'American Southwest'
  },
  {
    title: 'Bridal Veil Falls',
    location: {lat: 45.5548104, lng: -122.179885},
    region: 'Pacific Northwest'
  },
  {
    title: 'Majestic Falls',
    location: {lat: 44.468169, lng: -122.6745195},
    region: 'Pacific Northwest'
  },
  {
    title: 'Great Falls',
    location: {lat: 38.9912519, lng: -77.2773419},
    region: 'Eastern US'
  },
  {
    title: 'Tinker Creek Falls',
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
