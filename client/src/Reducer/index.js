import {GET_COUNTRIES, GET_COUNTRIES_DETAIL, NAME, ORDER_ASCENDENTE,ORDER_DESCENDENTE, CAMBIO_DESC_ASC } from '../actions'

const initialState = {
    countries:[],
    countryDetail: {},
    name:'',
    filtroPob: null
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
        case CAMBIO_DESC_ASC:
            return {
                ...state,
                filtroPob: state.filtropob===payload ? null:payload
            }
        default:
            return state
    }
    
}

export default rootReducer;