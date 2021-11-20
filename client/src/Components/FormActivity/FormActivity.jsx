import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { validate } from "./utils";
import {get_countries} from '../../actions'

const Form = () =>{
    const [input, setInput] = useState({
        difficulty: '',
        name:'',
        season:'',
        duration:'',
        pais:'',
        paises: []
    })
    const countries = useSelector(state => state.countries)
    
    const {difficulty, name, season, duration, paises, pais} = input

    const [errors, setErrors] = useState({})

    

    //manejar los inputs

    const handleChange = e =>{
        e.preventDefault()
        setInput({...input,
        [e.target.name]: e.target.value})

        setErrors(validate({...input,
            [e.target.name]: e.target.value}))


    }



    // funcion para agregar mas de un pais
    const AgregaPaises = () =>{
        //e.preventDefault()
        setInput({...input,
        paises:[...paises,pais],
        pais:''
    })

    }

    //postea en la db la actividad
    const navigate = useNavigate()
    const postActivity = async e =>{
        
    
        e.preventDefault()
        const res = await axios.post("http://localhost:3001/activity",{
            name,
            duration,
            difficulty,
            paises,
            season
        })
    
        return alert(res.data), navigate('/home')

    }


    //remueve el pais del array 
    const removePais = (evento)=>{
        setInput({...input,
        paises: paises.filter(e => e !== evento.target.value)})
    }


    //boton para volver a Principal
    const home = ()=>{
        navigate('/home')
    }

    // uso un componetDidmount para tener siempre los paises en el state
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(get_countries())
    },[])




    return (
        <div>
            <form onSubmit={postActivity}>
                <h2>Agregar actividad</h2>
                <label>Nombre: </label>
                <input name= 'name' value= {name} onChange={handleChange} placeholder='Nombre' />
                <br />
                    <label >Dificultad: </label>
                    <select name= 'difficulty'  onChange={handleChange}>
                        <option value="1">Dificultad 1</option>
                        <option value="2">Dificultad 2</option>
                        <option value="3">Dificultad 3</option>
                        <option value="4">Dificultad 4</option>
                        <option value="5">Dificultad 5</option>
                    </select>
                <br />
                    <label >Temporada: </label>
                    <select name= 'season' onChange={handleChange}>
                        <option value="Verano">Verano</option>
                        <option value="Otoño">Otoño</option>
                        <option value="Invierno">Invierno</option>
                        <option value="Primavera">Primavera</option>
                    </select>
                <br />
                    <label>Duracion (En minutos): </label>
                    <input name= 'duration' value= {duration} onChange={handleChange} placeholder='Duración' />
                <br />
                    <label>Paises: </label>
                    <select name="pais" onChange={handleChange} >
                        {countries.map(e => {
                            return <option value={e.id}>{e.name}</option>
                        })}
                    </select>
                    
                    <button type='button' onClick={AgregaPaises}>Agregar</button>
                <br />
                    {paises.map(e => {
                        return <button value={e}onClick={removePais}>{e}</button>
                    })}
                <br />

                <button type='submit' disabled={errors.name||errors.season
                ||errors.duration||errors.difficulty||errors.paises}>Add Activity</button>
                <button onClick={home}> Volver</button>

                
            </form>
        </div>
    )


}

export default Form;