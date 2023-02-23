import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import LoginScreen from './components/loginScreen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen/ProfileScreen';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(()=>
  {
    const unSubscribe = auth.onAuthStateChanged((authUser) =>
    {
      if(authUser)
      {
        // logged in
        dispatch(login({
          uid : authUser.uid,
          email : authUser.email
        }))
      }
      else
      {
        // logged out
        dispatch(logout())
      }
    })

    return unSubscribe;
  },[dispatch])

  return (
    <div className="App">       

    <BrowserRouter>

      {
        (!user) ? 
        (<LoginScreen/>)
         : 
        (
         
        <Routes>
          <Route path="/" element = {<HomeScreen/>}/>
          <Route path='/profile' element = {<ProfileScreen/>}/>
        </Routes>
        
        )
      }

      
    
    </BrowserRouter>

    </div>
  );
}

export default App;
