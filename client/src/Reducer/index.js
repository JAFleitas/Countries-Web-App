
import {GET_COUNTRIES, GET_COUNTRIES_DETAIL, NAME, ORDER_ASCENDENTE,ORDER_DESCENDENTE, CAMBIO_FILTRO, ORDER_AZ, ORDER_ZA, LOADING, ORDER_CONTINENT, ACTIVITIES, FILTER_ACTIVITY } from '../actions'

const initialState = {
    countries:[],
    countryDetail: {},
    name:'',
    filtro: null,
    loading:false,
    activities:[]
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
        case LOADING:
            return {
                ...state,
                loading: payload
            }
        case ORDER_CONTINENT:
            return {
                ...state,
                countries : state.countries.filter(e => e.continent === payload)
            }
        case ACTIVITIES:
            return {
                ...state,
                activities: payload
            }
        case FILTER_ACTIVITY:
            return {
                ...state,
                countries: state.countries.filter(e =>{
                    if(e.activities!=false){
                    for(let i = 0; i<e.activities.length;i++){
                        if(e.activities[i].id==payload){
                            
                            return e
                        }
                    }}
                })
            }
        default:
            return state
    }
    
}

export default rootReducer;