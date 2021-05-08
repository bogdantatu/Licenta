let express = require('express');
let controller = require('../Controllers/utilizatorController')
let router = express.Router();

/**
 * Router for user endpoint
 */

 router.get("/",controller.getUtilizatori)
 router.get("/:id",controller.getUtilizator)
 router.post('/',controller.postUtilizator)
 router.put('/:id',controller.putUtilizator)
 router.delete('/:id',controller.deleteUtilizator)
 
 module.exports = router;