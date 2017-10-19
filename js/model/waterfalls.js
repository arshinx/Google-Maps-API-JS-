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
    location: {lat: 44.6400976, lng: -123.7007423},
    region: 'Pacific Northwest'
  },
  {
    title: 'Majestic Falls',
    location: {lat: 44.6400976, lng: -123.7007423},
    region: 'Pacific Northwest'
  },
  {
    title: 'Cane Creek Cascade',
    location: {lat: 85.3592789, lng: -94.3153677},
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
