const { Router } = require('express');
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db');
const router = Router();
const { getAllCountries } = require("./controllers")

router.get("/", async (req, res) =>{
    try{
        const name = req.query.name;
        let countriesTotal = await getAllCountries();
        if (name){
            let countryName = await countriesTotal.filter(el => el.name.toLowerCase().includes(name.toLowerCase()))
            countryName.length ?
            res.status(200).send(countryName) :
            res.status(404).send("Country not founded")
        } else{
            res.status(200).send(countriesTotal)
        }
    }
    catch(e){console.log(e)}
});

module.exports = router;