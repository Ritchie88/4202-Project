const express = require("express");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));
app.use(express.json());

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '/main.html'));
});

app.get('/construction',function(req,res){
  res.sendFile(path.join(__dirname, '/construction.html'));
});

app.get('/snow',function(req,res){
  res.sendFile(path.join(__dirname, '/snow.html'));
});

app.get('/tornado',function(req,res){
  res.sendFile(path.join(__dirname, '/tornado.html'));
});

app.get('/flood',function(req,res){
  res.sendFile(path.join(__dirname, '/flood.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port:${PORT}`)
})