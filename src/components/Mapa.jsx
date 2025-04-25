// src/components/Mapa.jsx
import React, { useState } from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 23.23162, 
  lng: -106.42653,
};

function Mapa() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY, 
  });

  const [selected, setSelected] = useState(null);

  return isLoaded ? (
    <div style={{ width: "100%", maxWidth: "800px", margin: "auto" }}>
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px', minHeight: '400px' }}
        center={center}
        zoom={12}
        onClick={() => setSelected(null)}
      >
        <Marker position={center} onClick={() => setSelected(center)} />
        {selected && (
          <InfoWindow position={selected} onCloseClick={() => setSelected(null)}>
            <div>
              <h2 className="font-bold">Esta ubicación es de FIMAZ</h2>
              <p>Puedes venir a estudiar aquí :)</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </div>
  ) : (
    <p className="text-center my-4">Cargando mapa...</p>
  );
}

export default React.memo(Mapa);
