import './home.css';
import img2 from '../../images/img2.webp';
import img1 from '../../images/img1.png';
import img3 from '../../images/img3.webp'; // Add more images
import img4 from '../../images/img4.webp';
import mbf from '../../images/mbf.jpg';
import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const competitions = [
  {
    name: 'Formula Bharat',
    year: 2023,
    achievement: '🥇 1st Place - Business Plan',
  },
];

function Home() {
  const [showButton, setShowButton] = useState(false);
  
    // Handle scroll for Back to Top button
    useEffect(() => {
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          setShowButton(true);
        } else {
          setShowButton(false);
        }
      });
    }, []);
  
    // Smooth scroll to top
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  return (
    
    <div className="animated-bg" id="raised-bg">
      <div>
        
        <section id="home">
          <div>
            <h1 id="h1">Team Humanoid IITB</h1>
            <br />
            <p id="p">
              "A Team of passionate students dedicated to developing <br />
              a fully autonomous humanoid robot that closely <br />
              replicates human movements and intelligence"
            </p>
            <br />

            {/* Image Container for Horizontal Alignment */}
            <div className="image-container">
              <img src={img2} alt="Robot 1" className="robot-image" />
              <img src={img3} alt="Robot 2" className="robot-image" />
              <img src={img4} alt="Robot 3" className="robot-image" />
            </div>
          </div>
        </section>

        <section id="about">
          <h1>About Us</h1>
        </section>

        <section id="team">
          <h1>Our Team</h1>
        </section>

        <section id="timeline">
          <h1>Timeline</h1>
        </section>

        <section id="competitions">
        <div className="competition-section" id="competitions">
      <h2 className="section-title">Competitions</h2>
      
      <div className="achievement-container">
        <div className="achievement-card">
          <h3>Vishwakarma Award for Engineering Innovation 2024</h3>
          <p>🏆 Proud Finalists in Stage 4 of Vishwakarma Award 2024.</p>
        </div>
      </div>
    </div>
        </section>

        <section id="sponsors">
          <div id="sponsor">
            <h2 className="sponsor-heading">Our Sponsor</h2>
            <div className="sponsor-container">
              <div className="sponsor-box">
                <img src={mbf} alt="Maker Bhavan Foundation" className="sponsor-logo" />
                <p className="sponsor-name">Maker Bhavan Foundation</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" >
          <div className="contact-container">
            {/* Contact Us Heading */}
            <h2 className="contact-heading">Contact Us</h2>

            {/* Contact Info Container */}
            <div className="contact-info">
              {/* Email Section */}
              <div className="contact-box">
                <img
                  src="https://img.icons8.com/ios-filled/50/ff4d4d/new-post.png"
                  alt="Email Icon"
                  className="contact-icon"
                />
                <h3>Email Us</h3>
                <p className="contact-text">contact@auv-iitb.org</p>
                <p className="contact-text">auviitb.bteam@gmail.com</p>
              </div>

              {/* Call Section */}
              <div className="contact-box">
                <img
                  src="https://img.icons8.com/ios-filled/50/ff4d4d/phone.png"
                  alt="Call Icon"
                  className="contact-icon"
                />
                <h3>Call Us</h3>
                <p>Archit Swamy: <span className="contact-number">+91 88010 65900</span></p>
                <p>Kaushik Chavali: <span className="contact-number">+91 87901 05198</span></p>
                <p>Sameer Mannava: <span className="contact-number">+91 99082 33713</span></p>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div id="footer">
                <div className="footer-container">
                  {/* Left Section */}
                  <div className="footer-left fade-in">
                    
                  <img src={img1} alt="THP Logo" className="footer-logo" />
                    <h3 className="footer-title">THP IIT Bombay</h3>
                    <p className="footer-description">
                    An all-student technical group designing a social humanoid robot to be deployed in the IIT Bombay campus
                    </p>
                    <br></br>
                    <div className="footer-social-icons">
                      <a href="https://www.instagram.com/humanoidproject.iitb/" className="social-icon"><FaInstagram /></a>
                      <a href="https://github.com/The-Humanoid-Project" className="social-icon"><FaGithub /></a>
                      <a href="https://www.linkedin.com/company/the-humanoid-project-iitb/posts/?feedView=all" className="social-icon"><FaLinkedinIn /></a>
                    </div>
                  </div>
          
                  {/* Middle Section */}
                  {/* <div className="footer-middle fade-in">
                    <h3 className="footer-title">Magazine</h3>
                    <div className="subscription-box">
                      <input 
                        type="email" 
                        placeholder="tech@iitbombayracing.org" 
                        className="email-input"
                      />
                      <button className="subscribe-btn">Subscribe</button>
                    </div>
                  </div> */}
          
                  {/* Right Section */}
                  <div className="footer-right fade-in">
                    <h3 className="footer-title">Contact Us</h3>
                    <p><i className="fa fa-envelope"></i> tech@iitbombaythp.org</p>
                    <p><i className="fa fa-phone"></i> +91 7875692712</p>
                    
                    <p><i className="fa fa-phone"></i> +91 9930779212</p>
                    <p><i className="fa fa-map-marker"></i> IIT Bombay, Powai, 400076, India</p>
                  </div>
          
                  {/* Helpful Links */}
                  <div className="footer-links fade-in">
                    <h3 className="footer-title">Helpful Links</h3>
                    <a href="#home">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#team">Our Team</a> 
                    <a href="#sponsors">Sponsors</a>
                    <a href="#competitions">Achievements</a>
                  </div>
                </div>
          
                {/* Back to Top Button */}
                {showButton && (
                  <button className="back-to-top-btn" onClick={scrollToTop}>
                    ↑ 
                  </button>
                )}
              </div>
        </section>
        
      </div>
    </div>
  );
}

export default Home;
