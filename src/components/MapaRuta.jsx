// src/components/MapaRuta.jsx
import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from '@react-google-maps/api';
import { Box, Typography, Paper, Divider } from '@mui/material';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const origen = { lat: 23.23176, lng: -106.42318 }; // UAS
const destino = { lat: 23.19865, lng: -106.42322 }; // Machado

const MapaRuta = () => {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (map) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: origen,
          destination: destino,
          travelMode: window.google.maps.TravelMode.DRIVING,
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
  }, [map]);

  return (
    <Box sx={{ width: '100%', maxWidth: '900px', mx: 'auto', p: 2 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Ruta desde UAS hasta la Plazuela Machado
      </Typography>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origen}
        zoom={13}
        onLoad={map => setMap(map)}
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
          En esta actividad se generó una ruta de conducción entre dos puntos importantes de Mazatlán: la Universidad Autónoma de Sinaloa (UAS) y la Plazuela Machado, usando la API de Google Maps.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué herramientas/librerías se usaron?</strong><br />
          - React <br />
          - @react-google-maps/api <br />
          - Material UI (MUI) para el diseño visual
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué aprendiste?</strong><br />
          Aprendí a utilizar el servicio de direcciones (DirectionsService) de Google Maps para calcular y mostrar rutas, y cómo renderizarlas con `DirectionsRenderer`.
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>¿Qué desafíos enfrentaste?</strong><br />
          Inicialmente fue complicado comprender cómo obtener y renderizar rutas correctamente con la API de Google. También hubo un reto al momento de controlar los estados y mostrar la información solo cuando el mapa estaba completamente cargado.
        </Typography>
      </Paper>
    </Box>
  );
};

export default MapaRuta;
