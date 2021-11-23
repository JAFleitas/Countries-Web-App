import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router";
import { get_countries_detail } from "../../actions";
import style from './CountryDetail.module.css'

const CountryDetail = () =>{
    const params = useParams()
    const dispatch = useDispatch()
    

    useEffect(()=>{
        dispatch(get_countries_detail(params.id))
        
    },[])
    const info = useSelector(state => state.countryDetail)
    const {id, name, continent, capital, sub_region, area, population, activities, flag} = info
    const renderActivity = activities? activities.map(e =>{
        return(
            <div className={style.actividad} key={e.id}>
                <h2>Actividad</h2>
                <h2>Nombre: {e.name}</h2>
                <h3>Dificultad: {e.difficulty}</h3>
                <h3>Temporada: {e.season}</h3>
                <h3>Duracion: {e.duration}</h3>

            </div>
        )
    }):null
    
    const navigate = useNavigate()

    
    

    return (
        <div className={style.container}>
            <div className={style.info}>
                <h2 id={style.titulo}>{name}</h2>

                <h3 id={style.id}>{id}</h3>

                <img src={info.flag? info.flag[1]:null} />


                <h2>Informacion: </h2>
                <div>
                    <p>{name} esta ubicado en el continente {continent} {sub_region? `,
                    más concretamente en la sub-region ${sub_region}`:null} {capital==false? null:`, su capital es ${capital} `}.
                    {' '+name} tiene una poblacion actual de {population} de personas y un area de {area} KM2
                    </p>
                </div>
               
            </div>
            <div className={style.contenedorAct}>

                {renderActivity}

            </div>
            
            <button onClick={()=>navigate('/home')}>Volver</button>
        </div>
    )
} 

export default CountryDetail