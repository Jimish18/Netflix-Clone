import React from 'react'
import './ProfileScreen.css'
import profileImage from '../../assets/hacker.png'
import netflixLogo from '../../assets/netflix-logo.png'
import { useNavigate } from 'react-router-dom'

const ProfileScreen = () => {

  const navigate = useNavigate();

  return (
    <div className="profileScreen">

      <nav>
        <img onClick={()=> navigate('/')} src={netflixLogo} alt="netflix Logo" />
        <img src={profileImage} alt="Profile Pic" />
      </nav>

      <div className="parentContainer">
        <h1>Edit Profile</h1>
        <hr />
        <div className="profileContainer">
          <img src={profileImage} alt="Profile logo" />
          <div className="detailsContainer">
            <div>
              <p>jimish957@gmail.com</p>
              <h3>Plans (Current Plan : premium)</h3>
              <hr />
              <span>Renewal date: 04/03/2024</span>
            </div>
            <div className="plansContainer">
              <div>
                <div>
                  <span>Netflix standard</span>
                  <span>1080p</span>
                </div>
                <button className='profileBtn'>Subscribe</button>
              </div>
              <div>
                <div>
                  <span>Netflix Basic</span>
                  <span>480p</span>
                </div>
                <button className='profileBtn'>Subscribe</button>
              </div>
              <div>
                <div>
                  <span>Netflix Premium</span>
                  <span>4K+HDR</span>
                </div>
                <button style={{color : `white`,backgroundColor : `gray` , fontWeight : `bold` , border : `none`}}>Current Package</button>
              </div>
            </div>
            <button className='profileBtn'>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen;