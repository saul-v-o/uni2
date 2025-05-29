// src/components/MapaDrawingTools.jsx
import React, { useRef, useState } from 'react';
import {
  GoogleMap,
  DrawingManager
} from '@react-google-maps/api';
import { Box, Typography, Paper, Divider, Button } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 23.2494,
  lng: -106.4111,
};

const MapaDrawingTools = () => {
  const [map, setMap] = useState(null);
  const drawnShapes = useRef([]);

  const handleComplete = (shape) => {
    drawnShapes.current.push(shape);
  };

  const clearShapes = () => {
    drawnShapes.current.forEach((shape) => shape.setMap(null));
    drawnShapes.current = [];
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '900px', mx: 'auto', p: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Herramientas de Dibujo en Google Maps
      </Typography>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onLoad={(mapInstance) => setMap(mapInstance)}
      >
        <DrawingManager
          options={{
            drawingControl: true,
            drawingControlOptions: {
              position: window.google.maps.ControlPosition.TOP_CENTER,
              drawingModes: ['polygon', 'rectangle', 'polyline'],
            },
            polygonOptions: {
              fillColor: '#2196F3',
              fillOpacity: 0.4,
              strokeWeight: 2,
              clickable: false,
              editable: false,
              zIndex: 1,
            },
          }}
          onPolygonComplete={handleComplete}
          onPolylineComplete={handleComplete}
          onRectangleComplete={handleComplete}
        />
      </GoogleMap>

      <Box sx={{ textAlign: 'center', mt: 2 }}>
        <Button variant="contained" color="error" onClick={clearShapes}>
          Eliminar formas
        </Button>
      </Box>

      <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          📝 Explicación de la Actividad
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          <strong>¿Qué se hizo?</strong><br />
          Se implementó el componente <code>DrawingManager</code> de Google Maps para permitir al usuario dibujar formas como polígonos, rectángulos y líneas en el mapa de Mazatlán.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué herramientas/librerías se usaron?</strong><br />
          - React<br />
          - @react-google-maps/api<br />
          - Material UI para el diseño visual
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué aprendiste?</strong><br />
          Aprendí a integrar herramientas interactivas de dibujo en un mapa de Google Maps y a gestionar las formas dibujadas para poder eliminarlas dinámicamente.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué desafíos enfrentaste?</strong><br />
          El reto principal fue entender cómo acceder y eliminar las formas creadas dinámicamente, ya que se deben manejar como referencias usando `useRef` y asegurarse de desvincularlas del mapa.
        </Typography>
      </Paper>
    </Box>
  );
};

export default MapaDrawingTools;
