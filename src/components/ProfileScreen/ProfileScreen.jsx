import React from 'react'
import './ProfileScreen.css'
import profileImage from '../../assets/hacker.png'
import netflixLogo from '../../assets/netflix-logo.png'

const ProfileScreen = () => {
  return (
    <div className="profileScreen">

        <nav>
            <img src={netflixLogo} alt="netflix Logo" />
            <img src={profileImage} alt="Profile Pic" />
        </nav>

        <h1>Edit Profile</h1>
        <hr />
        <div className="profileContainer">
            <img src={profileImage} alt="Profile logo" />
        </div>
    </div>
  )
}

export default ProfileScreen;