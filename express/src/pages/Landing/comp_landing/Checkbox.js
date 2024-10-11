// src/Checkbox.js
import React from 'react';
import styles from './Checkbox.module.css';

const Checkbox = ({ checked, onChange }) => {
  return (
    <label className={styles['custom-checkbox']}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
