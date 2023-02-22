import React, { useState } from 'react'
import netflixLogo from '../../assets/netflix-logo.png'
import SignUpScreen from '../SignUpScreen/SignUpScreen';
import './LoginScreen.css'

const LoginScreen = () => {

  const [signIn,setSignIn] = useState(false);

  return (
    <div className="loginScreen">

      <nav>
        <img src={netflixLogo} alt="netflix Logo" />
        <button onClick={() => setSignIn(true)}>Sign In</button>
      </nav>

      <div className="loginScreenGrandientBg"></div>

      {
        !signIn ? 
        (
          <div className="content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

            <form>
              <input type="email" name="userEmail" placeholder='Email Address'/>
              <button onClick={() => setSignIn(true)}>GET STARTED </button>
            </form>
          </div>
        ) :
        (
          <SignUpScreen/>
        )
      }

    </div>
  )
}

export default LoginScreen;