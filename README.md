# Aplicación Node.js GPX

Este proyecto es una aplicación simple de Node.js que permite a los usuarios subir archivos GPX, agregar leyendas para el número de plantas y visualizar los datos en un mapa.

## Características

- Subir archivos GPX
- Agregar leyendas para el número de plantas y áreas plantadas
- Mostrar los datos GPX en un mapa interactivo
- Alternar entre vistas 2D y 3D
- Editar y eliminar polígonos en el mapa

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
├── public
│   ├── index.html             # Página de inicio
│   ├── upload.html            # Página para cargar archivos GPX
│   └── map.html               # Página para visualizar el mapa
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
2. Abre tu navegador y ve a `http://localhost:3000` para acceder a la página de inicio.
3. Desde la página de inicio, puedes acceder al formulario de carga (`http://localhost:3000/upload`) y al visor del mapa (`http://localhost:3000/map`).

## Funcionalidades

### Subir Archivos GPX

Los usuarios pueden subir archivos GPX a través de la página de carga. Los archivos se procesan y se almacenan en el servidor.

1. Navega a la página de carga (`http://localhost:3000/upload`).
2. Selecciona un archivo GPX desde tu computadora.
3. Haz clic en el botón "Subir" para cargar el archivo.

### Visualización de Mapas

La aplicación permite visualizar los datos GPX en un mapa interactivo. Los usuarios pueden alternar entre vistas 2D y 3D utilizando el botón "Cambiar a 3D".

1. Navega a la página del mapa (`http://localhost:3000/map`).
2. Utiliza el botón "Cambiar a 3D" para alternar entre vistas 2D y 3D.

### Edición y Eliminación de Polígonos

Los polígonos en el mapa pueden ser editados o eliminados. Al hacer clic en un polígono, se muestra un popup con opciones para editar o eliminar el polígono.

1. Haz clic en un polígono en el mapa.
2. En el popup, haz clic en "Editar" para modificar los detalles del polígono.
3. En el popup, haz clic en "Eliminar" para borrar el polígono del mapa.

### Alternar entre Vistas 2D y 3D

Los usuarios pueden alternar entre vistas 2D y 3D del mapa. En la vista 3D, los polígonos se muestran con una altura extruida para una mejor visualización.

1. Haz clic en el botón "Cambiar a 3D" para cambiar a la vista 3D.
2. Haz clic en el botón "Cambiar a 2D" para volver a la vista 2D.

### Detalles de los Polígonos

Cada polígono contiene información detallada como el tipo de planta, número de plantas, fecha de plantación, tipo de suelo y nombre del agricultor. Esta información se muestra en un popup al hacer clic en el polígono.

1. Haz clic en un polígono en el mapa.
2. Revisa la información detallada en el popup.

## Tecnologías Usadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express.js**: Framework web para Node.js.
- **MongoDB**: Base de datos NoSQL para almacenar los datos de los polígonos.
- **Mongoose**: ODM (Object Data Modeling) para MongoDB y Node.js.
- **Leaflet**: Biblioteca de JavaScript para mapas interactivos en 2D.
- **CesiumJS**: Biblioteca de JavaScript para mapas en 3D.
- **Multer**: Middleware para manejar la carga de archivos en Node.js.
- **toGeoJSON**: Biblioteca para convertir archivos GPX a GeoJSON.
- **Bootstrap**: Framework CSS para diseño responsivo y componentes UI.
- **Font Awesome**: Biblioteca de iconos vectoriales y logotipos.

## Contribuir

No dudes en enviar problemas o solicitudes de extracción si tienes sugerencias o mejoras para el proyecto.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.