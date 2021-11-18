import React, { useEffect, useState } from "react";
import style from './loading.module.css'


const Loading = () =>{

    const [loading, setLoading] = useState('Cargando')
    useEffect(()=>{
        setTimeout(()=>{
            if (loading==='Cargando') setLoading('Cargando.')
            if (loading==='Cargando.') setLoading('Cargando..')
            if (loading==='Cargando..') setLoading('Cargando...')
            if (loading==='Cargando...') setLoading('Cargando')
            
        },500)
    },[loading])
    return (
        <div className={style.container}>
            <div className={style.loading}>
                
                <h1>{loading}</h1>
            </div>
        </div>
    )
}

export default Loading;