import React from 'react'
import './contact.css'
import {SiMinutemailer} from 'react-icons/si'
import {BsLinkedin,BsTwitter} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_r64bh0q', 'template_qx4hr54', form.current, 'N3EKDygA4BVlQwsf0')
  alert('Message Sent!\n\nThank you for your interest in my work. I will get back to you as soon as possible.')
  e.target.reset();

  };

  return (
    <section id="contact">
    
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <SiMinutemailer className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>svntiiago@gmail.com</h5>
            <a href='mailto:svntiiago@gmail.com' target="_blank" rel='noreferrer'>Send an Email</a>
          </article>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>sjrodriguez-iii</h5>
            <a href='https://www.linkedin.com/in/sjrodriguez-iii' target="_blank" rel='noreferrer'>Connect with Me!</a>
          </article>
          <article className="contact__option">
            <BsTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>@strangesantiago</h5>
            <a href='https://twitter.com/strangesantiago' target="_blank" rel='noreferrer'>Tweet Me!</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="10" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section> 
  )
}

export default Contact