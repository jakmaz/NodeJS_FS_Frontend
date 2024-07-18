const express = require("express");
const router = require("../routes/router");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);

app.use(express.static("public"));

app.use("/", router);

module.exports = app;
