import React, { useEffect, useState } from "react";
import Filters from "../Filters/Filters";

import { arrayAlfabeto, arrayPoblacion, arrayContinent} from "./utils";
import style from './Container.module.css'
import { useDispatch } from "react-redux";
import { get_countries } from "../../actions";




const Container = () =>{
    const dispatch = useDispatch()
    const [limpiar, setLimpiar] = useState(false)
    useEffect(()=> console.log('Me limpie'),[limpiar])

    
    return (
        <div className={style.container}>
            <h4> Ordenar por: </h4>
            <Filters name = 'Poblacion' arrayFunction= {arrayPoblacion} />
            <Filters name = 'Alfabeto' arrayFunction= {arrayAlfabeto} />
            <Filters name = 'Continente' arrayFunction= {arrayContinent} />
            <button onClick={()=> {
                setLimpiar(limpiar?false:true)
                dispatch(get_countries())
            
                
            }}> Limpiar </button>


        </div>
       
    )

}

export default Container;

