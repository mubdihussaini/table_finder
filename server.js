// var http =require("http");
// var fs = require("fs");

// var PORT = 3000;

// var server = http.createServer(handleRequest);

// function handleRequests(req,res){

// 	fs.readFilke(__dirname + "/home.html", function(err,data){
// 		res.writeHEad(200,{"Content-Type": "text/html"});
// 		res.end(data);

// 	});
// }

// server.listen(PORT,function(){
// 	console.log("Server is listening on PORT: " + PORT)
// });


var express =require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:"application/vnd/api+json"}));



var reservations = [
    {
      customerName : "yoda",
      phoneNumber  : "991-991-9991",
      email        : "JediMaster@starwars.com",
      partySize    : 1
    }
  ];

  var waitlists = [
    {
      customerName : "yodaAgain",
      phoneNumber  : "991-991-9991",
      email        : "JediMaster@starwars.com",
      partySize    : 1
    }
  ];


app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });

  

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});