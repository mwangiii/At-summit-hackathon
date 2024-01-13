import './assets/css/App.css';
import NavBar from './NavBar';
import Footer from './Footer';
import Volunteer from './VolunteerPage';
// import Donate from './DonatePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Payment from './Paymentui';
import Main from './Main';
import HeroinList from './Heroins';
import Admin from './Admin';
import AddStory from './components/Addstorypage';

// function that returns the landing page
function App () {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/donate' element={<Volunteer isProfessional />} />
          <Route path='/volunteer' element={<Volunteer isProfessional />} />
          <Route path='/heroins' element={<HeroinList />} />
          <Route path='About us' element={<Main />} />
          <Route path='Admin' element={<Admin />} />
          <Route path='/add-story' element={<AddStory />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
