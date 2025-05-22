import React, { useEffect, useState } from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  DirectionsRenderer,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px',
};

// Coordenadas reales en Mazatlán
const origen = { lat: 23.23176, lng: -106.42318 }; // UAS
const destino = { lat: 23.19865, lng: -106.42322 }; // Machado

const MapaDirection = () => {
  const [map, setMap] = useState(null);
  const [directions, setDirections] = useState(null);
  const [selected, setSelected] = useState(null);
  const [travelMode, setTravelMode] = useState('DRIVING'); // Estado para el modo de transporte

  useEffect(() => {
    if (map) {
      const directionsService = new window.google.maps.DirectionsService();

      directionsService.route(
        {
          origin: origen,
          destination: destino,
          travelMode: travelMode, // Utiliza el estado actual
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
  }, [map, travelMode]); // Se vuelve a calcular si cambia el modo de transporte

  return (
    <div>
      {/* Botones de transporte */}
      <div style={{ marginBottom: '10px', textAlign: 'center' }}>
        <button
          onClick={() => setTravelMode('DRIVING')}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: travelMode === 'DRIVING' ? '#4CAF50' : '#ddd',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          🚗 Coche
        </button>
        <button
          onClick={() => setTravelMode('WALKING')}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: travelMode === 'WALKING' ? '#4CAF50' : '#ddd',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          🚶 Caminando
        </button>
        <button
          onClick={() => setTravelMode('BICYCLING')}
          style={{
            margin: '5px',
            padding: '10px',
            backgroundColor: travelMode === 'BICYCLING' ? '#4CAF50' : '#ddd',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          🚴 Bicicleta
        </button>
      </div>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={origen}
        zoom={13}
        onLoad={(map) => setMap(map)}
      >
        {/* Marcador del origen */}
        <Marker position={origen} onClick={() => setSelected(origen)} />
        {selected === origen && (
          <InfoWindow
            position={origen}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2 className="font-bold">Esta ubicación es de la UAS</h2>
              <p>Puedes venir a estudiar aquí</p>
            </div>
          </InfoWindow>
        )}

        {/* Marcador del destino */}
        <Marker position={destino} onClick={() => setSelected(destino)} />
        {selected === destino && (
          <InfoWindow
            position={destino}
            onCloseClick={() => setSelected(null)}
          >
            <div>
              <h2 className="font-bold">Esta ubicación es de Machado</h2>
              <p>Puedes venir a disfrutar aquí</p>
            </div>
          </InfoWindow>
        )}

        {/* Renderizar direcciones si están disponibles */}
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </div>
  );
};

export default MapaDirection;
