import React from 'react'
import Logo from '../assets/logo.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className='sticky z-30 bg-[#292929] py-[20px] lg:pl-[60px] flex items-center justify-center lg:justify-start'>
        <div className='border p-[5px] '>
            <Link to='/'><img src={Logo} alt='logo'/></Link>
        </div>
    </div>
  )
}

export default Navbar