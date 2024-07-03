import React, {useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [36.14608316034982, 128.39243213457368];
  const [markerPosition, setMarkerPosition] = useState(position);

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return (
      <Marker position={markerPosition}>
        <Popup>
          Marker is at {markerPosition[0].toFixed(4)}, {markerPosition[1].toFixed(4)}
        </Popup>
      </Marker>
    );
  }

  return (
    <MapContainer center={position} zoom={18} style={{ height: "100vh", width: "100%", zIndex: "25" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  )
}

export default MapComponent;