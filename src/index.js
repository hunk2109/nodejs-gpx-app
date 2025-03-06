const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const gpxRoutes = require('./routes/gpxRoutes');
const connectDB = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Rutas
app.use('/api/gpx', gpxRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`El servidor está corriendo en http://localhost:${PORT}`);
});