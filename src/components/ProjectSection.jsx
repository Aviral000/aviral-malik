import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./ProjectSection.scss";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectSection() {
  const headingRef = useRef(null);
  const totalProjectsRef = useRef(null);
  const majorProjectsRef = useRef(null);
  const minorProjectsRef = useRef(null);

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

    const totalProjectsAnimation = gsap.fromTo(
      totalProjectsRef.current,
      { textContent: 0 },
      {
        textContent: 20,
        duration: 3,
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: totalProjectsRef.current,
          start: 'top 80%',
        },
      }
    );

    const majorProjectsAnimation = gsap.fromTo(
      majorProjectsRef.current,
      { textContent: 0 },
      {
        textContent: 6,
        duration: 3,
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: majorProjectsRef.current,
          start: 'top 80%',
        },
      }
    );

    const minorProjectsAnimation = gsap.fromTo(
      minorProjectsRef.current,
      { textContent: 0 },
      {
        textContent: 14,
        duration: 3,
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: minorProjectsRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => {
      totalProjectsAnimation.kill();
      majorProjectsAnimation.kill();
      minorProjectsAnimation.kill();
    };
  }, []);

  return (
    <div className="project">
      <div className="heading" ref={headingRef}>
        Elevating businesses through expertise in creating remarkable digital user experiences, driving innovation, and delivering impeccable design solutions
      </div>
      <div className="project-info">
        <div className="projects">
          <div className="number">
            <span>+</span>
            <span ref={totalProjectsRef}>20</span>
          </div>
          <div className="heading">Total Projects</div>
        </div>
        <div className="major">
          <div className="number">
            <span>+</span>
            <span ref={majorProjectsRef}>6</span>
          </div>
          <div className="heading">Major Projects</div>
        </div>
        <div className="minor">
          <div className="number">
            <span>+</span>
            <span ref={minorProjectsRef}>14</span>
          </div>
          <div className="heading">Minor Projects</div>
        </div>
      </div>
    </div>
  );
}