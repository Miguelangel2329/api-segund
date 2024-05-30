const express = require("express");
const serverless = require('serverless-http');
const app = express();

app.use(express.json());

const ajenciera = [
    { id: 1, name: "jorge", age: 20, enroll: true },
    { id: 2, name: "Luis", age: 21, enroll: true }
];

app.get("/", (req, res) => {
    res.send("Node js api");
});

app.get("/api/agenciera", (req, res) => {
    res.send(ajenciera);
});

app.post("/api/ajenciera/:id", (req, res) => {
    const ajencier = ajenciera.find(c => c.id === parseInt(req.params.id));
    if (!ajencier) return res.status(404).send("Ajenciera no encontrado");
    res.send(ajencier);
});

app.post("/api/ajenciera", (req, res) => {
    const ajencier = {
        id: ajenciera.length + 1,
        name: req.body.name,
        age: parseInt(req.body.age),
        enroll: req.body.enroll === "true"
    };
    ajenciera.push(ajencier);
    res.send(ajencier);
});

app.delete("/api/ajenciera/:id", (req, res) => {
    const ajencier = ajenciera.find(c => c.id === parseInt(req.params.id));
    if (!ajencier) return res.status(404).send("Ajenciera no encontrado");

    const index = ajenciera.indexOf(ajencier);
    ajenciera.splice(index, 1);
    res.send(ajencier);
});

// Exportar la aplicación como una función serverless
module.exports.handler = serverless(app);
