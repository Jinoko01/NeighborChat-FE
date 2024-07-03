import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ position, markerPosition, setMarkerPosition, markers }) => {

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
    <MapContainer center={position} zoom={18} style={{ height: "100vh", width: "100vw", zIndex: "25" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      {markers.map((data) => (
        <Marker position={[data.latitude, data.longitude]} key={data.articleId}>
          <Popup autoClose={false} closeOnClick={false} closeButton={false}>
            {data.content}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default MapComponent;