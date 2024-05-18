import logo from './assets/images/logo.svg';
import image from './assets/images/hero-desktop.jpg';
import arrow from './assets/images/icon-arrow.svg';
import error from './assets/images/icon-error.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [email,setEmail] = useState(false);
  const [loginResult,setLoginResult] = useState();
  const handleEmail = ()=> {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const isValidEmail = regex.test(email);
    setLoginResult(isValidEmail);
  }
  const handleButtonClick = ()=> {
    handleEmail();
  }
  return (
    <div className="container">
      <div className="left">
        <div className="svg">
          <img src={logo} alt="" />
        </div>
        <div className='text'>
          <h1 className='title'><span>WE'RE</span> COMİNG SOON</h1>
        <p className="desc">Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>
        </div>
        <div className="form">
          <input id='email' 
          className={(loginResult === false) ? 'form-input project-error' : 'form-input'} 
          type="email"
          placeholder='Email Address'
          onChange={(e)=>setEmail(e.target.value)}/>
          <button onClick={handleButtonClick} type='submit'><img src={arrow} alt="" /></button>
        </div>
        {loginResult === false && (
        <div className='project__input-container'>
          <p className='project__input-errormsg'>Please provide a valid email</p>
          <img src={error} alt='error' className='project__input-errorimg' />
        </div>)}
        {loginResult === true &&(
        <h2 className='project__input-errormsg'>An email has been sent to your email address</h2>
        )}
      </div>
      <div className="right">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default App;
