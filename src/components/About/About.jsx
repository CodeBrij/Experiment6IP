import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="about-right">
        <h3>About Our Engineering College</h3>
        <h2>Shaping Future Innovators</h2>
        <p>Embark on a transformative journey at our engineering college, where we offer a comprehensive range of programs designed to equip students with cutting-edge skills and knowledge essential for thriving in the dynamic world of technology.</p>
        <p>Driven by innovation, hands-on learning, and personalized mentorship, our curriculum prepares students to excel in various engineering disciplines, fostering creativity and problem-solving abilities.</p>
        <p>Whether your ambition is to innovate as an engineer, researcher, entrepreneur, or technological leader, our diverse programs provide the ideal platform to achieve your aspirations and unleash your potential in shaping the future of technology.</p>
        </div>
      
    </div>
  )
}

export default About
