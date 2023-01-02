import { useState } from 'react';
import '../styles/global.scss';
// import '../styles/Login.scss';
import Logo from '../assets/lensqr-logo.svg';
import Hero from '../assets/pablo-sign-in1.png'
import { useNavigate } from 'react-router-dom';

const LogIn = () => {


    const navigate = useNavigate();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [passwordShown, setPasswordShown] = useState<boolean>(false)

    const handleLogIn = (e: any) => {
        e.preventDefault()

        if (/\S+@\S+\.\S+/.test(email) && password !== '') {
            console.log('valid')
            navigate('/dashboard')
        }
    }

    return (
        <div className='home__container'>

            <div className='home__container-left'>
                <div className='home__logo'>
                    <img src={Logo} alt="lendqsr logo" />
                </div>
                <div className='home__hero-container'>
                    <img src={Hero} alt="hero image" />
                </div>
            </div>

            <div className="home__container-right">
                <div className='home__content-details'>
                    <h1>Welcome!</h1>
                    <p>Enter details to login.</p>
                    <form onSubmit={handleLogIn}>
                        <span className="input__group">
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder='Email'
                                name='email'
                                id='email-input'
                                required />
                        </span>
                        <span className='input__group'>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={passwordShown ? "text" : "password"}
                                placeholder='Password'
                                name="password"
                                id="password-input"
                                required />
                            <span
                                className='button button__show'
                                onClick={() => setPasswordShown(!passwordShown)}>
                                Show
                            </span>
                        </span>

                        <button className='button button__password'>Forgot Password?</button>
                        <button className='button button__logIn' onClick={handleLogIn}>Log In</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LogIn;