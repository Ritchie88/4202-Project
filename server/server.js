const express = require("express");
const fetch = require("cross-fetch/polyfill");
const formData = require("isomorphic-form-data");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;
//const uri = 
app.use(cors());
app.use(express.json());
app.use(require("./routes/GIS"));
const { request } = require("@esri/arcgis-rest-request");
request("https://www.arcgis.com/sharing/rest/info")
  .then(response => console.log(response));


app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})