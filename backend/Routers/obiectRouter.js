let express = require('express');
let controller = require('../Controllers/obiectController')
let router = express.Router();

/**
 * Router for object endpoint
 */

 router.get("/",controller.getObiecte)
 router.get("/:id",controller.getObiect)
 router.post('/',controller.postObiect)
 router.put('/:id',controller.putObiect)
 router.delete('/:id',controller.deleteObiect)
 
 module.exports = router;