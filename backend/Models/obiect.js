module.exports = (sequelize, DataTypes) => {
    return sequelize.define('obiect', {
       id: {
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