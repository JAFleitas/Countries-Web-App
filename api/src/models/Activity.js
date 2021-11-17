const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activity', {
      
        name: 
        {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false
        },
        difficulty:
        {
            type: DataTypes.STRING,
            
            
        },
        season: 
        {
            type: DataTypes.ENUM,
            values:["Primavera","Otoño","Verano","Invierno"]
        },
        duration:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, 
    {
        timestamps: false 
    })
}
