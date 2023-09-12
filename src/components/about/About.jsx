import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './about.css'
import ME from '../../assets/MeYose.jpg'
import ME2 from '../../assets/MeYoseFalls.jpg'
import ME3 from '../../assets/MeAngelsLanding.jpeg'

import{BiCoffeeTogo} from 'react-icons/bi'
import {FaToolbox,FaBrain} from 'react-icons/fa'


const About = () => {
  return (
    <section id="about"> 
    <h5> Get to Know </h5>
    <h2> About Me </h2>

    <div className="container about__container">      
      
      <div className="about__me">

        <Carousel showArrows={true} showThumbs={false}>
        
        <div className="about__me-image"> 
          <img src={ME} alt="Santiago at Verna Falls" />
        </div>
        
        <div className="about__me-image"> 
          <img src={ME2} alt="Santiago at Yosemite Falls" />
        </div>

        <div className="about__me-image"> 
          <img src={ME3} alt="Santiago at Angel's Landing"/>
        </div>
          
        {/* Add more carousel items as needed */}
        </Carousel>
      </div>

      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <BiCoffeeTogo className='about__icon'/>
            <h5>Grit</h5>
            <small>Willing to work through any problem</small>
          </article>

          <article className='about__card'>
            <FaBrain className='about__icon'/>
            <h5>Many Hats</h5>
            <small>I can work many hats and be the multi-tool your team needs</small>
          </article>

          <article className='about__card'>
            <FaToolbox className='about__icon'/>
            <h5>Quick Learner</h5>
            <small>Fail Fast, and Get Up Quicker. I can learn any tech stack and work with any technology.</small>
          </article>
        </div>
          
          <p className='bio__description'> 
              I was born and raised in the Bronx and am one of seven siblings.
              I am currently a senior studying Computer Science at the University of Notre Dame. 
              In addition to pursuing my degree in Computer Science, I am working towards a minor in Innovation and Entrepreneurship. 
              I have a deep passion for developing technology and gaining insights into human cognition to enhance society's interactions with the world. 
              More specifically, my interests lie in XR (Extended Reality), Blockchain, and Machine Learning/Artificial Intelligence. 
              I am eager to connect and share ideas with others.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>

    </div>
    
    
    </section>
    )
}

export default About