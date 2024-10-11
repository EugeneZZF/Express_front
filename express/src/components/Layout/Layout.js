import React from 'react'
import styles from './Layout.module.css'
import { Link, Outlet } from 'react-router-dom'
import { useState } from 'react';

export default function Layout() {
  const [selectedOption, setSelectedOption] = useState('');
    const [balance, setBalance] = useState('1220.00');
    const [cent, setcent] = useState(230);
    const [notifications, setnotifications] = useState(true);
    const [isNotificationsOpen, setNotificationsOpen] = useState(false);

    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

  return (
    <>
    <header>
        <div className={styles.header_logo_cont}>
          <img className={styles.header_logo_img} src='\images\Layout\logo.svg'></img>
          <div className={styles.header_line}></div>
          <p className={styles.header_logo_p}>PR Express</p>
        </div>
        <div className={styles.nav_cont}>
          <div className={styles.nav_link}>
            <Link to={"./resources"} className={styles.nav_site_link}>Ресурсы</Link>
            <Link to={"./publication"} className={styles.nav_site_link}>Публикации</Link>
            <Link to={"./archive"} className={styles.nav_site_link}>Архив</Link>
            <Link to={"./settings"} className={styles.nav_site_link}>Настройки</Link>
          </div>          
          <div className={styles.nav_profile_link}>
            <div className={styles.nav_line}></div>
            <Link className={styles.nav_site_link}>Антон Орлов</Link>
          </div>
        </div>
        <button className={styles.change_language}>
            <p className={styles.change_language_p}>RU</p>
            <img className={styles.change_language_arrow} src='\images\Layout\header_arrow.svg' ></img>
        </button>
        <div className={styles.header_bottom_line}></div>
    </header>


    
    <div className={styles.cont_settings}>
        
            <div className={styles.search_cont}>
                <input className={styles.settings_search_input} placeholder='Поиск по сайтам'/>
                <img className={styles.settings_search_input_png} src='\images\settings\search.svg'></img>
            </div>
            <div className={styles.radioGroup}>
                <label className={styles.radioButton}>
                <input
                  type="radio"
                  value="option1"
                  checked={selectedOption === 'option1'}
                  onChange={handleOptionChange}
                />
                <span className={styles.customRadio}></span>
                    Поиск по сайтам
                </label>

                <label className={styles.radioButton}>
                  <input
                    type="radio"
                    value="option2"
                    checked={selectedOption === 'option2'}
                    onChange={handleOptionChange}
                  />
                  <span className={styles.customRadio}></span>
                  Поиск по категориям
                </label>
            </div>
            <div className={styles.balance}>
                <img className={styles.balance_dollar} src='\images\settings\settings_dollar.svg'></img>
                <p className={styles.balance_p}>{balance}</p>
                <div className={styles.balance_ost}>{cent}</div>
            </div>
            <div className={styles.notifications_cont}>
                <div className={styles.notifications} onClick={() => setNotificationsOpen(!isNotificationsOpen)}>
                  <img className={styles.notifications_img} src='\images\Layout\notifications.svg'></img>
                </div>
                <img className={styles.change_language_arrow} src='\images\Layout\header_arrow.svg' ></img>
                { notifications ? (<img className={styles.new_notifications} src='\images\Layout\notifications_green.svg' ></img>): <></>}
            </div>
            <Link to={"./post"} className={styles.post}>Написать статью</Link>

            <div className={`${styles.notifications_menu} ${isNotificationsOpen ? styles.active : ''}`}>
              <div className={styles.notifications_content}>
                <p className={styles.notifications_title}>Уведомления</p>
                <div className={styles.notifications_line}></div>
              </div>
            </div>
        
    </div>



    <Outlet />


    <footer>
      <div className={styles.footer_content}>
        <div className={styles.footer_up_cont}>
          <div className={styles.footer_link}>
            <Link className={styles.footer_site_link}>Главная</Link>
            <Link className={styles.footer_site_link}>Ресурсы</Link>
            <Link className={styles.footer_site_link}>Публикации</Link>
          </div>
          <div className={styles.footer_title}>
            <p className={styles.footer_title_p}>Если у вас есть вопросы или предложения, не стесняйтесь обращаться к нам:</p>
          </div>
          <div className={styles.footer_social_media_cont}>
            <div className={styles.footer_media}>
              <img className={styles.footer_media_img} src='\images\Layout\media_1.svg'></img>
              <p className={styles.footer_media_p}>support@prexpress.io</p>
            </div>
            <div className={styles.footer_media}>
              <img className={styles.footer_media_img} src='\images\Layout\media_2.svg'></img>
              <p className={styles.footer_media_p}>Telegram</p>
            </div>            
          </div>
          <div className={styles.footer_link_2}>            
              <Link to={'./privacy-policy'} className={styles.footer_site_link}>Политика конфиденциальности</Link>
              <Link className={styles.footer_site_link}>Лицензионный договор</Link>
          </div>
        </div>
        <div className={styles.footer_line}></div>
        <div className={styles.copyright_cont}>
          <p className={styles.copyright_p}>Copyright © 2023 PR Express. Все права защищены.</p>
        </div>
      </div>
    </footer>
    </>
  )
}
