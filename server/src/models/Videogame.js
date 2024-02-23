const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type:DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    description:{
      type:DataTypes.STRING,
      allowNull:false
    },
    platforms:{
      type:DataTypes.STRING,
      allowNull:false
    },
    background_image:{
      type:DataTypes.STRING
    },
    released:{
      type:DataTypes.DATEONLY 
    },
    rating:{
      type:DataTypes.FLOAT
    }
  },{timestamps:false});
};
