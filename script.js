let singapore = [1.3521, 103.8198]; //Singapore latlong
const map = L.map('map').setView(singapore, 12); //Setting center point

const mapLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
});

mapLayer.addTo(map);

loadData();

async function loadData(){
    const response = await axios.get("sg.json");

    const popLayer = L.geoJson(response.data, {
        onEachFeature: function(feature, layer) {
            console.log(feature);

            layer.bindPopup(feature.coordinates);

        }
    }
)}

popLayer.addTo(map);

popLayer.setStyle({
    color:'red'
})