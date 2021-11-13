import React, { useState } from "react";
import { useDispatch } from "react-redux";



const Filters = props => {
    const [value, setValue] = useState(false)
    const { name, arrayFunction } = props 
    const dispatch = useDispatch()

    const handleChange = (e) =>{
        e.preventDefault()
        value ? setValue(false) : setValue(true)
    }
    
    return (
        <div>
            <button onClick={e => handleChange(e)}> {name} </button>
            {value ? arrayFunction.map(e =>{
                return <button onClick={() =>e.function(dispatch)} key={e.name} >{e.name}</button>
            }): null}
        </div>
        
    )
    
}
export default Filters;