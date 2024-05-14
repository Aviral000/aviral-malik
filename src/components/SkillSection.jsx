import React, { useLayoutEffect, useRef } from 'react'
import './SkillSection.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
const headingRef = useRef(null);

useLayoutEffect(() => {
    const heading = headingRef.current;

    gsap.fromTo(
        heading,
        {
            opacity: 0,
        },
        {
            opacity: 1,
            duration: 4,
            scrollTrigger: {
                trigger: heading,
                start: 'top 80%'
            }
        }
    )
}, [])

  return (
    <div className='skills-container'>
      <div className='heading' ref={headingRef}>Skills Spotlight: Unleashing My Expertise Across Diverse Arenas</div>
      <div className='frontend'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className='backend'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
