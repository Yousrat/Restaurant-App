var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

var tables = [{
    customerName:"rima",
    phoneNumber:"234567871",
    customerEmail:"rima@mail.com",
    customerID:"1234"
  },{
    customerName:"jemin",
    phoneNumber:"994567871",
    customerEmail:"jemin@mail.com",
    customerID:"9234"
  }];

var waitlist = [{
    customerName:"sam",
    phoneNumber:"8767871",
    customerEmail:"sam@mail.com",
    customerID:"1234"
  },{
    customerName:"amala",
    phoneNumber:"8854994567871",
    customerEmail:"amala@mail.com",
    customerID:"9234"
  }];

app.get('/api/tables', function (req, res) {
  res.json(tables);
});

app.get('/api/waitlist', function (req, res) {
  res.json(waitlist);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});