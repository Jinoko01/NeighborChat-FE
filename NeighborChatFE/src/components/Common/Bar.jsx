import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Bar.module.css';
import sendIcon from '../../assets/send.png'
import chatIcon from '../../assets/chat.png'
import settingIcon from '../../assets/setting.png'


const Bar = ({ children }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.modalBar}>
        <div className={styles.modalContent}>
          {children}
        </div> 
      </div>

      <div className={styles.modalButton}>
        <button className={styles.send}>
          <img src={sendIcon} alt="sendIcon" />
        </button>
        <button className={styles.chat}>
          <img src={chatIcon} alt="chatIcon" />
        </button>
        <button className={styles.setting} onClick={() => navigate('/profile')}>
          <img src={settingIcon} alt="settingIcon" />
        </button>
      </div>
    </div>
  );
};

export default Bar;