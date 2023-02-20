import React, { useEffect, useState } from 'react'
import './Nav.css'
import avatar from '../../assets/hacker.png'
import netflix from '../../assets/netflix.png'

const Nav = () => {

    const [show,setShow] = useState(false);

    const transition = () =>
    {
        if(window.scrollY > 100)
        {
            setShow(true);
        }
        else
        {
            setShow(false);
        }
    }

    useEffect(()=>
    {
        window.addEventListener("scroll",transition);

        return () => window.addEventListener("scroll",transition);
    },[])

  return (
    <>
    <div className={`nav ${show && 'nav-black'}`}>
        <img src={netflix} alt="Netflix logo" />
        <img src={avatar} alt="Avatar Logo" />
    </div>
    </>
  )
}

export default Nav;