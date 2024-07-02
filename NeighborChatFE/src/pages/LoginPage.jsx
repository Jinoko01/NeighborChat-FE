import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import styles from '../components/Common/Pages.module.css';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";

const LoginPage = () => {
  const [login, setLogin] = useState({
    accountLoginId: '',
    accountLoginPw: '',
  });

  const [error, setError] = useState({
    error: false,
    content: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleLogin = () => {
    if(login.accountLoginId == '' || login.accountLoginPw == ''){
      setError({error:true, content:'빈 칸이 존재합니다.'})
      return 
    }
  }

  return (
    <div>
      <NavermapsProvider ncpClientId='xf99yhizgh'>
        <NaverMapComponent />
      </NavermapsProvider>
      <Modal>
        <div className={styles.contentContainer}>
          <h1 className={styles.logo}>로그인</h1>
          <input
            type="text"
            className={styles.input}
            placeholder="아이디"
            onChange={handleChange}
          />
          <input
            type="password"
            className={styles.input}
            placeholder="비밀번호"
            onChange={handleChange}
          />

          <label>{error.error && error.content}</label>

          <Button onClick={handleLogin}>
            로그인
          </Button>
          <div className={styles.footer}>
            <Link to="/register" className={styles.link}>회원가입</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginPage;
