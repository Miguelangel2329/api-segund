const express = require("express");
const router = express.Router();

const ajenciera = [
    { id: 1, name: "jorge", age: 20, enroll: true },
    { id: 2, name: "Luis", age: 21, enroll: true }
];

router.get("/", (req, res) => {
    res.send(ajenciera);
});

router.post("/:id", (req, res) => {
    const ajencier = ajenciera.find(c => c.id === parseInt(req.params.id));
    if (!ajencier) return res.status(404).send("Ajenciera no encontrado");
    res.send(ajencier);
});

router.post("/", (req, res) => {
    const ajencier = {
        id: ajenciera.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: req.body.enroll === "true"
    };
    ajenciera.push(ajencier);
    res.send(ajencier);
});

router.delete("/:id", (req, res) => {
    const ajencier = ajenciera.find(c => c.id === parseInt(req.params.id));
    if (!ajencier) return res.status(404).send("Ajenciera no encontrado");

    const index = ajenciera.indexOf(ajencier);
    ajenciera.splice(index, 1);
    res.send(ajencier);
});

module.exports = router;
