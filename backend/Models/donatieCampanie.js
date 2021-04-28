module.exports = (sequelize, DataTypes) => {
    return sequelize.define('donatieCampanie', {
       id_donatieCampanie: {
           type: DataTypes.UUID,
           allowNull: false,
           primaryKey: true,
           autoIncrement: true,
       },
       id_campanie: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        references: {
          model: 'campanie',
          key: 'id_campanie'
        }
       },
       id_donatie: {
        type: DataTypes.BIGINT,
        primaryKey: false,
        references: {
          model: 'donatie',
          key: 'id_donatie'
        }
       },
    });
   }