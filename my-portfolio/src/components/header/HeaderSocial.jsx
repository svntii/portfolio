import React from 'react';
import {BsTwitter ,BsLinkedin, BsGithub,BsFillCalendar2WeekFill} from 'react-icons/bs';

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/sjrodriguez-iii/" target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://github.com/svntii" target="_blank">
            <BsGithub/>
        </a>
        <a href="https://twitter.com/strangesantiago" target="_blank">
            <BsTwitter/>
        </a>
        <a href=" https://calendly.com/sjrodriguez-iii/ " target="_blank">
            <BsFillCalendar2WeekFill/>
        </a>
    </div>
  )
}

export default HeaderSocial