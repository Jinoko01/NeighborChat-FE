import React, { useState } from 'react';
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import styles from '../components/Common/Pages.module.css';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";

const RegisterPage = () => {

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
            />
            
            <input
              type="password"
              className={styles.input}
              placeholder="비밀번호"
            />

            <input
              type="password"
              className={styles.input}
              placeholder="비밀번호 확인"
            />

          <Button>
            회원가입
          </Button>
        </div>

      </Modal>
    </div>
  );
};

export default RegisterPage;
