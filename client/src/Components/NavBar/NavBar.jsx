import React , {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { name } from "../../actions";
import {Link} from 'react-router-dom'
import Container from "../ContainerFilter/Container";

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
            <div>
                <input value = {namePais.name}
                onChange = {e => handleChange(e)} />
            </div>

            <div>
                <Link to='/create_activity'>
                    <button>Crear Actividad</button>
                </Link>
            </div>
            <div>
                <Container/>
            </div>
        </div>
    )
}

export default NavBar;
