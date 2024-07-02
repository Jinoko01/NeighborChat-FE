import { useEffect, useState } from 'react';
import { Map } from "react-kakao-maps-sdk";
import MarkerComponent from "../Common/MarkerComponent.jsx";
import { useGeoLocation } from "../../hooks/useGeoLocation.js";

const arr = [{ lat: 33.450701, lng: 126.570667}, {lat: 33.46, lng: 126.58 }];

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
        maximumAge: 1000 * 3600 * 24,
        timeout: 1000 * 10,
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', position: "absolute", left: 0, top: 0 }}>
      {isLoaded && (
        <Map
          center={{ lat: position.lat, lng: position.lng }}
          style={{ width: '100vw', height: '100vh' }}
          level={level}
        >
          <MarkerComponent
            id={"me"}
            position={{ lat: position.lat, lng: position.lng }}
          />
          {arr.map((item, i) => (
            <MarkerComponent
              key={i}
              id={i}
              position={{lat: item.lat, lng: item.lng}} />
          ))}
        </Map>
      )}
    </div>
  );
};

export default MapComponent;