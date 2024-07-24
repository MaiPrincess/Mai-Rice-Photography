/*  Map to Monterey Bay Aquarium */
let map;

async function initMap() {
    // Load the Map class from the Google Maps library
    const { Map, Marker } = await google.maps.importLibrary("maps");

    // Specify coordinates for Monterey Bay Aquarium
    var aquarium = { lat: 36.6181, lng: -121.9018 };

    // Create a new map centered at Monterey Bay Aquarium
    map = new Map(document.getElementById("map"), {
        zoom: 15,
        center: aquarium
    });

    // Create a marker for Monterey Bay Aquarium
    var marker = new Marker({
        position: aquarium,
        map: map,
        title: 'Monterey Bay Aquarium'
    });
}

// Call the initMap function to initialize the map
initMap();
