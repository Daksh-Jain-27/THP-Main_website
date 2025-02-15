import './home.css';
import img2 from '../../images/img2.webp';
import img3 from '../../images/img3.webp'; // Add more images
import img4 from '../../images/img4.webp';

function Home() {
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
                    <h1>Competitions</h1>
                </section>

                <section id="gallery">
                    <h1>Gallery</h1>
                </section>

                <section id="sponsors">
                    <h1>Sponsors</h1>
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
    </div>
</div>
    );
}

export default Home;
