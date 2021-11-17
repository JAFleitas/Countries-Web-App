import {GET_COUNTRIES, GET_COUNTRIES_DETAIL, NAME, ORDER_ASCENDENTE,ORDER_DESCENDENTE, CAMBIO_FILTRO, ORDER_AZ, ORDER_ZA } from '../actions'

const initialState = {
    countries:[],
    countryDetail: {},
    name:'',
    filtro: null
}

const rootReducer= (state=initialState,{type , payload})=>{
    switch(type){
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
            }
        case GET_COUNTRIES_DETAIL:
            return {
                ...state,
                countryDetail:payload
            }

        case NAME:
            return {
                ...state,
                name: payload

            }
        case ORDER_ASCENDENTE:
            return {
                ...state,
                countries: state.countries.sort((a, b) => a.population - b.population)
            }
        case ORDER_DESCENDENTE:
            return {
                ...state,
                countries: state.countries.sort((a, b) => b.population - a.population)
            }
        case CAMBIO_FILTRO:
            return {
                ...state,
                filtro: state.filtro===payload ? null:payload
            }
        case ORDER_AZ : 
            return {
                ...state,
                countries : state.countries.sort((a,b) => a.name >= b.name ? 1 : -1)
                
            }
        case ORDER_ZA : 
            return {
                ...state,
                countries : state.countries.sort((a,b) => a.name >= b.name ? 1 : -1).reverse()
            }
        default:
            return state
    }
    
}

export default rootReducer;