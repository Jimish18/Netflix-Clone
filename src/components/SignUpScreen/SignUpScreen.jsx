import React from 'react'
import './SignUpScreen.css'

const SignUpScreen = () => {
  return (
    <div className="signUpScreen">
        <form>
            <h1>Sign In.</h1>
            <div>
                <input type="text" placeholder='Email or phone number' />
                <input type="password" placeholder='Password'/>
            </div>
            <button type="submit">Sign In</button>
            <h5>New to Netflix ? <span>Sign Up Now.</span></h5>
        </form>
    </div>
  )
}

export default SignUpScreen;