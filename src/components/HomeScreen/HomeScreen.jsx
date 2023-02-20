import React from 'react'
import Banner from '../Banner/Banner';
import Nav from '../Nav/Nav';
import './HomeScreen.css'

const HomeScreen = () => {
  return (
    <>
    {/* Navbar */}
    <Nav/>

    {/* Banner */}
    <Banner/>
    </>
  )
}

export default HomeScreen;