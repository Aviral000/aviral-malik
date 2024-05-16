import React, { useLayoutEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import "./HeroSection.scss"
import pic1 from "../assests/personal pics/IMG_9138.jpg"
import pic2 from "../assests/personal pics/IMG_8859.jpg"
import pic3 from "../assests/personal pics/IMG_2628.jpg"
import pic4 from "../assests/personal pics/IMG_1670.jpg"
import pic5 from "../assests/personal pics/IMG_9070.JPG"
import pic6 from "../assests/personal pics/IMG_8866.jpg"
import { useMediaQuery } from 'react-responsive'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={2}
      // navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
    >
      <SwiperSlide>
        <div className="swiper-carousel-animate-opacity">
          <img src={pic1} alt="img1" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-carousel-animate-opacity">
          <img src={pic2} alt="img2" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-carousel-animate-opacity">
          <img src={pic3} alt="img3" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-carousel-animate-opacity">
          <img src={pic4} alt="img4" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-carousel-animate-opacity">
          <img src={pic5} alt="img5" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="swiper-carousel-animate-opacity">
          <img src={pic6} alt="img6" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const nameRef = useRef(null);
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })
  const carouselRef = useRef(null);

  useLayoutEffect(() => {
    const name = nameRef.current;
    const carousel = carouselRef.current;

    gsap.fromTo(
      name,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 3,
        duration: 4,
        scrollTrigger: {
          trigger: name,
          top: 'top 80%'
        }
      }
    )

    gsap.fromTo(
      carousel,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3,
      }
    )
  }, [])

  return (
    <div className='hero-section'>
      { !isTabletOrMobile ? (
        <div className='pics-collection'>
          <img src={pic1} alt="pic1" className='img1' />
          <img src={pic2} alt="pic2" className='img2' />
          <img src={pic3} alt="pic3" className='img3' />
          <img src={pic4} alt="pic4" className='img4' />
          <img src={pic5} alt="pic5" className='img5' />
          <img src={pic6} alt="pic6" className='img6' />
        </div>
      ) : (
        <div ref={carouselRef}>
          <Carousel />
        </div>
      )
      }
      <div className='name' ref={nameRef}>
        <div className='first'>Aviral</div>
        <div className='last'>Malik</div>
      </div>
      <div className='small-info'>
        <div className='current'>
          <div className='title'>Currently</div>
          <div className='answer'>Frontend Dev at Loy Luxury</div>
        </div>
        <div className='freelancing'>
          <div className='title'>Freelancing</div>
          <div className='answer'>Artist & Web dev.</div>
        </div>
        <div className='specilization'>
          <div className='title'>Specilized In</div>
          <div className='answer'>Web dev(frontend & backend)</div>
        </div>
        <div style={{ paddingLeft: "5rem" }} className='empowering'>
          <div className='title'>Empowering</div>
          <div className='answer'>Website and Web-App</div>
        </div>
        <div className='enthusiastic'>
          <div className='title'>Enthusiastic by</div>
          <div className='answer'>Technology & Softwares</div>
        </div>
        <div className='from'>
          <div className='title'>From</div>
          <div className='answer'>India</div>
        </div>
      </div>
    </div>
  )
}
