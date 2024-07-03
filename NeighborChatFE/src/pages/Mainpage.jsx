import Bar from '../components/Common/Bar';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";
import ProfilePage from "./ProfilePage.jsx";
import {useState} from "react";
import MapComponent from "../components/Mainpage/MapComponent.jsx";


const Mainpage = () => {
  const [openSetting, setOpenSetting] = useState(false);

  return(
    <div>
      {/*<NavermapsProvider ncpClientId='xf99yhizgh'>*/}
      {/*  <NaverMapComponent />*/}
      {/*</NavermapsProvider>*/}
      <MapComponent />
      <Bar openSetting={openSetting} setOpenSetting={setOpenSetting} />
      {openSetting && <ProfilePage setOpenSetting={setOpenSetting}/>}
    </div>
  );
};

export default Mainpage;