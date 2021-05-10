let express = require('express');
let controller = require('../Controllers/anuntController')
let router = express.Router();

/**
 * Router for post endpoint
 */

 router.put('/:id_anunt/:id_winner', controller.inchideAnunt)
 router.get("/",controller.getAnunturi)
 router.get("/:id",controller.getAnunt)
 router.post('/:id_utilizator',controller.postAnunt)
 router.put('/:id',controller.putAnunt)
 router.delete('/:id',controller.deleteAnunt)

 
 module.exports = router;