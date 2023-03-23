import React from 'react'
import './nav.css'
import {FcHome, FcAbout, FcContacts} from 'react-icons/fc'
import {AiOutlineCode} from 'react-icons/ai'
import {MdBugReport} from 'react-icons/md'
import{useState} from 'react'



const Nav = () => {
  
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} >
        <FcHome />  
      </a>
      <a href="#about" onClick={() => setActiveNav('#about') } className={activeNav === '#about' ? 'active' : ''}>
        <FcAbout />  
      </a>
       <a href="#work" onClick={() => setActiveNav('#work') } className={activeNav === '#work' ? 'active' : ''}>
        <MdBugReport />  
      </a>   
      <a href="#project" onClick={() => setActiveNav('#project') } className={activeNav === '#project' ? 'active' : ''}>
        <AiOutlineCode />  
      </a>
      <a href="#contact" onClick={() => setActiveNav('#contact') } className={activeNav === '#contact' ? 'active' : ''}>
        <FcContacts />  
      </a>
    </nav>
  
  )
}

export default Nav