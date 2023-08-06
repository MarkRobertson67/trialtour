import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Polyline } from 'react-leaflet';

const MapComponent = ({ generatedTour }) => {
  const [routeCoordinates, setRouteCoordinates] = useState([]);

  useEffect(() => {
    // Parse the generatedTour string to extract the route coordinates
    const route = generatedTour.match(/\((.*?)\)/g);
    if (route) {
      const coordinates = route.map((coordinate) => {
        const [lng, lat] = coordinate.slice(1, -1).split(', ');
        const parsedLat = parseFloat(lat);
        const parsedLng = parseFloat(lng);
        if (!isNaN(parsedLat) && !isNaN(parsedLng)) {
          return [parsedLat, parsedLng];
        }
        return null; // Return null for invalid coordinates
      });
      console.log('Route Coordinates:', coordinates);
      setRouteCoordinates(coordinates.filter((coord) => coord !== null)); // Filter out null values
    } else {
      setRouteCoordinates([]);
    }
  }, [generatedTour]);

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={15} style={{ height: '200px' }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Polyline positions={routeCoordinates} color="blue" />
      </MapContainer>
    </div>
  );
};

export default MapComponent;






