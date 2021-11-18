import React from "react";
import { Link } from "react-router-dom";
import style from './Country.module.css'




const Country = props =>{
    
    const { flag, name, continent, id } = props

    return (
        <div className={style.container}>
            <Link to ={`/country/${id}`}>
                <div className={style.country}>
                    <img src={flag} alt='Bandera' />
                    <h2>{name}</h2>
                    <h4>{continent}</h4>
                </div>
            </Link>
        </div>
    )
}
export default Country ;