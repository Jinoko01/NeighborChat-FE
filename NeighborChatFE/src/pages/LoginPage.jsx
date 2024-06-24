import React, { useState } from 'react';
import Modal from '../components/Modal';
import MapComponent from '../components/Mainpage/MapComponent';
import Button from '../components/Button';
import Button from '../components/';
import styles from '../components/Pages.module.css'

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapComponent />
      { //isModalOpen && (
        <Modal>
          <div className={styles.inner_div}>
            <h1 className={styles.logo}>로그인</h1>

            <input
              type="text"
              id="username"
              className={styles.input}
              placeholder="아이디"
            />

            <Button onClick={closeModal}>
              로그인
            </Button>
          </div>
          
        </Modal>
      // ) 
      }
    </div>
  );
};

export default LoginPage;
