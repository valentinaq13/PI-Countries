const { Router } = require('express');
const router = Router();
const axios = require("axios");
const country = require("./countries");
const activity = require("./activity")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/countries", country);
router.use("/activity", activity);

module.exports = router;
