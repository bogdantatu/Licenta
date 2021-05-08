const Sequelize = require('sequelize')
const Models = require ('../Models')
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
        const anunturi = await Models.Anunt.findAl()
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
        const id = parseInt(req.params.id)
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

exports.postAnunt = async (req, res, result) => {
    try {
        const anunt = await Models.Anunt.create(req.body)
        if(anunt){
            res.status(201).json({message: "Anunt creat."})
        }
        else{
            res.status(400).json({message: "Crearea anuntului a esuat."})
        }
    } catch (error) {
        next(error);
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

