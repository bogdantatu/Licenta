let express = require('express');
let controller = require('../Controllers/campanieController')
let router = express.Router();

/**
 * Router for fundraising endpoint
 */
 router.get("/", controller.getCampanieByTitle)
 router.get("/:id",controller.getCampanie)
 router.get("/",controller.getCampanii)
 router.post('/:id_utilizator',controller.postCampanie)
 router.put('/:id',controller.putCampanie)
 router.delete('/:id',controller.deleteCampanie)
 
 module.exports = router;