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
            paisQuery==false? res.status(404).json({error:'Pais no encontrado'}):res.json(paisQuery)  
                   

        }else{
            const paises = await Country.findAll({
                attributes: ['name', 'id', 'continent', 'flag', 'population'],
                include: Activity
            })
            res.status(200).json(paises.sort((a,b) => a.name >= b.name ? 1 : -1))
        }

        
    } catch (e) {
        res.sendStatus(404)
    }


});

countries.get('/countries/:id', async (req, res)=>{
    try {
        const pais = await Country.findByPk(req.params.id,{
            attributes:['id','capital','sub_region','area', 'population','name','continent','flag', 'maps'],
            include: Activity
        });
    
        res.json(pais)
        
    } catch (e) {
    
        return res.status(404).send(e)
    
    }


    
    
});