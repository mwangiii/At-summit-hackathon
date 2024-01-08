import './App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Volunteer from './VolunteerPage';
import Donate from './DonatePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Payment from './Paymentui';
import Main from './Main';
import HeroinList from './Heroins';


// function that returns the landing page
function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/volunteer' element={<Volunteer isProfessional={true}/>}/>
          <Route path='/heroins' element={<HeroinList/>}/>
          </Routes>   
        <Footer/>
      </div>
    </Router>
  )
}

export default App;
