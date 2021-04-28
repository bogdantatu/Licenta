module.exports = (sequelize, DataTypes) => {
    return sequelize.define('donatie', {
       donatie: {
           type: DataTypes.BIGINT,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       valoare: {
           type: DataTypes.BIGINT,
           allowNull: false,
           validate: {
              checkValoare: () => {
                if(this.getDataValue('valoare') < 1){
                    throw new Error('Valoarea donata trebuie sa fie mai mare sau egala cu 1!')
                }
              }
           }
       },
    });
   }