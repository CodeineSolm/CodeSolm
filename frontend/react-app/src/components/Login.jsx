import React, { useState } from 'react';
import useTitle from '../../useTitle';
import styles from './Login.module.css';

const Login = () => {
    useTitle("Login - Code Solm");
    const [isActive, setIsActive] = useState(false);

    const handleLoginClick = () => {
        setIsActive(true);
    };

    const handleSignupClick = () => {
        setIsActive(false);
    };

    return (
        <div className={styles.main}>
        <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
            <div>
                <header className={styles.signup_header} onClick={handleSignupClick}>Signup</header>

                <form className={styles.container_form}>
                <input className={styles.signup_form_input} type="text" placeholder='Name' required />
                <input className={styles.signup_form_input} type="email" placeholder='Email' required />
                <input className={styles.signup_form_input} type="password" placeholder='Password' required />
                <a href="#" className={styles.signup_form_a}>Forget Password?</a>
                <button type="submit" className={styles.signup_form_btn}>Signup</button>
                </form>
            </div>

            <div className={styles.login_section}>
                <header className={styles.login_header} onClick={handleLoginClick}>Login</header>
                
                <form className={styles.container_form}>
                <input className={styles.login_form_input} type="email" placeholder='Email' required />
                <input className={styles.login_form_input} type="password" placeholder='Password' required />
                <a href="#">Forget Password?</a>
                <button type="submit" className={styles.login_form_btn}>Login</button>
                </form>
            </div>
        </div>
        </div>
        
    );
};

export default Login;