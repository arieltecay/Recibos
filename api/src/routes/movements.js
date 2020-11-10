const server = require("express").Router();
const { Movements } = require('../db')

//Ruta para buscar todos los usuarios
server.get("/", (req, res) => {
  Movements.findAll({})
    .then((pacientes) => { res.send(pacientes); })
    .catch((err) => res.status(400).json({ err }));
});

server.post('/add', (req, res) => {
  Movements.create({
    name: req.body.name,
    observaciones: req.body.observaciones,
    debe: req.body.debe,
    haber: req.body.haber,
    sucursal: req.body.sucursal,
  }).then(paciente => {
    res.status(200).send("Agregado Satisfactoriamente")
  }).catch(err => res.send(err));
})

module.exports = server;