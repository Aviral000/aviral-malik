import React from 'react'
import "./Header.scss"
import logo from "../assests/am logo.jpg"
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header-container'>
      <nav className='navbar'>
        <div className='logo'>
          <img src={logo} alt="AM-logo" />
        </div>
        <Link style={{ textDecoration: "none" }} className='name'>Aviral Malik</Link>
        <Link style={{ textDecoration: "none" }} className='experience'>Experience</Link>
        <Link style={{ textDecoration: "none" }} className='projects'>Projects</Link>
        <Link style={{ textDecoration: "none" }} className='skills'>Skills</Link>
        <Link style={{ textDecoration: "none" }} className='about'>About</Link>
        <Link style={{ textDecoration: "none" }} className='contacts'>Contacts</Link>
      </nav>
    </div>
  )
}