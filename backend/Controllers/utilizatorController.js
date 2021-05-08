const Sequelize = require('sequelize')
const Models = require ('../Models')
const Op = Sequelize.Op

/**
 * Function handling the GET request for all the users
 *
 * Responds with status code 200 if successful
 *
 * Responds with a json of all assignments
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.getUtilizatori = async (req, res, next) => {
    const query = {
        where: {}
    }
    if(req.query.filter){
        query.where.email = {
            [Op.like]: `%${req.query.filter}%`
        }
    }
    try {
        const users = await Models.Utilizator.findAll(query)
        res.status(200).json(users)
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the GET request for one user
 *
 * Responds with status code 200 if successful, 400 if id is not a number and 404 assignment not found
 *
 * Returns a json of the assignment
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.getUtilizator = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        if (isNaN(id)){
            res.status(400).json({message: 'ID-ul trebuie sa fie un numar.'});
        }else{
            const utilizator = await Models.Utilizator.findByPk(id)
            if(utilizator)
            res.status(200).json(utilizator);
            else 
            res.status(404).json({message: 'Utilizatorul nu a fost gasit.'});
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the POST request for a user
 *
 * Responds with status code 201 if successful and 400 if failed
 *
 * The RandomJury function is scheduled here
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.postUtilizator = async(req, res, next) => {
    try {
        const utilizator = await Models.Utilizator.create(req.body)
        if(utilizator)
        res.status(201).json({message: 'Utilizator creat.'})
        else
        res.status(400).json({message: 'Crearea utilizatorul a esuat.'})
    } catch (error) {
     next(error);   
    }
}

/**
 * Function handling the PUT request for a user
 *
 * Responds with status code 202 if successful and 404 if failed
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.putUtilizator = async (req, res, next) => {
    try {
        const id = req.params.id;
        const utilizator = await Models.Utilizator.findByPk(id)
        if(utilizator){
            await utilizator.update(req.body);
            res.status(202).json({message: 'Editare reusita.'})
        }
        else{
            res.status(404).json({message: 'Editarea a esuat'})
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the DELETE request for an user
 *
 * Responds with status code 200 if successful and 404 if not found
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.deleteUtilizator = async (req, res, next) => {
    try {
        const id = req.params.id;
        const utilizator = await Models.Utilizator.findByPk(id)
        if(utilizator){
            await utilizator.destroy();
            res.status(200).json({message: 'Utilizator sters.'})
        }else{
            res.status(404).json({message: 'Stergerea a esuat'});
        }
    } catch (error) {
        next(error);
    }
}