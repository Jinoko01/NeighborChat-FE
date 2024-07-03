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
  // 실제로는 로컬 스토리지, 쿠키 또는 API 요청 등을 사용하여 로그인 상태를 확인합니다.
  return localStorage.getItem('authToken') !== null;
};

export default Mainpage;