<<<<<<< HEAD
import './assets/css/App.css';
import React from 'react';
import Heroimg from './components/Heroimg';
import Cardsui from './Cardsui';
import AnotherPage from './Cardsui2';
import Announcements from './Announcements';
import frontPage from './assets/images/frontPage.png';
import strongwoman from './assets/images/strongwoman.jpg';



export default function Main(){
  return(
    <main>
    <section className='hero-page'>
      <div id='heroImage'>
      <Heroimg 
      title="JUSTICE BEGINS WHERE INEQUALITY ENDS" 
      img={frontPage} alt="loading"/>
      </div>
      <div id='cardsPageone'>
      <Cardsui/>
      </div>
    </section>
  
    <section className='second-page'>
      <div id='cardPagetwo'>
      <AnotherPage/>
      </div>
    </section>

    <section className='third-page'>
      <div id='thirdImage'>
      <Heroimg img={strongwoman}/>
      </div>
      <div id='thirdpagetext'>
        <Announcements/>
      </div>
    </section>
    </main>
  )
=======
import './App.css';
import React from 'react';
import Heroimg from './Heroimg';
import Cardsui from './Cardsui';
import AnotherPage from './Cardsui2';
import Announcements from './Announcements';
import frontPage from './assets/images/frontPage.png';
import strongwoman from './assets/images/strongwoman.jpg';



export default function Main(){
  return(
    <main>
    <section className='hero-page'>
      <div id='heroImage'>
      <Heroimg 
      title="JUSTICE BEGINS WHERE INEQUALITY ENDS" 
      img={frontPage} alt="loading"/>
      </div>
      <div id='cardsPageone'>
      <Cardsui/>
      </div>
    </section>
  
    <section className='second-page'>
      <div id='cardPagetwo'>
      <AnotherPage/>
      </div>
    </section>

    <section className='third-page'>
      <div id='thirdImage'>
      <Heroimg img={strongwoman}/>
      </div>
      <div id='thirdpagetext'>
        <Announcements/>
      </div>
    </section>
    </main>
  )
>>>>>>> origin/update02
}