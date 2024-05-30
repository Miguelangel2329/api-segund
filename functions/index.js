const express = require("express");
const serverless = require('serverless-http');
const app = express();

const ajencieraRouter = require("./ajenciera");
const conductoresRouter = require("./conductores");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Node js api");
});

app.use("/api/ajenciera", ajencieraRouter);
app.use("/api/conductores", conductoresRouter);

module.exports.handler = serverless(app);
