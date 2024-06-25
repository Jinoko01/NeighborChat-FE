import {useEffect, useState} from 'react';
import {Map, MapMarker} from "react-kakao-maps-sdk";
import Marker from "../..//assets/Marker.png";

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
        maximumAge: 0,
        timeout: 5000,
      })
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
    <div style={{ width: '100vw', height: '100vh', position: "relative" }}>
      {isLoaded && (
        <Map
          center={{ lat: position.lat, lng: position.lng }}
          style={{ width: '100vw', height: '100%' }}
          level={level}
        >
          <MapMarker
            position={{ lat: position.lat, lng: position.lng }}
            image={{
              src: Marker, // 커스텀 마커 이미지 URL
              size: {
                width: 64,
                height: 64,
              },
            }}
            title="You are here"
          />
          {arr.map((item, i) => (
            <MapMarker key={i} image={{
              src: Marker, // 커스텀 마커 이미지 URL
              size: {
                width: 64,
                height: 64,
              },
            }} position={{lat: item.lat, lng: item.lng}} />
          ))}
        </Map>
      )}
    </div>
  );
};

export default MapComponent;