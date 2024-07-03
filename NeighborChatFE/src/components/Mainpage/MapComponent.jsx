import React, {useEffect, useState} from 'react';
import {MapContainer, TileLayer, Marker, Popup, useMapEvents, useMap} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {datas} from '../../mocks/datas.js';
import L from 'leaflet';

const MapComponent = ({ position, markerPosition, setMarkerPosition }) => {

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

  const GetMarker = () => {
    const map = useMap();

    useEffect(() => {
      datas.forEach((data) => {
        const popup = L.popup({
          autoClose: false,
          closeOnClick: false,
          closeButton: false,
        })
          .setLatLng([data.latitude, data.longitude])
          .setContent(data.content)
          .openOn(map);
      })
    }, []);

    return null;
  }

  return (
    <MapContainer center={position} zoom={18} style={{ height: "100vh", width: "100%", zIndex: "25" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
      <GetMarker />
    </MapContainer>
  )
}

export default MapComponent;