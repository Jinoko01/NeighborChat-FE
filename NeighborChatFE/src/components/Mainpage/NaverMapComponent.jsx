import { Container as MapDiv } from "react-naver-maps";
import MyMap from "./MyMap.jsx";
import Button from "../Common/Button.jsx";
import {useState} from "react";

const NaverMapComponent = () => {
  const [location, setLocation] = useState({
    loaded: true,
    coordinates: {
      lat: 37.3587574,
      lng: 127.1052528,
    }
  });

  const onGetPosition = () => {
    // 성공에 대한 로직
    const onSuccess = (location) => {
      setLocation({
        loaded: true,
        coordinates: {
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        },
      });
    };

    // 실패에 대한 로직
    const onError = (error) => {
      setLocation({
        loaded: true,
        error
      });
    };

    if (!navigator.geolocation) {
      onError({
        code: 0,
        message: 'Geolocation is not supported',
      });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }

  return (
    <>
      <MapDiv style={{ width: "100vw", height: "100vh", position: "absolute", top: 0, left: 0, bottom: 0 }}>
        <MyMap location={location} />
      </MapDiv>
      <Button onClick={onGetPosition} style={{ position: "absolute", left: "2vw", top: "3vh", width: "10%"}}>내 위치 찾기</Button>
    </>
  );
};

export default NaverMapComponent;