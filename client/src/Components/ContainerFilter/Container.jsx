import React from "react";
import Filters from "../Filters/Filters";
import { useDispatch } from "react-redux";

import { arrayAlfabeto, arrayPoblacion } from "./utils";

//import { cambio_desc_asc, order_ascendente, order_descendente } from "../../actions";



const Container = () =>{
    //const dispatch = useDispatch()


/*     const descendente = ()=>{
        // c.preventDefault()
        dispatch(order_descendente())
        dispatch(cambio_desc_asc(true))
    }
    const ascendente = ()=>{
        // c.preventDefault()
        dispatch(order_ascendente()) 
        dispatch(cambio_desc_asc(false))
    }
    const arrayPoblacion = [{name : 'Orden Descendente', function: descendente},
    {name :'Orden Ascendente', function: ascendente}] */

    
    
    return (
        <div>
            <h4> Ordenar por: </h4>
             <Filters name = 'Poblacion' arrayFunction= {arrayPoblacion} />
             <Filters name = 'Alfabeto' arrayFunction= {arrayAlfabeto} />


        </div>
       
    )

}

export default Container;

