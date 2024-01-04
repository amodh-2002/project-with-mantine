import React from 'react'
import {Link} from "react-scroll"
import Logo from "../assets/logo.png"


const Navbar = () => {
  return (
  <div className='fixed w-full h-[80px] flex justify-around items-center px-4 bg-blue-800 text-white z-50'>
        {/* logo  */}
        <div style={{cursor:"pointer"}} className="logo">
        <Link to='' smooth={true} duration={500}>
        <img className='w-[80px]' src={Logo} alt="Logo" />
        </Link>
            
        </div>
        {/* menu  */}
          <ul>
            <div className='flex justify-between items-center gap-6'>
                <li>
                    <Link style={{cursor:"pointer"}} to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link style={{cursor:"pointer"}} to='about' smooth={true} duration={500}>Services</Link>
                </li>
                <li>
                    <Link style={{cursor:"pointer"}} to='skills' smooth={true} duration={500}>Projects</Link>
                </li>
                <li>
                    <Link style={{cursor:"pointer"}} to='work' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link style={{cursor:"pointer"}} to='contact' smooth={true} duration={500}>Video</Link>
                </li>
                <li>
                    <Link style={{cursor:"pointer"}} to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
                <li>
                    <Link style={{cursor:"pointer"}} to='contact' smooth={true} duration={500}>Landing</Link>
                </li>
            </div>
          </ul>
  </div>
  )
}

export default Navbar