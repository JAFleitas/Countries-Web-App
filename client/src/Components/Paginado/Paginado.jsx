import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginado_fin, paginado_inicio } from "../../actions";
import style from './Paginado.module.css'


const Paginado = () =>{
    const dispatch = useDispatch()
    const countries= useSelector(state => state.countries)
    const paisesPorPag = 10
    const [ numDePag, setNumDePag ] = useState(1)
    const inicio = ( numDePag * paisesPorPag ) - paisesPorPag
    const fin = ( numDePag * paisesPorPag )
    const cantDePag = Math.ceil(countries.length / paisesPorPag)

    const previousPage = () =>{
       if( numDePag === 1) return
       setNumDePag(numDePag - 1)
    }
    const nextPage = () => {
        if (numDePag===cantDePag) return ;
        setNumDePag(numDePag + 1)
    }

    const buttonPage = num =>{
        setNumDePag(num)
    }

    const createArr = num =>{
        const array = []
        for(let i= 1; i<=num ;i++){
            array.push(i)

        }
        return array
    }

    const paginado = createArr(cantDePag)

    console.log(paginado)

    useEffect(()=>{
        dispatch(paginado_inicio(inicio))
        dispatch(paginado_fin(fin))
    },[numDePag])



    return (
        
        <div className={style.boton}>

            <button onClick={previousPage}>Anterior</button>

            {paginado.map(e =>{

                return <button className={numDePag === e ? style.activo : null} key={e} onClick= {()=> buttonPage(e)}>{e}</button>

            })}

            <button onClick={nextPage}>Proximo</button>
        </div>
    )
}

export default Paginado;