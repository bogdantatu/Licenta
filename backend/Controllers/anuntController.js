const { where } = require('sequelize')
const Sequelize = require('sequelize')
const Models = require ('../Models')
const utilizator = require('../Models/utilizator')
const Op = Sequelize.Op

/**
 * Function handling the GET request for all the posts
 *
 * Responds with status code 200 if successful
 *
 * Responds with a json of all posts
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */
exports.getAnunturi = async (req, res, next) => {
    try {
        const anunturi = await Models.Anunt.findAll()
        res.status(200).json(anunturi)
    } catch (error) {
        next(error);
    } 
}

/**
 * Function handling the GET request for one post
 *
 * Responds with status code 200 if successful, 400 if id is not a number and 404 post not found
 *
 * Returns a json of the post
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.getAnunt = async (req, res, next) => {
    try {
        const id = req.params.id
        if(isNaN(id)){
            res.status(400).json({message: 'ID-ul trebuie sa fie numar'})
        }
        else{
            const anunt = await Models.Anunt.findByPk(id)
            if(anunt)
            res.status(200).json(anunt);
            else{
                res.status(404).json({message: 'Anuntul nu a fost gasit'})
            }
        }
    } catch (error) {
        next(error);
    }
}

exports.searchAnunt = async (req, res, next) => {
    const query = {
        where: {}
    }
    if(req.query.filter){
        query.where.titlu = {
            [Op.startsWith]: `%${req.query.filter}%`,
            [Op.like]: `%${req.query.filter}%`,
            [Op.iLike]: `%${req.query.filter}%`
        }
    }
    try {
        const anunturi = await Models.Anunt.findAll(query)
        res.status(200).json(anunturi)
    } catch (error) {
        next(error)
    }
}

/**
 * Function handling the POST request for a post
 *
 * Responds with status code 201 if successful and 400 if failed
 *
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.postAnunt = async (req, res, next) => {
    try {
        const id = req.params.id_utilizator;
        req.body.utilizatorId = id;
        const anunt = await Models.Anunt.create(req.body)
        req.body.Obiect.anuntId = anunt.id
        const obiect = await Models.Obiect.create(req.body.Obiect)
        if(anunt && obiect){
            res.status(201).json({message: "Anunt creat."})
        }
        else{
            res.status(400).json({message: "Crearea anuntului a esuat."})
        }
    } catch (error) {
        next(error);
    }
}

exports.inchideAnunt = async (req, res, next) => {
    try {
        const id_anunt = parseInt(req.params.id_anunt);
        const id_winner = req.params.id_winner;
        const anunt = await Models.Anunt.findByPk(id_anunt);
        const obiect = await Models.Obiect.findOne({where: {anuntId: anunt.id}});

        if(anunt && obiect){
            res.status(200).json({message: 'Castigatorul obiectului a fost ales, iar anuntul s-a inchis.'})
            anunt.isClosed = true;
            await anunt.save()
            obiect.utilizatorId = id_winner
            await obiect.save()
        } else {
            res.status(400).json({message: "Inchidere esuata."})
        }
    } catch (error) {
        next(error)
    }
}

/**
 * Function handling the PUT request for a post
 *
 * Responds with status code 202 if successful and 404 if failed
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.putAnunt = async (req, res, next) => {
    try {
        const id = req.params.id;
        const anunt = await Models.Anunt.findByPk(id)
        if(anunt){
            await anunt.update(req.body);
            res.status(202).json({mesasge: "Editare reusita."})
        }
        else{
            res.status(404).json({message: "ID-ul nu a fost gasit"});
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the DELETE request for a post
 *
 * Responds with status code 200 if successful and 404 if not found
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.deleteAnunt = async (req, res, next) => {
    try {
        const id = req.params.id;
        const anunt = await Models.Anunt.findByPk(id)
        if(anunt){
            await anunt.destroy();
            res.status(200).json({message: "Anuntul a fost sters."})
        }
        else{
            res.status(404).json({message: "ID-ul nu a fost gasit"});
        }
    } catch (error) {
        next(error)
    }
}

