const express = require("express");
const routerApp = express.Router();

const appSalasDeAula = require("../apps/clientes/controller/ctlSalasDeAula");

// middleware that is specific to this router
routerApp.use((req, res, next) => {
  next();
});

routerApp.get("/", (req, res) => {
  res.send("Olá mundo!");
});

//Rotas das Salas De Aula
routerApp.get("/getAllSalasDeAula", appSalasDeAula.getAllSalasDeAula);
routerApp.post("/getSalasDeAulaByID", appSalasDeAula.getSalasDeAulaByID);
routerApp.post("/insertSalasDeAula", appSalasDeAula.insertSalasDeAula);
routerApp.post("/updateSalasDeAula", appSalasDeAula.updateSalasDeAula);
routerApp.post("/DeleteSalasDeAula", appSalasDeAula.DeleteSalasDeAula);

module.exports = routerApp;