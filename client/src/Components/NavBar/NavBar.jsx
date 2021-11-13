import React , {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { name } from "../../actions";


const NavBar = () => {
    const [namePais, setNamePais ] = useState({name : ''})
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(name(namePais.name))
    },[namePais])

    const handleChange = e => {
        setNamePais ({name: e.target.value})
    }

    return (
        <div>
            <input value = {namePais.name}
            onChange = {e => handleChange(e)} />
        </div>
    )
}

export default NavBar;
