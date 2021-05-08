const Sequelize = require('sequelize')
const Models = require ('../Models')
const Op = Sequelize.Op

/**
 * Function handling the GET request for all the fundraisings
 *
 * Responds with status code 200 if successful
 *
 * Responds with a json of all fundraisings
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */
exports.getCampanie = async (req, res, next) => {
    try {
        const campanii = await Models.Campanie.findAl()
        res.status(200).json(campanii)
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the GET request for one fundraising
 *
 * Responds with status code 200 if successful, 400 if id is not a number and 404 fundraising not found
 *
 * Returns a json of the fundraising
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.getCampanie = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        if(isNaN(id)){
            res.status(400).json({message: 'ID-ul trebuie sa fie numar'})
        }
        else{
            const Campanie = await Models.Campanie.findByPk(id)
            if(Campanie)
            res.status(200).json(Campanie);
            else{
                res.status(404).json({message: 'Campania nu a fost gasita'})
            }
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the POST request for a fundraising
 *
 * Responds with status code 201 if successful and 400 if failed
 *
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.postCampanie = async (req, res, result) => {
    try {
        const Campanie = await Models.Campanie.create(req.body)
        if(Campanie){
            res.status(201).json({message: "Campanie creata."})
        }
        else{
            res.status(400).json({message: "Crearea campaniei a esuat."})
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the PUT request for a fundraising
 *
 * Responds with status code 202 if successful and 404 if failed
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.putCampanie = async (req, res, next) => {
    try {
        const id = req.params.id;
        const Campanie = await Models.Campanie.findByPk(id)
        if(Campanie){
            await Campanie.update(req.body);
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
 * Function handling the DELETE request for a fundraising
 *
 * Responds with status code 200 if successful and 404 if not found
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.deleteCampanie = async (req, res, next) => {
    try {
        const id = req.params.id;
        const Campanie = await Models.Campanie.findByPk(id)
        if(Campanie){
            await Campanie.destroy();
            res.status(200).json({message: "Campania a fost stearsa"})
        }
        else{
            res.status(404).json({message: "ID-ul nu a fost gasit"});
        }
    } catch (error) {
        next(error)
    }
}

