import React, { useRef } from 'react';
import { auth } from '../../firebase';
import './SignUpScreen.css'

const SignUpScreen = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null); 

  const register = (e) =>
  {
    e.preventDefault(); 

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error)=>
    {
      alert(error.message);
    })
  };

  const signIn = (e) =>
  {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) =>
    {
      console.log(authUser);
    })
    .catch((error) =>
    {
      alert(error.message);
    })
  }

  return (
    <div className="signUpScreen">
        <form>
            <h1>Sign In.</h1>
            <div>
                <input ref={emailRef} type="text" placeholder='Email or phone number' />
                <input ref={passwordRef} type="password" placeholder='Password'/>
            </div>
            <button type="submit" onClick={signIn}>Sign In</button>
            <h5>New to Netflix ? <span onClick={register}>Sign Up Now.</span></h5>
        </form>
    </div>
  )
}

export default SignUpScreen;