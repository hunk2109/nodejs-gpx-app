const multer = require('multer');
const xml2js = require('xml2js');
const fs = require('fs');
const path = require('path');
const { DOMParser } = require('xmldom');
const toGeoJSON = require('togeojson');
const Polygon = require('../models/Polygon');

const upload = multer({ dest: 'uploads/' });

const subirArchivoGpx = (req, res) => {
  const archivo = req.file;
  if (!archivo) {
    return res.status(400).send('No se subió ningún archivo.');
  }

  const rutaArchivo = path.join(__dirname, '../../uploads', archivo.filename);
  const xml = fs.readFileSync(rutaArchivo, 'utf8');

  xml2js.parseString(xml, (err, resultado) => {
    if (err) {
      return res.status(500).send('Error al analizar el archivo GPX.');
    }

    // Convertir GPX a GeoJSON
    const gpx = new DOMParser().parseFromString(xml, 'application/xml');
    const geoJsonData = toGeoJSON.gpx(gpx);

    // Agregar datos de plantación al GPX
    const { numeroDePlantas, tipoDePlanta, fechaDePlantacion, tipoDeSuelo, nombreDelAgricultor } = req.body;
    if (numeroDePlantas && tipoDePlanta && fechaDePlantacion && tipoDeSuelo && nombreDelAgricultor) {
      resultado.gpx.trk[0].name = `Tipo de Planta: ${tipoDePlanta}, Número de Plantas: ${numeroDePlantas}`;
      resultado.gpx.trk[0].extensions = resultado.gpx.trk[0].extensions || {};
      resultado.gpx.trk[0].extensions.numeroDePlantas = numeroDePlantas;
      resultado.gpx.trk[0].extensions.tipoDePlanta = tipoDePlanta;
      resultado.gpx.trk[0].extensions.fechaDePlantacion = fechaDePlantacion;
      resultado.gpx.trk[0].extensions.tipoDeSuelo = tipoDeSuelo;
      resultado.gpx.trk[0].extensions.nombreDelAgricultor = nombreDelAgricultor;
    }

    // Guardar en MongoDB
    const nuevoPoligono = new Polygon({
      nombreDelAgricultor,
      tipoDePlanta,
      numeroDePlantas,
      fechaDePlantacion,
      tipoDeSuelo,
      geoJson: geoJsonData,
    });

    nuevoPoligono.save()
      .then(() => {
        console.log('Polígono guardado en MongoDB');
        const constructor = new xml2js.Builder();
        const xmlActualizado = constructor.buildObject(resultado);
        res.send(xmlActualizado);
      })
      .catch(err => {
        console.error('Error al guardar en MongoDB:', err);
        res.status(500).send('Error al guardar en MongoDB');
      });
  });
};

const obtenerPoligonos = (req, res) => {
  Polygon.find()
    .then(poligonos => res.json(poligonos))
    .catch(err => res.status(500).send('Error al obtener los polígonos'));
};

module.exports = {
  upload,
  subirArchivoGpx,
  obtenerPoligonos
};