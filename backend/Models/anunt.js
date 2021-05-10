module.exports = (sequelize, DataTypes) => {
    return sequelize.define('anunt', {
       id: {
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
       },
       isClosed:{
           type:DataTypes.BOOLEAN,
           defaultValue: false
       }
    });
   }