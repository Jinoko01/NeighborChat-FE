import {MapMarker} from "react-kakao-maps-sdk";
import Marker from "../../assets/Marker.png";
import axios from "axios";
import {useEffect, useState} from "react";

const MarkerComponent = ({ id, position }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.post("https://test.com/user", {id});
        const u = request.data.filter((item) => item.id === id);
        setUser(request.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();

  }, [id]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  if (!user) {
    return null;
  }

  return (
    <>
      <MapMarker id={id} image={{
        src: Marker, // 커스텀 마커 이미지 URL
        size: {
          width: 64,
          height: 64,
        },
      }} position={position} />
      {id === user.id ? <button>user.message</button> : <p>{user.id}</p>}
    </>
  );
};

export default MarkerComponent;