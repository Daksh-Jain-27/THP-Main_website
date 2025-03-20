import React from "react";
import { FaBolt, FaTachometerAlt, FaLeaf, FaCogs } from "react-icons/fa";
import "./about.css";

const missions = [
  {
    id: 1,
    icon: <FaBolt className="mission-icon blue" />,
    title: "Electrifying Innovation",
    description:
      "We are developing cutting-edge humanoid systems that push the boundaries of AI and robotics.",
  },
  {
    id: 2,
    icon: <FaTachometerAlt className="mission-icon red" />,
    title: "Speeding Towards Excellence",
    description:
      "Our mission is to engineer highly responsive and autonomous humanoid robots capable of real-world applications.",
  },
  {
    id: 3,
    icon: <FaLeaf className="mission-icon green" />,
    title: "Driving Robotics Forward",
    description:
      "We strive to develop humanoids that assist in daily tasks, making technology more accessible and user-friendly.",
  },
  {
    id: 4,
    icon: <FaCogs className="mission-icon orange" />,
    title: "Engineering the Future",
    description:
      "Combining AI, machine learning, and robotics to create a smarter, more interactive world.",
  },
];

const MissionSection = () => {
  return (
    <section className="mission-section">
      <h2 className="mission-heading">Our Mission</h2>
      <div className="mission-container">
        {missions.map((mission) => (
          <div key={mission.id} className="mission-card">
            {mission.icon}
            <h3 className="mission-title">{mission.title}</h3>
            <p className="mission-description">{mission.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionSection;
