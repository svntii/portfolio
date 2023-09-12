import React from 'react'
import './work.css'
import {BsPatchCheckFill} from 'react-icons/bs'



const Work = () => {
  return (
    <section id="work">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
      <div className="experience__APPLE">
          <h3>Software Engineer @ Apple</h3>
          <h5>San Diego, CA <br></br> May 2023 - Aug 2023  </h5>
          <div className='experience__description'>
            <ul>
                <li>Joined the Enterprise Education Technologies Boost Team and actively contributed to the development
                  of customer features and internal tooling.</li>
                <li>Architected a swift framework that leveraged SPI's and XPC services to enhance the overall customer
                  experience.</li>
                <li>Tested, screened and triaged bugs by viewing device logs and finding a clearer, defined way of
                  reproducibility.</li> 
            </ul>
          </div>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Swift/UI</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Multiprocess Programming</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ScreenTime</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Objective-C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

          </div>
        </div>

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
                <li>Assisted IBM Northwest's Automation portfolio in their development, management and execution on strategies and tactics for closing business.</li>
                <li>Performed in-depth assessments of customer processes to uncover and understand the customer’s business issues, in which generated 10 leads via cold emailing/calling.</li>
                <li>Worked intimately with IBM’s Cloud and AI solutions to prepare client use-case demonstrations and decks.</li> 
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

        <div className="experience__STIFEL">
          <h3>Financial Analyst @ Stifel</h3>
          <h5>New York, NY <br></br> May 2021 - Aug 2021 </h5>
          
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
                <small className='text-light'>Intermediate</small>
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
                <h4>Excel Modeling</h4>
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