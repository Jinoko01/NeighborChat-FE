import Modal from "../components/Common/Modal.jsx";
import MapComponent from "../components/Mainpage/MapComponent.jsx";
import Bar from '../components/Common/Bar';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";


const Mainpage = () => {

  return(
    <div>
      <NavermapsProvider ncpClientId='xf99yhizgh'>
        <NaverMapComponent />
      </NavermapsProvider>
      <Bar />
    </div>
  );
};

export default Mainpage;