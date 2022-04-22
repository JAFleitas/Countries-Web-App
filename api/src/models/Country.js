const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id : {
      type: DataTypes.STRING(3),
      primaryKey: true,
      unique:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    continent: {
      type:DataTypes.STRING,
      allowNull:false, 

    },
    capital: {
      type:DataTypes.ARRAY({type: DataTypes.STRING}),
      allowNull:false,
      defaultValue:[this.name]
    

    },
    area: {
      type:DataTypes.FLOAT,
      allowNull:false, 

    },
    population: {
      type:DataTypes.INTEGER,
      allowNull:false, 

    },
    sub_region: {
      type:DataTypes.STRING,
       

    },
    flag: {
      type:DataTypes.ARRAY({type: DataTypes.STRING}),
       

    },
    maps:{
      type:DataTypes.STRING,
    }

  },{
    timestamps:false 
  });
};
