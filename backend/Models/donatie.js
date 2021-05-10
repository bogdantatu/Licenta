module.exports = (sequelize, DataTypes) => {
    return sequelize.define('donatie', {
       id: {
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       valoare: {
           type: DataTypes.BIGINT,
           allowNull: false,
           validate: {
                len:[1,9999999999999999999]
           }
       },
    });
   }