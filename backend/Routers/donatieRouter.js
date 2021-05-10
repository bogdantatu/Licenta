let express = require('express');
let controller = require('../Controllers/donatieController')
let router = express.Router();

/**
 * Router for donation endpoint
 */

 router.get("/",controller.getDonatii)
 router.get("/:id",controller.getDonatie)
 router.post('/:id_utilizator/:id_campanie',controller.postDonatie)
 router.put('/:id',controller.putDonatie)
 router.delete('/:id',controller.deleteDonatie)
 
 module.exports = router;