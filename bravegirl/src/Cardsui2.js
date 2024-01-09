<<<<<<< HEAD
// Import the Card component
import React from "react";
import Card2 from "./components/Cards2"; 
import "./assets/css/Cardsui2.css";
import ussdCard from './assets/images/ussdCard.jpg';
import volunteerPic from './assets/images/volunteerPic.jpg';
import femaleHero from './assets/images/femaleHero.jpg';


// Your new page component
function AnotherPage() {
  return (
    <div className="cardsTwo">
      <div className="colTwo">
        <Card2
        img={ussdCard}
        heading="SPEAK UP!"
        span={`we encourage you to speak up without fear.
        \nDial our dedicated USSD code, and our compassionate team will swiftly reach out to provide the help and support you need. Whether it's counseling, a safe house, or assistance, we are committed to standing by you. No one is too far from our reach; we are working closely with authorities to ensure that every girl's voice is heard, valued, and empowered. You are not alone—speak up, and let us stand with you on your journey to safety and resilience. We're here for you.`
      }
        />
      </div>
      <div className="colTwo">
       <Card2
        img={volunteerPic}
        heading="We need you"
        span={`our commitment extends beyond providing a platform for survivors. We offer various services to support and empower girls in need. Explore our volunteer opportunities to actively contribute to our mission and make a lasting impact. If you resonate with our cause, consider making a donation to support our efforts in creating a safer and brighter future for every girl. Together, we can make a difference and stand united for the well-being and resilience of every brave girl.`}
      />
      </div>
      <div className="colTwo">
       <Card2
        img={femaleHero}
        heading="Meet our heroines"
        span={`Embark on a journey of inspiration and resilience by delving into the compelling stories of our brave heroines. Each narrative is a testament to strength, courage, and the triumph of the human spirit.\nDiscover the unique journeys of these incredible individuals who have overcome adversity and emerged stronger.\nCheck out our Heroin Stories to connect with real stories of empowerment and find solace in the shared experiences of these remarkable women.\nTheir stories echo the power of resilience, encouraging us all to stand tall and forge ahead.`}
      />
      </div>
    </div>
  );
}

export default AnotherPage;
=======
// Import the Card component
import React from "react";
import Card2 from "./Cards2"; 
import "./Cardsui2.css";
import ussdCard from './assets/images/ussdCard.jpg';
import volunteerPic from './assets/images/volunteerPic.jpg';
import femaleHero from './assets/images/femaleHero.jpg';


// Your new page component
function AnotherPage() {
  return (
    <div className="cardsTwo">
      <div className="colTwo">
        <Card2
        img={ussdCard}
        heading="SPEAK UP!"
        span={`we encourage you to speak up without fear.
        \nDial our dedicated USSD code, and our compassionate team will swiftly reach out to provide the help and support you need. Whether it's counseling, a safe house, or assistance, we are committed to standing by you. No one is too far from our reach; we are working closely with authorities to ensure that every girl's voice is heard, valued, and empowered. You are not alone—speak up, and let us stand with you on your journey to safety and resilience. We're here for you.`
      }
        />
      </div>
      <div className="colTwo">
       <Card2
        img={volunteerPic}
        heading="We need you"
        span={`our commitment extends beyond providing a platform for survivors. We offer various services to support and empower girls in need. Explore our volunteer opportunities to actively contribute to our mission and make a lasting impact. If you resonate with our cause, consider making a donation to support our efforts in creating a safer and brighter future for every girl. Together, we can make a difference and stand united for the well-being and resilience of every brave girl.`}
      />
      </div>
      <div className="colTwo">
       <Card2
        img={femaleHero}
        heading="Meet our heroines"
        span={`Embark on a journey of inspiration and resilience by delving into the compelling stories of our brave heroines. Each narrative is a testament to strength, courage, and the triumph of the human spirit.\nDiscover the unique journeys of these incredible individuals who have overcome adversity and emerged stronger.\nCheck out our Heroin Stories to connect with real stories of empowerment and find solace in the shared experiences of these remarkable women.\nTheir stories echo the power of resilience, encouraging us all to stand tall and forge ahead.`}
      />
      </div>
    </div>
  );
}

export default AnotherPage;
>>>>>>> origin/update02
