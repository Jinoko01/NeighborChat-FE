import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import ProfileImage from '../assets/Profile.png'
import styles from '../components/Common/Pages.module.css';
import XIcon from '../assets/X.png'


const ProfilePage = ({setOpenSetting}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    nickname: '',
    intro: '',
  });

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  return (
    <div>
      <Modal>
        <div style={{ width: "100%"}}>
          <button style={{ position: "absolute", top:"10px", left:"20px", cursor:"pointer"}} onClick={() => {setOpenSetting(false)}}>
            <img src={XIcon} alt="XIcon" style={{width:"10px", height:"10px"}} />
          </button>

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
                    placeholder="닉네임을 입력해주세요."
                    className={styles.input}
                    name="nickname"
                    value={userInfo.nickname}
                    onChange={handleChange} />
                    <input
                    type="text"
                    placeholder="한줄소개를 입력해주세요."
                    className={styles.input}
                    maxLength='10'
                    name="intro"
                    value={userInfo.intro}
                    onChange={handleChange} />
                  </>) :
                  (
                  <>
                    <input className={styles.label} readOnly={true} value={userInfo.nickname} />
                    <input className={styles.label} readOnly={true} value={userInfo.intro} maxLength='10' />
                  </>
                  )
                }
              </div>
              <Button onClick={toggleEditMode}>
              {isEditing ? '저장' : '정보수정'}
              </Button>
            </div>
          </div>
          <div className={styles.footer}>
            <Link to="/login" className={styles.link}>로그아웃</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;