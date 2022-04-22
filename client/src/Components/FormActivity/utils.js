export const validate = input =>{
    const errors= {}

    if(!input.name) errors.name = 'Se requiere un Nombre' ;
    if(!input.difficulty) errors.difficulty = 'Indique el nivel de dificultad' ;
    if(!input.season) errors.season = 'Indique la temporada'; 
    if(!input.duration) errors.duration = 'Se requiere una Duración'; 
    if(input.paises.length===0) errors.paises = 'Agrega un País'
    return errors;
}