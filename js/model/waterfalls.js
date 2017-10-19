// These are the real estate listings that will be shown to the user.
// Normally we'd have these in a database instead.
var locations = [
  {
    title: 'Cathedral Lakes Waterfall',
    location: {lat: 37.84585, lng: -119.43203},
    region: 'American Southwest'
  },
  {
    title: 'Navajo Falls',
    location: {lat: 36.247042, lng: -112.70256},
    region: 'American Southwest'
  },
  {
    title: 'Crystal Falls',
    location: {lat: 44.7177136, lng: -110.5012769},
    region: 'Pacific Northwest'
  },
  {
    title: 'Double Falls',
    location: {lat: 44.891968000000006, lng: -122.644629},
    region: 'Pacific Northwest'
  },
  {
    title: 'Cane Creek Cascade',
    location: {lat: 35.662317, lng: -85.35112},
    region: 'Eastern US'
  },
  {
    title: 'Dry Falls',
    location: {lat: 35.068818, lng: -83.2408038},
    region: 'Eastern US'
  },
  {
    title: 'Niagara Falls',
    location: {lat: 43.077916, lng: -79.1379568},
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
