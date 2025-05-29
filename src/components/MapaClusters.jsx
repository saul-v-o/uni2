// src/components/MapaClusters.jsx
import React from 'react';
import {
  GoogleMap,
  MarkerF,
  MarkerClustererF,
} from '@react-google-maps/api';
import { Box, Typography, Paper, Divider } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 23.2494,
  lng: -106.4111,
};

// Generar 100 puntos aleatorios cercanos al centro
const generateMarkers = () => {
  const markers = [];
  for (let i = 0; i < 100; i++) {
    markers.push({
      lat: center.lat + Math.random() * 0.1 - 0.05,
      lng: center.lng + Math.random() * 0.1 - 0.05,
    });
  }
  return markers;
};

const MapaClusters = () => {
  const markers = generateMarkers();

  return (
    <Box sx={{ width: '100%', maxWidth: '900px', mx: 'auto', p: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Visualización con Clusters en Google Maps
      </Typography>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
      >
        <MarkerClustererF>
          {(clusterer) =>
            markers.map((pos, index) => (
              <MarkerF
                key={index}
                position={pos}
                clusterer={clusterer}
              />
            ))
          }
        </MarkerClustererF>
      </GoogleMap>

      <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          📝 Explicación de la Actividad
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          <strong>¿Qué se hizo?</strong><br />
          Se generaron 100 marcadores aleatorios en la zona de Mazatlán y se agruparon usando un sistema de clusters para mejorar la visualización y el rendimiento del mapa.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué herramientas/librerías se usaron?</strong><br />
          - React <br />
          - @react-google-maps/api <br />
          - Material UI (MUI) para la interfaz visual
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué aprendiste?</strong><br />
          Aprendí a usar `MarkerClustererF` para agrupar marcadores automáticamente en Google Maps, lo cual es útil cuando hay muchos puntos cercanos que podrían saturar la vista del usuario.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué desafíos enfrentaste?</strong><br />
          Tuve que entender cómo funciona el sistema de `clusterer` y cómo renderizar múltiples marcadores de forma eficiente. También fue importante ajustar la zona para que los puntos generados se visualizaran correctamente.
        </Typography>
      </Paper>
    </Box>
  );
};

export default MapaClusters;
