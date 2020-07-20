const express = require("express");
const routes = express.Router();
const simulation = require("./controllers/simulation");

routes.post("/", simulation.init);
