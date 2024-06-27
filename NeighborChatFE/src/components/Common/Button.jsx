import React from 'react';
import styles from './Button.module.css';

const Button = ({ onClick, children, style }) => {
  return (
    <button className={styles.button} onClick={onClick} style={style}>
      {children}
    </button>
  );
};

export default Button;
