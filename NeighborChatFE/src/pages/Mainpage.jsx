import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bar from '../components/Common/Bar';
import ProfilePage from "./ProfilePage.jsx";
import MapComponent from "../components/Mainpage/MapComponent.jsx";
import axios from "axios";


const Mainpage = () => {
  const position = [36.14608316034982, 128.39243213457368];
  const [openSetting, setOpenSetting] = useState(false);
  const [markerPosition, setMarkerPosition] = useState(position);
  const [markers, setMarkers] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  useEffect( () => {
    const fetchData = async() => {
      try {
        const response = await axios.get(`http://nearbysns.porito.click/account/whoAmI`, { withCredentials: true}).then((res) => {
          console.log(res.data)
        });
      } catch(error) {
        console.log(error);
      }
    }

    fetchData();
    setTimeout(
      axios.get(`http://nearbysns.porito.click/articles?longitude=${markerPosition[1]}&latitude=${markerPosition[0]}&meter=300`, { withCredentials: true})
        .then((res) => {
          setMarkers(res.articles);
        })
    , 500)
  }, []);

  return(
    <div>
      <MapComponent position={position} markerPosition={markerPosition} setMarkerPosition={setMarkerPosition} />
      <Bar openSetting={openSetting} setOpenSetting={setOpenSetting} markerPosition={markerPosition} setMarkerPosition={setMarkerPosition} />
      {openSetting && <ProfilePage setOpenSetting={setOpenSetting}/>}
    </div>
  );
};

const checkAuthentication = () => {
  return localStorage.getItem('userName') !== null;
};

export default Mainpage;