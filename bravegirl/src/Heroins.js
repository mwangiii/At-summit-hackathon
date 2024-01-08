import React from "react";
import HeroinCard from "./HeroinCard";
import "./Heroins.css";

const HeroinList = () => {
  return (
    <div>
      <h1 id="heroinListHeading">MEET OUR HEROINS</h1>
      <div id="heroinPage">
        <div id="heroinListCategory">
          heroinListCategory
        </div>
        <div id="heroinListContainer">
          <HeroinCard
            id="1"
            name="Dorothy Nyongesa"
            description="Dorothy Nyongesa is a 30 year old mother of two who lives in Nairobi. She is a survivor of domestic violence. She was introduced to drugs by her husband who was a drug addict. She is currently in rehab and is working towards being a better mother to her children."
            />

          <HeroinCard
            id="2"
            name="Sarah Kamau"
            description="Sarah Kamau, a 28-year-old aspiring entrepreneur from Mombasa, faced adversity with unwavering resilience. After losing her job during the economic downturn, Sarah found herself in a challenging financial situation. Determined to provide for her family, she ventured into a small business selling handmade crafts. Despite initial struggles, Sarah's determination and creativity flourished, turning her venture into a source of inspiration for her community. Through sheer perseverance, she overcame hardships and emerged as a beacon of hope, proving that resilience can transform adversity into opportunity."
            />

          <HeroinCard
            id="3"
            name="Amina Ali"
            description="Amina Ali, a 25-year-old from Lamu, navigated the obstacles of cultural norms to pursue her passion for education. Despite facing skepticism from her community about women seeking higher education, Amina pursued a degree in environmental science. Along her journey, she became an advocate for girls' education, breaking stereotypes and encouraging others to follow their dreams. Amina's dedication to learning and empowerment highlights the transformative power of education in challenging societal norms and paving the way for a brighter future."
          />
            <HeroinCard
            id="3"
            name="Amina Ali"
            description="Amina Ali, a 25-year-old from Lamu, navigated the obstacles of cultural norms to pursue her passion for education. Despite facing skepticism from her community about women seeking higher education, Amina pursued a degree in environmental science. Along her journey, she became an advocate for girls' education, breaking stereotypes and encouraging others to follow their dreams. Amina's dedication to learning and empowerment highlights the transformative power of education in challenging societal norms and paving the way for a brighter future."
          />
            <HeroinCard
            id="3"
            name="Amina Ali"
            description="Amina Ali, a 25-year-old from Lamu, navigated the obstacles of cultural norms to pursue her passion for education. Despite facing skepticism from her community about women seeking higher education, Amina pursued a degree in environmental science. Along her journey, she became an advocate for girls' education, breaking stereotypes and encouraging others to follow their dreams. Amina's dedication to learning and empowerment highlights the transformative power of education in challenging societal norms and paving the way for a brighter future."
          />
            </div>
          </div>
      </div>
          );
        }

export default HeroinList;