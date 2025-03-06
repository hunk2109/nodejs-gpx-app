# Node.js GPX Application

This project is a simple Node.js application that allows users to upload GPX files, add legends for the number of plants, and visualize the data on a map.

## Features

- Upload GPX files
- Add legends for the number of plants and planted areas
- Display the GPX data on an interactive map

## Project Structure

```
nodejs-gpx-app
├── src
│   ├── index.js               # Entry point of the application
│   ├── controllers
│   │   └── gpxController.js   # Handles GPX file operations
│   ├── routes
│   │   └── gpxRoutes.js       # Defines application routes
│   ├── services
│   │   └── gpxService.js      # Processes GPX files and manages legends
│   └── views
│       └── mapView.js         # Renders the map with GPX data
├── package.json                # NPM configuration file
├── .gitignore                  # Specifies files to ignore in Git
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/nodejs-gpx-app.git
   ```
2. Navigate to the project directory:
   ```
   cd nodejs-gpx-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Open your browser and go to `http://localhost:3000` to access the application.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project.

## License

This project is licensed under the MIT License.