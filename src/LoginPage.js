import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import './styles.css';

// Function to generate CAPTCHA text
const generateCaptchaText = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captchaText;
};

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaText, setCaptchaText] = useState(generateCaptchaText());

  const handleLogin = (e) => {
    e.preventDefault();

    // Validation for username
    if (!username) {
      alert('Username is required');
      return;
    }

    // Validation for password
    if (!password) {
      alert('Password is required');
      return;
    }

    // Validation for captcha
    if (captcha !== captchaText) {
      alert('Incorrect CAPTCHA');
      return;
    }

    // If all validations pass
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Captcha:', captcha);
    alert('Login successful!');
  };

  const handleCaptchaRefresh = () => {
    setCaptchaText(generateCaptchaText());
    setCaptcha('');
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Enter your username" 
          className="form-control" 
        />

        <label>Password</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Enter your password" 
          className="form-control" 
        />

        <label>Captcha</label>
        <div className="captcha-container">
          <div className="captcha">{captchaText}</div>
          <button 
            type="button" 
            onClick={handleCaptchaRefresh} 
            className="refresh-btn">
            Refresh
          </button>
        </div>
        <input 
          type="text" 
          value={captcha} 
          onChange={(e) => setCaptcha(e.target.value)} 
          placeholder="Enter Captcha" 
          className="form-control captcha-input" 
        />

        <button type="submit">Login</button>
      </form>
      <div className="social-login">
        <button className="social-btn"><FaFacebook /> Facebook</button>
        <button className="social-btn"><FaGoogle /> Google</button>
      </div>
      <p style={{ color: 'white' }}>
        Don't Have an Account? 
        <Link to="/register">Go to Register Page</Link>
      </p>
    </div>
  );
};

export default LoginPage;
