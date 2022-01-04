const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      type: DataTypes.CHAR(3),
      allowNull: false,
      primaryKey: true
    },
    flag:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    continents:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING,
      allowNull: false

    },
    subregion:{
      type: DataTypes.STRING,
      allowNull: false

    },
    area:{
      type: DataTypes.STRING,
    validate: {
      isNumeric: true,}
    },
    population:{
       type: DataTypes.INTEGER
    },

  });
};
