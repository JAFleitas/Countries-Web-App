import React from "react";
import './Country.css'




const Country = props =>{
    
    const { flag, name, continent } = props

    return (
        <div>
            <img src={flag} alt='Bandera' />
            <h2>nombre: {name}</h2>
            <h4>continente: {continent}</h4>
        </div>
    )
}
export default Country ;