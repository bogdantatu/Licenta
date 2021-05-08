module.exports = (sequelize, DataTypes) => {
    return sequelize.define('mesaj', {
       id_mesaj: {
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       mesaj:{
           type: DataTypes.STRING(50),
           allowNull: false,
           validate: {
               len:[10, 300]
           }
        }
    });
   }