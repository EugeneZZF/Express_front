import React from 'react'
import styles from './Header_landing.module.css'
import { useState } from 'react'
import Modal from './Modal';

export default function Header_landing({setActiveModal , activeModal}) {

    

  return (
    <div className={styles.cont}>
        <div className={styles.logo_cont}>
            <img src='.\images\main\logo.png' className={styles.logo_img}></img>
            <div className={styles.vert_line}></div>
            <p className={styles.logo_p}>PR Express</p>
        </div>
        <div className={styles.right_side}>
            <div className={styles.reg_cont}>
                <button onClick={() => setActiveModal(true)} className={styles.login_btn}>Вход</button>
                <p className={styles.right_p}>/</p>
                <button onClick={() => setActiveModal(true)} className={styles.reg_btn}>Регистрация</button>
            </div>
            <a href='#' className={styles.tg} style={{ backgroundImage: `url('images/main/header_tg.svg')` }}></a>
            <button className={styles.change_language_btn}>
                <p className={styles.change_language_btn_p}>Ru</p>
                <img src='\images\main\vector.svg' className={styles.vector_language}></img>
            </button>
        </div>
        <div className={styles.line}></div>
        
    </div>
  )
}
