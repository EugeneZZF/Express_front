import React from 'react'
import styles from './Settings.module.css'
import { useState } from 'react';

export default function Settings() {
    
  return (
    <div className={styles.cont_settings}>
        <div className={styles.new_wallet_cont}>
          <div className={styles.wallet_content}>
            <div className={styles.wallet_first_line}>
              <h1 className={styles.wallet_h1}>Новый кошелёк</h1>
              <img className={styles.wallet_plus} src='\images\settings\plus.svg'></img>
            </div>
            <div className={styles.wallet_line}></div>
            <form className={styles.wallet_form}>
              <div className={styles.form_group}>
              <input type="text" id="wallet" placeholder="USDT TRC-20" className={styles.input_field}/>
              
              </div>
              <div className={styles.form_group}>
                <img className={styles.info_token} src='\images\settings\info_token.svg'></img>
                <label className={styles.wallet_lable} htmlFor="token">Токен</label>
                <input type="text" id="token" placeholder="Такой-то" className={styles.input_field}/>                
              </div>
              <div className={styles.form_group}>
                <label className={styles.wallet_lable} htmlFor="login">Логин</label>
                <input type="text" id="login" placeholder="Login" className={styles.input_field}/>
              </div>
              <div className={styles.form_group}>
                <label className={styles.wallet_lable} htmlFor="password">Пароль</label>
                <input type="password" id="password" placeholder="Password" className={styles.input_field}/>
              </div>
              <button type="submit" className={styles.submit_button}>Добавить кошелёк</button>
            </form>
          </div>
          
        </div>
        <div className={styles.right_side_settings}>
          <div className={styles.profile_cont}>
          <div className={styles.profile_content}>
            <div className={styles.profile_first_line}>
              <h1 className={styles.profile_h1}>Настройки профиля</h1>
              <img className={styles.profile_ico} src='\images\settings\settings_ico.svg'></img>
            </div>
            <div className={styles.profile_line}></div>
            <form className={styles.profile_form}>
              <input className={styles.profile_input} placeholder='Имя Фамилия'></input>
              <input className={styles.profile_input} placeholder='Эл. почта'></input>
              <input className={styles.profile_input} placeholder='Пароль'></input>
              <input className={styles.profile_input} placeholder='Повторить пароль'></input>
            </form>
            <button className={styles.change_btn}>Изменить</button>
          </div>
          </div>
        <div className={styles.delete_cont}>
          <button className={styles.exit_btn}>Выйти</button>
          <button className={styles.delete_btn}>Удалить профиль</button>
        </div>
        </div>
    </div>
  )
}
