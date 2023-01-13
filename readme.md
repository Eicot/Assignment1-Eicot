<a name="readme-top"></a>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-introduction">Project Introduction</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#data-sources">Data Sources</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#setting-up-leaflet">Setting Up Leaflet</a></li>
        <li><a href="#setting-up-apexcharts">Setting Up ApexCharts</a></li>
        <li><a href="#installing-bootstrap">Installing Bootstrap</a></li>
      </ul>
    </li>
    <li>
      <a href="#data-preparation-and-loading">Data Preparation and Loading</a>
      <ul>
        <li><a href="#data-preparation">Data Preparation</a></li>
        <li><a href="#data-loading">Data Loading</a></li>
      </ul>
    </li>
    <li><a href="#creating-map-layers">Creating Map Layers</a></li>
    <li><a href="#creating-charts">Creating Charts</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#references">REFERENCES</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## Project Introduction

[![Product Name Screen Shot][project-screenshot]](https://assignment1-eicot.eicot.repl.co)

The Singapore Population is to visualize the raw data of population with Leaflet Map and ApexCharts. The project lay outs population information categorized by gender, age and residence property types, and reveal the demographic structure of Singapore based on planning area in 2022. It also provides information chart to better analyze the population trend by developing line chart with different categories such as growth rate, birth rate, death rate and etc. 
The project will help researchers and city planning organization for better understanding and clear visualization of population across the country.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Built With

The list below is used for developing map and chart.

* [Leaflet][leaflet-url]
* [ApexCharts][ApexCharts-url]
* [Axios][Axios-url]
* [Bootstrap][Bootstrap-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Data Sources

* Singapore Residents by Planning Area Subzone, Age Group, Sex and Type of Dwelling, June 2011-2019. This data set is available at [Singapore Department of Statistics](https://www.singstat.gov.sg/find-data/search-by-theme/population/geographic-distribution/latest-data).
* Master Plan 2014 Planning Subzone GIS data. This data set is available at [Data.gov.sg](https://data.gov.sg/dataset/master-plan-2014-subzone-boundary-web).
* Overall Population Information from 1960 to 2021. This data set is available at [The World Bank(World Development Indicators)](https://databank.worldbank.org/source/world-development-indicators).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

### Setting Up Leaflet

* The latest stable Leaflet release is available on several CDN’s — to start using it straight away, place this in the head of your HTML code:
  ```sh
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.3/dist/leaflet.css"
    integrity="sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=" crossorigin="" />
  <script src="https://unpkg.com/leaflet@1.9.3/dist/leaflet.js"
    integrity="sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=" crossorigin=""></script>
  ```

* Creating base map for Singapore
  ```sh
  const singapore = [1.34096, 103.8198]; //Singapore latlong
  const map = L.map("map").setView(singapore, 12);

  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw' //demo access token}).addTo(map);
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Setting Up ApexCharts

* Direct include <script> in your html
  ```sh
  <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Installing Bootstrap

* Include Bootstrap’s CSS
  ```sh
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
  ```
* Include Bootstrap’s JS
  ```sh
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-    oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Data Preparation and Loading -->
## Data Preparation and Loading

### Data Preparation

* Data are availabe in .xlsx/.xls or csv format and need to be converted into GeoJSON or JSON files
  * Converting to GeoJSON
    1.  Data are downloaded and filtered by population gender, age and properties type for each planning area and sub zones.
    2.  GeoJSON file with Singapore Sub Zones Coordinates Plan is downloaded.
    3.  Once filtered data are ready from Step 1, load data manually into GeoJSON file using [geojson.io](https://geojson.io/#map=10.34/1.3147/103.8471).(As shown in below photo)
    4.  Upload the updated GeoJSON for project
       ![gejsonio](images/gejsonio.png)
       
   * Data converting to JSON file is straight forward by using available online converter after csv or xls file is downloaded (Ensure the csv/xls file is in correct format)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Data Loading

* Load data from GeoJSON file to Leaflet map using "axios.get" and "L.geoJSON"
  ```sh
  async function loadData() {

  const response = await axios.get("singaporePopulation2022.geojson");

  L.geoJson(response.data, {
    style: {...},
    onEachFeature: {...}
      }).addTo(singaporePopulationLayer)
      }
  loadData(); //Call loadData function
  ```

* Load data from JSON file to ApexChart using "axios.get" and 
  ```sh
  async function getData() {
  const response = await axios.get("singaporePopulationTable.json");
  return response.data;}

  getData(); //Call getData function
  ```
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Creating Map Layers -->
## Creating Map Layers
The map consists of multiple layers based on population categories and different type of views. It also contains one search option, information box when mouse hover over a sub zone and one legend for population number with color. 

  1. Adding Layers to Map
  ```sh
  const singaporePopulationLayer = L.layerGroup().addTo(map);
  let overLayers = {
  "Overall Resident Population": singaporePopulationLayer}
  L.control.layers(overLayers).addTo(map);
  ```
  
  2. Adding innerHTML inside Map
  * Adding Info Box
  ```sh
  const info = L.control();
  info.onAdd = function() {
  this._div = L.DomUtil.create("div", "info"); // create a div with a class "info"
  this.update();
  return this._div;};
  // method that we will use to update the control based on feature properties passed
  info.update = function(props) {
  this._div.innerHTML =
    '<h4>Total Resident Population</h4>' +
    (props ? '<b>' +
      "Planning Area : " + props.planningArea + '</b><br />' +
      "Sub Zone : " + props.subZone + '</b><br />' +
      props.totalPopulation
      : 'Mouse hover over a sub zone');};
  info.addTo(map);
  ```
  
  * Adding Legend
  ```sh
  const legend = L.control({ position: "bottomright" });
  legend.onAdd = function() {
  const div = L.DomUtil.create("div", "info legend"),
  grades = [0, 10000, 20000, 30000, 40000, 50000];

  // loop through density intervals and generate a label with a colored square for each   interval
  for (var i = 0; i < grades.length; i++) {
    div.innerHTML +=
      // '<h4>Singapore Population</h4>'+ '</b><br />' + 
      '<i style="background:' + colorPop(grades[i] + 1) + '"></i> ' +
      grades[i] + (grades[i + 1] ? ' - ' + grades[i + 1] + '<br>' : '+');
  }
  return div;};
  legend.addTo(map);
  ```
  3. Adding Markers to the center of polygon
  ```sh
  onEachFeature: function(feature, layer) {

      if (feature.geometry.type === "MultiPolygon") {
        var center = layer.getBounds().getCenter();
        var marker = L.marker(center, { icon: markerIcon });
        // console.log(marker)
        marker.addTo(polygonCenter)
      }}
  ```
  
  4. Adding Search Control to Map
  ```sh
  const searchControl = new L.Control.Search({
    layer: singaporePopulationLayer,
    propertyName: 'subZone'},
    moveToLocation: function(latlng, title, map) {
      //map.fitBounds( latlng.layer.getBounds() );
      var zoom = map.getBoundsZoom(latlng.layer.getBounds());
      map.setView(latlng, zoom); // access the zoom
    }
  });
  searchControl.on('search:locationfound', function(e) {
    e.layer.setStyle({ color: '#0f0' });
    if (e.layer._popup)
      e.layer.openPopup();

  }).on('search:collapsed', function(e) {
    featuresLayer.eachLayer(function(layer) {	//restore feature color
      featuresLayer.resetStyle(layer);
    });
  });
  map.addControl(searchControl);}  //inizialize search control
  ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- Creating Charts -->
## Creating Charts
Charts are created using ApexCharts and div inside "map" container. There are total 3 charts displayed and provide comparison information population.

  1. Transform to useful data for chart
  ```sh
  function transformData1(data) {
  const population = data.map(function(dataPoint) { //Assign dataPoint with .map to call year and its population 
    return {
      "pop": dataPoint.populationTotal,
      "year": dataPoint.year}
  })
  for (let dataPoint of population) {
    const pop = dataPoint.pop;
    const years = dataPoint.year;

    series1.push({
      x: dataPoint.year,
      y: dataPoint.pop})}

  return series1;
  }
  ```
     
  2. Assigning data to Charts in "graph.js"
  ```sh
  window.addEventListener("DOMContentLoaded", async function() {
  const data = await getData("data.js");
  function drawchart1() {
    const options = {
      chart: {
        foreColor: "#ccc",
        type: "line",
        height: "330"},
      series: [],
      title: {
        text: "Population (1960 - 2021)"},

      //x-axis dats are congested, adjust interval to show clearer
      xaxis: {
        type: "category",
        tickAmount: 5},

      //Data are in million, in the y-axis divide by 1e3 to limit the number of digits
      yaxis: {
        labels: {
          formatter: function(val) { return (val / 1e3).toFixed(0); }
        },
        "title": {
          "text": "(in thousands)",
          "align": "left",
          style: {
            fontSize: "10px",
            fontWeight: "normal",
            color: "white"}}},
      // what to show there is no data
      noData: {
        "text": "Please select below categories"
      }

    }

    // create the chart
    const chart = new ApexCharts(document.querySelector("#chart1"), options);

    // render the chart
    chart.render()


    // display the loaded data as a series in the chart
    chart.updateSeries([{
      'name': 'Population',
      'data': series1}])}
    drawchart1()})
  ```  
  
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage
  ![screenshot](imgaes/screenshot.png)
  In this view, the base layers are divided into default view, terrain view and night view, and it is displayed at right top of the map. Search button is placed on the left top and can be used to search Sub Zones name in Singapore. It will direct to the location and zoom it in the center of the map. 
  
  ![screenshot](images/screenshot1.png)
In this plot view, overlay layers are shown in as below:

  * Overall Resident Population
  * Female Resident Population
  * Male Resident Population
  * Resident Population Aged Below 5 Years
  * Resident Population Aged 65 Years and Over
  * Resident Population Staying in HDB Flats
  * Resident Population Staying in Condominium
  * Resident Population Staying in Landed Properties

Lastly, the markers layer for sub zones is added to location the center of the zones. By viewing the above layers, user will be able to clearly identify the most populated area and the least area based on gender, ages and type of residence. Additionally, the Legend on the right bottom will state the number of people staing in sub zones based on coloring.

There are also three sections to choose Chart options on right top of web page:

  1. Population (1960 - 2021): It provides tracking information of total population, female/male population and population ages 0-14, 15-64 and 65+ from 1960 to 2021
  2. Population Rate (1960 - 2021): Similarly, it shows annual population growth and trend of birth rate, fertility rate and death rate
  4. Overview: It illustrates clear view of recent overall population and annual growth rate showing constant growth from 2012 to 2020 and declined in 2021.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REFERENCES -->
## REFERENCES

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- IMAGES & URLS -->

[project-screenshot]: images/population1.jpg
[geojsonio]: images/geojsonio.png
[leaflet-url]: https://leafletjs.com
[ApexCharts-url]: https://apexcharts.com
[Axios-url]: https://apexcharts.com
[Bootstrap-url]:https://getbootstrap.com




