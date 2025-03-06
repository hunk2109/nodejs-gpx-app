const express = require('express');
const router = express.Router();
const gpxController = require('../controllers/gpxController');

router.post('/subir', gpxController.upload.single('gpxfile'), gpxController.subirArchivoGpx);
router.get('/poligonos', gpxController.obtenerPoligonos);

module.exports = router;