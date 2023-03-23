import React from 'react'
import './work.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Work = () => {
  return (
    <section id="work">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className="experience__BILL">
          <h3>Backend Engineer @ BILL</h3>
          <h5>Sunnyvale, CA <br></br> Jan 2023 - May 2023  </h5>
          <div className='experience__description'>
            <ul>
                <li>Joined the Developer Platform API team. Primarily worked on Back-end and business logic.</li>
                <li>Focused on splitting processes off monolith engine into scalable Lambda micro-processes.</li>
                <li>Implemented end to end web-hook product that would enable seamless integration between applications.</li> 
            </ul>
          </div>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Git</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>AWS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

        <div className="experience__IBM">
          <h3>Brand Sales Engineer @ IBM</h3>
          <h5>San Francisco, CA <br></br> May 2022 - Dec 2022 </h5>
          
          <div className='experience__description'>
            <ul>
                <li>Created financial models for managers that monitored their respective bankers’ success on deals, and more. </li>
                <li>Fixed a 3 year long issue pipeline issue by analyzing and refining deal memos in Stifel’s database. This fixture improved data and allowed for Manager’s to create more effective deals.</li>
                <li>Reviewed and filed monthly sensitive tax reconciliation reports for the IRS.</li> 
            </ul>
          </div>

          <div className='experience__content'> 
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Salesforce</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Figma</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>IBM Cloud</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>


          </div>
        </div>

      </div>
  
   
   </section>   
   
   )
}

export default Work