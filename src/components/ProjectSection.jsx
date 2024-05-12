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
  const showcaseRef = useRef(null);

  useLayoutEffect(() => {

    const heading = headingRef.current;
    const showcase = showcaseRef.current;

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

    gsap.fromTo(
      showcase,
      {
        y: '50%',
      },
      {
        y: '0',
        duration: 3,
        scrollTrigger: {
          trigger: showcase,
          start: 'top 100%'
        }
      }
    )

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
      <div className='showcase' ref={showcaseRef}>
        <div className='heading'>
          Featured Projects
        </div>
        <div className='cards'>
          <div className='p1'>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/80a2bb126031567.612542339630e.png" alt="" />
            <div className='over-head'>UI/UX Designs</div>
            <div className='hidden-quotes'>"Crafting digital experiences that captivate and delight users, one pixel at a time."</div>
          </div>
          <div className='p2'>
            <img src="https://images.squarespace-cdn.com/content/v1/5dfb94cf3606542fb33d24aa/1619016895425-KJZ4R85G7XY61VQAIMY1/studio+mei+instagram-06.jpg?format=750w" alt="" />
            <div className='over-head'>Frontend Mastery</div>
            <div className='hidden-quotes'>"Bringing designs to life with seamless interactions and stunning visual appeal."</div>
          </div>
          <div className='p3'>
            <img src="https://images.squarespace-cdn.com/content/v1/5f35df489eb0c716642dc821/1599729167824-TV5F5DL3B5Z2YML54NUF/Bear-and-Trumpet-Creative-Studio-LauraJane-website-mockup2.png" alt="" />
            <div className='over-head'>Backend Skills</div>
            <div className='hidden-quotes'>"Building robust and scalable systems to power the backbone of your application."</div>
          </div>
        </div>
      </div>
    </div>
  );
}