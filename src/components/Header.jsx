import React, { useLayoutEffect, useRef, useState } from 'react'
import "./Header.scss"
import logo from "../assests/am logo.jpg"
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
const headerRef = useRef(null);
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
const [showOptions, setShowOptions] = useState(false);

useLayoutEffect(() => {
  const header = headerRef.current;

  gsap.fromTo(
    header,
    {
      y: '-50%',
    },
    {
      y: '0%',
      duration: 2,
    }
  )
}, [])

const optionToggler = () => {
  if(showOptions) {
    setShowOptions(false);
  } else {
    setShowOptions(true);
  }
}

  return (
    <div className='header-container' ref={headerRef} >
      <nav className='navbar'>
        <div className='logo'>
          <img src={logo} alt="AM-logo" />
          <div className='logo-name'>
            <Link style={{ textDecoration: "none" }} className='name'>Aviral Malik</Link>
          </div>
        </div>
        { !isTabletOrMobile ? (
            <div className='all-tags'>
              <Link style={{ textDecoration: "none" }} className='experience'>Experience</Link>
              <Link style={{ textDecoration: "none" }} className='projects'>Projects</Link>
              <Link style={{ textDecoration: "none" }} className='skills'>Skills</Link>
              <Link style={{ textDecoration: "none" }} className='about'>About</Link>
              <Link style={{ textDecoration: "none" }} className='contacts'>Contacts</Link>
            </div>
          ) : (
            <>
              <button type='button' className='button-icon' onClick={optionToggler}>
                Options
              </button>
              {showOptions && (
                <div className='dropdown-menu'>
                    <Link style={{ textDecoration: "none" }} className='experience'>Experience</Link>
                    <Link style={{ textDecoration: "none" }} className='projects'>Projects</Link>
                    <Link style={{ textDecoration: "none" }} className='skills'>Skills</Link>
                    <Link style={{ textDecoration: "none" }} className='about'>About</Link>
                    <Link style={{ textDecoration: "none" }} className='contacts'>Contacts</Link>
                </div>
              )}
            </>
          )
        }
      </nav>
    </div>
  )
}