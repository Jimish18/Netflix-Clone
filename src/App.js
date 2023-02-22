import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { BrowserRouter , Route, Routes} from "react-router-dom";
import LoginScreen from './components/loginScreen/LoginScreen';


function App() {

  const user = null;

  return (
    <div className="App">       

    <BrowserRouter>

      {
        (!user) ? (<LoginScreen/>)
         : (<Routes>
          <Route path="/" element = {<HomeScreen/>}/>
        </Routes>)
      }

      
    
    </BrowserRouter>

    </div>
  );
}

export default App;
