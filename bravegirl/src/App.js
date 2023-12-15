import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';

import Donate from './Donate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';


// function that returns the landing page
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/donate' element={<Donate/>}/>
          {/* <Route path='/Heroin' element={<Heroin/>}/>
          <Route path='/donate' element={<Donate/>}/> */}
      </Routes>   
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
