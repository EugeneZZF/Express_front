import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';
import Checkbox from './Checkbox';
//

import { CoreClientServiceClient , AuthRequest} from '../../../generated/client-service_grpc_web_pb';

export default function Modal({ activeModal, setActiveModal, isLogin, setIsLogin }) {
    
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);
    const [errors, setErrors] = useState({});
    const { uuid } = useParams();
    const navigate = useNavigate();




    const client = new CoreClientServiceClient('https://core.prexpress.pro/', null, null);



    
    const handleRegistration = async (e) => {
        e.preventDefault();
        const inputErrors = validateInputs();
    
        if (Object.keys(inputErrors).length === 0) {
            try {
                const request = new AuthRequest();
                request.setEmail(email);
                request.setPassword(password);
    
                
                const response = await new Promise((resolve, reject) => {
                    client.registration(request, {}, (err, response) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(response);
                        }
                    });
                });
    
               
                const responseObject = response.toObject ? response.toObject() : response;
                console.log("Registration successful:", responseObject);
                if(responseObject.response.status == true){
                    localStorage.setItem('tokenKey', responseObject.token);
                    navigate('/settings');
                }
    
            } catch (err) {
                console.error(`Registration failed: ${err.message}`);
            }
        } else {
            setErrors(inputErrors);
        }
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        const inputErrors = validateInputs();

        if(Object.keys(inputErrors).length === 0){
            try {
                const request = new AuthRequest();
                request.setEmail(email);
                request.setPassword(password);

                const response = await new Promise((resolve, reject) => {
                    client.login(request, {}, (err, response) =>{
                        if(err){
                            reject(err);
                        } else {
                            resolve(response);
                        }
                    });
                }
                )
                const responseObject = response.toObject ? response.toObject() : response;
                console.log("Login successful: ", responseObject);
                if(responseObject.response.status == true){
                    // console.log(responseObject.token)
                    localStorage.setItem('tokenKey', responseObject.token);
                    navigate('/settings');
                }                
            } catch(err){
                console.log(`Login failed : ${err.message} `);
            }
        } else {
            setErrors(inputErrors);
        }
    }
    
    
    
    
    
    
    
    
    const token = localStorage.getItem('token');
    
    

    const togglePasswordVisibility = (setType) => {
        setType(prevState => !prevState);
    };

    const validateInputs = () => {
        const newErrors = {};
        if (!email) newErrors.email = "Email.";
        if (!password || password.length < 6) newErrors.password = "Password 6 characters.";
        if (!isLogin && password !== confirmPassword) newErrors.confirmPassword = "Passwords!=";
        return newErrors;
    };



    

    
    
    
    

    return (
        <div className={`${activeModal ? styles.active : ''} ${styles.modal}`} onClick={() => setActiveModal(false)}>
            {message && <div className={styles.message}>{message}</div>}
            {errors.form && <div className={styles.error}>{errors.form}</div>}
            {isLogin ? (
                <div className={styles.modal_content }  onClick={e => e.stopPropagation()}>
                    <div className={styles.modal_content_cont}>
                        <h1 className={styles.modal_title}>Вход</h1>
                        <div className={styles.line}></div>
                        <form className={styles.registrationForm}  onSubmit={handleLogin}>
                            <div className={styles.inputContainer}>
                                <input 
                                    className={styles.input_email}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='Эл. почта'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {/* {errors.email && <div className={styles.error}>{errors.email}</div>} */}
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.passwordContainer}>
                                    <input
                                        type={passwordVisible ? "text" : "password"}
                                        id="password"
                                        name="password"
                                        placeholder='Пароль'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button type="button" className={styles.togglePassword} onClick={() => togglePasswordVisibility(setPasswordVisible)}>
                                        {passwordVisible ?
                                            <img src="/images/main/show-password_1.svg" alt="Показать пароль" /> :
                                            <img src="/images/main/show-password_2.svg" alt="Показать пароль" />
                                        }
                                    </button>
                                    {errors.password && <div className={styles.error}>{errors.password}</div>}
                                </div>
                            </div>
                            <button className={styles.registration_btn} type="submit">Войти</button>
                        </form>
                        <p className={styles.forget_p}>Забыли пароль?</p>
                        <div className={styles.forget_cont}>
                            <Checkbox />
                            <p className={styles.forget}>Запомнить меня на этом устройстве</p>
                        </div>
                        <div className={styles.queston_cont}>
                            <p className={styles.queston_cont_p}>Нет учётной записи?</p>
                            <button className={styles.already} >Регистрация</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                    <h1 className={styles.modal_title}>Регистрация</h1>
                    <div className={styles.line}></div>
                    <form className={styles.registrationForm} onSubmit={handleRegistration} >
                        <div className={styles.inputContainer}>
                            <input 
                                className={styles.input_email}
                                type="email"
                                id="email"
                                name="email"
                                placeholder='Эл. почта'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <div className={styles.error}>{errors.email}</div>}
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.passwordContainer}>
                                <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    placeholder='Пароль'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <button type="button" className={styles.togglePassword} onClick={() => togglePasswordVisibility(setPasswordVisible)}>
                                    {passwordVisible ? 
                                        <img src="/images/main/show-password_1.svg" alt="Показать пароль" /> : 
                                        <img src="/images/main/show-password_2.svg" alt="Показать пароль" />
                                    }
                                </button>
                                {errors.password && <div className={styles.error}>{errors.password}</div>}
                            </div>
                        </div>
                        <div className={styles.inputContainer}>
                            <div className={styles.passwordContainer}>
                                <input
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    id="confirm-password"
                                    name="confirm-password"
                                    placeholder='Подтвердите пароль'
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                                <button type="button" className={styles.togglePassword} onClick={() => togglePasswordVisibility(setConfirmPasswordVisible)}>
                                    {confirmPasswordVisible ? 
                                        <img src="/images/main/show-password_1.svg" alt="Показать пароль" /> : 
                                        <img src="/images/main/show-password_2.svg" alt="Показать пароль" />
                                    }
                                </button>
                                {errors.confirmPassword && <div className={styles.error}>{errors.confirmPassword}</div>}
                            </div>
                        </div>
                        <button className={styles.registration_btn} type="submit">Зарегистрироваться</button>
                    </form>
                    <div className={styles.queston_cont}>
                        <p className={styles.queston_cont_p}>Уже зарегистрированы?</p>
                        <button className={styles.already} onClick={() => setIsLogin(true)}>Войти</button>
                    </div>
                </div>
            )}
        </div>
    );
}
