import React, { useState } from 'react';
import './assets/css/Volunteer.css';
import Heroimage from './components/Heroimg';
import strongwoman from './assets/images/strongwoman.jpg';
import Swal from 'sweetalert2';


const VolunteerForm = ({ isProfessional }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    availability: '',
    skills: '',
    interests: '',
    profession: '',
    opportunity: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const validateForm = () => {
    if (!formData || typeof formData !== 'object') {
      alert('Form data is missing or not an object.');
      return false;
    }
  
    const name = formData.name?.trim();
    // const secondName = formData.secondName?.trim();
    const email = formData.email?.trim();
    // const date = formData.date?.trim();
    const phone = formData.phone?.trim();
    const profession = formData.profession?.trim();
  
    if (!name || !email || !phone || !profession) {
      alert('Please fill in all required fields.');
      return false;
    }
  
    return true; // Form is valid
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      document.body.classList.add('overlay');

      // Make the API call
      const response = await fetch('http://localhost:3000/api/v1/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // If the API call was successful, show the success message
        Swal.fire({
          title: 'Thank you for your interest!',
          text: 'We will get back to you shortly.',
          customClass: {
            popup: 'custom-popup-class',
            title: 'custom-title-class',
            content: 'custom-content-class',
            confirmButton: 'custom-confirm-button-class',
          },
          showConfirmButton: true
        });
      } else {
        // If the API call failed, show an error message
        Swal.fire({
          title: 'Error',
          text: 'An error occurred while saving the form data.',
          icon: 'error',
        });
      }

      // Remove the overlay
      document.body.classList.remove('overlay');
    }
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
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="firstName"
            name="name"
            autoComplete='first name'
            value={formData.name}
            onChange={handleChange}
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
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="state">State</label>
          <input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
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
