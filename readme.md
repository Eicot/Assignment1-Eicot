<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">project_title</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/github_username/repo_name"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/github_username/repo_name">View Demo</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Report Bug</a>
    ·
    <a href="https://github.com/github_username/repo_name/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
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
    <li><a href="#usage">Creating Map and Layers</a></li>
    <li><a href="#roadmap">Creating Charts</a></li>
    <li><a href="#contributing"></a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>


<!-- ABOUT THE PROJECT -->
## Project Introduction

[![Product Name Screen Shot][project-screenshot]](https://assignment1-eicot.eicot.repl.co)

The Singapore Population is to visualize the raw data of population with Leaflet Map and ApexCharts. The project lay outs population information categorized by gender, age and residence property types, and reveal the demographic structure of Singapore based on planning area in 2022. It also provides information chart to better analyze the population trend by developing line chart with different categories such as growth rate, birth rate, death rate and etc. 

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


## Data Preparation and Loading

### Data Preparation

* Data are availabe in .xlsx/.xls or csv format and need to be converted into GeoJSON or JSON files
  * Converting to GeoJSON
    1.  Data are downloaded and filtered by population gender, age and properties type for each planning area and sub zones.
    2.  GeoJSON file with Singapore Sub Zones Coordinates Plan is downloaded.
    3.  Once filtered data are ready from Step 1, load data manually into GeoJSON file using [geojson.io](https://geojson.io/#map=10.34/1.3147/103.8471).
    4.  Upload the updated GeoJSON for project
       ![gejsonio](images/geojsonio.png)
       
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


<!-- Creating Map and Layers -->
## Creating Map and Layeres
The map consists of multiple layers based on population categories and different type of views. It also contains one search option, information box when mouse hover over a sub zone and one legend for population number with color. 
  1. Adding Layers to Map
  ```sh
  const singaporePopulationLayer = L.layerGroup().addTo(map);
  let overLayers = {
  "Overall Resident Population": singaporePopulationLayer}
  L.control.layers(overLayers).addTo(map);
  ```
  2. Adding innerHTML (Legend)
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
  3. Adding Search Control to Map
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




<!-- USAGE EXAMPLES -->
## Demo Usage


















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




