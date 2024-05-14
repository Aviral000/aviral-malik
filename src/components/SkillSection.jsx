import React, { useLayoutEffect, useRef } from 'react'
import './SkillSection.scss'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SkillSection() {
const headingRef = useRef(null);
const frontendRef = useRef(null);
const backendRef = useRef(null);
const databaseRef = useRef(null);

useLayoutEffect(() => {
    const heading = headingRef.current;
    const frontend = frontendRef.current;
    const backend = backendRef.current;
    const database = databaseRef.current;

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

    gsap.fromTo(
      frontend,
      {
        y: '100%'
      },
      {
        y: '0%',
        duration: 1,
        scrollTrigger: {
          trigger: frontend,
          start: 'start 80%'
        }
      }
    )

    gsap.fromTo(
      backend,
      {
        y: '100%'
      },
      {
        y: '0%',
        duration: 1,
        scrollTrigger: {
          trigger: backend,
          start: 'start 80%'
        }
      }
    )

    gsap.fromTo(
      database,
      {
        y: '100%'
      },
      {
        y: '0%',
        duration: 1,
        scrollTrigger: {
          trigger: database,
          start: 'start 80%'
        }
      }
    )
}, [])

  return (
    <div className='skills-container'>
      <div className='heading' ref={headingRef}>Skills Spotlight: Unleashing My Expertise Across Diverse Arenas</div>
      <div className='frontend' ref={frontendRef}>
        <div className='head-f'>Front-End :</div>
        <div className='sub-f'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            VanillaJs
            <img src="https://th.bing.com/th/id/OIP.3JN-gYZbpCCtlPU7-YaY5wHaD4?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            ReactJs
            <img src="https://th.bing.com/th/id/OIP.ZXsHb9aiendBhYLWCYw2bQAAAA?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            NextJs
            <img src="https://th.bing.com/th/id/OIP.mFuXoMcAqbvUwjDjwTkFHAAAAA?rs=1&pid=ImgDetMain" alt="" />
          </div>
        </div>
      </div>
      <div className='backend' ref={backendRef}>
        <div className='head-b'>Back-End :</div>
        <div className='sub-b'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            ExpressJs
            <img src="https://th.bing.com/th/id/OIP.1fZjQpkRMKTBGN_7H5YnFwHaGL?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            NodeJs
            <img src="https://th.bing.com/th/id/OIP.KYe1Eejtkzn-mv0O6XsGdAHaHa?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            SpringBoot
            <img src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/131026142/original/9b1c1cebb651cd68d16dc1baf84c2559f3eab540/create-a-spring-boot-application-based-on-your-requirements.png" alt="" />
          </div>
        </div>
      </div>
      <div className='database' ref={databaseRef}>
        <div className='head-db'>Database :</div>
        <div className='sub-db'>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            MongoDB
            <img src="https://logodix.com/logo/2090013.jpg" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            MySQL
            <img src="https://th.bing.com/th/id/OIP.GXAKMNegu3Qzf20_fNzszQAAAA?rs=1&pid=ImgDetMain" alt="" />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            PostgreSQL
            <img src="https://logospng.org/wp-content/uploads/postgresql.png" alt="" />
          </div>
        </div>
      </div>
      <div className='other-skills'>
        <div className='visit'>
          <div className='p-v'>
            Visit Skills page to know about more Skills about me: <a href="/" style={{ color: 'white' }}>Skills</a>
          </div>
        </div>
      </div>
    </div>
  )
}
