import React from 'react'
import Navbar from './Navbar'


const Hero = () => {
  return (
    <div 
      id='hero' 
      className='min-h-screen bg-no-repeat bg-[url(/hero-image.png)] bg-left lg:bg-[10%] ' 
    >
  <Navbar/>
  <div className='container grid lg:grid-cols-2 h-[calc(10vh-6px)]'>
    <div className='hidden lg:block'></div>
    <div className='text-[40px] sm:text-[60px] font-bold leading-tight flex justify-center items-center'>
          <div>
            <br></br>
            <p>I m</p>
            <p>Mustabshira</p>
            <p>Khalid</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero