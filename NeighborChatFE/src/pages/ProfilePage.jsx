import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import ProfileImage from '../assets/Profile.png'
import styles from '../components/Common/Pages.module.css';
import NaverMapComponent from "../components/Mainpage/NaverMapComponent.jsx";
import {NavermapsProvider} from "react-naver-maps";


const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [nickname, setNickname] = useState('닉네임');
  const [intro, setIntro] = useState('한 줄 소개(10자 이내)');

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleIntroChange = (e) => {
    setIntro(e.target.value);
  };

  return (
    <div style={{ position: 'relative', height: '100vh' }}>
      <NavermapsProvider ncpClientId='xf99yhizgh'>
        <NaverMapComponent />
      </NavermapsProvider>
      <Modal>
        <div>
          <h1 className={styles.logo}>프로필</h1>

          <div className={styles.inner}>
            <div className={styles.circle}>
              <img className={styles.profile} src={ProfileImage} alt="프로필_사진" />
            </div>
            <div className={styles.contents}>
              <div className={styles.details}>
                {isEditing ? (
                  <>
                  <input
                  type="text"
                  className={styles.input}
                  value={nickname}
                  onChange={handleNicknameChange} />
                  <input
                  type="text"
                  className={styles.input}
                  maxlength='10'
                  value={intro}
                  onChange={handleIntroChange} />
                  </>) :
                  (
                  <>
                    <label className={styles.label}>{nickname}</label>
                    <label className={styles.label}>{intro}</label>
                  </>
                  )}
              </div>
              <Button onClick={toggleEditMode}>
              {isEditing ? '저장' : '정보수정'}
              </Button>
            </div>
          </div>

          <div className={styles.footer}>
                <Link to="/register" className={styles.link}>회원가입</Link>
                <Link to="/forgotPassword" className={styles.link}>비밀번호 찾기</Link>
          </div>
          
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;