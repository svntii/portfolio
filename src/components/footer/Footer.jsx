import React from 'react'
import './footer.css'
import { FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className="footer__logo">Santiago Rodriguez</a>
      
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#work'>Work</a></li>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href='https://www.linkedin.com/in/sjrodriguez-iii' target="_blank" rel='noreferrer'>
          <FaLinkedin className='footer__socials-icon'/>
        </a>
        <a href='https://twitter.com/strangesantiago' target="_blank" rel='noreferrer'>
          <FaTwitter className='footer__socials-icon'/>
        </a>
        <a href='https://instagram.com/svntiiago' target="_blank" rel='noreferrer'>
          <FaInstagram className='footer__socials-icon'/>
        </a>
      </div>
      
      <div className="footer__copyright">
        <small>&copy; Santiago Rodriguez. All rights reserved</small>
      </div>


    </footer>
  )
}

export default Footer