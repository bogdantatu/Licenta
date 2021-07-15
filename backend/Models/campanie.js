module.exports = (sequelize, DataTypes) => {
    return sequelize.define('campanie', {
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
                len: [3, 50]
            }
        },
        descriereScurta: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 200]
            }
        },
        descriere: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 500]
            }
        },
        imagini: {
            type: DataTypes.BLOB,
            allowNull: true,
        },
        dateContact: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [3, 100]
            }
        },
        goal: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 0,
                max: 9999999999
            }
        },
        progress: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            validate: {
                min: 0,
                max: 9999999999
            }
        },
        status: {
            type: DataTypes.STRING(50),
            validate: {
                isIn: [
                    ['CHECKING', 'EXTRA INFO', 'REJECTED', 'ACTIVE', 'ENDED']
                ]
            },
            defaultValue: 'CHECKING'
        }
    });
}