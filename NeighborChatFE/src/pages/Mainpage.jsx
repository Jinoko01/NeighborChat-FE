import Bar from '../components/Common/Bar';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";
import ProfilePage from "./ProfilePage.jsx";
import {useState} from "react";


const Mainpage = () => {
  const [openSetting, setOpenSetting] = useState(false);

  return(
    <div>
      <NavermapsProvider ncpClientId='xf99yhizgh'>
        <NaverMapComponent />
      </NavermapsProvider>
      <Bar openSetting={openSetting} setOpenSetting={setOpenSetting} />
      {openSetting && <ProfilePage />}
    </div>
  );
};

export default Mainpage;