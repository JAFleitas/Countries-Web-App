import axios from 'axios'

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_COUNTRIES_DETAIL = 'GET_COUNTRIES_DETAIL';


export const ORDER_ASCENDENTE = 'ORDER_ASCENDENTE'
export const ORDER_DESCENDENTE = 'ORDER_DESCENDENTE'
export const CAMBIO_FILTRO= 'CAMBIO_FILTRO'
export const ORDER_AZ = 'ORDER_AZ'
export const ORDER_ZA = 'ORDER_ZA'
export const LOADING = 'LOADING'
export const ORDER_CONTINENT = 'ORDER_CONTINENT'
export const ACTIVITIES = 'ACTIVITIES'
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY'

export const get_countries =  (name) =>{
    return async (dispatch)=>{
        try {
            dispatch(loadingPage(true))
            const paises = name? await axios.get(`http://localhost:3001/countries?name=${name}`):await axios(`http://localhost:3001/countries`)
            
            dispatch( {
                type: GET_COUNTRIES,
                payload: paises.data 
            })
            dispatch(loadingPage(false))
        } catch (e) {
            dispatch(loadingPage(false))
            alert(e)
        }
    }


    
}

export const get_countries_detail =  (id) =>{
    return async (dispatch) => {
        try {
            const pais = await axios(`http://localhost:3001/countries/${id}`)
        
            dispatch({
            type: GET_COUNTRIES_DETAIL,
            payload: pais.data
            })
            dispatch(loadingPage(false))
            console.log(pais)


        } catch (e) {
            console.log(e)
            dispatch(loadingPage(false))
            alert(e)
        }
        
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

export const order_continent = payload =>{
    return {
        type : ORDER_CONTINENT,
        payload
    }
}


export const loadingPage = payload=>{
    return {
        type: LOADING,
        payload
    }
}

export const get_activities = () =>{
     return async dispatch =>{
         const activities = await axios.get('http://localhost:3001/activity')
         dispatch({
             type:ACTIVITIES,
             payload:activities.data
         })
     }
}
export const filter_activity = payload =>{
    return {
        type: FILTER_ACTIVITY,
        payload
    }
}
