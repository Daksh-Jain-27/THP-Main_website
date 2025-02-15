import './home.css'
// import Herosection  from '../Herosection'
function Home(){
    return (
       
        <div>
      <section id="home" >
        <h1>Welcome to Home</h1>
      </section>

      <section id="about" >
        <h1>About Us</h1>
      </section>

      <section id="team" >
        <h1>Our Team</h1>
      </section>

      <section id="timeline" >
        <h1>Timeline</h1>
      </section>

      <section id="competitions" >
        <h1>Competitions</h1>
      </section>

      <section id="gallery" >
        <h1>Gallery</h1>
      </section>

      <section id="sponsors" >
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

    );
}
export default Home;