const { BelongsToMany } = require('sequelize')
const Sequelize = require('sequelize')
const dbConfig = require('../Database/db-config')
const anunt = require('./anunt')

const sequelize = new Sequelize(dbConfig.database, dbConfig.dbUser, dbConfig.dbPassword, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect
})

const Anunt = require('./anunt')(sequelize, Sequelize)
const Campanie = require('./campanie')(sequelize, Sequelize)
const Donatie = require('./donatie')(sequelize, Sequelize)
const Mesaj = require('./mesaj')(sequelize, Sequelize)
const Obiect = require('./obiect')(sequelize, Sequelize)
const Utilizator = require('./utilizator')(sequelize, Sequelize)

/* Constraints START */

Anunt.belongsTo(Utilizator)
Utilizator.hasMany(Anunt, {onDelete: 'CASCADE', hooks: true})
Obiect.belongsTo(Anunt)
Anunt.hasOne(Obiect, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})
Obiect.belongsTo(Utilizator)
Utilizator.hasMany(Obiect)

Anunt.hasMany(Mesaj, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})
Utilizator.hasMany(Mesaj, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})
Mesaj.belongsTo(Anunt)


Campanie.belongsTo(Utilizator)
Utilizator.hasMany(Campanie, {onDelete: 'CASCADE', hooks: true})
Campanie.hasMany(Donatie, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})
Utilizator.hasMany(Donatie, {foreignKey: {allowNull: false}, onDelete: 'CASCADE', hooks: true})

/* Constraints END */

/**1. Doc: This creates the table, dropping it first if it already existed*/
// sequelize.sync({ force: true })


/**2. Pentru urmatoarele rulari ale programului, se vor comenta celelalte sync-uri si se va folosi : */
// sequelize.sync()

/**3. In caz ca exista modificari la structura bazei de date (fisierele din models), se vor comenta celelalte sync-uri se va folosi :*/
sequelize.sync({alter:true})

module.exports = {
    Anunt,
    Campanie,
    Donatie,
    Mesaj,
    Obiect,
    Utilizator
}