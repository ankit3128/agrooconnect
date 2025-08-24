const express = require("express");
const app = express();
const path = require("path");
const ejsMate = require("ejs-mate");



// -------------------------
// ✅ App setup
// -------------------------
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);





app.get("/", (req, res) => {
    res.render("layouts/boiler.ejs");

})
 





// start server
app.listen(8080, () => {
    console.log("server is working");
})