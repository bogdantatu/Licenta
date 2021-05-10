let express = require('express');
let controller = require('../Controllers/mesajController')
let router = express.Router();

/**
 * Router for message endpoint
 */

 router.get("/",controller.getMesaje)
 router.get("/:id",controller.getMesaj)
 router.post('/:id_utilizator/:id_anunt',controller.postMesaj)
 router.put('/:id',controller.putMesaj)
 router.delete('/:id',controller.deleteMesaj)
 
 module.exports = router;