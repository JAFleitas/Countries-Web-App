import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_DETAIL = 'GET_COUNTRIES_DETAIL';

export const NAME = 'NAME'
export const ORDER_ASCENDENTE = 'ORDER_ASCENDENTE'
export const ORDER_DESCENDENTE = 'ORDER_DESCENDENTE'
export const CAMBIO_FILTRO= 'CAMBIO_FILTRO'
export const ORDER_AZ = 'ORDER_AZ'
export const ORDER_ZA = 'ORDER_ZA'

export const get_countries =  (name) =>{
    return async (dispatch)=>{
        const paises = name? await axios.get(`http://localhost:3001/countries?name=${name}`):await axios(`http://localhost:3001/countries`)
        
        dispatch( {
            type: GET_COUNTRIES,
            payload: paises.data 
        })
    } 

    
}

export const get_countries_detail =  (id) =>{
    return async (dispatch) => {
        const pais = await axios(`http://localhost:3001/countries/${id}`)
        
        dispatch({
        type: GET_COUNTRIES_DETAIL,
        payload: pais.data
        })
        
    }

}

/* export const post_activity =  (post)=>{
    return async (dispatch) =>{
        const resp = await axios.post('http://localhost:3001/activity', post)
        dispatch({
            type: POST_ACTIVITY,
            payload: resp
            
        })
    }
} */

export const name = payload =>{
    return {
        type:NAME,
        payload

    }
}

export const order_ascendente = () =>{
    return {
        type : ORDER_ASCENDENTE,

    }
}

export const order_descendente = () =>{
    return {
        type : ORDER_DESCENDENTE,
        
    }
}
export const cambioFiltro = payload =>{
    return {
        type : CAMBIO_FILTRO,
        payload
    }
}

export const order_A_Z = () => {
    return {
        type : ORDER_AZ
    }
}

export const order_Z_A = () => {
    return {
        type : ORDER_ZA
    }
}