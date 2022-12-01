//ArcGIS Requirements for importing modules
//  Defined to variables listed in Callback Function
//  All Service Code is contained within the Callback Function 
require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/rest/route",
  "esri/rest/support/RouteParameters",
  "esri/rest/support/FeatureSet",
  "esri/layers/FeatureLayer",
  "esri/layers/RouteLayer",
  "esri/rest/support/PolylineBarrier"

], function(esriConfig, Map, MapView, Graphic, route, RouteParameters, FeatureSet, FeatureLayer, RouteLayer, PolylineBarrier) {

  //API Key used by ArcGIS account for ryanmritchie@cmail.carleton.ca
  esriConfig.apiKey = "AAPKcb9f61203d3948828a04e7e5db1590cagaUCTuu6Mh2E_3BIFP2MQgj_BC0ukAfcal5bqKJcWgXI8uB-Czu8ME9i6hLlR0Yn";
  //URL supplied by ArcGIS REST API service for route optimization
  const routeUrl = "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";


  const constructionRenderer = {
    "type": "simple",
    "symbol": {
      "type": "simple-line",
      'color': "#FF0000",
    }
  }

  const construction = new FeatureLayer({
    url: "https://maps.ottawa.ca/arcgis/rest/services/ConstructionForecastData/MapServer/0",
    definitionExpression: "STATUS='INPROGRESS'",
    renderer: constructionRenderer
  });

  const ottawaRoads = new FeatureLayer({
    url: "https://maps.ottawa.ca/arcgis/rest/services/Streets/MapServer/3"
  });


  const map = new Map({
    //Default Map Service Provided by ArcGIS
    basemap: "arcgis-navigation" ,
    layers: [construction, ottawaRoads]
  });
  
  const view = new MapView({
    container: "viewDiv",
    map: map,
    //coordinates in Long/Lat
    center: [-75.690966,45.407608],
    zoom: 13
  });


//When The Map is Clicked
view.on("click", function(event){

  //On First Click, define it as the starting location of the route
  if (view.graphics.length === 0) {
    addGraphic("origin", event.mapPoint);
  //When the map is clicked a second time, we mark the point with a graphic and collect the route
  } else if (view.graphics.length === 1) {
    addGraphic("destination", event.mapPoint);

    getRoute();

  } else {
    view.graphics.removeAll();
    addGraphic("origin",event.mapPoint);
  }

});

    function getRoute() {
        const routeParams = new RouteParameters({
          stops: new FeatureSet({
            features: view.graphics.toArray()
          }),
          polylineBarriers: new FeatureSet({
            url: "https://maps.ottawa.ca/arcgis/rest/services/ConstructionForecastData/MapServer/0"
          }),
  
          returnDirections: true
  
        });
  
        route.solve(routeUrl, routeParams)
          .then(function(data) {
            data.routeResults.forEach(function(result) {
              result.route.symbol = {
                type: "simple-line",
                color: [5, 150, 255],
                width: 3
              };
              view.graphics.add(result.route);
            });
  
            // Display directions
           if (data.routeResults.length > 0) {
             const directions = document.createElement("ol");
             directions.classList = "esri-widget esri-widget--panel esri-directions__scroller";
             directions.style.marginTop = "0";
             directions.style.padding = "15px 15px 15px 30px";
             const features = data.routeResults[0].directions.features;
  
             // Show each direction
             features.forEach(function(result,i){
               const direction = document.createElement("li");
               direction.innerHTML = result.attributes.text + " (" + result.attributes.length.toFixed(2) + " miles)";
               directions.appendChild(direction);
             });

            view.ui.empty("top-right");
            view.ui.add(directions, "top-right");
           }
  
          }).catch(function(error){
              console.log(error);
          })
  
      }

function addGraphic(type, point) {
    const graphic = new Graphic({
      symbol: {
        type: "simple-marker",
        color: (type === "origin") ? "white" : "black",
        size: "8px"
      },
      geometry: point
    });
    view.graphics.add(graphic);
  }
});