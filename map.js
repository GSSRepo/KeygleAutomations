// Getting info from JSON
// fetch("points.json")
// .then(response => response.json())
// .then(data => {


// let address = [
// data.results[0].address_components[0].long_name, 
// data.results[0].address_components[1].long_name,
// data.results[0].address_components[2].long_name,
// data.results[0].address_components[4].long_name,
// data.results[0].address_components[6].long_name
// ];


// var stringOutput = JSON.stringify(address);

// let conc = stringOutput[0].concat(address);

// removeBracket = conc.replace(/[[\]]/g,"")

// string = removeBracket.replace(/,/g , " ");


// // Longitute and Latitude

// let coordinatesLat = 

// data.results[0].geometry.location.lat
// ;

// let coordinatesLng = 

// data.results[0].geometry.location.lng
// ;

// // Stringify Long and Lat
// var coordinateOutputLat = JSON.stringify(coordinatesLat);

// var coordinateOutputLng = JSON.stringify(coordinatesLng);

// //Concat
// // let coordLat = coordinateOutputLat[0].concat(coordinateOutputLat);

// // let coordLng = coordinateOutputLng[0].concat(coordinateOutputLng);

// //Convert String to Integer -------------

// var outputLat = Number(coordinateOutputLat);
// var outputLng = Number(coordinateOutputLng);



// // longremove = coordinateOutput.replace(/{"lat":/g,'');
// // cordOutput = longremove.replace(/"lng":/g,'');
// // bracketRemove = cordOutput.replace(/}/g, '');

// // var stringSplit = bracketRemove.split(" ");


// var locations = [[string, outputLat, outputLng,],];

// // var addressCoordinates = string.concat(bracketRemove);



      //Javascript for search function----

// This example adds a search box to a map, using the Google Place Autocomplete
// feature. People can enter geographical searches. The search box will return a
// pick list containing a mix of places and predicted search terms.
// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
  
 // Listen for the event fired when the user selects a prediction and retrieve
// more details for that place.

function initAutocomplete() 
{
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 33.257044599921294, lng: -111.88454726000376 },
    zoom: 13,
  });
  const card = document.getElementById("pac-card");
 // Create the search box and link it to the UI element.
 const input = document.getElementById("pac-input");
 const searchBox = new google.maps.places.SearchBox(input);
 map.controls[google.maps.ControlPosition.TOP_CENTER].push(input);
 document.getElementById('pac-input').style="padding-right: 50px;"


  const biasInputElement = document.getElementById("use-location-bias");
  const strictBoundsInputElement = document.getElementById("use-strict-bounds");
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["formatted_address", "geometry", "name"],
    strictBounds: false,
   
  };
  map.controls[google.maps.ControlPosition.TOP_RIGHT].push(card);
  const autocomplete = new google.maps.places.Autocomplete(input, options);

//// When the user clicks the marker, an info window opens.
  const contentString = 'Testing' //Inner text of info windows when marker is clicked

    
  // Bind the map's bounds (viewport) property to the autocomplete object,
  // so that the autocomplete requests use the current map bounds for the
  // bounds option in the request.
  autocomplete.bindTo("bounds", map);
  const infowindow = new google.maps.InfoWindow({
    content: contentString
  });


  const marker = new google.maps.Marker({
    map,
    anchorPoint: '',
    title: 'Testing'
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });

  infowindow.addListener('onBlur', () => {
    infowindow.close()
  })

  autocomplete.addListener("place_changed", () => {
    infowindow.close();
    marker.setVisible(false);
    const place = autocomplete.getPlace();


    if (!place.geometry || !place.geometry.location) {
      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      window.alert("No details available for input: '" + place.name + "'");
      return;
    }

    // If the place has a geometry, then present it on a map.
    if (place.geometry.viewport) {
      map.fitBounds(place.geometry.viewport);
    } else {
      map.setCenter(place.geometry.location);
      map.setZoom(17);
    }
    marker.setPosition(place.geometry.location);
    marker.setVisible(true);
  });

  // Sets a listener on a radio button to change the filter type on Places
  // Autocomplete.
  // function setupClickListener(id, types) {
  //   const radioButton = document.getElementById(id);
  //   radioButton.addEventListener("click", () => {
  //     autocomplete.setTypes(types);
  //     input.value = "";
  //   });
  // }
  // setupClickListener("changetype-all", []);
  // setupClickListener("changetype-address", ["address"]);
  // setupClickListener("changetype-establishment", ["establishment"]);
  // setupClickListener("changetype-geocode", ["geocode"]);
  // biasInputElement.addEventListener("change", () => {
  //   if (biasInputElement.checked) {
  //     autocomplete.bindTo("bounds", map);
  //   } else {
  //     // User wants to turn off location bias, so three things need to happen:
  //     // 1. Unbind from map
  //     // 2. Reset the bounds to whole world
  //     // 3. Uncheck the strict bounds checkbox UI (which also disables strict bounds)
  //     autocomplete.unbind("bounds");
  //     autocomplete.setBounds({ east: 180, west: -180, north: 90, south: -90 });
  //     strictBoundsInputElement.checked = biasInputElement.checked;
  //   }
  //   input.value = "";
  // });
  // strictBoundsInputElement.addEventListener("change", () => {
  //   autocomplete.setOptions({
  //     strictBounds: strictBoundsInputElement.checked,
  //   });

  //   if (strictBoundsInputElement.checked) {
  //     biasInputElement.checked = strictBoundsInputElement.checked;
  //     autocomplete.bindTo("bounds", map);
  //   }
  //   input.value = "";
  // });
}


// });
