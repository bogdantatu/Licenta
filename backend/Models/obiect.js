module.exports = (sequelize, DataTypes) => {
    return sequelize.define('obiect', {
       id_obiect: {
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       imagini: {
           type: DataTypes.BLOB,
           allowNull: false,
       },
    });
   }