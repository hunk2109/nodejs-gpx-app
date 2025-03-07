# Aplicación Node.js GPX

Este proyecto es una aplicación simple de Node.js que permite a los usuarios subir archivos GPX, agregar leyendas para el número de plantas y visualizar los datos en un mapa.

## Características

- Subir archivos GPX
- Agregar leyendas para el número de plantas y áreas plantadas
- Mostrar los datos GPX en un mapa interactivo

## Estructura del Proyecto

```
nodejs-gpx-app
├── src
│   ├── index.js               # Punto de entrada de la aplicación
│   ├── controllers
│   │   └── gpxController.js   # Maneja las operaciones de archivos GPX
│   ├── routes
│   │   └── gpxRoutes.js       # Define las rutas de la aplicación
│   ├── services
│   │   └── gpxService.js      # Procesa archivos GPX y gestiona las leyendas
│   └── views
│       └── mapView.js         # Renderiza el mapa con los datos GPX
├── package.json                # Archivo de configuración de NPM
├── .gitignore                  # Especifica los archivos a ignorar en Git
└── README.md                   # Documentación del proyecto
```

## Instalación

1. Clona el repositorio:
   ```
   git clone https://github.com/hunk2109/nodejs-gpx-app.git
   ```
2. Navega al directorio del proyecto:
   ```
   cd nodejs-gpx-app
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Uso

1. Inicia la aplicación:
   ```
   npm start
   ```
2. Abre tu navegador y ve a `http://localhost:3000` para acceder a la aplicación.

## Contribuir

No dudes en enviar problemas o solicitudes de extracción si tienes sugerencias o mejoras para el proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.