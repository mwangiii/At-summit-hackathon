import './App.css';
import Heroimg from './Heroimg';
import Footer from './Footer';
import Cardsui from './Cardsui';
// import Cardsui2 from './Cardsui';
// import redhads from './assets/images/handsondeck.jpg';
import strongwoman from './assets/images/strongwoman.jpg';
import NavBar from './NavBar';

import CardsPagetwo from './Cardsui2';
// import trialpic from './trialpic.jpg';
// import samburugirls from './assets/images/samburugirls.jpg';
// import pic from './assets/images/pic.avif';
// import speakup from './assets/images/thescreamingwoman.jpg';
import enlightened from './assets/images/enlightened.jpg';


// function that returns the landing page
function App() {
  return (
    <>
    <header>
      <div>
        <NavBar/>
      </div>
    </header>
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
      <CardsPagetwo/>
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
    <footer>
      <div className='footer'>
        <Footer/>
      </div>
    </footer>
    </>
  )
}

export default App;
