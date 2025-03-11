import React, { useState, useEffect } from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
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
    <div id="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left fade-in">
          <h3 className="footer-title">Racing Team IIT Bombay</h3>
          <p className="footer-description">
            IIT Bombay Racing is India's premier Formula Student Electric team with a vision to{' '}
            <strong>Revolutionize Electric Mobility in India.</strong>
          </p>
          <div className="footer-social-icons">
            <a href="#" className="social-icon"><FaFacebookF /></a>
            <a href="#" className="social-icon"><FaInstagram /></a>
            <a href="#" className="social-icon"><FaTwitter /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="footer-middle fade-in">
          <h3 className="footer-title">Magazine</h3>
          <div className="subscription-box">
            <input 
              type="email" 
              placeholder="tech@iitbombayracing.org" 
              className="email-input"
            />
            <button className="subscribe-btn">Subscribe</button>
          </div>
        </div>

        {/* Right Section */}
        <div className="footer-right fade-in">
          <h3 className="footer-title">Contact Us</h3>
          <p><i className="fa fa-envelope"></i> tech@iitbombayracing.org</p>
          <p><i className="fa fa-phone"></i> +91 7875692712</p>
          <p><i className="fa fa-phone"></i> +91 9930779212</p>
          <p><i className="fa fa-map-marker"></i> IIT Bombay, Powai, 400076, India</p>
        </div>

        {/* Helpful Links */}
        <div className="footer-links fade-in">
          <h3 className="footer-title">Helpful Links</h3>
          <a href="#team">Our Team</a>
          <a href="#cars">Cars</a>
          <a href="#achievements">Achievements</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#gallery">Gallery</a>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button className="back-to-top-btn" onClick={scrollToTop}>
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default Footer;
