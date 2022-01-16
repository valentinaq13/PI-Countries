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
    catch(e){res.status(404).send("Country not founded")}
});

router.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const project = await Country.findByPk(id.toUpperCase(), {
            include:{ 
                model: Activity,
                attributes:["name", "difficulty", "duration", "season"],
                through: {
                    attributes: [],
                }
            }
        });
            project ?
            res.status(200).json(project) :
            res.status(404).send("Pais no encontrado")
    }
    catch (e) {res.status(404).send("Country not founded")}
});

module.exports = router;