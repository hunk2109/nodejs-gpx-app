const express = require('express');
const app = express();
const path = require('path');
const gpxRoutes = require('./routes/gpxRoutes');

// Middleware para manejar datos JSON y formularios
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, '..', 'public')));

// Usar las rutas de GPX
app.use('/api/gpx', gpxRoutes);

// Rutas para servir las páginas HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'upload.html'));
});

app.get('/map', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'map.html'));
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});