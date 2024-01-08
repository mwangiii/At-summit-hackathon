import React from "react";
import './Announcements.css';

export default function Announcements(){
  return(
    <>
    <div className='announcements'>
          <h1 id="announcmentsHeading">ANNOUNCEMENTS</h1>
          <h3 id="announcmentsH3">FUNDRAISER</h3>
          <span>
          Save the date! Our annual fundraising gala is just around the corner. Join us for an evening of inspiration, entertainment, and opportunities to contribute to our mission. Your support ensures that every girl's voice is heard and valued.
          </span>
        </div>
        <div className='announcements'>
          <h3 id="announcmentsH3">THE SMALL WINNINGS MATTER</h3>
          <span>
          This month, we celebrate the courage of our brave heroines. Follow their stories of triumph over adversity on our Heroins page. Your encouragement and engagement make a positive impact on their journeys to resilience and empowerment.
          </span>
        </div>
        <div className='announcements'>
          <h3 id="announcmentsH3">FEEDBACK</h3>
          <span>
          Exciting news! Our community outreach program reached a new milestone. We successfully provided educational resources to over 500 girls in underserved areas. Your support makes a difference in shaping a brighter future for these young minds.
          </span>
        </div>
    </>
  )
}