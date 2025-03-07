const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const togeojson = require('togeojson');
const DOMParser = require('xmldom').DOMParser;

// Configuración de multer para la carga de archivos
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Controlador para manejar la carga de archivos GPX
router.post('/upload', upload.single('gpxFile'), (req, res) => {
    const filePath = req.file.path;
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const gpx = new DOMParser().parseFromString(fileContent);
    const geoJson = togeojson.gpx(gpx);

    // Aquí puedes guardar los datos en la base de datos si es necesario
    const poligono = {
        _id: Date.now().toString(), // Generar un ID único para el polígono
        geoJson: geoJson,
        tipoDePlanta: req.body.tipoDePlanta,
        numeroDePlantas: req.body.numeroDePlantas,
        fechaDePlantacion: req.body.fechaDePlantacion,
        tipoDeSuelo: req.body.tipoDeSuelo,
        nombreDelAgricultor: req.body.nombreDelAgricultor
    };

    // Guardar el polígono en un archivo JSON (puedes cambiar esto para guardar en una base de datos)
    let poligonos = [];
    if (fs.existsSync('poligonos.json')) {
        try {
            poligonos = JSON.parse(fs.readFileSync('poligonos.json', 'utf8'));
            if (!Array.isArray(poligonos)) {
                poligonos = [];
            }
        } catch (error) {
            poligonos = [];
        }
    }
    poligonos.push(poligono);
    fs.writeFileSync('poligonos.json', JSON.stringify(poligonos, null, 2));

    res.send('Archivo GPX cargado exitosamente');
});

// Ruta para obtener los polígonos guardados
router.get('/poligonos', (req, res) => {
    if (fs.existsSync('poligonos.json')) {
        const poligonos = JSON.parse(fs.readFileSync('poligonos.json', 'utf8'));
        res.json(poligonos);
    } else {
        res.json([]);
    }
});

// Ruta para eliminar un polígono
router.delete('/poligonos/:id', (req, res) => {
    const id = req.params.id;
    if (fs.existsSync('poligonos.json')) {
        let poligonos = JSON.parse(fs.readFileSync('poligonos.json', 'utf8'));
        poligonos = poligonos.filter(poligono => poligono._id !== id);
        fs.writeFileSync('poligonos.json', JSON.stringify(poligonos, null, 2));
        res.send('Polígono eliminado exitosamente');
    } else {
        res.status(404).send('Polígono no encontrado');
    }
});

module.exports = router;