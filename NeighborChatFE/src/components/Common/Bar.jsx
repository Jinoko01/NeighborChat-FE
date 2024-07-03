import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Bar.module.css';
import sendIcon from '../../assets/send.png'
import chatIcon from '../../assets/chat.png'
import settingIcon from '../../assets/setting.png'
import axios from "axios";


const Bar = ({ openSetting, setOpenSetting, markerPosition, setMarkerPosition }) => {
  const [chat, setChat] = useState('');
  const navigate = useNavigate();

  const handleChat = (e) => {
    setChat(e.target.value);
  }

  const handleSendMessage = (e) => {
    if (chat === '') return;
    if (e.keyCode === 13) {
      axios.post('https://nearbysns.porito.click/articles', {
        "content": chat,
        "latitude": markerPosition[0],
        "longitude": markerPosition[1],
      }).then((res) => {
        setChat('');
      })
    }
  }

  const onClickSendMessage = () => {
    if (chat === '') return;
    axios.post('https://nearbysns.porito.click/articles', {
      "content": chat,
      "latitude": markerPosition[0],
      "longitude": markerPosition[1],
    }).then((res) => {
      setChat('');
    })
  }

  return (
    <div>
      <div className={styles.modalBar}>
        <input className={styles.modalContent} name="chat" value={chat} onChange={handleChat} onKeyDown={handleSendMessage} />
      </div>

      <div className={styles.modalButton}>
        <button className={styles.send} onClick={onClickSendMessage}>
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