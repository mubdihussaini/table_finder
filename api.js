module.exports = function(app){
  // Create New Characters - takes in JSON input
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
}
