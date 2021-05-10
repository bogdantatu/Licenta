module.exports = (sequelize, DataTypes) => {
    return sequelize.define('campanie', {
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
                len: [3, 50]
            }
        },
        descriere: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [1, 300]
            }
        },
        imagini: {
            type: DataTypes.BLOB,
            allowNull: false,
        },
        dateContact: {
            type: DataTypes.STRING(50),
            allowNull: false,
            validate: {
                len: [3, 100]
            }
        },
        status: {
            type: DataTypes.STRING(50),
            validate: {
                isIn: [
                    ['VRF', 'VRF SUPL', 'RESPINSA', 'ACTIVA', 'INCHEIATA']
                ]
            },
            defaultValue: 'VRF'
        }
    });
}