import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { get_countries_detail } from "../../actions";

const CountryDetail = props =>{
    const {ID} = props
    const dispatch = useDispatch()
    const info = useSelector(state => state.countryDetail)
    useEffect(()=>{
        dispatch(get_countries_detail(ID))
    },[])
   
    const {id, name, continent, capital, sub_region, area, population, activities} = info
    const renderActivity = activities? activities.map(e =>{
        return(
            <div key={e.id}>
                <h2>Nombre: {e.name}</h2>
                <h3>Dificultad: {e.difficulty}</h3>
                <h3>Temporada: {e.season}</h3>
                <h3>Duracion: {e.duration}</h3>

            </div>
        )
    }):null
    
    return (
        <div>
            <div>
                <h1>{name}</h1>
                <h2>{id}</h2>


                <h2>Informacion: </h2>
                <p>{name} esta ubicado en el continente {continent},mas concretamente en la sub-region {sub_region}, su capital es {capital}.
                    {name} tiene una poblacion actual de {population} de personas y un area de {area} KM2
                
                </p>
            </div>

            {renderActivity}
        </div>
    )
}

export default CountryDetail