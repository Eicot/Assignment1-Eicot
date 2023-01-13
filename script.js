async function loadData() {

  const response = await axios.get("singaporePopulation2022.geojson");

  //totalPopulation
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.totalPopulation)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7
      }
    },

    onEachFeature: function(feature, layer) {
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
      })
      layer.bindPopup(`
             <b> Planning Area   : </b> ${feature.properties.planningArea} <br>
             <b> Sub Zone       : </b> ${feature.properties.subZone} <br>
             <b> Total Population: </b> ${feature.properties.totalPopulation} <br>
             `)
    }

  }).addTo(singaporePopulationLayer)
  //femalePopulation
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.femalePopulation)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
        fillOpacity: 0.7,
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
             <b> Sub Zone      : </b> ${feature.properties.subZone} <br>
             <b> Female Population: </b> ${feature.properties.femalePopulation} <br>
             `)

    }
  }).addTo(femalePopulationLayer)
  //malePopulation
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.malePopulation)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
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
             <b> Sub Zone       : </b> ${feature.properties.subZone} <br>
             <b> Male Population: </b> ${feature.properties.malePopulation} <br>
             `)

    }
  }).addTo(malePopulationLayer)
  //population less than five
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.lessThanFive)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
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
             <b> Sub Zone     : </b> ${feature.properties.subZone} <br>
             <b> Population Aged Below 5 Years: </b> ${feature.properties.lessThanFive} <br>
             `)

    }
  }).addTo(lessThanFiveLayer)
  //population older than 65
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.olderThan65)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
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
             <b> Sub Zone     : </b> ${feature.properties.subZone} <br>
             <b> Population Aged 65 and Over: </b> ${feature.properties.olderThan65} <br>
             `)

    }
  }).addTo(olderThan65Layer)
  //HDB population
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.HDB)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
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
             <b> Sub Zone     : </b> ${feature.properties.subZone} <br>
             <b> Population Staying in HDB Flats: </b> ${feature.properties.HDB} <br>
             `)

    }
  }).addTo(HDBLayer)
  //Condo population
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.condo)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
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
             <b> Sub Zone     : </b> ${feature.properties.subZone} <br>
             <b> Population Staying in Condominium: </b> ${feature.properties.condon} <br>
             `)

    }
  }).addTo(condoLayer)
  //LandedProperties population
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillColor: (colorPop(feature.properties.landedProperties)),
        weight: 2,
        opacity: 1,
        color: "white",
        dashArray: "3",
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
             <b> Sub Zone     : </b> ${feature.properties.subZone} <br>
             <b> Population Staying in Landed Properties: </b> ${feature.properties.landedProperties} <br>
             `)

    }
  }).addTo(landedPropertiesLayer)
  //Markers
  L.geoJson(response.data, {

    style: function(feature) {
      return {
        fillcolor: "white",
        fillOpacity: 0,
        color: "green",
        opacity: 0.3
      }
    },

    onEachFeature: function(feature, layer) {

      if (feature.geometry.type === "MultiPolygon") {
        var center = layer.getBounds().getCenter();
        var marker = L.marker(center, { icon: markerIcon });
        // console.log(marker)
        marker.addTo(polygonCenter)
      }
      marker.bindPopup(`
             <b> Planning Area   : </b> ${feature.properties.planningArea} <br>
             <b> Sub Zone     : </b> ${feature.properties.subZone} <br>
             `)
      layer.on({
        mouseover: highlightFeature,
        mouseout: resetMarker,
        click: zoomToFeature
      })
    }
  }).addTo(polygonCenter)
  //SearchControl
  const searchControl = new L.Control.Search({
    layer: singaporePopulationLayer,
    propertyName: 'subZone',
    marker: {
      icon: marker1,
      circle: {
        radius: 35,
        color: '#0a0',
        opacity: 1
      }
    },
    moveToLocation: function(latlng, title, map) {
      //map.fitBounds( latlng.layer.getBounds() );
      var zoom = map.getBoundsZoom(latlng.layer.getBounds());
      map.setView(latlng, zoom); // access the zoom
    }
  });
  searchControl.on('search:locationfound', function(e) {

    console.log('search:locationfound',);

    //map.removeLayer(this._markerSearch)

    e.layer.setStyle({ color: '#0f0' });
    if (e.layer._popup)
      e.layer.openPopup();

  }).on('search:collapsed', function(e) {

    featuresLayer.eachLayer(function(layer) {	//restore feature color
      featuresLayer.resetStyle(layer);
    });
  });
  map.addControl(searchControl);  //inizialize search control
}

loadData();

//Setting center point
const singapore = [1.34096, 103.8198]; //Singapore latlong
const map = L.map("map").setView(singapore, 12);

const terrainLayer = L.layerGroup();
const nightLayer = L.layerGroup();
// console.log(map)

const terrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(terrainLayer);

const Stadia_AlidadeSmoothDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(nightLayer);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token
}).addTo(map);

//Assign the layers to layer group and markerCluster Group
// Default layper for total population to show 
const singaporePopulationLayer = L.layerGroup().addTo(map);
const femalePopulationLayer = L.layerGroup();
const malePopulationLayer = L.layerGroup();
const lessThanFiveLayer = L.layerGroup();
const olderThan65Layer = L.layerGroup();
const HDBLayer = L.layerGroup();
const condoLayer = L.layerGroup();
const landedPropertiesLayer = L.layerGroup();
const polygonCenter = L.markerClusterGroup();

let overLayers = {
  "Overall Resident Population": singaporePopulationLayer,
  "Female Resident Population": femalePopulationLayer,
  "Male Resident Population": malePopulationLayer,
  "Resident Population Aged Below 5 Years": lessThanFiveLayer,
  "Resident Population Aged 65 Years and Over": olderThan65Layer,
  "Resident Population Staying in HDB Flats": HDBLayer,
  "Resident Population Staying in Condominium": condoLayer,
  "Resident Population Staying in Landed Properties": landedPropertiesLayer,
  "Hide Population Layer": map
}

let baseLayers = {
  "Dafault View": map,
  "Terrain View": terrainLayer,
  "Night View": nightLayer
}


let overlays = {
  "Sub Zones Makers": polygonCenter
}

L.control.layers(baseLayers).addTo(map);
L.control.layers(overLayers, overlays).addTo(map);


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
  // console.log(e)
  const layer = e.target;

  layer.setStyle({
    weight: 4,
    color: "black",
    fillOpacity: 0.7
  });

  layer.bringToFront();
  info.update(layer.feature.properties);
}

function resetHighlight(e) {
  let layer = e.target;
  layer.setStyle({
    weight: 2,
    opacity: 1,
    color: "white",
    dashArray: "3",
    fillOpacity: 0.7
  })

  // layer.bringToFront();
  // map.resetStyle(e.target),
  info.update()
}

function resetMarker(e) {
  let layer = e.target;
  layer.setStyle({
    fillcolor: "white",
    fillOpacity: 0,
    color: "green",
    opacity: 0.3
  })

  // layer.bringToFront();
  // map.resetStyle(e.target),
  info.update()
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

const info = L.control();
info.onAdd = function() {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;
};
// method that we will use to update the control based on feature properties passed
info.update = function(props) {
  this._div.innerHTML =
    '<h4>Total Resident Population</h4>' +
    (props ? '<b>' +
      "Planning Area : " + props.planningArea + '</b><br />' +
      "Sub Zone : " + props.subZone + '</b><br />' +
      props.totalPopulation
      : 'Mouse hover over a sub zone');
};
info.addTo(map);

const legend = L.control({ position: "bottomright" });
legend.onAdd = function() {

  const div = L.DomUtil.create("div", "info legend"),
    grades = [0, 10000, 20000, 30000, 40000, 50000];

  // loop through density intervals and generate a label with a colored square for each interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      // '<h4>Singapore Population</h4>'+ '</b><br />' + 
      '<i style="background:' + colorPop(grades[i] + 1) + '"></i> ' +
      grades[i] + (grades[i + 1] ? ' - ' + grades[i + 1] + '<br>' : '+');
  }
  return div;
};

legend.addTo(map);

const markerIcon = L.icon({
  iconUrl: "images/popmarker.png",

  iconSize: [30, 30], // size of the icon
});

const marker1 = L.icon({
  iconUrl: "images/marker2.png",

  iconSize: [40, 40], // size of the icon

});








