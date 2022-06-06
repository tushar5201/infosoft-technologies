const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));


// Nav Links


app.get("/" , function(req , res) {
    res.render("index");
});

app.get("/career" , function(req , res) {
    res.render("infosoft_career");
});

app.get("/contactus" , function(req , res) {
    res.render("infosoft_contact us")
})

app.get("/company-profile" , function(req , res) {
    res.render("infosoft_about")
})

app.get("/team" , function(req , res) {
    res.render("infosoft_about")
})

app.get("/recognition" , function(req , res) {
    res.render("infosoft_recognition")
})

app.get("/leadership" , function(req , res) {
    res.render("infosoft_leadership")
})

app.get("/vision" , function(req , res) {
    res.render("infosoft_vision")
})

app.get("/corporate-presentation" , function(req , res) {
    res.render("infosoft_corporate presentation")
})

app.get("/tally" , function(req , res) {
    res.render("infosoft_tally")
})

app.get("/tally-services" , function(req , res) {
    res.render("infosoft_tally_services")
})

app.get("/sap" , function(req , res) {
    res.render("infosoft_SAP")
})

app.get("/industries" , function(req , res) {
    res.render("infosoft_industries")
})

app.get("/technologies" , function(req , res) {
    res.render("infosoft_technology")
})

app.get("/sitemap" , function(req , res) {
    res.render("infosoft_sitemap")
})

app.get("/services" , function(req , res) {
    res.render("comingsoon")
})

// End Nav Links

app.listen(3000 , function() {
    console.log("3000");
})
