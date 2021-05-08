const express = require("express");
let anuntRouter = require ('./Routers/anuntRouter');
let campanieRouter = require ('./Routers/campanieRouter');
let donatieRouter = require ('./Routers/donatieRouter');
let mesajRouter = require ('./Routers/mesajRouter');
let obiectRouter = require ('./Routers/obiectRouter');
let utilizatorRouter = require ('./Routers/utilizatorRouter');
const Sequelize = require('sequelize')
const dbConfig = require('./Database/db-config')


const sequelize = new Sequelize(dbConfig.database, dbConfig.dbUser, dbConfig.dbPassword, {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect
})

const app = express();
 /*
  CORS FETCH
 */
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())

app.use('/anunt', anuntRouter);
app.use('/campanie', campanieRouter);
app.use('/donatie', donatieRouter);
app.use('/mesaj', mesajRouter);
app.use('/obiect', obiectRouter);
app.use('/utilizator', utilizatorRouter);

app.listen(8080);