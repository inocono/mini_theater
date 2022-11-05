let map;

// Initialize and add the map
function initMap() {
  // The location of tokyo
  const myLatLng = { lat: 35.6811673, lng: 139.7670516 };
  // The map, centered at tokyo
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: myLatLng,
    mapTypeId: 'roadmap'
  });
  // The marker, positioned at myLatLng
  const marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
  });
}

window.initMap = initMap;
