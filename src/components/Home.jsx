import React from 'react'
import Header from './Header'
import "./Home.scss"
import HeroSection from './HeroSection'
import AboutMe from './AboutMe'
import ProjectSection from './ProjectSection'
import ExperienceSection from './ExperienceSection'
import SkillSection from './SkillSection'

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutMe />
      <ProjectSection />
      <ExperienceSection />
      <SkillSection />
    </div>
  )
}
