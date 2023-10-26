import './App.css';
import {getFooterCopy, getFullYear} from './utils';
import trialpic from './trialpic.jpg';

// function that returns the landing page
function App() {
  return (
    <>
    <header>
      <div className='App-header'>
        <h1>BraveGirls</h1>
        <nav>Donate</nav>
        <nav>Heroines</nav>
        <nav>Volunteer</nav>
        <nav>about us</nav>
      </div>
    </header>
    <body>
    <section>
      <img src={trialpic} alt="trialpic"/>
    </section>
    <section>
      <div className='Stories-page'>
        <div className='Stories-card'>
          <p>Card Content 1</p>
        </div>
        <div className='Stories-card'>
          <p>Card Content 2</p>
        </div>
        <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>
       <div className='Stories-card'>
          <p>Card Content 3</p>
        </div>      
      </div>
    </section>


    <section>
      <p>page3</p>
    </section>
    </body>
      <div className='hr-bottom' />
      <footer className='App-footer'>
        <p>Copyright {getFullYear()} &ndash; {getFooterCopy(true)}</p>
      </footer>
    </>
  )
}

export default App;
