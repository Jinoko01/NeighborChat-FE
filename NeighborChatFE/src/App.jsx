import "./App.css";
import Mainpage from "./pages/Mainpage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TestPage from "./pages/TestPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgetPassword" element={<Mainpage />} />
      </Routes>
    </Router>
  );
}

export default App;
