import React, { useState } from 'react';
import Modal from '../components/Modal';
import MapComponent from '../components/Mainpage/MapComponent';
import Button from '../components/Button';

const LoginPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapComponent />
      {isModalOpen && (
        <Modal>
          <h1>로그인</h1>
          <Button onClick={closeModal}>
            로그인
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default LoginPage;
