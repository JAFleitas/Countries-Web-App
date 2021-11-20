import React, { useEffect, useState } from "react";
import Filters from "../Filters/Filters";

import { arrayAlfabeto, arrayPoblacion, arrayContinent} from "./utils";
import style from './Container.module.css'
import { useDispatch, useSelector } from "react-redux";
import { filter_activity, get_activities, get_countries } from "../../actions";




const Container = () =>{
    useEffect(()=> {
        dispatch(get_activities())
    },[])

    const dispatch = useDispatch()
    
    const [idActivity, setIdActivity]= useState('')

    const actividades = useSelector(state => state.activities )

    

    const handleChange = e =>{
        setIdActivity(e.target.value)
        
    }
    const filterOnClick = async ()=>{
        if(idActivity!==''){
            await dispatch(get_countries())
            dispatch(filter_activity(idActivity))
        }
    }
    // limpiar los filtros 

    const limpiarFiltros= ()=>{
        dispatch(get_countries())
        
    }

    
    return (
        <div className={style.container}>
            <div>
                <h4> Ordenar por: </h4>
                <Filters name = 'Poblacion' arrayFunction= {arrayPoblacion} />
                <Filters name = 'Alfabeto' arrayFunction= {arrayAlfabeto} />
            </div>

            <div>
                <h4>Filtrar por: </h4>
                <div>
                    <label>Actividad</label>
                    <br/>
                    <select onChange={handleChange}>
                        {actividades.map(e => <option value={e.id}>{e.name}</option>)}
                    </select>
                    <button onClick={filterOnClick}>Filtrar</button>
                </div>
                <div>
                    <label >Continente</label>
                    <br/>
                    <Filters name = 'Continente' arrayFunction= {arrayContinent} /> 
                </div>
                <br/>
                <button onClick={limpiarFiltros}>Limpiar Filtros</button>
               
                
            </div>
            
            
            


        </div>
       
    )

}

export default Container;

