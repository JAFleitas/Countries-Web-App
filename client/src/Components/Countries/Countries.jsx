import React, {useEffect, useState} from "react";
import Country from "../Country/Country";
import { useSelector, useDispatch } from 'react-redux'
import { get_countries, loadingPage} from "../../actions";
import style from './Countries.module.css'
import ContainerFilters from "../ContainerFilter/ContainerFilters";

import Loading from "../loading/Loading";


const Countries = () =>{

    const countries = useSelector(state => state.countries)
    
    const dispatch = useDispatch()
    // uso el filtro del estado global y un useEfect para poder volver a renderizar los paises, ya el que el sort solo ordena el array 
    const filtro = useSelector(state=> state.filtro)
    useState(()=> console.log(filtro),[filtro])
    
    
    useEffect(() => {
        dispatch(get_countries())
     
    },[])

    
   //PAGINADO
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
        id={c.id}
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
    
    const loading = useSelector(state => state.loading)
    return (
        <div className={style.container}>
            <div className={style.subContainer}>
                <div className={style.filtros}>

                     <ContainerFilters/>

                </div>

                <div className={style.containerCountries}>
                    {
                    loading? <Loading/> :  display 
                    }
                </div>
            </div>
            
                
            <div className={style.boton}>
                    <button onClick={previousPage}>Anterior</button>
                    {paginado.map(e =>{
                        return <button className={numDePag===e?style.activo:null} key={e} onClick= {()=> buttonPage(e)}>{e}</button>
                    })}
                    <button onClick={nextPage}>Proximo</button>
            </div>
            

                
        
        </div>
    )
}
export default Countries;
