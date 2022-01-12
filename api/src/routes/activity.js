const { Router } = require('express');
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db');
const router = Router();


router.post('/',async (req,res) =>{
    let {
        name,
       difficulty,
       duration,
       season,
       countries
    } = req.body;
    try{

    let activityCreated = await Activity.create({
       name,
       difficulty,
       duration,
       season
    })
    let country = await Country.findAll({
        where: {
            id: countries
        }
    })
    activityCreated.addCountry(country)
    res.status(200).send(activityCreated)

}catch(e){res.status(500).send("Could not process request, please try again later")}

});

module.exports = router;