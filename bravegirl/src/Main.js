import React from 'react';
import Heroimg from './Heroimg';
import enlightened from './assets/images/enlightened.jpg';
import strongwoman from './assets/images/strongwoman.jpg';
import Cardsui from './Cardsui';
import AnotherPage from './Cardsui2';
import './App.css';



export default function Main(){
  return(
    <main>
    <section className='hero-page'>
      
      <div id='heroImage'>
      <Heroimg title="JUSTICE BEGINS WHERE INEQUALITY ENDS" img={enlightened} alt="loading"/>
      </div>
      <div id='cardsPageone'>
      <Cardsui/>
      </div>
    </section>
    <section className='second-page'>
      <div id='secondImage'>
      </div>
      <div id='cardPagetwo'>
      <AnotherPage/>
      </div>
    </section>
    <section className='third-page'>
      <div id='thirdImage'>
      <Heroimg img={strongwoman}/>
      </div>
      <div id='thirdpagetext'>
        <div className='announcements'>
          <h1>ANNOUNCEMENTS</h1>
          <h4>LATEST EVENTS</h4>
          <span>
            Lorem21 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </span>
        </div>
        <div className='announcements'>
          <h4>LATEST EVENTS</h4>
          <span>
            Lorem21 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </span>
        </div>
        <div className='announcements'>
          <h4>LATEST EVENTS</h4>
          <span>
            Lorem21 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </span>
        </div>
        <div className='announcements'>
          <h4>LATEST EVENTS</h4>
          <span>
            Lorem21 ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          </span>
          </div>
          </div>
    </section>
    </main>
  )
}