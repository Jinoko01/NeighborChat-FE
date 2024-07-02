import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Bar.module.css';
import sendIcon from '../../assets/send.png'
import chatIcon from '../../assets/chat.png'
import settingIcon from '../../assets/setting.png'


const Bar = ({ openSetting, setOpenSetting }) => {
  const [chat, setChat] = useState('');
  const navigate = useNavigate();

  const handleChat = (e) => {
    setChat(e.target.value);
  }

  return (
    <div>
      <div className={styles.modalBar}>
        <input className={styles.modalContent} name="chat" value={chat} onChange={handleChat} />
      </div>

      <div className={styles.modalButton}>
        <button className={styles.send}>
          <img src={sendIcon} alt="sendIcon" />
        </button>
        <button className={styles.chat}>
          <img src={chatIcon} alt="chatIcon" />
        </button>
        <button className={styles.setting} onClick={() => setOpenSetting(!openSetting)}>
          <img src={settingIcon} alt="settingIcon" />
        </button>
      </div>
    </div>
  );
};

export default Bar;