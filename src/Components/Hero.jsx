import React from 'react'
import  Img  from '../assets/HeroImg.png'

function Hero() {
  return (
    <div className='relative'>
        <div>
            <img src={Img} alt="heroimage"  className='h-[275px]  lg:h-[500px] w-full object-cover'/>
        </div>
        <div className='absolute top-0 flex items-center justify-center h-full sm:ml-[30px] lg:ml-[60px]'>
        <h1 className='text-white text-center sm:text-left font-dm text-[28px] sm:text-[40px] lg:text-[72px] font-[700] leading-[36.46px] sm:leading-[40px] lg:leading-[93.74px]'>Watch <br className='hidden sm:block'/> something <br className='hidden sm:block'/> incredible.</h1>
        </div>
    </div>
  )
}

export default Hero