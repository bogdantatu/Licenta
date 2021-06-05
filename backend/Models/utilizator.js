module.exports = (sequelize, DataTypes) => {
 return sequelize.define('utilizator', {
    id: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true,
        // autoIncrement: true,
    },
    nume: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [2,20]
        }
    },
    prenume: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [2,20]
        }
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
        isEmail: true,
        validate:{
            isEmail: true
        }
    },
    imagineProfil: {
        type: DataTypes.BLOB
    },
    isModerator: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
 });
}