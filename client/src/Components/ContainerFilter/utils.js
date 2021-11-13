import { cambio_desc_asc, order_ascendente, order_descendente } from "../../actions";
const descendente = (d)=>{
    // c.preventDefault()
    d(order_descendente())
    d(cambio_desc_asc(true))
}
const ascendente = (d)=>{
    // c.preventDefault()
    d(order_ascendente()) 
    d(cambio_desc_asc(false))
}
export const arrayPoblacion = [{name : 'Orden Descendente', function: descendente},
    {name :'Orden Ascendente', function: ascendente}]