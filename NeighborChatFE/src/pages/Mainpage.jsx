import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Bar from '../components/Common/Bar';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import { NavermapsProvider } from "react-naver-maps";
import ProfilePage from "./ProfilePage.jsx";

const Mainpage = () => {
  const [openSetting, setOpenSetting] = useState(false);
  
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthenticated = checkAuthentication();
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate]);

  return(
    <div>
      <NavermapsProvider ncpClientId='xf99yhizgh'>
        <NaverMapComponent />
      </NavermapsProvider>
      <Bar openSetting={openSetting} setOpenSetting={setOpenSetting} />
      {openSetting && <ProfilePage setOpenSetting={setOpenSetting}/>}
    </div>
  );
};

const checkAuthentication = () => {
  return localStorage.getItem('userName') !== null;
};

export default Mainpage;