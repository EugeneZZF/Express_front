import React from 'react'
import styles from './First_block.module.css'
import Header_landing from './Header_landing'

export default function First_block({setActiveModal , activeModal}) {
  return (
    <div className={styles.cont}>
        <Header_landing
        activeModal={activeModal} 
        setActiveModal={setActiveModal}
        ></Header_landing>
        <div className={styles.section}>
          <div className={styles.section_first_line}>
            <h1 className={styles.h1_section}>Путь к успешной публикации -</h1>
            <img className={styles.snake} src='\images\main\snake.svg'></img>
          </div>
          <div className={styles.section_second_line} 
            style={{ backgroundImage: `url('images/main/stroke.png')` }}>
            <p className={styles.section_second_line_p}>PR Express</p>
            <div className={styles.slash}></div>
          </div>
          <div className={styles.section_third_line}>
            <a className={styles.section_a}>
              <p className={styles.btn_p}>Написать статью</p>
              <img src='\images\main\arrow.png'></img>
            </a>
            <p className={styles.thrid_line_p}>Наша миссия - помогать компаниям и индивидуальным предпринимателям донести свои идеи до максимально широкой аудитории</p>
          </div>
        </div>
        <div className={styles.block}></div>
    </div>
  )
}
