import React, { useState } from 'react';
import Modal from '../components/Modal';
import MapComponent from '../components/Mainpage/MapComponent';
import Button from '../components/Button';
import ProfileImage from '../assets/Profile.png'
import styles from '../components/Profile.module.css'


const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <MapComponent />
      {isModalOpen && (
        <Modal>
          <h1>프로필</h1>
          <div className={styles.picture}>
            <div className={styles.circle}>
              <img className={styles.profile} src={ProfileImage} alt="프로필_사진" />
            </div>
          </div>
          <Button onClick={closeModal}>
            정보수정
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default ProfilePage;