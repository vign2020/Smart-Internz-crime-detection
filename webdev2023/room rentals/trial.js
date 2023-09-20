const axios = require('axios');

const lat=41.72408922900181 
const long=-87.84600822268573

axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${long},${lat}.json?access_token=pk.eyJ1IjoidmlnbjIwMjAiLCJhIjoiY2xqMTJnM3dmMThlaTNtcWZpMThmY3lwcCJ9.LPiSaoo-JAjnozl3Fq1QFA`)
  .then(response => {
    // Handle the data returned from the API
    const resp=response.data.features;
    console.log(resp[0].place_name);
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
  });



  // { "lat": 41.59070534116764, "lng": -87.37084953127948 }
  // { "lat": c, "lng": -87.98059074221698 }
  // { "lat": 42.024722715791675, "lng": -87.84600822268573 }
  // { "lat": 41.96144149086745, "lng": -88.26074210940448 }
  // { "lat": 42.17756215619223, "lng": -88.2648619824513 }
  const arr=[1,2,3,4,5]

  for(var i of arr){
    console.log(i)
  }
