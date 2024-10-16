import React, { useState } from 'react';
import styles from './Settings.module.css';
import { CoreClientServiceClient, UpdateProfileRequest } from '../../generated/client-service_grpc_web_pb';
import { CoreWalletServiceClient , CreateWalletRequest} from '../../generated/wallet-service_grpc_web_pb'
import { object } from 'google-protobuf';


export default function Settings() {
  const client = new CoreClientServiceClient('https://core.prexpress.pro/', null, null);
  const clientWallet = new CoreWalletServiceClient('https://core.prexpress.pro/', null, null);

  const [wallet, setWallet] = useState('');
  const [token, setToken] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({});

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [profilePassword, setProfilePassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const accesskey = localStorage.getItem('tokenKey');

  const isWalletFormValid = wallet && token && login && password;
  const isProfileFormValid = name && phone && email && profilePassword && confirmPassword;

  
  const validateInputs = () => {
    const newErrors = {};
    if (!email) newErrors.email = "Email.";
    if (!profilePassword || profilePassword.length < 6) newErrors.password = "Password 6 characters.";
    if (profilePassword !== confirmPassword) newErrors.confirmPassword = "Passwords!=";
    return newErrors;
};

const handleUpdateProfile = async (e) => {
  e.preventDefault();
  const inputErrors = validateInputs();

  if (Object.keys(inputErrors).length === 0) {
    try {
      const request = new UpdateProfileRequest();
      request.setFio(name);
      request.setPhone(phone);
      request.setPassword(profilePassword);

      const metadata = {
          'Authorization': `Bearer ${accesskey}`
      };

      const response = await new Promise((resolve, reject) => {
          client.updateProfile(request, metadata, (err, response) => {
              if (err) {
                  reject(err);
              } else {
                  resolve(response);
              }
          });
      });

      const responseObject = response.toObject ? response.toObject() : response;
      console.log("Profile update successful: ", responseObject);
      // if (responseObject.response.status) {
      //     navigate('/settings');
      // }
      } catch (err) {
          console.error(`Profile update failed: ${err.message}`);
      }
  } else {
      setErrors(inputErrors);
  }
};


  const handleUpdateWallet = async (e) => {
    e.preventDefault();
    const inputErrors = validateInputs();

    if (Object.keys(inputErrors).length === 0) {
      try {
          const request = new CreateWalletRequest();
          request.setAddress(wallet);
          request.setToken(token);
          request.setLogin(login);
          request.setPassword(password);

          const metadata = { 'Authorization': `Bearer ${accesskey}` };

          const response = await new Promise((resolve, reject) => {
              clientWallet.createWallet(request, metadata, (err, response) => {
                  if (err) {
                      reject(err);
                  } else {
                      resolve(response);
                  }
              });
          });
          const responseObject = response.toObject ? response.toObject() : response;
          console.log("Wallet connect successful: ", responseObject);
      } catch (err) {
          console.error(`Wallet connect failed: ${err.message}`);
      }
    } else {
      setErrors(inputErrors);
    }
  }

  return (
    <div className={styles.cont_settings}>
      <div className={styles.new_wallet_cont}>
        <div className={styles.wallet_content}>
          <div className={styles.wallet_first_line}>
            <h1 className={styles.wallet_h1}>Новый кошелёк</h1>
            <img className={styles.wallet_plus} src='\images\settings\plus.svg'></img>
          </div>
          <div className={styles.wallet_line}></div>
          <form className={styles.wallet_form} onSubmit={handleUpdateWallet}>
            <div className={styles.form_group}>
              <input 
                type="text" 
                id="wallet" 
                placeholder="USDT TRC-20" 
                className={styles.input_field}
                value={wallet}
                onChange={(e) => setWallet(e.target.value)}
              />
            </div>
            <div className={styles.form_group}>
              <img className={styles.info_token} src='\images\settings\info_token.svg'></img>
              <label className={styles.wallet_lable} htmlFor="token">Токен</label>
              <input 
                type="text" 
                id="token" 
                placeholder="Такой-то" 
                className={styles.input_field}
                value={token}
                onChange={(e) => setToken(e.target.value)}
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.wallet_lable} htmlFor="login">Логин</label>
              <input 
                type="text" 
                id="login" 
                placeholder="Login" 
                className={styles.input_field}
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </div>
            <div className={styles.form_group}>
              <label className={styles.wallet_lable} htmlFor="password">Пароль</label>
              <input 
                type="password" 
                id="password" 
                placeholder="Password" 
                className={styles.input_field}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit" className={styles.submit_button} >
              Добавить кошелёк
            </button>
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
            <form className={styles.profile_form} onSubmit={handleUpdateProfile}>
              <input 
                className={styles.profile_input} 
                placeholder='Имя Фамилия'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input 
                className={styles.profile_input} 
                placeholder='8 (888) 888 - 88 - 88'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input 
                className={styles.profile_input} 
                placeholder='Эл. почта'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input 
                className={styles.profile_input} 
                placeholder='Пароль'
                type="password"
                value={profilePassword}
                onChange={(e) => setProfilePassword(e.target.value)}
              />
              <input 
                className={styles.profile_input} 
                placeholder='Повторить пароль'
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button className={styles.change_btn} type="submit" >
                Изменить
              </button>
            </form>
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
