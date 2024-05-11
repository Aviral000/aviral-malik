import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutMe.scss';

gsap.registerPlugin(ScrollTrigger);

export default function AboutMe() {
  const oddParaRefs = useRef([]);
  const evenParaRefs = useRef([]);

  useLayoutEffect(() => {
    const oddParas = oddParaRefs.current;
    const evenParas = evenParaRefs.current;

    oddParas.forEach((para, index) => {
      gsap.fromTo(
        para,
        {
          x: '-100%',
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: para,
            start: 'top 80%',
          },
        }
      );
    });

    evenParas.forEach((para, index) => {
      gsap.fromTo(
        para,
        {
          x: '100%',
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: para,
            start: 'top 80%',
          },
        }
      );
    });
  }, []);

  const addToRefs = (el, isOdd) => {
    if (el && isOdd) {
      oddParaRefs.current.push(el);
    } else if (el) {
      evenParaRefs.current.push(el);
    }
  };

  return (
    <div className="about-me">
      <div className="para">
        <ol>
          <li
            className="para1"
            ref={(el) => addToRefs(el, true)}
          >
            <div>
                I am Aviral Malik, a 22-year-old individual who has charted a path fueled by passion and determination in the realm of technology. Graduating with a degree in Computer Science from CCSU, my journey into the professional world began with a deep-seated interest in UI/UX artistry, which blossomed during my sophomore year of college.
            </div>
            <div>
                <img src="https://storage.googleapis.com/ezap-prod/colleges/208/chaudhary-charan-singh-university-meerut21.jpg" alt="" />
            </div>
          </li>
          <li
            className="para2"
            ref={(el) => addToRefs(el, false)}
          >
            <div style={{ paddingRight: "1rem" }}>
                <img src="https://static.vecteezy.com/system/resources/previews/001/058/368/original/ui-ux-design-concept-in-flat-style-vector.jpg" alt="" />
            </div>
            <div>
                Venturing into the world of UI/UX design early on, I quickly established myself as a proficient designer with a keen eye for aesthetics and user experience. Within a short span, I transitioned into the role of a product designer, leveraging my creativity and design sensibilities to craft compelling digital experiences for users. This shift marked the beginning of an enriching journey filled with opportunities for growth and learning.
            </div>
          </li>
          <li
            className="para3"
            ref={(el) => addToRefs(el, true)}
          >
            <div>
                Around 1.6 years ago, I embarked on a new chapter in my career by joining LoyLuxury as a product designer. However, my thirst for knowledge and a desire to explore different facets of technology led me to pivot towards frontend development. With a focus on frontend technologies such as React, Sass, Less, and Next.js, I honed my skills and expanded my technical repertoire, preparing myself for the challenges that lay ahead.
            </div>
            <div>
                <img src="https://steelcase-res.cloudinary.com/image/upload/c_limit,dpr_auto,q_70,h_1024,w_1024/v1584641917/www.steelcase.com/2020/03/19/20-0136326.jpg" alt="" />
            </div>
          </li>
          <li
            className="para4"
            ref={(el) => addToRefs(el, false)}
          >
            <div style={{ paddingRight: "1rem" }}>
                <img src="https://cdn3.destm.com/destm_com/main/images/mern-stack.png" alt="" />
            </div>
            <div>
                Driven by a relentless pursuit of excellence, I undertook numerous personal projects aimed at enhancing my skills and deepening my understanding of various technologies. From building complex applications in React to delving into backend development with MongoDB, MySQL, and Express.js, each project served as a testament to my ability to master diverse tech stacks and solve complex problems.
            </div>
          </li>
          <li
            className="para5"
            ref={(el) => addToRefs(el, true)}
          >
            <div>
                Moreover, my expertise extends beyond coding skills to encompass a comprehensive understanding of design principles, system architecture, and project planning. Armed with knowledge in Low-Level Design (LLD), High-Level Design (HLD), and proficiency in tools like Figma, I approach every project with a holistic perspective, ensuring that both the design and functionality meet the highest standards of quality.
            </div>
            <div>
                <img src="https://digitacy.com/content/images/size/w1100/2019/03/what-is-a-design-system.jpg" alt="" />
            </div>
          </li>
          <li
            className="para6"
            ref={(el) => addToRefs(el, false)}
          >
            <div style={{ paddingRight: "1rem" }}>
                <img src="https://www.missiontolearn.com/wp-content/uploads/2011/01/achieve_learning_goals_35350735_s.jpg" alt="" />
            </div>
            <div>
                As I set my sights on transitioning into a full-stack developer role, I am fueled by a passion for continuous learning and a commitment to pushing the boundaries of what is possible. With a diverse skill set, a proven track record of success, and an unwavering dedication to excellence, I am poised to make a significant impact in the ever-evolving landscape of technology.
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
}