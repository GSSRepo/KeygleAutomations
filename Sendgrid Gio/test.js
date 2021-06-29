let file = {
    "results": [
      {
        "address_components": [
          {
            "long_name": "205",
            "short_name": "205",
            "types": ["street_number"]
          },
          {
            "long_name": "York Street",
            "short_name": "York St",
            "types": ["route"]
          },
          {
            "long_name": "Burlington",
            "short_name": "Burlington",
            "types": ["locality", "political"]
          },
          {
            "long_name": "Burlington County",
            "short_name": "Burlington County",
            "types": ["administrative_area_level_2", "political"]
          },
          {
            "long_name": "New Jersey",
            "short_name": "NJ",
            "types": ["administrative_area_level_1", "political"]
          },
          {
            "long_name": "United States",
            "short_name": "US",
            "types": ["country", "political"]
          },
          {
            "long_name": "08016",
            "short_name": "08016",
            "types": ["postal_code"]
          },
          {
            "long_name": "1502",
            "short_name": "1502",
            "types": ["postal_code_suffix"]
          }
        ],
        "formatted_address": "205 York St, Burlington, NJ 08016, USA",
        "geometry": {
          "location": {
            "lat": 40.081046,
            "lng": -74.85589
          },
          "location_type": "ROOFTOP",
          "viewport": {
            "northeast": {
              "lat": 40.0823949802915,
              "lng": -74.85454101970851
            },
            "southwest": {
              "lat": 40.0796970197085,
              "lng": -74.85723898029151
            }
          }
        },
        "place_id": "ChIJkdLuj2FOwYkRwgo-g_J8hNA",
        "types": ["street_address"]
      }
    ],
    "status": "OK"
  }

 let address = file.results[0].formatted_address;

let addressArray = Array.from(address);

let objectArray = Object.assign([], address);


address.pop();

console.log(address);

