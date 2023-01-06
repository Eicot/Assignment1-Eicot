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

function onLocationFound(e) {
    var radius = e.accuracy;

    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within" + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

map.on('locationfound', onLocationFound);

function onLocationError(e) {
    alert(e.message);
}

map.on('locationerror', onLocationError);

// const singaporePopulationLayer = L.markerClusterGroup().addTo(map);
const singaporePopulationLayer = L.layerGroup().addTo(map);
const femalePopulationLayer = L.layerGroup().addTo(map);

var layerControl = L.control.layers({
    'Overall Population' : singaporePopulationLayer,
    'Female Population' : femalePopulationLayer
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
    info.update(layer.feature.properties);
}
 
function resetHighlight(e) {
    map.resetStyle(e.target),
    info.update()
}


function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds());
}

var info = L.control();

info.onAdd = function (layer) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = 
    '<h4>Singapore Population</h4>'+ 
    (props ?'<b>' + 
    "Planning Area : " + props.planningArea + '</b><br />' + 
    "Sub Zone : " + props.subZone + '</b><br />' + 
    props.totalPopulation
    : 'Hover over a state');
};

info.addTo(map);

var legend = L.control({position: 'bottomright'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0, 10000, 20000, 30000, 40000, 50000],
        labels = [];

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
        div.innerHTML +=
        // '<h4>Singapore Population</h4>'+ '</b><br />' + 
            '<i style="background:' + colorPop(grades[i] + 1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? ' - ' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);

loadData();

async function loadData() {

    const response = await axios.get("singaporePopulation2022.geojson");

    const singaporePopulation = L.geoJson(response.data, {

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
        },
        
        onEachFeature: function(feature, layer) {

            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            })
        }

    } ).addTo(singaporePopulationLayer)


    const female = L.geoJson(response.data, {

        style: function (feature) {
            return {
                fillColor: (colorPop(feature.properties.femalePopulation)),
                weight: 2,
                opacity: 1,
                color: "white",
                dashArray: '3',
                fillOpacity: 0.7,
                function: resetHighlight,
            }
        },
        
        onEachFeature: function(feature, layer) {

            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: zoomToFeature
            })


            // console.log(feature);

             layer.bindPopup(`
             <b> Planning Area   : </b> ${feature.properties.planningArea} <br>
             <b> Sub        : </b> ${feature.properties.subZone} <br>
             <b> Total Population: </b> ${feature.properties.femalePopulation} <br>
             `)

        }
    }    ).addTo(femalePopulationLayer)

    
}  

// const searchControl = new L.Control.Search({
//     layer: femalePopulationLayer,
//     propertyName: feature.properties.planningArea
// })

// map.addControl(searchControl)


//Search Button
// async function main() {

//     init();
    
//     function init() {
//     let map = initMap();
//     window.addEventListener('DOMContentLoaded', () => {
        
//         document.querySelector('#searchBtn').addEventListener('click', async ()=>{
//             let query = document.querySelector('#searchInput').value;
            
//             let center = map.getBounds().getCenter();
//             let response = await search(center.lat, center.lng, query);
//             console.log(response);
//         })
//     })
//     console.log(query)
// }
// }

// main();


//.openPopup for search pop up
    //marker cluster

