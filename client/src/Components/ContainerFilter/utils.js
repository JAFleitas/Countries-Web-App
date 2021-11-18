import { cambioFiltro, get_countries, order_ascendente, order_A_Z, order_continent, order_descendente, order_Z_A } from "../../actions";
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

const ordenar_continente =  async (d, c)=>{
    await d(get_countries())
    d(order_continent(c))
}
export const arrayContinent =[{name:'America', function: ordenar_continente, c:'Americas' },{name:'Asia', function: ordenar_continente, c:'Asia' },
{name:'Europa', function: ordenar_continente, c:'Europe' },{name:'Africa', function: ordenar_continente, c:'Africa' },
{name:'Antartida', function: ordenar_continente, c:'Antarctic' },{name:'Oceania', function: ordenar_continente, c:'Oceania' },]

