import React from 'react'
import './header.css'
import CTA from './CTA'
import FACE from "../../assets/FaceShotSJ.jpg"
import HeaderSocial from './HeaderSocial'


const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello I'm</h5>
            <h1>Santiago Rodriguez</h1>
            <h5 className='text-light'> Software Developer with many hats</h5>
            <CTA />
            <HeaderSocial />

            <div className="me">
                <img src={FACE} alt="Santiago Rodriguez" />
            </div>
            
            <a href="#contact" className="scroll__down"> Scroll Down </a>
            
        </div>
    </header>
  )
}

export default Header