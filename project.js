require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/rest/route",
  "esri/layers/RouteLayer",
  "esri/rest/support/Stop",
  "esri/widgets/Directions",
  "esri/rest/support/FeatureSet",
  "esri/layers/FeatureLayer",
  "esri/rest/support/PolylineBarrier",
  "esri/rest/support/PolygonBarrier",
], function (
  esriConfig,
  Map,
  MapView,
  Graphic,
  route,
  RouteLayer,
  Stop,
  Directions,
  FeatureSet,
  FeatureLayer,
  PolylineBarrier,
  PolygonBarrier
) {
  const json = {
    displayFieldName: "FORECAST_ID",
    fieldAliases: { FEATURE_TYPE: "Type of Work", STATUS: "STATUS" },
    geometryType: "esriGeometryPolyline",
    spatialReference: { wkid: 4326, latestWkid: 4326 },
    fields: [
      {
        name: "FEATURE_TYPE",
        type: "esriFieldTypeString",
        alias: "Type of Work",
        length: 10,
      },
      {
        name: "STATUS",
        type: "esriFieldTypeString",
        alias: "STATUS",
        length: 15,
      },
    ],
    features: [
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.70825831974831, 45.415705279245678],
              [-75.70549516481644, 45.41685591614776],
            ],
            [
              [-75.710636997535218, 45.413715041414328],
              [-75.709570248135336, 45.414166601499801],
              [-75.709401658611014, 45.414345406266378],
              [-75.7092009668917, 45.414625822815054],
              [-75.70873654687297, 45.415312654510771],
              [-75.708477517660782, 45.415562819813516],
              [-75.708258320646635, 45.41570527798455],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.709006526548464, 45.417024273400997],
              [-75.70776080220125, 45.414927726527864],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.706144745581526, 45.417387982602413],
              [-75.70862026624765, 45.416319699926127],
              [-75.708958099269822, 45.41591710373423],
              [-75.710536277527268, 45.413774350733618],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.750180855206779, 45.392191837245711],
              [-75.7476090108877, 45.387833979390017],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.67741762980684, 45.418962337621139],
              [-75.677950090920135, 45.418761822668337],
              [-75.678277791844195, 45.418586827149767],
              [-75.678450218971406, 45.41827895781222],
              [-75.678490543446202, 45.418047228052032],
              [-75.678446809864923, 45.417707768022915],
              [-75.678468558077938, 45.417413389778154],
              [-75.678555761135826, 45.417214248995833],
              [-75.678828097092307, 45.41693724404962],
              [-75.679017441292942, 45.416819569014962],
              [-75.679313882641765, 45.416559179544571],
              [-75.679742518271155, 45.415696899474476],
              [-75.680316170733491, 45.414761259838741],
              [-75.680471687075482, 45.414609400317637],
              [-75.681020626884347, 45.414353300680311],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.752196964860175, 45.391308531080057],
              [-75.751660238545924, 45.391456084609331],
              [-75.75118790436953, 45.391576346607877],
              [-75.750010312745047, 45.391944728962599],
              [-75.749081772744873, 45.392219728655306],
              [-75.744328788373224, 45.393785256648073],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.680690794258112, 45.413594122149071],
              [-75.681538885633017, 45.413258256294242],
              [-75.681640954910549, 45.413267986556207],
              [-75.682328466140191, 45.413434885197212],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.665725936908089, 45.375132289738559],
              [-75.662423027441108, 45.368696975424854],
              [-75.660403858125846, 45.365661598441548],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.669942967516604, 45.43289983153381],
              [-75.671459409056141, 45.435339331538323],
              [-75.673838332981433, 45.437085076357029],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.654859045662164, 45.438186401269022],
              [-75.651326670539021, 45.439390575958257],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.645847065883515, 45.417555071476684],
              [-75.645820429038693, 45.417626861182463],
              [-75.645970507878275, 45.418689826325306],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.758235106925071, 45.399204259852262],
              [-75.758179659312475, 45.399219845390434],
              [-75.756897457076519, 45.399580363442659],
              [-75.756007355987364, 45.399830617983149],
              [-75.755584828901902, 45.399937278842145],
              [-75.755458769216403, 45.399885862782568],
              [-75.755264575011537, 45.399554248731619],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.679771232020883, 45.415680267305504],
              [-75.677902635618608, 45.416435664631962],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.678299869738936, 45.415475665246241],
              [-75.678775499834089, 45.416074964077438],
              [-75.679145830309977, 45.416496104859981],
              [-75.679306536219372, 45.416544745166334],
              [-75.680184543289855, 45.416794012127596],
              [-75.680375919479658, 45.416813383152061],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.680146813149619, 45.412668233533282],
              [-75.680321199502444, 45.412646609165684],
              [-75.681656939532701, 45.412161265395149],
              [-75.682774828225106, 45.411719339714914],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.682043674143983, 45.392344833251563],
              [-75.684389585880908, 45.391413466877673],
              [-75.684452391593993, 45.391334902573391],
              [-75.688462519531328, 45.389684463588971],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.659934361727423, 45.436472906963097],
              [-75.658828211320852, 45.436904644829141],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.631349308226689, 45.394406176014577],
              [-75.630950187644288, 45.392000423693716],
              [-75.630700314959796, 45.389860570665952],
              [-75.630603600539672, 45.38913084283076],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.626031482967349, 45.389684355710216],
              [-75.626213444812976, 45.389478779417672],
              [-75.626406649074397, 45.389372274200163],
              [-75.62666314593578, 45.389302246572818],
              [-75.627289825051037, 45.389244046502235],
              [-75.629596660971416, 45.389149598144627],
              [-75.633772340330765, 45.389028938576743],
              [-75.634497171170594, 45.389232413168173],
              [-75.634895057467801, 45.389652583197105],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.627007011145082, 45.391023621899869],
              [-75.626746328134459, 45.390535703904469],
              [-75.626722866834172, 45.390400545042397],
              [-75.626788793294565, 45.390266069713107],
              [-75.627284701060645, 45.389576956304808],
              [-75.627312178728559, 45.389451185689012],
              [-75.627289825051037, 45.389244046502235],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.677957549631927, 45.417269669117182],
              [-75.678035421888964, 45.417738381562181],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.682774828225106, 45.411719339714914],
              [-75.680947299204348, 45.409850713204186],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.685916176586545, 45.393171352871065],
              [-75.685419668745851, 45.392551972429587],
              [-75.684415561565658, 45.391344799371531],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.752138241990068, 45.391257203689399],
              [-75.752904828320922, 45.391025469674219],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.630798198986412, 45.390599109130925],
              [-75.628325634675917, 45.390692256128268],
              [-75.628027747039482, 45.389217699268343],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.708230656129146, 45.415693542899398],
              [-75.707787838796364, 45.414942638043939],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.710697730834951, 45.413664615327448],
              [-75.708638990731444, 45.416390525797048],
            ],
          ],
        },
      },
      {
        attributes: { FEATURE_TYPE: "RRSW", STATUS: "INPROGRESS" },
        geometry: {
          paths: [
            [
              [-75.708985018185615, 45.417047624469653],
              [-75.706529942277044, 45.418092434292923],
            ],
          ],
        },
      },
      {
      geometry: {
         paths: [
           [
             [-75.705376428197113, 45.410744997717167],
             [-75.703333257694112, 45.411585640336732],
             [-75.701649510322795, 45.412302778653398],
             [-75.700107505425194, 45.412930889702046],
             [-75.698012963864343, 45.413780074068242]
           ]
         ]
       }
      },
      {
      geometry: {
         paths: [
            [
            [-75.698438487729589, 45.410998803081633],
            [-75.70058861793855, 45.413545343721459]
            ]
         ]
      }
      },
      {
         geometry: {
         paths: [
           [
             [-75.705241176949627, 45.416582788708503],
             [-75.693678607889822, 45.421638838204274]
           ]
         ]
       }
     }
    ],
  };

  const tornadoData = [{
    geometry: {
      rings: [
        [
          [-75.782997,45.33172],
          [-75.762595,45.335367],
          [-75.758122,45.327362],
          [-75.77657,45.320529]
        ]
      ]
    }
    },
  {
    geometry: {
      rings: [
        [
          [-75.78302, 45.33172],
          [-75.77661, 45.32039],
          [-75.79009, 45.31637],
          [-75.79778, 45.32983]
        ]
      ]
    }
  },
  {
    geometry: {
      rings: [
        [
          [-75.902665, 45.29633],
          [-75.91502, 45.315003],
          [-75.882358, 45.321368],
          [-75.872449, 45.303130]
        ]
      ]
    }
  },
  {
    geometry: {
      rings: [
        [
          [-75.84415, 45.31742],
          [-75.817419, 45.328664],
          [-75.81006, 45.317100],
          [-75.83166, 45.31357]
        ]
      ]
    }
  }];

  var floodedAreas = [
    new PolygonBarrier({
      barrierType: "restriction",
      geometry: {
        rings: [[
          [-75.6812175, 45.38923793],
          [-75.6810904, 45.38934338],
          [-75.6806284, 45.38916146],
          [-75.6807324, 45.38901661]
        ]]
      }
    }),
    new PolygonBarrier({
      barrierType: "restriction",
      geometry: {
        rings: [[
          [-75.699776537328, 45.391510296695],
          [-75.699462091046, 45.391845876136],
          [-75.699197164394, 45.391788497524],
          [-75.699484374655, 45.391409448359]
        ]]
      }
    }),
    new PolygonBarrier({
      barrierType: "restriction",
      geometry: {
        rings: [[
          [-75.671581655393, 45.400283441457],
          [-75.671235466242, 45.400606622543],
          [-75.670948286524, 45.400548615769],
          [-75.671251202031, 45.400175714648]
        ]]
      }
    }),
    new PolygonBarrier({
      barrierType: "restriction",
      geometry: {
        rings: [[
          [-75.678173546847, 45.393016909449],
          [-75.677896136308, 45.393147988777],
          [-75.677803322372, 45.393071948320],
          [-75.678084857976, 45.392932902648]
        ]]
      }
    }),
    new PolygonBarrier({
      barrierType: "restriction",
      geometry: {
        rings: [[
          [-75.669943008839, 45.404059101929],
          [-75.669590315885, 45.404088788157],
          [-75.669501627014, 45.403737620812],
          [-75.669741911980, 45.403661594605]
        ]]
      }
    }),
    new PolygonBarrier({
      barrierType: "restriction",
      geometry: {
        rings: [[
          [-75.673442422978, 45.398418902493],
          [-75.673332410797, 45.398543561919],
          [-75.673237369040, 45.398516682233],
          [-75.673340330344, 45.398386455548]
        ]]
      }
    }),
    new PolygonBarrier({
      barrierType: "restriction",
      geometry: {
        rings: [[
          [-75.680633344301, 45.390104734350],
          [-75.680543813708, 45.390171419925],
          [-75.680416300548, 45.390068533397],
          [-75.680511256965, 45.390022805710]
        ]]
      }
    })
  ];


  //API Key used by ArcGIS account for ryanmritchie@cmail.carleton.ca
  esriConfig.apiKey =
    "AAPKcb9f61203d3948828a04e7e5db1590cagaUCTuu6Mh2E_3BIFP2MQgj_BC0ukAfcal5bqKJcWgXI8uB-Czu8ME9i6hLlR0Yn";
  //URL supplied by ArcGIS REST API service for route optimization
  const routeUrl =
    "https://route-api.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World";

  const stops = [];
  const polylineBarriers = [];

  var constructionSet = new FeatureSet();
  constructionSet = FeatureSet.fromJSON(json);
  console.log(constructionSet.features[0].geometry);

  for (let i = 0; i < json.features.length; i++) {
    let obj = json.features[i];
    polylineBarriers.push(
      new PolylineBarrier({
        barrierType: "restriction",
        geometry: obj.geometry,
      })
    );
  }

  const routeLayer = new RouteLayer({});
  routeLayer.stops = stops;
  routeLayer.polylineBarriers = polylineBarriers;

  const tornado = [];
  for(let i = 0; i < tornadoData.length ; i++){
    tornado.push(new PolygonBarrier({
      barrierType: "restriction",
      geometry: tornadoData[i].geometry,
    }));
  }

  routeLayer.polygonBarriers = tornado;

  console.log(routeLayer.polygonBarriers.length);


  const map = new Map({
    //Default Map Service Provided by ArcGIS
    basemap: "arcgis-navigation",
    layers: routeLayer,
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    //coordinates in Long/Lat
    center: [-75.690966, 45.407608],
    zoom: 13,
  });

  const directionsRoute = new Directions({
    layer: routeLayer,
    view,
  });

  view.ui.add(directionsRoute, {
    position: "top-right",
  });
});
