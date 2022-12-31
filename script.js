let singapore = [1.34096, 103.8198]; //Singapore latlong
let map = L.map('map').setView(singapore, 12); //Setting center point

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

// const singaporePopulationLayer = L.markerClusterGroup().addTo(map);
const singaporePopulationLayer = L.layerGroup().addTo(map);
const agePopulationLayer = L.layerGroup().addTo(map);

const layerControl = L.control.layers({
    'singaporePopulation' : singaporePopulationLayer,
    'agePopulation' : agePopulationLayer
}, {}).addTo(map);

function colorPop(d) { 
return d > 40000 ? '#b30000' : 
    d > 30000 ? '#e34a33' :
        d > 20000 ? '#fc8d59' :
            d > 10000 ? '#fdcc8a' :
                d > 1 ? '#fef0d9' :
                    '#fff';
        }

loadData();


async function loadData() {

    let response = await axios.get("singapore-population-2022.geojson");

    const singaporePopulation = L.geoJson(response.data, {

        onEachFeature: function(feature, layer) {

            layer.bindPopup(`
            <b> Planning Area   : </b> ${feature.properties.planningArea} <br>
            <b> Sub Zone        : </b> ${feature.properties.subZone} <br>
            <b> Total Population: </b> ${feature.properties.totalPopulation} <br>
            `);
        },


        style: function (feature) {
            return {
                fillColor: (colorPop(feature.properties.totalPopulation)),
                weight: 1,
                opacity: 1,
                color: "grey",
                fillOpacity: 0.65
            };
        }
        
    } ).addTo(singaporePopulationLayer)



    const agePopulation = L.geoJson(response.data, {

        onEachFeature: function(feature, layer) {

            console.log(feature);

            layer.bindPopup(`
            <b> Planning Area   : </b> ${feature.properties.planningArea} <br>
            <b> Sub        : </b> ${feature.properties.subZone} <br>
            <b> Total Population: </b> ${feature.properties.totalPopulation} <br>
            `);
        },
        style: function (feature) {
            return {
                fillColor: (colorPop(feature.properties.totalPopulation)),
                weight: 1,
                opacity: 1,
                color: "blue",
                fillOpacity: 0.65
            };
        }
    }    ).addTo(agePopulationLayer)

    //singaporePopulation.addTo(map);
    //singaporePopulation.setStyle({
    //    color: 'navy'
    //})
    
}  


//.openPopup for search pop up
    //marker cluster