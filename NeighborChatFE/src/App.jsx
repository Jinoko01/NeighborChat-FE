import "./App.css";
import Mainpage from "./pages/Mainpage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = checkAuthentication();
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const checkAuthentication = () => {
  // 실제로는 로컬 스토리지, 쿠키 또는 API 요청 등을 사용하여 로그인 상태를 확인합니다.
  return localStorage.getItem('authToken') !== null;
};

export default App;
