import React, { useState } from 'react';
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import styles from '../components/Common/Pages.module.css';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";
import {Link} from "react-router-dom";

const RegisterPage = () => {
  const [register, setRegister] = useState({
    accountLoginId: '',
    accountLoginPw: '',
    accountLoginPwCheck: '',
  });

  const handleChange = (e) => {
    const {name, value} = e.target;

    setRegister({
      ...register,
      [name]: value,
    });
  };

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
          <Button>
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
