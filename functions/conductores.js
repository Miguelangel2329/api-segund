const express = require("express");
const router = express.Router();

let conductores = [
    { id: 1, nombre: "Carlos", apellido: "Perez", dni: "12345678", edad: 30 },
    { id: 2, nombre: "Ana", apellido: "Lopez", dni: "87654321", edad: 25 }
];

router.get("/", (req, res) => {
    res.send(conductores);
});

router.get("/:id", (req, res) => {
    const conductor = conductores.find(c => c.id === parseInt(req.params.id));
    if (!conductor) return res.status(404).send("Conductor no encontrado");
    res.send(conductor);
});

router.post("/", (req, res) => {
    const conductor = {
        id: conductores.length + 1,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        dni: req.body.dni,
        edad: parseInt(req.body.edad)
    };
    conductores.push(conductor);
    res.send(conductor);
});

router.put("/:id", (req, res) => {
    const conductor = conductores.find(c => c.id === parseInt(req.params.id));
    if (!conductor) return res.status(404).send("Conductor no encontrado");

    conductor.nombre = req.body.nombre;
    conductor.apellido = req.body.apellido;
    conductor.dni = req.body.dni;
    conductor.edad = parseInt(req.body.edad);

    res.send(conductor);
});

router.delete("/:id", (req, res) => {
    const conductor = conductores.find(c => c.id === parseInt(req.params.id));
    if (!conductor) return res.status(404).send("Conductor no encontrado");

    const index = conductores.indexOf(conductor);
    conductores.splice(index, 1);
    res.send(conductor);
});

module.exports = router;
