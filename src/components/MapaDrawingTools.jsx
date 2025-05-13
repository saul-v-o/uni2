// src/components/MapaDrawingTools.jsx
import React, { useRef, useState } from 'react';
import { GoogleMap, DrawingManager } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '600px',
};

const center = {
  lat: 23.2494, // Mazatlán
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
    <>
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

      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <button onClick={clearShapes}>Eliminar formas</button>
      </div>
    </>
  );
};

export default MapaDrawingTools;
