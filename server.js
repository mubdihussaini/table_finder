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

app.get("/api/", function(req, res) {
  var tmpObj = {
    reservations : reservations,
    waitlists    : waitlists
  };
  return res.json(tmpObj);
});

app.post("/api/new", function(req, res) {
  var party = req.body;
  party.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  if( reservations.length >=5 ){
    waitlists.push(party);
  }
  else{
    reservations.push(party);
  }
});



app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
