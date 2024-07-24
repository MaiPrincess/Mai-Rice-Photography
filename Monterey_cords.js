// Initialize and add the map
let map;

async function initMap() {
  // Load the necessary libraries and classes from Google Maps
  const { Map, Marker, AdvancedMarkerElement } = await google.maps.importLibrary("maps");

  // Specify coordinates for Uluru
  const uluru = { lat: -25.344, lng: 131.031 };

  // Create a new map centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
    mapId: "DEMO_MAP_ID",
  });

  // Create a marker for Uluru
  const uluruMarker = new AdvancedMarkerElement({
    position: uluru,
    map: map,
    title: "Uluru",
  });

  // Specify coordinates for Monterey Bay Aquarium
  const aquarium = { lat: 36.6181, lng: -121.9018 };

  // Create a new map centered at Monterey Bay Aquarium
  const aquariumMap = new Map(document.getElementById("map"), {
    zoom: 15,
    center: aquarium,
  });

  // Create a marker for Monterey Bay Aquarium
  const aquariumMarker = new Marker({
    position: aquarium,
    map: aquariumMap,
    title: 'Monterey Bay Aquarium'
  });
}

// Call the initMap function to initialize the map
initMap();
