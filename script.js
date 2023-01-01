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
return d > 50000 ? '#800026' : 
    d > 40000 ? '#BD0026' :
        d > 30000 ? '#E31A1C' :
            d > 20000 ? '#FC4E2A' :
                d > 10000 ? '#FEB24C' :
                    d > 1 ? '#FED976' :
                    '#FFEDA0';
        }

function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 5,
        color: 'black',
        dashArray: '',
        fillOpacity: 0.7
    });

    layer.bringToFront();
}

function resetHighlight(e) {
    singaporePopulationLayer.resetStyle(e.target);
}


function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}


loadData();


async function loadData() {

    let response = await axios.get("singapore-population-2022.geojson");

    const singaporePopulation = L.geoJson(response.data, {

        onEachFeature: function(feature, layer) {

            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            })

            // layer.on('mouseout', function() {
            //     singaporePopulation.resetStyle(this);
            // })
        },


        style: function (feature) {
            return {
                fillColor: (colorPop(feature.properties.totalPopulation)),
                weight: 2,
                opacity: 1,
                color: "white",
                dashArray: '3',
                fillOpacity: 0.7,
                function: resetHighlight,
            }
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