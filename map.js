// ADD YOUR MAPBOX ACCESS TOKEN
mapboxgl.accessToken = "pk.eyJ1Ijoic255ZGU2NjQiLCJhIjoiY2w5d3YyZXI4MDE0ejNvcGxrb3Y4Ynh5NyJ9.lOWt_JZmaTPLrWAmFGYoAA"; //YOUR KEY HERE
 
// CREATE A NEW OBJECT CALLED MAP
const map = new mapboxgl.Map({
  container: "map", // container ID for the map object (this points to the HTML element)
  style: "mapbox://styles/snyde664/clph4o7rj009b01qr0bfxc5nh", //YOUR STYLE URL
  center: [-90.467481, 48.103627], // starting position [lng, lat]
  zoom: 12, // starting zoom
  projection: "globe", // display the map as a 3D globe
});

map.on("load", function () {
    map.addSource("demographics", {
      type: "geojson",
      data: "./Vital_Population_CT.geojson",
    });
   
    // ADD A LAYER TO THE MAP
    map.addLayer({
        id: "percent black",
        type: "fill",
        source: "demographics",
        layout: {},
        paint: {
          "fill-color": [
            // then use a linear ramp to display number values
            "interpolate",
            ["linear"],
            ["get", "PERCENT_BLACK_NH"],  //selected variable based on the underlying data
            0,
            "rgba(255,0,0,0)",
            1,
            "rgba(60,60,60,20)",
            2,
            "rgba(90,60,60,100)",
            3,
            "rgba(175,60,60,175)",
            4,
            "rgba(255,60,60,225)",
          ],
          "fill-opacity": 0.9,
        },
      });
    });
    
  
