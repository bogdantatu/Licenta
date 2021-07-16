const Sequelize = require('sequelize')
const Models = require ('../Models')
const Op = Sequelize.Op

/**
 * Function handling the GET request for all the objects
 *
 * Responds with status code 200 if successful
 *
 * Responds with a json of all objects
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */
exports.getObiecte = async (req, res, next) => {
    try {
        const obiecte = await Models.Obiect.findAll()
        res.status(200).json(obiecte)
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the GET request for one object
 *
 * Responds with status code 200 if successful, 400 if id is not a number and 404 object not found
 *
 * Returns a json of the object
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.getObiect = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        if(isNaN(id)){
            res.status(400).json({message: 'ID-ul trebuie sa fie numar'})
        }
        else{

            const obiect = await Models.Obiect.findOne({ where: { anuntId: id } });
            // const obiect = await Models.Obiect.findByPk(id)
            if(obiect)
            res.status(200).json(obiect);
            else{
                res.status(404).json({message: 'Obiectul nu a fost gasit'})
            }
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the POST request for an object
 *
 * Responds with status code 201 if successful and 400 if failed
 *
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.postObiect = async (req, res, next) => {
    try {
        const obiect = await Models.Obiect.create(req.body)
        if(obiect){
            res.status(201).json({message: "Obiect creat."})
        }
        else{
            res.status(400).json({message: "Crearea obiectului a esuat."})
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the PUT request for an object
 *
 * Responds with status code 202 if successful and 404 if failed
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.putObiect = async (req, res, next) => {
    try {
        const id = req.params.id;
        const obiect = await Models.Obiect.findByPk(id)
        if(obiect){
            await obiect.update(req.body);
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
 * Function handling the DELETE request for an object
 *
 * Responds with status code 200 if successful and 404 if not found
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.deleteObiect = async (req, res, next) => {
    try {
        const id = req.params.id;
        const obiect = await Models.Obiect.findByPk(id)
        if(obiect){
            await obiect.destroy();
            res.status(200).json({message: "Obiectul a fost sters."})
        }
        else{
            res.status(404).json({message: "ID-ul nu a fost gasit"});
        }
    } catch (error) {
        next(error)
    }
}

