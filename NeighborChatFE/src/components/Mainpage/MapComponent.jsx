import React, {useEffect, useState} from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";

const MapComponent = () => {
  const [position, setPosition] = useState({ lat: 33.450701, lng: 126.570667 });
  const [level, setLevel] = useState(2);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleSuccess = (position) => {
      const newPosition = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setPosition(newPosition);
      setIsLoaded(true); // 맵이 로드되었음을 설정
    };

    const handleError = (error) => {
      console.error('Error fetching geolocation:', error);
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      });

      navigator.geolocation.watchPosition(handleSuccess, handleError, {
        enableHighAccuracy: true,
        maximumAge: 0,
        timeout: 5000,
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div style={{ width: '100%', height: '100vh' }}>
      {isLoaded && (
        <Map
          center={{ lat: position.lat, lng: position.lng }}
          style={{ width: '100%', height: '100%' }}
          level={level}
        >
          <MapMarker
            position={{ lat: position.lat, lng: position.lng }}
            title="You are here"
          />
        </Map>
      )}
    </div>
  );
};

export default MapComponent;