import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { validate } from "./utils";
import { get_countries } from '../../actions'
import style from './FormActivity.module.css'


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
    const AgregaPaises = e =>{
        e.preventDefault()
        if(input.pais && !input.paises.includes(input.pais)){
        setInput({...input,
        paises:[...paises,pais],
        
        })
        }

    }

    //postea en la db la actividad
    const navigate = useNavigate()

    const postActivity = async e =>{
        
    
        e.preventDefault()

        if (name && duration && difficulty && paises.length>=1 && season){
            const res = await axios.post("http://localhost:3001/activity",{
                name,
                duration,
                difficulty,
                paises,
                season
            })
        
        
            return alert(res.data), navigate('/home')
        }

    }


    //remueve el pais del array 
    const removePais = (evento)=>{
        evento.preventDefault()
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

    useEffect(()=>{
        console.log(errors)
    },[errors, input])



    return (
        <div className={style.container}>
            <div className={style.form}>
                <form onSubmit={postActivity}>
                    <div>
                        <h2>Agregar actividad</h2>
                        <label>Nombre: </label>
                        <input name= 'name' value= {name} onChange={handleChange} placeholder='Nombre' />
                        <br />
                        {errors.name?<h6>{errors.name}</h6> : null }
                    </div>
                    <div>
                        <label >Dificultad: </label>
                        <select name= 'difficulty'  onChange={handleChange}>
                            <option value="1">Dificultad 1</option>
                            <option value="2">Dificultad 2</option>
                            <option value="3">Dificultad 3</option>
                            <option value="4">Dificultad 4</option>
                            <option value="5">Dificultad 5</option>
                        </select>
                        {errors.difficulty?<h6>{errors.difficulty}</h6> : null }
                    </div>
                    
                    <div>
                        <br />
                            <label >Temporada: </label>
                            <select name= 'season' onChange={handleChange}>
                                <option value="Verano">Verano</option>
                                <option value="Otoño">Otoño</option>
                                <option value="Invierno">Invierno</option>
                                <option value="Primavera">Primavera</option>
                            </select>
                            {errors.season?<h6>{errors.season}</h6> : null }
                        <br />

                    </div>

                    <div>

                        <label>Duracion (en minutos): </label>
                    
                        <input name= 'duration' value= {duration} onChange={handleChange} placeholder='Duración' />
                        {errors.duration?<h6>{errors.duration}</h6> : null }
                        
                    </div>

                    <div >
                        <label>Paises: </label>
                            <select name="pais" onChange={handleChange} >
                                {countries.map(e => {
                                    return <option value={e.id}>{e.name}</option>
                                })}
                            </select>
                            
                            <button onClick={AgregaPaises}>Agregar</button>
                            <br />
                            {errors.paises?<h6>{errors.paises}</h6> : null }
                        <br />
                            {paises.map(e => {
                                return <button type='button' value={e} onClick={removePais}>{e}</button>
                            })}
                        <br />

                        
                    </div>
                    
                     <div className={style.addhome}>
                        <button type='submit' disabled={errors.name ||errors.paises ||errors.season
                        ||errors.duration||errors.difficulty}>Add Activity</button>
                        <button onClick={home}> Volver</button>

                     </div>   
                    
                        
                  
                    
                </form>
            </div>
            
        </div>
    )


}

export default Form;