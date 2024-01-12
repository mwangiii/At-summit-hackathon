import React from 'react';
import HeroinCard from './components/HeroinCard';
import './assets/css/Heroins.css';

const HeroinList = () => {
  return (
    <div>
      <div id='heroinPage'>
        <div id='heroinListCategory'>
          <div id='searchBar'>
            <input type='text' placeholder='Search..' />
          </div>
          <div id='thisWeek'>
            <h3 id='thisWeekHeading'>This Weeks Heroins</h3>
            <div id='topPostContainer'>
              <div id='topPostCard'>
                <h3 id='topPostName'>Dorothy Nyongesa</h3>
                <p id='topPostDescription'>
                  Dorothy Nyongesa a 30 year old mother of two who lives in Nairobi.
                  <p id='thumbnailHeroin'>"Go to her page to read more about her story."</p>
                </p>
              </div>

              <div id='topPostCard'>
                <h3 id='topPostName'>Sarah Kamau</h3>
                <p id='topPostDescription'>
                  Sarah Kamau, a 28-year-old aspiring entrepreneur from Mombasa, faced adversity with unwavering resilience.
                  <p id='thumbnailHeroin'>"Go to her page to read more about her story"</p>
                </p>
              </div>
              <div id='topPostCard'>
                <h3 id='topPostName'>Amina Ali</h3>
                <p id='topPostDescription'>
                  Our heroin this week is Amina Ali, a 25-year-old from Lamu, navigated the obstacles of cultural norms to pursue her passion for education.
                </p>
                <p id='thumbnailHeroin'>"Get inspired by her story
                  ."
                </p>
              </div>
              <div id='topPostCard'>
                <h3 id='topPostName'>Aisha jux</h3>
                <p id='topPostDescription'>
                  Meet Aisha jux a 25 year old mother of two who lives in Nairobi.
                </p>
                <p id='thumbnailHeroin'>"Go to her page to read more about this inspirational story
                  ."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id='heroinListContainer'>
          <HeroinCard
            id='1'
            name='Dorothy Nyongesa'
            description='Dorothy Nyongesa is a 30 year old mother of two who lives in Nairobi. She is a survivor of domestic violence. She was introduced to drugs by her husband who was a drug addict. She is currently in rehab and is working towards being a better mother to her children.'
          />

          <HeroinCard
            id='2'
            name='Sarah Kamau'
            description="Sarah Kamau, a 28-year-old aspiring entrepreneur from Mombasa, faced adversity with unwavering resilience. After losing her job during the economic downturn, Sarah found herself in a challenging financial situation. Determined to provide for her family, she ventured into a small business selling handmade crafts. Despite initial struggles, Sarah's determination and creativity flourished, turning her venture into a source of inspiration for her community. Through sheer perseverance, she overcame hardships and emerged as a beacon of hope, proving that resilience can transform adversity into opportunity."
          />

          <HeroinCard
            id='3'
            name='Amina Ali'
            description="Amina Ali, a 25-year-old from Lamu, navigated the obstacles of cultural norms to pursue her passion for education. Despite facing skepticism from her community about women seeking higher education, Amina pursued a degree in environmental science. Along her journey, she became an advocate for girls' education, breaking stereotypes and encouraging others to follow their dreams. Amina's dedication to learning and empowerment highlights the transformative power of education in challenging societal norms and paving the way for a brighter future."
          />
          <HeroinCard
            id='3'
            name='Aisha jux'
            description=" A resilient survivor from Mombasa, triumphed over the trauma of FGM and gender abuse. With unwavering courage, she became an advocate for survivors, working to raise awareness and support. Aisha's journey showcases the strength within survivors and the transformative power of turning pain into a catalyst for positive change."
          />
          <HeroinCard
            id='3'
            name='Ann Nasimiyu'
            description=" A survivor from Nairobi, emerged victorious over the darkness of rape. Turning her pain into power, she founded a support group for survivors, providing a safe space for healing and empowerment. Fatima's story illustrates the importance of solidarity and resilience in the face of sexual violence.."
          />
        </div>
      </div>
    </div>
  );
};

export default HeroinList;
