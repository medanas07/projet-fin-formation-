import React, { useEffect, useState } from 'react';
import './StyleLoginSignup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faUser, faMobile } from '@fortawesome/free-solid-svg-icons';


const LoginSignup = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Envoyer une requête à votre backend pour la connexion
      const response = await fetch('votre-backend/endpoint-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_email: email,
          user_password: password,
        }),
      });
  
      if (!response.ok) {
        // Gérer les erreurs côté frontend (ex: afficher un message d'erreur)
        console.error('Échec de la connexion');
        return;
      }
  
      // Gérer la réponse de votre backend (ex: stocker le jeton JWT dans l'état global)
      const data = await response.json();
      console.log('Connecté avec succès:', data);
  
      // Rediriger ou mettre à jour l'état global
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };
  
  const handleRegisterSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, mobile, password }),
    });

    if (response.ok) {
      // Gérer la réussite de l'inscription
      console.log('Inscription réussie!');
    } else {
      // Gérer les erreurs de l'inscription
      console.error('Erreur lors de l\'inscription');
    }
  } catch (error) {
    console.error('Erreur lors de la requête:', error);
  }
};

  

  const handleLoginClick = () => {
    setActiveForm('login');
  };

  const handleRegisterClick = () => {
    setActiveForm('register');
  };

  useEffect(() => {
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const svg = document.querySelector('.svg');

    const handleRegisterClick = () => {
      wrapper.classList.add('active');
    };

    const handleLoginClick = () => {
      wrapper.classList.remove('active');
    };

    const handleBtnPopupClick = () => {
      wrapper.classList.add('active-popup');
    };

    const handleSvgClick = () => {
      wrapper.classList.remove('active-popup');
    };

    registerLink.addEventListener('click', handleRegisterClick);
    loginLink.addEventListener('click', handleLoginClick);
    btnPopup.addEventListener('click', handleBtnPopupClick);
    svg.addEventListener('click', handleSvgClick);

    // Cleanup event listeners
    return () => {
      registerLink.removeEventListener('click', handleRegisterClick);
      loginLink.removeEventListener('click', handleLoginClick);
      btnPopup.removeEventListener('click', handleBtnPopupClick);
      svg.removeEventListener('click', handleSvgClick);
    };
  }, []);

  return (
    <div>
      <header>
        <div>
          <a href="/Accueil" className='logo'>
            <p><span>Luxe</span>Cars</p>
          </a>
        </div>
        <nav className="navigation">
          <a href="Accueil">Accueil</a>
          <a href="Vehicules">Vehicules</a>
          <a href="Services">Services</a>
          <a href="Nouveautés">Nouveautés</a>
          <a href="Promotions">Promotions</a>
          <a href="About">About</a>
          <button className="btnLogin-popup">Login</button>
        </nav>
      </header>

      <div className="wrapper">
        <div>
          <FontAwesomeIcon className="svg" icon={faTimes} style={{ position: 'absolute', top: 0, right: 0, width: '45px', height: '45px', background: '#b2d8f4', fontSize: '1em', display: 'flex', justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: '20px', cursor: 'pointer', zIndex: 1 }} />
        </div>

        <div className={`from-box login ${activeForm === 'login' ? 'active' : ''}`}>
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit}>
            <div className="input-box">
              <FaEnvelope style={{ color: '#b2d8f4', position: 'absolute', right: '8px', fontSize: '1.2em', lineHeight: '57px' }} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
            </div>
            <div className="input-box">
              <FaLock style={{ color: '#b2d8f4', position: 'absolute', right: '8px', fontSize: '1.2em', lineHeight: '57px' }} />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
            </div>
            <div className="remember-forgot">
              <label>
                <input className="check" type="checkbox" style={{ backgroundColor: '#b2d8f4', marginRight: '3px' }} />Remember Me
              </label>
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <button type="submit" className="btn"><b>Login</b></button>
            <div className="login-register">
              <p>Don't have an account?<button type="button" className="register-link" style={{ backgroundColor: 'transparent' }} onClick={handleRegisterClick}>Register</button></p>
            </div>
          </form>
        </div>

        <div className={`from-box register ${activeForm === 'register' ? 'active' : ''}`}>
          <h2>Registration</h2>
          <form onSubmit={handleRegisterSubmit}>
            <div className="input-box">
              <FontAwesomeIcon icon={faUser} style={{ color: '#b2d8f4', position: 'absolute', right: '8px', fontSize: '1.2em', lineHeight: '57px' }} />
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required placeholder="Username" />
            </div>
            <div className="input-box">
              <FaEnvelope style={{ color: '#b2d8f4', position: 'absolute', right: '8px', fontSize: '1.2em', lineHeight: '57px' }} />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
            </div>
            <div className="input-box">
  <FontAwesomeIcon
    icon={faMobile} // Assuming you have an icon for the mobile field
    style={{
      color: '#b2d8f4',
      position: 'absolute',
      right: '8px',
      fontSize: '1.2em',
      lineHeight: '57px',
    }}
  />
  <input
    type="text"
    required
    placeholder="Mobile"
    value={mobile}
    onChange={(e) => setMobile(e.target.value)}
  />
</div>
            <div className="input-box">
              <FaLock style={{ color: '#b2d8f4', position: 'absolute', right: '8px', fontSize: '1.2em', lineHeight: '57px' }} />
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" style={{ backgroundColor: '#b2d8f4', marginRight: '3px' }} />agree to the terms & conditions
              </label><button type="button" className="login-link"  style={{ backgroundColor: 'transparent' }} onClick={handleLoginClick}>Login</button>
            </div>
            <button type="submit" className="btn"><b>Register</b></button>
            <div className="login-register">
              <p>Already have an account?<button type="button" className="login-link" onClick={handleLoginClick}>Login</button></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
