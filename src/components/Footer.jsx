import React from 'react'
import './Footer.scss'
import am from '../assests/am logo.jpg'

export default function Footer() {
  return (
    <div className='footer-container'>
        <hr />
        <footer class="footer-distributed">
            <div class="footer-left">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={am} alt="" />
                    <h2 style={{ color: 'white' }}>Aviral Malik</h2>
                </div>
                <p class="footer-links">
                    <a href="#" class="link-1">Home |</a>
                    <a href="#">Skills |</a>
                    <a href="#">Experince |</a>
                    <a href="#">Projects |</a>
                    <a href="#">About |</a>
                    <a href="#">Contacts</a>
                </p>
                <p class="footer-company-name">Aviral Malik © 2024</p>
            </div>
            <div class="footer-center">
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <img src="https://icon-library.com/images/google-maps-icon-transparent/google-maps-icon-transparent-0.jpg" alt="" />
                    <p><span>Vasundhara Residency</span> MZN, Uttar Pradesh</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1rem' }}>
                    <img src="https://th.bing.com/th/id/OIP.qa3iyh9yr7worCA85I2UZwHaHw?rs=1&pid=ImgDetMain" alt="" />
                    <p>+91 9528410057</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1rem' }}>
                    <img src="https://purepng.com/public/uploads/large/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075clftr.png" alt="" />
                    <p><a href="mailto:avimalik02@gmail.com">avimalik02@gmail.com</a></p>
                </div>
            </div>
            <div class="footer-right">
                <p class="footer-company-about">
                    <span>About the portfolio</span>
                    This portfolio showcases Aviral Malik's journey from a UI/UX enthusiast to a proficient frontend developer. With expertise in technologies like React and Next.js, and a strong foundation in design principles, Aviral is dedicated to crafting exceptional digital experiences.
                </p>
                <div class="footer-icons">
                    <a href="#"><img src="https://assets.leetcode.com/users/LC_Contest/avatar_1605356489.png" alt="" /></a>
                    <a href="#"><img src="https://th.bing.com/th/id/R.14f8d0d8ea255a03471032d79087fdf0?rik=Jcph23UZL08iCA&riu=http%3a%2f%2f1000logos.net%2fwp-content%2fuploads%2f2017%2f03%2fColor-of-the-LinkedIn-Logo.jpg&ehk=hT5Ibkg%2fFPa%2f7TPm%2fs2TP8Fxdd7ySQQBuZmn88xh5j0%3d&risl=&pid=ImgRaw&r=0" alt="" /></a>
                    <a href="#"><img src="https://vectorseek.com/wp-content/uploads/2023/07/Twitter-X-Logo-Vector-01-2.jpg" alt="" /></a>
                    <a href="#"><img src="https://www.crio.do/blog/content/images/2020/08/Aug_04--1-.png" alt="" /></a>
                </div>
            </div>
        </footer>
    </div>
  )
}
