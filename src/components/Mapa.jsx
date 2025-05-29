import React, { useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { Box, Typography, Paper } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 23.23162,
  lng: -106.42653,
};

function Mapa() {
  const [selected, setSelected] = useState(null);

  return (
    <Box sx={{ width: '100%', maxWidth: '800px', margin: 'auto', p: 2 }}>
      {/* Mapa de Google */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        onClick={() => setSelected(null)}
      >
        <Marker position={center} onClick={() => setSelected(center)} />
        {selected && (
          <InfoWindow position={selected} onCloseClick={() => setSelected(null)}>
            <Box>
              <Typography variant="h6" fontWeight="bold">
                Esta ubicación es de FIMAZ
              </Typography>
              <Typography>Puedes venir a estudiar aquí :)</Typography>
            </Box>
          </InfoWindow>
        )}
      </GoogleMap>

      {/* Descripción de la actividad */}
      <Paper elevation={3} sx={{ mt: 4, p: 3 }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Descripción de la Actividad
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">
          ¿Qué se hizo?
        </Typography>
        <Typography paragraph>
          Se integró un mapa de Google Maps con un marcador e InfoWindow para señalar un punto específico en Mazatlán.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">
          Herramientas/Librerías utilizadas
        </Typography>
        <Typography paragraph>
          React, @react-google-maps/api, Material UI.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">
          ¿Qué aprendí?
        </Typography>
        <Typography paragraph>
          Aprendí a renderizar mapas de Google de forma dinámica en React y manejar eventos de click en marcadores.
        </Typography>

        <Typography variant="subtitle1" fontWeight="bold">
          Desafíos enfrentados
        </Typography>
        <Typography paragraph>
          El mayor reto fue entender el manejo de estado al seleccionar ubicaciones con `useState`, y lidiar con errores comunes de carga de librerías de Google Maps.
        </Typography>
      </Paper>
    </Box>
  );
}

export default React.memo(Mapa);
