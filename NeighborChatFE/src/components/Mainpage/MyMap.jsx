import { Container as MapDiv, NaverMap, Marker } from "react-naver-maps";
import {useEffect, useState} from "react";

const MyMap = ({ location }) => {
  const { lat, lng } = location.coordinates;
  const [center, setCenter] = useState(null);

  useEffect(() => {
    if (location.loaded) {
      setCenter({
        lat,
        lng
      });
    }
  }, [location]);

  return (
    <NaverMap center={center} zoom={18} zoomControl={true} >
      {location.loaded && (
        <Marker position={{ lat, lng }} />
      )}
    </NaverMap>
  );
};

export default MyMap;