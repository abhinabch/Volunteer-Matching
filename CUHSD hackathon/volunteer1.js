const API_KEY = 'AIzaSyAWzLt05sYip3UZ_pTIL-C7ZX61d1gV0Qs&libraries=places';

// Initialize the map
let map;
function initMap() {
  // Prompt the user for a location
  const location = prompt('Enter a location:');
  if (!location) return; // User clicked Cancel

  // Use the Google Geocoding API to convert the location into latitude and longitude coordinates
  const geocoder = new google.maps.Geocoder();
  geocoder.geocode({ address: location }, (results, status) => {
    if (status !== 'OK') {
      alert('Geocode was not successful for the following reason: ${status}');
      return;
    }

    // Get the latitude and longitude of the location
    const { lat, lng } = results[0].geometry.location;

    // Initialize the map with the location as the center
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat(), lng: lng() },
      zoom: 12,
    });

    // Create a circle to define the search area
    const circle = new google.maps.Circle({
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      map,
      center: { lat: lat(), lng: lng() },
      radius: 6437.38, // 4 miles in meters
    });
    const marker = new google.maps.Marker({

      position: {lat: lat()-0.04,lng: lng()+0.05},
      map: map,
      label: "1",
      title: "1st",
      draggable: false,
      animation: google.maps.Animation.DROP,
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<p>Here is your first location</p>",
    });
    infoWindow.open(map,marker);

    const marker2 = new google.maps.Marker({
      position: {lat: lat() + 0.038,lng: lng() - 0.02},
      map: map,
      label: "2",
      title: "2nd",
      draggable: false,
      animation: google.maps.Animation.DROP,
    });

    const infoWindow2 = new google.maps.InfoWindow({
      content: "<p>Here is your second location</p>",
    });
const marker3 = new google.maps.Marker({
      position: {lat: lat() + 0.01,lng: lng() - 0.035},
      map: map,
      label: "3",
      title: "3rd",
      draggable: false,
      animation: google.maps.Animation.DROP,
    });

    const infoWindow3 = new google.maps.InfoWindow({
      content: "<p>Here is your third location</p>",
    });

    infoWindow.open(map,marker);
    infoWindow2.open(map,marker2);
    infoWindow3.open(map,marker3);
  });
}