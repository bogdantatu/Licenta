module.exports = (sequelize, DataTypes) => {
    return sequelize.define('anunt', {
       id_anunt: {
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       titlu: {
           type: DataTypes.STRING(50),
           allowNull: false,
           validate: {
               len: [3,50]
           }
       },
       descriere: {
           type: DataTypes.STRING(50),
           allowNull: false,
           validate: {
               len: [1,300]
           }
       },
       dateContact: {
           type: DataTypes.STRING(50),
           allowNull: false,
           validate: {
               len: [3, 100]
           }
       }
    });
   }