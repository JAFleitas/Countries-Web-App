const axios  = require('axios')
const express = require('express')
const countries = express.Router()
countries.use(express.json())
module.exports = countries
const { Country, Activity, Op } = require ('../db')

countries.get('/countries', async (req, res)=>{
    try {
        if (req.query.name){
            
            const name  = req.query.name ;
            console.log(name)
            const paisQuery = await Country.findAll({
                where: {
                    name :{[Op.iLike]:`%${name}%`}
                },
                attributes: ['name', 'id', 'continent', 'flag', 'population']
            })
            paisQuery==false? res.status(401).send('Pais no encontrado'):res.json(paisQuery)  
                   

        }else{
            const paises = await Country.findAll({
                attributes: ['name', 'id', 'continent', 'flag', 'population']
            })
            res.json(paises)
        }

        
    } catch (e) {
        res.sendStatus(404)
    }


});

countries.get('/countries/:id', async (req, res)=>{
    try {
        const pais = await Country.findByPk(req.params.id,{
            attributes:['id','capital','sub_region','area', 'population'],
            include: Activity
        });
    
        res.json(pais)
        
    } catch (e) {
    
        return res.status(404).send(e)
    
    }


    
    
});