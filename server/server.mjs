const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 5000;
//const uri = 

app.use(express.static(__dirname));
app.use(express.json());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '/display.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})