// src/components/MapaDirection.jsx
import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from '@react-google-maps/api';
import {
  Box,
  Button,
  ButtonGroup,
  Typography,
  Paper,
  Divider,
} from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const origen = { lat: 23.23176, lng: -106.42318 }; // UAS
const destino = { lat: 23.19865, lng: -106.42322 }; // Machado

const MapaDirection = () => {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [selected, setSelected] = useState(null);
  const [travelMode, setTravelMode] = useState('DRIVING');

  useEffect(() => {
    if (map) {
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origen,
          destination: destino,
          travelMode: travelMode,
        },
        (result, status) => {
          if (status === 'OK') {
            setDirections(result);
          } else {
            console.error('Error al obtener direcciones:', status);
          }
        }
      );
    }
  }, [map, travelMode]);

  return (
    <Box sx={{ width: '100%', maxWidth: '900px', mx: 'auto', p: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Mapa con Direcciones
      </Typography>

      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Typography variant="subtitle1" gutterBottom>
          Selecciona el modo de transporte:
        </Typography>
        <ButtonGroup variant="contained" color="primary">
          <Button
            onClick={() => setTravelMode('DRIVING')}
            variant={travelMode === 'DRIVING' ? 'contained' : 'outlined'}
          >
            🚗 Coche
          </Button>
          <Button
            onClick={() => setTravelMode('WALKING')}
            variant={travelMode === 'WALKING' ? 'contained' : 'outlined'}
          >
            🚶 Caminando
          </Button>
          <Button
            onClick={() => setTravelMode('BICYCLING')}
            variant={travelMode === 'BICYCLING' ? 'contained' : 'outlined'}
          >
            🚴 Bicicleta
          </Button>
        </ButtonGroup>
      </Box>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origen}
        zoom={13}
        onLoad={(map) => setMap(map)}
      >
        <Marker position={origen} onClick={() => setSelected(origen)} />
        {selected === origen && (
          <InfoWindow position={origen} onCloseClick={() => setSelected(null)}>
            <div>
              <Typography variant="subtitle1" fontWeight="bold">
                Esta ubicación es de la UAS
              </Typography>
              <Typography variant="body2">Puedes venir a estudiar aquí</Typography>
            </div>
          </InfoWindow>
        )}

        <Marker position={destino} onClick={() => setSelected(destino)} />
        {selected === destino && (
          <InfoWindow position={destino} onCloseClick={() => setSelected(null)}>
            <div>
              <Typography variant="subtitle1" fontWeight="bold">
                Esta ubicación es de Machado
              </Typography>
              <Typography variant="body2">Puedes venir a disfrutar aquí</Typography>
            </div>
          </InfoWindow>
        )}

        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>

      <Paper elevation={3} sx={{ mt: 4, p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          📝 Explicación de la Actividad
        </Typography>
        <Divider sx={{ mb: 2 }} />
        <Typography variant="body1" paragraph>
          <strong>¿Qué se hizo?</strong><br />
          Se construyó un mapa que traza rutas desde la UAS hasta la Plazuela Machado, permitiendo cambiar el modo de transporte en tiempo real.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué herramientas/librerías se usaron?</strong><br />
          - React<br />
          - @react-google-maps/api<br />
          - Material UI para mejorar el diseño de botones y tipografía
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué aprendiste?</strong><br />
          Aprendí cómo usar el servicio de direcciones de Google Maps y cómo hacer que el modo de transporte sea dinámico e interactivo.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué desafíos enfrentaste?</strong><br />
          Aprender a usar correctamente el <code>DirectionsService</code> y reaccionar a los cambios de estado sin recargar toda la aplicación.
        </Typography>
      </Paper>
    </Box>
  );
};

export default MapaDirection;
