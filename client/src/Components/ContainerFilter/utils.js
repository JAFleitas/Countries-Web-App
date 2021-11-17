import { cambioFiltro, order_ascendente, order_A_Z, order_descendente, order_Z_A } from "../../actions";
const descendente = d => {
    // c.preventDefault()
    d(order_descendente())
    d(cambioFiltro(true))
}
const ascendente = d => {
    // c.preventDefault()
    d(order_ascendente()) 
    d(cambioFiltro(false))
}

const ordenar_A_Z = d =>{
    d(order_A_Z())
    d(cambioFiltro(true))
}

const ordenar_Z_A = d =>{
    d(order_Z_A())
    d(cambioFiltro(false))
}

export const arrayPoblacion = [{name : 'Orden Descendente', function: descendente},
 {name :'Orden Ascendente', function: ascendente}]

export const arrayAlfabeto = [{name : 'Orden A-Z', function: ordenar_A_Z},
 {name: 'Orden Z-A', function: ordenar_Z_A} ]

export const arrayContinent =[]

