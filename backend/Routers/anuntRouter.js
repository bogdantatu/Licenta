let express = require('express');
let controller = require('../Controllers/anuntController')
let router = express.Router();

/**
 * Router for post endpoint
 */

 router.get("/",controller.getAnunturi)
 router.get("/:id",controller.getAnunt)
 router.post('/',controller.postAnunt)
 router.put('/:id',controller.putAnunt)
 router.delete('/:id',controller.deleteAnunt)
 
 module.exports = router;