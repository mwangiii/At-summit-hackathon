// Import the Card component
import React from "react";
import Card2 from "./Cards2"; 
import "./Cardsui2.css";
// import redhads from './assets/images/handsondeck.jpg';
// import strongwoman from './assets/images/strongwoman.jpg';
// import CardsPagetwo from './Cardsui2';
// import samburugirls from './assets/images/samburugirls.jpg';
// import pic from './assets/images/pic.avif';
import speakup from './assets/images/thescreamingwoman.jpg';
// import enlightened from './assets/images/enlightened.jpg';
// import trialpic from './trialpic.jpg';

// Your new page component
function AnotherPage() {
  return (
    <div className="cardsTwo">
      <div className="colTwo">
        <Card2
        img={speakup}
        span="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
        />
      </div>
      <div className="colTwo">
       <Card2
        img={speakup}
        span="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
      />
      </div>
      <div className="colTwo">
       <Card2
        img={speakup}
        span="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        "
      />
      </div>
    </div>
  );
}

export default AnotherPage;
