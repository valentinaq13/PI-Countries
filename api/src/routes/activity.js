const { Router } = require('express');
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Country, Activity } = require('../db');
const { getActivity } = require('./controllers');
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
       name: name.toLowerCase(),
       difficulty: Math.ceil(difficulty),
       duration: Math.ceil(duration),
       season: season.toLowerCase(),
    })
    let findCountry = await Country.findAll({
        where: {
            name: countries
        }
    })
    await activityCreated.addCountry(findCountry)
    res.status(200).json('Activity created successfully');

}catch(e){res.status(500).send("Could not process request, please try again later")}


});

router.get('/', async (req, res, next) => {
    try{
   const activity = await getActivity();
   res.status(200).send(activity)
    
}catch(e){res.status(500).send("Could not process request, please try again later")}
});


module.exports = router;