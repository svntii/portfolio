import React from 'react'
import './about.css'
import ME from '../../assets/MeYose.jpg'
import {Gi3DGlasses} from 'react-icons/gi'

const About = () => {
  return (
    <section id="about"> 
    <h5> Get to Know </h5>
    <h2> About Me </h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image"> 
        <img src={ME} alt="Santiago at Verna Falls" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <Gi3DGlasses className='about__icon'/>
            <h5>Sample</h5>
            <small>yes</small>
          </article>

          <article className='about__card'>
            <Gi3DGlasses className='about__icon'/>
            <h5>Sample</h5>
            <small>yes</small>
          </article>

          <article className='about__card'>
            <Gi3DGlasses className='about__icon'/>
            <h5>Sample</h5>
            <small>yes</small>
          </article>
        </div>
          
          <p> 
              I am born and raised in the Bronx, half Puerto Rican and Dominican and 1 of 7! 
              I am a junior studying Computer Science at the University of Notre Dame. 
              In addition to earning my degree in Computer Science, I am pursuing a minor in Innovation 
              and Entrepreneurship. I have an deep passion in developing technology and using Web3 to 
              improve society and how we interact with the world. More specifically, I have interests in XR, Blockchain, 
              and Machine Learning / Artificial Intelligence. I would love to connect and share ideas.  
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
    
    
    </section>
    )
}

export default About