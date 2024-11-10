import React from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { useState }  from "react";
import { MdMenuOpen } from "react-icons/md";
const Navbar = () => {
  const[isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(isMenuOpen)
  }
  return (
    <div className='bg-purple-700 h-12'>
        <div className='flex justify-between items-center px-6'>
            <div className='text-xl font-large'>Portfolio</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'> <a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'> <a href='#projects'>Projects</a></li>
                <li className='menuLink' > <a href='#skills'>Skills</a></li>
                <li className='menuLink'> <a href='#contact'>Contact</a></li>
             </ul>

          <div className='md:hidden' onClick={toggleMenu} >
            {isMenuOpen ?<MdMenuOpen size={30} />  :
           <MdOutlineMenu size={30}/>  
            }
          </div>     
        </div>

        {isMenuOpen && (
          <ul className='flex flex-col gap-4 mt-4 md:hidden'>
            <li className='menuLink'>
              <a href='#hero' onClick={toggleMenu}>Home</a>
            </li>
            <li className='menuLink'>
              <a href='#about' onClick={toggleMenu}>About</a>
            </li>
            <li className='menuLink'>
              <a href='#projects' onClick={toggleMenu}>Projects</a>
            </li>
            <li className='menuLink'>
              <a href='#skills' onClick={toggleMenu}>Skills</a>
            </li>
            <li className='menuLink'>
              <a href='#contact' onClick={toggleMenu}>Contact</a>
            </li>

          </ul>
        )

        }
    </div> 
   
  )
}

export default Navbar