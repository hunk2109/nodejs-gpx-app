const mongoose = require('mongoose');

const PolygonSchema = new mongoose.Schema({
  nombreDelAgricultor: String,
  tipoDePlanta: String,
  numeroDePlantas: Number,
  fechaDePlantacion: Date,
  tipoDeSuelo: String,
  geoJson: Object,
});

module.exports = mongoose.model('Polygon', PolygonSchema);