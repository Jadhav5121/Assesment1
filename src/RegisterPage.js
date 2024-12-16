import React, { useState } from 'react';
import { Link } from 'react-router-dom';  
import './styles.css';

const generateCaptchaText = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let captchaText = '';
  for (let i = 0; i < 6; i++) {
    captchaText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return captchaText;
};

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [captcha, setCaptcha] = useState('');
  const [captchaText, setCaptchaText] = useState(generateCaptchaText());

  const handleRegister = (e) => {
    e.preventDefault();

    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

   
    if (!email.includes('@')) {
      alert('Please enter a valid email');
      return;
    }

    
    if (!/^\d{10}$/.test(mobile)) {
      alert('Please enter a valid mobile number');
      return;
    }

    
    if (captcha !== captchaText) {
      alert('Incorrect CAPTCHA');
      return;
    }

    
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Mobile:', mobile);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Captcha:', captcha);

    alert('Registered successfully!');
  };

  const handleCaptchaRefresh = () => {
    setCaptchaText(generateCaptchaText());
    setCaptcha('');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <label>First Name</label>
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="Enter your first name" 
          className="form-control" 
        />
        <label>Last Name</label>
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Enter your last name" 
          className="form-control" 
        />
        <label>Mobile</label>
        <input 
          type="text" 
          value={mobile} 
          onChange={(e) => setMobile(e.target.value)} 
          placeholder="Enter your mobile number" 
          className="form-control" 
        />
        <label>Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
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
        <label>Confirm Password</label>
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm your password" 
          className="form-control" 
        />
        <label>Captcha</label>
        <div className="captcha-container">
          <div className="captcha">{captchaText}</div>
          <button type="button" onClick={handleCaptchaRefresh} className="refresh-btn">Refresh</button>
        </div>
        <input 
          type="text" 
          value={captcha} 
          onChange={(e) => setCaptcha(e.target.value)} 
          placeholder="Enter Captcha" 
          className="form-control captcha-input" 
        />
        <button type="submit">Register</button>
      </form>
      <div>
        <p style={{color: 'white'}}>Already Have an Account? 
          <Link to="/login">Go to login Page</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
