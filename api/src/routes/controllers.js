const axios = require("axios");
const { Router } = require("express");
const { Activity, Country } = require("../db");
const router = Router();

const getApiInfo = async () => {
    const countries = await Country.findAll({
        attributes: ["id", "name", "flag", "continent", "capital", "subregion", "area", "population"],
    });
    if (!countries.length) {
        var allCountry = await axios.get("https://restcountries.com/v3/all");
        allCountry = allCountry.data
        allCountry = allCountry.map((elem) => {

            return {
                id: elem.cca3,
                name: elem.name.common ? elem.name.common : 'sin nombre',
                flag: elem.flags.find((e) => e.includes('svg')),
                continent: elem.continents ? elem.continents[0] : 'sin continent',
                capital: elem.capital ? elem.capital[0] : 'sin capital',
                subregion: elem.subregion,
                area: Math.floor(elem.area),
                population: Math.floor(elem.population),
            }
        });
        await Country.bulkCreate(allCountry);
        return allCountry;
    } else {
        return countries
    }
};

// const getApiInfo = async () => {
//     try {
//     const apiUrl = await axios.get("https://restcountries.com/v3/all")
//     const apiInfo = await apiUrl.data.forEach(async (el) => {
        
//              await Country.create({
//                 where: {
//                     name: el.name.official,
//                     id: el.cca3,
//                     flag: el.flags[0],
//                     continents: el.region,
//                     capital: el.capital,
//                     subregion: el.subregion,
//                     area: el.area,
//                     population: el.population
//                 },
//             })
        
//     }) 
//     return apiInfo
// } catch (e) { console.log(e) };
  
    
// }

const getDbInfo = async () => {
    return await Country.findAll({
        include: {
            model: Activity,
            attributes:["name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            },
        }
    })
}

const getAllCountries = async () => {

    const dbInfo = await getDbInfo();
    return dbInfo
    // const apiInfo = await getApiInfo();
    // const dbInfo = await getDbInfo();
    // const infoTotal = apiInfo.concat(dbInfo);
    // return infoTotal
}
const getActivity = async () => {
    const activity = await Activity.findAll({
        include: { 
            model: Country,
            attributes:["name", "flag", "continent"],
            through: {
                attributes: [],
            }
        }
    })
    return activity
}


module.exports={
    getAllCountries,
    getDbInfo,
    getApiInfo,
    getActivity
}