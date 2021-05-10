const Sequelize = require('sequelize')
const Models = require ('../Models')
const Op = Sequelize.Op

/**
 * Function handling the GET request for all the messages
 *
 * Responds with status code 200 if successful
 *
 * Responds with a json of all messages
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */
exports.getMesaje = async (req, res, next) => {
    try {
        const mesaje = await Models.Mesaj.findAll()
        res.status(200).json(mesaje)
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the GET request for one message
 *
 * Responds with status code 200 if successful, 400 if id is not a number and 404 message not found
 *
 * Returns a json of the message
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.getMesaj = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        if(isNaN(id)){
            res.status(400).json({message: 'ID-ul trebuie sa fie numar'})
        }
        else{
            const mesaj = await Models.Mesaj.findByPk(id)
            if(mesaj)
            res.status(200).json(mesaj);
            else{
                res.status(404).json({message: 'Mesajul nu a fost gasit'})
            }
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the POST request for a message
 *
 * Responds with status code 201 if successful and 400 if failed
 *
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.postMesaj = async (req, res, next) => {
    try {
        const id_utilizator = parseInt(req.params.id_utilizator)
        req.body.utilizatorId = id_utilizator
        const id_anunt = parseInt(req.params.id_anunt)
        req.body.anuntId = id_anunt
        const mesaj = await Models.Mesaj.create(req.body)
        if(mesaj){
            res.status(201).json({message: "Mesaj creat."})
        }
        else{
            res.status(400).json({message: "Crearea mesajul a esuat."})
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the PUT request for a message
 *
 * Responds with status code 202 if successful and 404 if failed
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.putMesaj = async (req, res, next) => {
    try {
        const id = req.params.id;
        const mesaj = await Models.Mesaj.findByPk(id)
        if(mesaj){
            await mesaj.update(req.body);
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
 * Function handling the DELETE request for a message
 *
 * Responds with status code 200 if successful and 404 if not found
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.deleteMesaj = async (req, res, next) => {
    try {
        const id = req.params.id;
        const mesaj = await Models.Mesaj.findByPk(id)
        if(mesaj){
            await mesaj.destroy();
            res.status(200).json({message: "Mesajul a fost sters."})
        }
        else{
            res.status(404).json({message: "ID-ul nu a fost gasit"});
        }
    } catch (error) {
        next(error)
    }
}

