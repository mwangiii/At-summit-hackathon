import React, { useState } from 'react';

const VolunteerForm = ({ isProfessional }) => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    profession: '',
    otherProfession: '', // New field for specifying other profession
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="volunteer-form">
      <div className="form-group">
        <label htmlFor="name">Enter Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Choose Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      {isProfessional && (
        <div className="form-group">
          <label htmlFor="profession">Profession</label>
          <select
            id="profession"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
          >
            <option value="">Select a Profession</option>
            <option value="doctor">Doctor</option>
            <option value="engineer">Engineer</option>
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
        </div>
      )}
    </div>
  );
};

export default VolunteerForm;
