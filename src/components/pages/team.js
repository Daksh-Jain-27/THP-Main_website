import React from "react";
import "./team.css";
import member1 from "../../images/member1.jpg";
import member2 from "../../images/member 2.avif";
import member3 from "../../images/member 3.jpg";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: member1,
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    image: member2,
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Mike Johnson",
    role: "UI/UX Designer",
    image: member3,
    linkedin: "#",
    github: "#",
    twitter: "#"
  }
];

const Team = () => {
  return (
    <section className="team-section">
      <h2 className="team-heading">Meet Our Team</h2>
      <div className="team-container">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-img" />
            <div>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            </div>
            <div className="social-icons">
              <a href={member.linkedin}><i className="fab fa-linkedin"></i></a>
              <a href={member.github}><i className="fab fa-github"></i></a>
              <a href={member.twitter}><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
