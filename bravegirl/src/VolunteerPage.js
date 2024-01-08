import React, { useState } from 'react';
import './Volunteer.css';
import { useNavigate } from 'react-router-dom';
import Heroimage from './Heroimg';
import strongwoman from './assets/images/strongwoman.jpg';


const VolunteerForm = ({ isProfessional }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    profession: '',
    otherProfession: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/Success');
    console.log('Form submitted!', formData);
  };

  return (
    <div id='volunteerPage' >
      {/* <h1 id='volunteerHeader'>Volunteer with us</h1> */}
      <div className='volunteerImg'  id='volunteerImg' >
        <Heroimage
            img={strongwoman}/>
      </div>
      <div id='volunteerForm'>
        <div className="form-group">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            autoComplete='first name'
            value={formData.firstname}
            onChange={handleChange}
          />
          <label htmlFor="name">Second Name</label>
          <input
            type="text"
            id="secondName"
            name="secondName"
            value={formData.secondname}
            onChange={handleChange}
            autoComplete='second name'
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address </label>
          <input
            type="text"
            id="email"
            name="email"
            autoComplete='email'
            value={formData.email}
            
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date of Availability</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            placeholder="Select a date"
          />
        </div>

        {isProfessional && (
          <div className="form-group">
            <label htmlFor="profession">Your Profession</label>
            <select
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
            >
              <option value="" disabled>
                Select a Profession
              </option>
              <option value="doctor">Doctor</option>
              <option value="teacher">Teacher</option>
              <option value="nurse">Nurse</option>
              <option value="lawyer">Lawyer</option>
              <option value="psychologist">Psychologist</option>
              <option value="social worker">Social Worker</option>
              <option value="Police">Police/investigator</option>
              <option value="Therapist">Therapist</option>
              <option value="other">Other</option>
            </select>
            {formData.profession === 'other' && (
              <input
                type="text"
                id="otherProfession"
                name="otherProfession"
                placeholder="Specify"
                value={formData.otherProfession}
                onChange={handleChange}
              />
            )}
            <div className="button">
            <button id='volunteerButton' type="submit" onClick={handleSubmit}>
              Submit
            </button>
            </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default VolunteerForm;
