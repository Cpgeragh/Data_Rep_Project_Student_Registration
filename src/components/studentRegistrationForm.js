import React, { useState } from "react";
import axios from "axios";

function StudentRegistrationForm() {

  // Variables for Student Registration Form
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [picture, setPicture] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {

    // Prevent the Default Browser Behavior of Forms
    e.preventDefault();

    // Error Checking
    console.log("Name:", name, "Course:", course, "ID Number:", idNumber, "Picture:", picture, "Date of Birth:", dateOfBirth, "Expiry Date:", expiryDate);

    // Create a Student Object
    const student = {

      name: name,
      course: course,
      picture: picture,
      idNumber: idNumber,
      dateOfBirth: dateOfBirth,
      expiryDate: expiryDate,

    };

    // Send a POST Request to Server
    axios.post('http://localhost:4000/api/students', student)
    
      // Handle the Response from Server
      .then(response => {

        console.log(response.data);

      })

      .catch(error => {
        console.error(error);
       
      });

  }

  return (

    <div>

      <h2>Registration Form</h2>

      {/* Student Registration Form */}
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="registration-label">Name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="registration-label">Course: </label>
          <input
            type="text"
            className="form-control"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="registration-label">ID Number: </label>
          <input
            type="text"
            className="form-control"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}

          />
        </div>

        <div className="form-group">
          <label className="registration-label">Picture URL: </label>
          <input
            type="text"
            className="form-control"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="registration-label">Date of Birth: </label>
          <input
            type="text"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="registration-label">Expiry Date: </label>
          <input
            type="text"
            className="form-control"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>

        <div>

          {/* Submit Button */}
          <input type="submit" value="Register Student" className="register-button"/>

        </div>

      </form>

    </div>

  );

}

// Export Student Registration Form
export default StudentRegistrationForm;