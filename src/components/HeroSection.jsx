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
        
      </div>
    </div>
  )
}
