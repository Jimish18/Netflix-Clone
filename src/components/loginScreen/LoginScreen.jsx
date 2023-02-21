import React from 'react'
import netflixLogo from '../../assets/netflix-logo.png'
import './LoginScreen.css'

const LoginScreen = () => {
  return (
    <div className="loginScreen">

      <nav>
        <img src={netflixLogo} alt="netflix Logo" />
        <button>Sign In</button>
      </nav>

      <div className="loginScreenGrandientBg"></div>

      <div className="content">
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

        <form>
          <input type="email" name="userEmail" placeholder='Email Address'/>
          <button>GET STARTED </button>
        </form>
      </div>

    </div>
  )
}

export default LoginScreen;