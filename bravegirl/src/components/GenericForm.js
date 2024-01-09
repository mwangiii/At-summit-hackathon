import React from "react";
import './GenericForm.css';


// a form component that can be used to create a new user or edit an existing user

const GenericForm = (props) => {
  return (
    <div className="GenericForm">
      <h2>{props.title}</h2>
      <form onSubmit={props.handleSubmit}>
      <label>
          First Name:
          <input type="text" name="firstName" id=""
          />
        </label>
           <label>
          Last Name:
          <input type="text" name="lastName" id=""
          />
        </label>
        <label>
          Email:
          <input type="text" name="email" id=""
          />
        </label>
        <label>
          choose donation amount:
          <input type="number" name="ammount" id=""
          />
        </label>
        <button type="submit"> Send</button>
      </form>
    </div>
  );
}

export default GenericForm;