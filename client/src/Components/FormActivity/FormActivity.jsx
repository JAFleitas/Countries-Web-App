import React, { useState } from "react";
import axios from 'axios'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

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

    const handleChange = e =>{
        e.preventDefault()
        setInput({...input,
        [e.target.name]: e.target.value})
    }

    const AgregaPaises = () =>{
        //e.preventDefault()
        setInput({...input,
        paises:[...paises,pais],
        pais:''
    })

    }
    const navigate = useNavigate()
    const postActivity = async e =>{
        e.preventDefault()
       try{
            const res = await axios.post("http://localhost:3001/activity",{
                name,
                duration,
                difficulty,
                paises,
                season})
        
            return alert(res.data) && navigate('/home')
        }catch(e){
            console.log(e)
        }
    }
    const removePais = (evento)=>{
        setInput({...input,
        paises: paises.filter(e => e !== evento.target.value)})
    }
    

    return (
        <div>
            <form onSubmit={postActivity}>
                <h2>Agregar actividad</h2>
                <label>Nombre: </label>
                <input name= 'name' value= {name} onChange={handleChange} />
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
                    <label>Duracion: </label>
                    <input name= 'duration' value= {duration} onChange={handleChange} />
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

                <button type='submit'>Add Activity</button>

                
            </form>
        </div>
    )


}

export default Form;