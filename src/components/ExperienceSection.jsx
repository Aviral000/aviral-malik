import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./ExperienceSection.scss"

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
const headingRef = useRef(null);
const valueRef1 = useRef(null);
const valueRef2 = useRef(null);
const valueRef3 = useRef(null);

useLayoutEffect(() => {
    const heading = headingRef.current;
    const value1 = valueRef1.current;
    const value2 = valueRef2.current;
    const value3 = valueRef3.current;

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
                start: "top 80%"
            }
        }
    )

    gsap.fromTo(
        value1,
        {
            textContent: 0
        },
        {
            textContent: 3,
            duration: 2,
            snap: { 
                textContent: 1
            },
            scrollTrigger: {
                trigger: value1,
                start: 'start 80%'
            }
        }
    )

    gsap.fromTo(
        value2,
        {
            textContent: 0
        },
        {
            textContent: 1,
            duration: 2,
            snap: { 
                textContent: 1
            },
            scrollTrigger: {
                trigger: value1,
                start: 'start 80%'
            }
        }
    )

    gsap.fromTo(
        value3,
        {
            textContent: 0
        },
        {
            textContent: 2,
            duration: 2,
            snap: { 
                textContent: 1
            },
            scrollTrigger: {
                trigger: value1,
                start: 'start 80%'
            }
        }
    )
}, [])

  return (
    <div className='experience'>
      <div className='heading' ref={headingRef}>Elevating my Level to surpass my old-self is become possible to having a diversified experience</div>
      <div className='info'>
        <div className='total'>
            <div className='number'>
                <div>+<span ref={valueRef1}>3</span></div>
            </div>
            <div className='title'>
                Total Experience (in years)
            </div>
        </div>
        <div className='development'>
            <div className='number'>
                <div>+<span ref={valueRef2}>1</span></div>
            </div>
            <div className='title'>
                In Development (in years)
            </div>
        </div>
        <div className='diversed'>
            <div className='number'>
                <div>+<span ref={valueRef3}>2</span></div>
            </div>
            <div className='title'>
                In UI/UX and Other (in years)
            </div>
        </div>
      </div>
    </div>
  )
}
