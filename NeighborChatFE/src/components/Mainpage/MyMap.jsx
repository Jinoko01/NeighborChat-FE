import { Container as Maps, NaverMap, Marker } from "react-naver-maps";
import {useEffect, useState} from "react";

const MyMap = ({ location }) => {
  const { lat, lng } = location.coordinates;
  const [center, setCenter] = useState({
    lat: 37.3587574,
    lng: 127.1052528,
  });
  const [markerPosition, setMarkerPosition] = useState({
    lat: 37.3587574,
    lng: 127.1052528,
  });

  useEffect(() => {
    if (location.loaded) {
      setCenter({
        lat,
        lng
      });
      setMarkerPosition({
        lat,
        lng
      });
    }
  }, [location]);

  // 지도 중심이 변경될 때 마커 위치 갱신
  const onUpdateMarkerPosition = (e) => {
    const newCenter = e.coord;
    console.log(newCenter);
    setMarkerPosition({
      lat: newCenter.y,
      lng: newCenter.x,
    });
    console.log(center);
  };

  return (
    <NaverMap center={center} zoom={18} zoomControl={true} onClick={onUpdateMarkerPosition} >
      {location.loaded && (
        <Marker position={markerPosition} style={{position: "relative"}} />
      )}
    </NaverMap>
  );
};

export default MyMap;