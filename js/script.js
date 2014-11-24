//set up map

var map = L.map('map').setView([40.727647, -73.995838], 13);



//Set up basemap tiles from mapbox

L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);



//JQuerry methode
//load external geoJSON


function popUp(feature,layer){ layer.bindPopup(feature.properties.Street); }


$.getJSON('/js/paths.json',function(data){
        window.data = data;
        var geojsonLayer = L.geoJson(data.features, {
                style: {color: "rgba(157, 50, 180, 0.7)"},
                onEachFeature:popUp

  }).addTo(map);

       
});


function pathMarkers(feature, layer) {
	var thisFeature = feature.properties; }




$.getJSON('/js/racks.json',function(data){
	
	var racksGeojsonLayer = L.geoJson(data.features, {
    onEachFeature: makeMarkers,
    pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, {
					radius: 2,
					stroke: false,
					fillColor: "rgba(119, 123, 238, 0.9)",
					fillOpacity: 0.8
				});
			}
  }).addTo(map);


});

function makeMarkers(feature, layer) {
	var thisFeature = feature.properties;

}



	












