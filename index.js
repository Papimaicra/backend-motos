const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");
const motosroutes = require("./source/routes/motos.routes")
const morgan = require('morgan')

dbConnection();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'))

app.use("/api/motos",motosroutes)
app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000);
