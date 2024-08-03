import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
    <section className='hero'>
        <div className='left'>
            <h1>The future of web <br/> design, today</h1>
            <h3>The future of web design, today</h3>
            <button className='button'>Call to action</button>
        </div>
        <div className='right'>
            <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/2b/4c/38/caption.jpg?w=300&h=300&s=1" alt="" className='heroImg' />
        </div>
    </section>
    </>
  )
}

export default Hero