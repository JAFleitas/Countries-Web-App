import React from "react";
import style from './landing.module.css'
import { Link } from 'react-router-dom'


const Landing = () =>{

    return (
        <div className={style.landing}>
            <h1> Bienvenidos a Countries App </h1>
            <Link to= '/home'>
                <button> Ingresar </button>
            </Link>

            
        </div>
    )
}
export default Landing;