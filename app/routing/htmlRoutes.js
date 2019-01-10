
var path = require("path");

module.exports = (app) =>{

// Survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Catch All
app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "../public/home.html"));
}) 

};

  