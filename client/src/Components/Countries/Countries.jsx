import React, {useEffect} from "react";
import Country from "../Country/Country";
import { useSelector, useDispatch } from 'react-redux'
import { get_countries } from "../../actions";

const Countries = () =>{

    const countries = useSelector(state => state.countries)
    const namePais = useSelector(state => state.name)
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filtroPob)
    

    useEffect(() => {
        dispatch(get_countries(namePais))
    },[namePais])

    useEffect( () => {
        console.log('cambio el estado')
    },[filter])

    return (
        <div>
            {
            countries.map(c => <Country
                    name ={c.name}
                    flag={c.flag[1]} 
                    continent= {c.continent} 
                    key={c.id}
                />)
            }
        </div>
    )
}
export default Countries;