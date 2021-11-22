import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import style from './Filters.module.css'


const Filters = props => {
    const [value, setValue] = useState(false)
    const { name, arrayFunction } = props 
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        e.preventDefault()
        value ? setValue(false) : setValue(true)
    }

    //manejar style
    
    const [nameAct, setNameAct]=useState('')

    
    
    console.log(style)
    return (
        <div className={style.container}>
            <button className={value?style.activo:null} onClick={e => handleChange(e)}> {name} </button>
            {value ? arrayFunction.map(e =>{
                return <button className={nameAct== e.name? style.activoTwo:null} key={e.name} onClick={() => {
                    e.function(dispatch, e.c )
                    if(nameAct==e.name){
                        setNameAct('')
                        
                    }else setNameAct(e.name)
                   
                }} key={e.name} >{e.name}</button>
            }): null}
        </div>
        
    )
    
}
export default Filters;