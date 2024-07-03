import React, { useState, useEffect } from 'react';
import Modal from '../components/Common/Modal';
import Button from '../components/Common/Button';
import ProfileImage from '../assets/Profile.png';
import styles from '../components/Common/Pages.module.css';
import XIcon from '../assets/X.png';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

// axios 인스턴스 생성
const api = axios.create({
  baseURL: 'https://nearbysns.porito.click/', // 서버의 기본 URL을 설정합니다.
  withCredentials: true, // 쿠키를 포함한 요청을 보낼 때 사용합니다.
});

const ProfilePage = ({ setOpenSetting }) => {
  const navigate = useNavigate(); 
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    accountName: localStorage.getItem('userName') || '',
    currentPw: '',
    newPw: '',
  });

  const [error, setError] = useState({
    error: false,
    content: '',
  });

  const [success, setSuccess] = useState('');

  const checkAuthentication = () => {
    return localStorage.getItem('userName') !== null;
  };

  const toggleEditMode = () => {
    if (userInfo.accountName === '' && isEditing) {
      setError({ error: true, content: '닉네임을 입력해주세요.' });
      return;
    }
    setIsEditing(!isEditing);
    setError({ error: false, content: '' });
    setSuccess('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const handleSave = async () => {
    try {
      await api.patch('account/update/accountName', {
        accountName: userInfo.accountName,
        accountLoginPw: userInfo.currentPw,
      });
      setIsEditing(false);
      setError({ error: true, content: '정보가 성공적으로 수정되었습니다.' });
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        setError({ error: true, content: message });
      } else {
        setError({ error: true, content: '정보 수정 중 오류가 발생했습니다1.' });
      }
      console.error('Failed to update user info:', error);
    }

    try {
      if (userInfo.currentPw !== userInfo.newPw && userInfo.newPw !== '') {
        await api.patch('account/update/accountLoginPw', {
          currentPw: userInfo.currentPw,
          newPw: userInfo.newPw,
        });
      }
      setIsEditing(false);
    } catch (error) {
      if (error.response) {
        const { message } = error.response.data;
        setError({ error: true, content: message });
      } else {
        setError({ error: true, content: '정보 수정 중 오류가 발생했습니다2.' });
        handleLogout();
      }
      console.error('Failed to update user info:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userName');
    navigate('/login');
  };

  return (
    <div>
      <Modal>
        <div style={{ width: "100%" }}>
          <button style={{ position: "absolute", top: "10px", left: "20px", cursor: "pointer" }} onClick={() => { setOpenSetting(false) }}>
            <img src={XIcon} alt="XIcon" style={{ width: "10px", height: "10px" }} />
          </button>

          <h1 className={styles.logo}>프로필</h1>

          <div className={styles.inner}>
            <div className={styles.circle}>
              <img className={styles.profile} src={ProfileImage} alt="프로필 사진" />
            </div>
            <div className={styles.contents}>
              <div className={styles.details}>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      placeholder="닉네임을 입력해주세요."
                      className={styles.input}
                      name="accountName"
                      value={userInfo.accountName}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="현재 비밀번호"
                      className={styles.input}
                      name="currentPw"
                      value={userInfo.currentPw}
                      onChange={handleChange}
                    />
                    <input
                      type="password"
                      placeholder="새 비밀번호"
                      className={styles.input}
                      name="newPw"
                      value={userInfo.newPw}
                      onChange={handleChange}
                    />
                  </>
                ) : (
                  <>
                    <input className={styles.label} readOnly value={userInfo.accountName} />
                  </>
                )}
              </div>
              {error.error && <label className={styles.error}>{error.content}</label>}
              {success && <label className={styles.success}>{success}</label>}
              <Button onClick={isEditing ? handleSave : toggleEditMode}>
                {isEditing ? '저장' : '정보수정'}
              </Button>
            </div>
          </div>
          <div className={styles.footer}>
            <Link to="/login" className={styles.link} onClick={handleLogout}>로그아웃</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;
