import React from "react";
import style from './Country.module.css'




const Country = props =>{
    
    const { flag, name, continent } = props

    return (
        <div className={style.country}>
            <img src={flag} alt='Bandera' />
            <h3>Nombre: {name}</h3>
            <h4>Continente: {continent}</h4>
        </div>
    )
}
export default Country ;