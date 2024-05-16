import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import './FAQ.scss'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

gsap.registerPlugin(ScrollTrigger);

export default function FAQ() {
const FAQRef = useRef(null);
console.log(`Screen Width: ${window.screen.width}`);

useLayoutEffect(() => {
    const FAQ = FAQRef.current;

    gsap.fromTo(
        FAQ,
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 3,
            scrollTrigger: {
                trigger: FAQ,
                start: 'top 80%'
            }
        }
    )
}, [])
  return (
    <div className='FAQ-container' ref={FAQRef}>
      <div className='heading-FAQ'>FAQ</div>
      <div className='accordion'>
        <div className='left'>
          <div className='heading-left'>
            Queries concerning the methods of establishing communication with me, the scope of my capabilities, and the types of requests that may be denied
          </div>
        </div>
        <div className='right'>
          <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                Establishing Communication with Me
            </AccordionSummary>
            <AccordionDetails>
                Communicating with me is a straightforward process aimed at ensuring clarity and efficiency in our interactions. You can reach out to me via email, phone, or through any preferred communication channel mentioned on my website. Please provide concise and relevant information in your message to facilitate a prompt response.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
                The Scope of My Capabilities
            </AccordionSummary>
            <AccordionDetails>
                My capabilities encompass a wide range of skills and expertise tailored to meet various needs. From web development and design to content creation and digital marketing, I strive to deliver high-quality results in every project I undertake. Feel free to explore my portfolio to gain insights into my past work and areas of specialization.
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
                Types of Requests That May Be Denied
            </AccordionSummary>
            <AccordionDetails>
                While I endeavor to accommodate all requests to the best of my ability, there are certain types of requests that may not align with my expertise or ethical standards. Requests involving illegal activities, unethical practices, or projects that conflict with my values will be respectfully declined. Additionally, requests that exceed my current workload or availability may also be deferred or redirected.
            </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
                    Taking Hardworking Freshers as Students
                </AccordionSummary>
                <AccordionDetails>
                    As part of my commitment to nurturing talent and giving back to the community, I offer opportunities for hardworking freshers to learn and grow under my guidance. Whether you're a recent graduate or someone looking to switch careers, I provide mentorship and hands-on training in various aspects of web development, focusing primarily on MERN stack with Next.js and Vanilla JavaScript.

                    My teaching approach is tailored to accommodate different learning styles and paces. Through interactive sessions, practical exercises, and real-world projects, I aim to equip students with the skills and knowledge needed to succeed in the dynamic field of web development.

                    The fees for my mentorship program vary depending on the selected method of engagement, such as one-on-one sessions, group workshops, or online courses. For more information on fees, schedules, and enrollment criteria, please don't hesitate to reach out to me via any preferred communication channel. I'm always happy to discuss how I can help you achieve your goals and kickstart your career in web development.
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5-content" id="panel5-header">
                    Additional Offerings: Preprocessors, Frameworks, Handmade Plugins, and GSAP
                </AccordionSummary>
                <AccordionDetails>
                    <ul>
                    <li><strong>Preprocessors:</strong> Learn how to enhance your CSS workflow with preprocessors like Sass and Less. Discover the power of variables, mixins, nesting, and other features that streamline your styling process and make your code more maintainable.</li>
                    <li><strong>Frameworks:</strong> Explore popular frontend frameworks such as React, Vue.js, and Angular. Understand their core concepts, architecture, and best practices for building scalable and efficient web applications.</li>
                    <li><strong>Handmade Plugins using CSS only:</strong> Dive into the world of CSS creativity by learning how to create handmade plugins and animations using pure CSS. Discover techniques for designing custom buttons, tooltips, loaders, and more without relying on external libraries or JavaScript.</li>
                    <li><strong>GSAP:</strong> Unlock the full potential of animations and transitions with GSAP (GreenSock Animation Platform). Master the art of creating smooth, interactive animations that bring your web projects to life. From simple effects to complex timelines, GSAP offers unparalleled flexibility and performance for web animation.</li>
                    </ul>
                    <p>Whether you're a beginner looking to expand your skill set or an experienced developer seeking to level up, my training programs cover a wide range of topics to suit your needs. Get in touch today to start your journey towards becoming a well-rounded web developer!</p>
                </AccordionDetails>
            </Accordion>
        </div>
      </div>
    </div>
  );
}