module.exports = (sequelize, DataTypes) => {
    return sequelize.define('anunt', {
       id: {
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       titlu: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
               len: [3,50]
           }
       },
       descriere: {
           type: DataTypes.STRING,
           allowNull: false,
           validate: {
               len: [10,300]
           }
       },
       dateContact: {
           type: DataTypes.STRING,
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