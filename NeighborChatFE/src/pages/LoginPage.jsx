import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../components/Common/Modal';
import MapComponent from '../components/Mainpage/MapComponent';
import Button from '../components/Common/Button';
import styles from '../components/Common/Pages.module.css';

const LoginPage = () => {

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapComponent />
      <Modal>
        <div className={styles.contentContainer}>
          <h1 className={styles.logo}>로그인</h1>
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
          <Button>
            로그인
          </Button>
          <div className={styles.footer}>
            <Link to="/register" className={styles.link}>회원가입</Link>
            <Link to="/forgotPassword" className={styles.link}>비밀번호 찾기</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default LoginPage;
