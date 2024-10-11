import React from 'react'
import styles from './Third.module.css'
import { useState } from 'react';

export default function Third_block() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className={styles.cont}>
      <div className={styles.title_cont}>
          <p className={styles.title_p}>ПУБЛИКУЙ</p>
          <div className={styles.choose}>
              БЕЗ
          </div>
          <p className={styles.title_p}>ОГРАНИЧЕНИЙ</p>
      </div>
      <div className={styles.stokes_cont}>
        <img className={styles.stokes_1} src='\images\main\stoke_1.png'></img>
        <img className={styles.stokes_arrow} src='\images\main\arrow_stokes.svg'></img>
        <img className={styles.stokes_1} src='\images\main\stoke_2.png'></img>
      </div>
      <div className={styles.stokes_cont_title}>
          <p className={styles.stokes_cont_title_p_1}>Логотип крупнейшей компании по производству мыльных пузырей бодрит</p>
          <p className={styles.stokes_cont_title_p_2}>Реализация намеченных плановых заданий оказалась чрезвычайно полезной</p>
          <p className={styles.stokes_cont_title_p_3}>Коронованный герцог графства не позволил союзу развалиться</p>
          <p className={styles.stokes_cont_title_p_4}>Финансовый мир очнулся: базовый вектор развития продолжает удивлять</p>
      </div>
      <div className={styles.accordion_top_cont}>
        <div className={styles.order_cont}>порядок действий</div>
        <h1 className={styles.accordion_top_cont_h1}>как это работает?</h1>
      </div>
      <div className={styles.accordion}>
      <div className={`${styles.accordionItem} ${styles.top_accordionitem}`}>
        <div className={styles.accordionTitle} onClick={() => handleToggle(0)}>
          <h2>01</h2>
          <div className={styles.accordionItem_cont}>
            <span>ВЫБЕРИТЕ ПАКЕТ</span>
            <img
              className={`${styles.accordion_arrow} ${
                activeIndex === 0 ? styles.rotate : ''
              }`}
              src='/images/main/accord_arrow.svg'
              alt='arrow'
            />
          </div>
        </div>
        <div
          className={`${styles.accordionContent} ${
            activeIndex === 0 ? styles.active : ''
          }`}
        >
          
          <div className={styles.content_cont}>Ознакомьтесь с нашими тарифами и выберите тот, который подходит именно вам</div>
        </div>
      </div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle} onClick={() => handleToggle(1)}>
          <h2>02</h2>
          <div className={styles.accordionItem_cont}>
            <span>ПОДГОТОВЬТЕ МАТЕРИАЛ</span>
            <img
              className={`${styles.accordion_arrow} ${
                activeIndex === 1 ? styles.rotate : ''
              }`}
              src='/images/main/accord_arrow.svg'
              alt='arrow'
            />
          </div>
        </div>
        <div
          className={`${styles.accordionContent} ${
            activeIndex === 1 ? styles.active : ''
          }`}
        >
          <div className={styles.content_cont}>ContentContentContentContent</div>
        </div>
      </div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle} onClick={() => handleToggle(2)}>
          <h2>03</h2>
          <div className={styles.accordionItem_cont}>
            <span>ОТПРАВЬТЕ НАМ</span>
            <img
              className={`${styles.accordion_arrow} ${
                activeIndex === 2 ? styles.rotate : ''
              }`}
              src='/images/main/accord_arrow.svg'
              alt='arrow'
            />
          </div>
        </div>
        <div
          className={`${styles.accordionContent} ${
            activeIndex === 2 ? styles.active : ''
          }`}
        >
          <div className={styles.content_cont}>ContentContentContentContent</div>
        </div>
      </div>
      <div className={styles.accordionItem}>
        <div className={styles.accordionTitle} onClick={() => handleToggle(3)}>
          <h2>04</h2>
          <div className={styles.accordionItem_cont}>
            <span>ПУБЛИКАЦИЯ</span>
            <img
              className={`${styles.accordion_arrow} ${
                activeIndex === 3 ? styles.rotate : ''
              }`}
              src='/images/main/accord_arrow.svg'
              alt='arrow'
            />
          </div>
        </div>
        <div
          className={`${styles.accordionContent} ${
            activeIndex === 3 ? styles.active : ''
          }`}
        >
          <div className={styles.content_cont}>ContentContentContentContent</div>
        </div>
      </div>
      </div>
      <a href='#' className={styles.write_btn}>
        <p className={styles.write_btn_p}>Написать статью</p>
        <img className={styles.write_btn_img} src='\images\main\arrow.png'></img>
      </a>
      <div className={styles.line}></div>
    </div>
  )
}
