const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");


const static_path = path.join(__dirname,"../public");
console.log(static_path);
const templates_path = path.join(__dirname,"../templates/views");
const patials_path = path.join(__dirname,"../templates/patials");
app.use(express.static(templates_path));

app.use(express.static(static_path));
console.log(path.join(__dirname));
app.set("view engine","hbs");
app.set("views",templates_path);
hbs.registerPartials(patials_path);

app.get("/",(req,res) => {
    res.render("index");
});
app.get("/about",(req,res) => {
    res.render("about");
});
app.get("/weather",(req,res) => {
    res.render("wether");
});
app.get("*",(req,res) => {
    res.render("404error",{
        errorMsg:"oops! page note found"
    });
});
app.listen(4500,() => {
    console.log("great");
});