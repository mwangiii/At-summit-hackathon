import './App.css';
import Stories from './stories';
import Footer from './Footer';
import NavBar from './NavBar';
// import strongwoman from './assets/images/strongwoman.jpg';
// import VolunteerForm from './volunteer';

// function that returns the landing page
function App () {
  return (
    <>
      <header>
        <div>
          <NavBar />
        </div>
      </header>
      <body>
        <section className='landing-page'>
        </section>
        <section className='story-page'>
          <Stories />
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
