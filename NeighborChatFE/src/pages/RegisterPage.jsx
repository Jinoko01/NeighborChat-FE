import React, { useState } from 'react';
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import styles from '../components/Common/Pages.module.css';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";
import {Link, useNavigate} from "react-router-dom";

import axios from 'axios';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState({
    accountLoginId: '',
    accountLoginPw: '',
    accountLoginPwCheck: '',
  });

  const [error, setError] = useState({
    error: false,
    content: '',
  })

  const handleChange = (e) => {
    const {name, value} = e.target;

    setRegister({
      ...register,
      [name]: value,
    });
  };

  const handelRegister = () => {
    if (register.accountLoginPw !== register.accountLoginPwCheck){
      setError({error:true, content:'비밀번호가 일치하지 않습니다.'})
      return
    }
    axios.post("https://nearbysns.porito.click/account/register", {
      accountName: register.accountLoginId,
      accountLoginId: register.accountLoginId,
      accountLoginPw: register.accountLoginPw,
    }).then( (res)=>{
      navigate('/login');
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
          <h1 className={styles.logo}>회원가입</h1>

          <input
            type="text"
            className={styles.input}
            placeholder="아이디"
            name = "accountLoginId"
            value = {register.accountLoginId}
            onChange={handleChange}
          />
          
          <input
            type="password"
            className={styles.input}
            placeholder="비밀번호"
            name = "accountLoginPw"
            value = {register.accountLoginPw}
            onChange={handleChange}
          />

          <input
            type="password"
            className={styles.input}
            placeholder="비밀번호 확인"
            name = "accountLoginPwCheck"
            value = {register.accountLoginPwCheck}
            onChange={handleChange}
          />

          <label>{error.error && error.content}</label>

          <Button onClick={handelRegister}>
            회원가입
          </Button>
          <div className={styles.footer}>
            <Link to="/login" className={styles.link}>로그인</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default RegisterPage;
