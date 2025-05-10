import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

// Coordenadas reales en Mazatlán
const origen = { lat: 23.23176, lng: -106.42318 }; // UAS
const destino = { lat: 23.19865, lng: -106.42322 }; // Machado

const MapaRuta = () => {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [selected, setSelected] = useState(null); // Estado para manejar el InfoWindow

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
          console.log('Resultado de DirectionsService:', status, result); // Depuración
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
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={origen}
      zoom={13}
      onLoad={map => setMap(map)}
    >
      {/* Marcador del origen */}
      <Marker position={origen} onClick={() => setSelected(origen)} label="" />
      {selected === origen && (
        <InfoWindow position={origen} onCloseClick={() => setSelected(null)}>
          <div>
            <h2 className="font-bold">Esta ubicación es de la UAS</h2>
            <p>Puedes venir a estudiar aquí</p>
          </div>
        </InfoWindow>
      )}

      {/* Marcador del destino */}
      <Marker position={destino} onClick={() => setSelected(destino)} label="" />
      {selected === destino && (
        <InfoWindow position={destino} onCloseClick={() => setSelected(null)}>
          <div>
            <h2 className="font-bold">Esta ubicación es de Machado</h2>
            <p>Puedes venir a disfrutar aquí</p>
          </div>
        </InfoWindow>
      )}

      {/* Renderizar direcciones si están disponibles */}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default MapaRuta;
