function renderMap(gpxData, legends) {
    const mapContainer = document.getElementById('map');
    
    // Initialize the map (using a mapping library like Leaflet or Google Maps)
    const map = L.map(mapContainer).setView([0, 0], 2); // Default view

    // Add a tile layer (using OpenStreetMap as an example)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Process GPX data and add markers to the map
    gpxData.forEach(point => {
        L.marker([point.lat, point.lon]).addTo(map)
            .bindPopup(`Planta: ${legends[point.plantId].name}<br>Cantidad: ${legends[point.plantId].count}`);
    });

    // Fit the map to the bounds of the markers
    const group = L.featureGroup(gpxData.map(point => L.marker([point.lat, point.lon])));
    map.fitBounds(group.getBounds());
}

export { renderMap };