import React, { useState } from 'react';
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import styles from '../components/Common/Pages.module.css';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";
import { Link, useNavigate } from "react-router-dom";

import axios from 'axios';
const api = axios.create({
  baseURL: 'https://nearbysns.porito.click/', // 서버의 기본 URL을 설정합니다.
  withCredentials: true, // 쿠키를 포함한 요청을 보낼 때 사용합니다.
});

const LoginPage = () => {
  const navigate = useNavigate();
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
    api.post("https://nearbysns.porito.click/account/login", login)
    .then( (res)=>{
      const {accountLoginId, accountName} = res.data;
      localStorage.setItem('userName', accountName);
      navigate('/');
    }).catch( (err)=>{
      if (err.response) {
        const { status, error: serverError, message } = err.response.data;
        setError({ error: true, content: message});
      }
      return
    })
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
            name = "accountLoginId"
            value = {login.accountLoginId}
            onChange={handleChange}
          />
          <input
            type="password"
            className={styles.input}
            placeholder="비밀번호"
            name = "accountLoginPw"
            value = {login.accountLoginPw}
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
