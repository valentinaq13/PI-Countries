const { Router } = require('express');
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db');
const router = Router();
const { getAllCountries } = require("./controllers")


module.exports = router;