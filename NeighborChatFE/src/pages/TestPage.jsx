import { NavermapsProvider } from 'react-naver-maps';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";

const TestPage = () => {
  return (
    <div>
      <NavermapsProvider ncpClientId='xf99yhizgh'>
        <NaverMapComponent />
      </NavermapsProvider>
    </div>
  );
};

export default TestPage;