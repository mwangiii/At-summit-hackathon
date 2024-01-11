import { Link } from 'react-router-dom';
import React from 'react';
import AdminImage from './assets/images/Adminimage.jpeg';
import './assets/css/Admin.css';

export default function Admin() {
  return (
    <>
      <div id="adminPage">
        <h1 id='adminHeading'> Welcome back Admin.We have been expecting you! </h1>

        <div className='adminButtonContainer'>
          <div className='adminButton'>
            <img className='adminImage' src={AdminImage} alt="loading" />
            <button className='addButton'>Add Volunteers</button>
          </div>

          <div className='adminButton'>
            <img className='adminImage' src={AdminImage} alt="loading" />
            <button className='addButton'>
                <Link to="/add-story">Add Heroin Story</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
