import React from 'react'
import Header from './Header'
import "./Home.scss"
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
    </div>
  )
}
