const axios  = require('axios')
const express = require('express')
const activities = express.Router()
activities.use(express.json())
module.exports = activities
const { Country, Activity, Op } = require ('../db')


activities.post('/activity', async (req, res)=>{
    try {
        const { difficulty, name, season, duration, paises } = req.body ;
        const [actividad, creado] = await Activity.findOrCreate({
            where :
            {
                difficulty,
                name,
                season,
                duration
            }

        })
        
/*         await Activity.create({
            difficulty,
            name,
            season,
            duration
        })
        const actividad = await Activity.findOne({
            where : {
                difficulty,
                name,
                season,
                duration 
            }
        }) */
        
        await actividad.addCountries(paises)
    
        res.send('Actividad cargada con exito!')
    } catch (e) {
        res.status(404).send(e)
        console.log(e)
    }



})