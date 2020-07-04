mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fua2V0dHQiLCJhIjoiY2tjNTVuMTV0MGVqdTJ3bWd4eGVkbzN1eCJ9.NMWQqdbbgjNe1_T5YW8OYA';

var map = new mapboxgl.Map({
    container: 'map', // HTML container id
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [77.10249019999999, 28.7040592], // starting position as [lng, lat]
    zoom: 15
  });

  var marker = new mapboxgl.Marker()
  .setLngLat([77.10249019999999, 28.7040592])
  .addTo(map);