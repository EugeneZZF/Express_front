import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';
import Checkbox from './Checkbox';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validateInputs();
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        try {
            const url = isLogin ?
                'https://api.prexpress.pro/Auth/Login' :
                'https://api.prexpress.pro/Auth/Registration';

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();
            if (response.ok) {
                console.log(data); // Выводим в консоль полученный ответ
                alert(isLogin ? "Login successful." : "Registration successful. Please check your email to confirm your registration.");
                if (isLogin) {
                    localStorage.setItem('token', data.data.token);
                    setIsLogin(true);
                    navigate('/catalog');
                }
            } else {
                setErrors(data.errors || { form: data.title || "Something went wrong." });
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    const handleEmailConfirmation = async (userId) => {
        try {
            const response = await fetch(`https://api.prexpress.pro/Auth/Confirm/${userId}`, {
                method: 'GET',
            });

            const data = await response.json();
            if (response.ok) {
                setMessage("Email confirmed successfully. You can now login.");
                console.log(`Server response: ${JSON.stringify(data)}`);
            } else {
                setErrors(data.errors || { form: data.title || "Something went wrong." });
                alert(`Error: ${data.title || "Something went wrong."}`);
            }
        } catch (error) {
            alert("An error occurred. Please try again.");
        }
    };

    useEffect(() => {
        if (uuid) {
            handleEmailConfirmation(uuid);
        }
    }, [uuid]);

    return (
        <div className={`${activeModal ? styles.active : ''} ${styles.modal}`} onClick={() => setActiveModal(false)}>
            {message && <div className={styles.message}>{message}</div>}
            {errors.form && <div className={styles.error}>{errors.form}</div>}
            {isLogin ? (
                <div className={styles.modal_content }  onClick={e => e.stopPropagation()}>
                    <div className={styles.modal_content_cont}>
                        <h1 className={styles.modal_title}>Вход</h1>
                        <div className={styles.line}></div>
                        <form className={styles.registrationForm} onSubmit={handleSubmit}>
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
                            <button className={styles.registration_btn} type="submit">Войти</button>
                        </form>
                        <p className={styles.forget_p}>Забыли пароль?</p>
                        <div className={styles.forget_cont}>
                            <Checkbox />
                            <p className={styles.forget}>Запомнить меня на этом устройстве</p>
                        </div>
                        <div className={styles.queston_cont}>
                            <p className={styles.queston_cont_p}>Нет учётной записи?</p>
                            <button className={styles.already} onClick={() => setIsLogin(false)}>Регистрация</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.modal_content} onClick={e => e.stopPropagation()}>
                    <h1 className={styles.modal_title}>Регистрация</h1>
                    <div className={styles.line}></div>
                    <form className={styles.registrationForm} onSubmit={handleSubmit}>
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
