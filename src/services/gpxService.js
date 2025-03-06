class GpxService {
    constructor() {
        this.plantLegends = [];
    }

    processGpxFile(gpxData) {
        // Logic to parse GPX data and extract relevant information
        const parsedData = this.parseGpx(gpxData);
        return parsedData;
    }

    parseGpx(gpxData) {
        // Implement GPX parsing logic here
        // This is a placeholder for actual parsing logic
        return {
            waypoints: [], // Extracted waypoints from GPX
            tracks: []     // Extracted tracks from GPX
        };
    }

    addPlantLegend(plantName, quantity) {
        this.plantLegends.push({ plantName, quantity });
    }

    getLegends() {
        return this.plantLegends;
    }

    clearLegends() {
        this.plantLegends = [];
    }
}

module.exports = GpxService;