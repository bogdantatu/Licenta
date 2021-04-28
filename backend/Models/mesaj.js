module.exports = (sequelize, DataTypes) => {
    return sequelize.define('mesaj', {
       id_mesaj: {
           type: DataTypes.UUID,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       id_utilizator: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        references: {
          model: 'utilizator',
          key: 'id_utilizator'
        }
       },
       id_anunt: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        references: {
          model: 'anunt',
          key: 'id_anunt'
        }
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