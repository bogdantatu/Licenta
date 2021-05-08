const Sequelize = require('sequelize')
const Models = require ('../Models')
const Op = Sequelize.Op

/**
 * Function handling the GET request for all the donations
 *
 * Responds with status code 200 if successful
 *
 * Responds with a json of all donations
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */
exports.getDonatii = async (req, res, next) => {
    try {
        const donatii = await Models.Donatie.findAl()
        res.status(200).json(donatii)
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the GET request for one donation
 *
 * Responds with status code 200 if successful, 400 if id is not a number and 404 donation not found
 *
 * Returns a json of the donation
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.getDonatie = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        if(isNaN(id)){
            res.status(400).json({message: 'ID-ul trebuie sa fie numar'})
        }
        else{
            const Donatie = await Models.Donatie.findByPk(id)
            if(Donatie)
            res.status(200).json(Donatie);
            else{
                res.status(404).json({message: 'Donatia nu a fost gasita'})
            }
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the POST request for a donation
 *
 * Responds with status code 201 if successful and 400 if failed
 *
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.postDonatie = async (req, res, result) => {
    try {
        const Donatie = await Models.Donatie.create(req.body)
        if(Donatie){
            res.status(201).json({message: "Donatie creata."})
        }
        else{
            res.status(400).json({message: "Crearea donatiei a esuat."})
        }
    } catch (error) {
        next(error);
    }
}

/**
 * Function handling the PUT request for a donation
 *
 * Responds with status code 202 if successful and 404 if failed
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.putDonatie = async (req, res, next) => {
    try {
        const id = req.params.id;
        const Donatie = await Models.Donatie.findByPk(id)
        if(Donatie){
            await Donatie.update(req.body);
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
 * Function handling the DELETE request for a donation
 *
 * Responds with status code 200 if successful and 404 if not found
 *
 * @param req The request
 * @param res The response
 * @returns {Promise<void>}
 */

exports.deleteDonatie = async (req, res, next) => {
    try {
        const id = req.params.id;
        const Donatie = await Models.Donatie.findByPk(id)
        if(Donatie){
            await Donatie.destroy();
            res.status(200).json({message: "Donatia a fost stearsa."})
        }
        else{
            res.status(404).json({message: "ID-ul nu a fost gasit"});
        }
    } catch (error) {
        next(error)
    }
}

