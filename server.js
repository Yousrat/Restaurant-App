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

var reserved = [{
    customerName:"rima",
    phoneNumber:"234567871",
    customerEmail:"rima@mail.com",
    customerID:"0001"
  },{
    customerName:"jemin",
    phoneNumber:"994567871",
    customerEmail:"jemin@mail.com",
    customerID:"0002"
  },{
    customerName:"sam",
    phoneNumber:"8767871",
    customerEmail:"sam@mail.com",
    customerID:"0003"
  },{
    customerName:"amala",
    phoneNumber:"8854994567871",
    customerEmail:"amala@mail.com",
    customerID:"0004"
  },{
    customerName:"geetha",
    phoneNumber:"678967871",
    customerEmail:"geetha@mail.com",
    customerID:"0005"
  },{
    customerName:"alex",
    phoneNumber:"834567871",
    customerEmail:"alex@mail.com",
    customerID:"0006"
  },{
    customerName:"basil",
    phoneNumber:"994567871",
    customerEmail:"basil@mail.com",
    customerID:"0007"
  }];

app.get('/api/tables', function (req, res) {
  res.json(reserved.slice(0, 5));
});

app.get('/api/waitlist', function (req, res) {
  res.json(reserved.slice(5));
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});