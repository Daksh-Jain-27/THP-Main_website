import React from 'react'
import './timeline.css'
import event1 from '../../images/event-1.jpg'
import event2 from '../../images/event-2.jpeg'

const Timeline=()=>{
    return(
        <div className="timeline">
      <h1 className="timeline-title">Our Journey</h1>

      <div className="timeline-container">
        {/* Event 1 */}
        <div className="timeline-item animate">
          <div className="timeline-content left">
            <h2>Event 1</h2>
            <p>Details about Event 1 go here. Explain what happened in this milestone.</p>
          </div>
          <div className="timeline-image">
            <img src={event1} alt="Event 1" />
          </div>
        </div>

        {/* Event 2 */}
        <div className="timeline-item animate">
          <div className="timeline-image">
            <img src={event2} alt="Event 2" />
          </div>
          <div className="timeline-content right">
            <h2>Event 2</h2>
            <p>Details about Event 2 go here. Explain what happened in this milestone.</p>
          </div>
        </div>

        {/* Add more events here */}
      </div>
    </div>
 
    );
};
export default Timeline;