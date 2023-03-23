import React from 'react'
import CV from "../../assets/SJRODRIGUEZ.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target='_blank'className='btn' > Download My Resume</a>
        <a href="#contact" className='btn btn-primary'>Let's Connect</a>
        </div>
  )
}

export default CTA