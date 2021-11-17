import React, {useEffect, useState} from "react";
import Country from "../Country/Country";
import { useSelector, useDispatch } from 'react-redux'
import { get_countries } from "../../actions";
import style from './Countries.module.css'

const Countries = () =>{

    const countries = useSelector(state => state.countries)
    const namePais = useSelector(state => state.name)
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filtro)
    

    useEffect(() => {
        dispatch(get_countries(namePais))
    },[namePais])

    useEffect( () => {
        console.log('cambio el estado')
    },[filter])
   
    const paisesPorPag = 10
    const [ numDePag, setNumDePag ] = useState(1)
    const inicio = ( numDePag * paisesPorPag ) - paisesPorPag
    const fin = ( numDePag * paisesPorPag )
    const cantDePag = Math.ceil(countries.length / paisesPorPag)

    const display = countries.slice( inicio, fin ).map(c => <Country
        name ={c.name}
        flag={c.flag[1]} 
        continent= {c.continent} 
        key={c.id}
    />)

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
        for(let i=1; i<=num ;i++){
            array.push(i)

        }
        return array
    }
    const paginado = createArr(cantDePag)

    console.log(paginado)

    return (
        <div className={style.countries}>
            { display }
            <div className={style.boton}>
            <button onClick={previousPage}>Anterior</button>
            {paginado.map(e =>{
                return <button onClick= {()=> buttonPage(e)}>{e}</button>
            })}
            <button onClick={nextPage}>Proximo</button>
            </div>
        </div>
    )
}
export default Countries;
