import React from 'react'

const IntroCard = () => {
  return (
      <div key={index} className="team-card">
            <img src={member.image} alt={member.name} className="team-img" />
            <h3 className="team-name">{member.name}</h3>
            <p className="team-role">{member.role}</p>
            <div className="social-icons">
              <a href={member.linkedin}><i className="fab fa-linkedin"></i></a>
              <a href={member.github}><i className="fab fa-github"></i></a>
              <a href={member.twitter}><i className="fab fa-twitter"></i></a>
            </div>
          </div>
  )
}

export default IntroCard
