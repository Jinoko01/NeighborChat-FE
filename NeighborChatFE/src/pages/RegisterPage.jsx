import React, { useState } from 'react';
import Modal from '../components/Common/Modal';
import MapComponent from '../components/Mainpage/MapComponent';
import Button from '../components/Common/Button';
import styles from '../components/Common/Pages.module.css';

const RegisterPage = () => {

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapComponent />
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

            <label className={styles.label}>테스트</label>

          <Button>
            회원가입
          </Button>
        </div>

      </Modal>
    </div>
  );
};

export default RegisterPage;
