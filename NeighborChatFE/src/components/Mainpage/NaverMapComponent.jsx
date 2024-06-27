import { Container as MapDiv } from "react-naver-maps";
import MyMap from "./MyMap.jsx";
import Button from "../Common/Button.jsx";

const NaverMapComponent = () => {
  return (
    <>
      <MapDiv style={{ width: "98vw", height: "97vh"}}>
        <MyMap />
      </MapDiv>
      <Button style={{ position: "absolute", left: "2vw", top: "3vh", width: "10%"}}>내 위치 찾기</Button>
    </>
  );
};

export default NaverMapComponent;