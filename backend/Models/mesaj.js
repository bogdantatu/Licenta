module.exports = (sequelize, DataTypes) => {
    return sequelize.define('mesaj', {
       id: {
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       mesaj:{
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
               len:[10, 300]
           }
        }
    });
   }