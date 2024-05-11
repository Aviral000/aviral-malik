import React from 'react'
import "./HeroSection.scss"
import pic1 from "../assests/personal pics/IMG_9138.jpg"
import pic2 from "../assests/personal pics/IMG_8859.jpg"
import pic3 from "../assests/personal pics/IMG_2628.jpg"
import pic4 from "../assests/personal pics/IMG_1670.jpg"
import pic5 from "../assests/personal pics/IMG_9070.JPG"
import pic6 from "../assests/personal pics/IMG_8866.jpg"

export default function HeroSection() {
  return (
    <div className='hero-section'>
      <div className='pics-collection'>
        <img src={pic1} alt="pic1" className='img1' />
        <img src={pic2} alt="pic2" className='img2' />
        <img src={pic3} alt="pic3" className='img3' />
        <img src={pic4} alt="pic4" className='img4' />
        <img src={pic5} alt="pic5" className='img5' />
        <img src={pic6} alt="pic6" className='img6' />
      </div>
      <div className='name'>
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
