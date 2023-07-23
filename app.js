const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(__dirname + "/docs"));
app.use("/gsap/", express.static(path.join(__dirname, "node_modules/gsap")));
app.use("/image/", express.static(path.join(__dirname, "image")));
//app.use("/locomotive/", express.static(path.join(__dirname, "locomotive")));

app.listen(3000, () => console.log("Visit http://localhost:3000"));
