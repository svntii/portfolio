import React from 'react'
import './work.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Work = () => {
  return (
    <section id="work">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className='experience__content'> 
            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </article>
            
            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>

                <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className='experience__content'> 
            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </article>
            
            <article className='experience__details'>
            <BsPatchCheckFill/>
            <h4>Java</h4>
            <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill/>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
            </article>

          </div>
        </div>

      </div>
  
   
   </section>   
   
   )
}

export default Work