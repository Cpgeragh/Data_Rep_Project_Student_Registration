import React, { useState } from "react";
import axios from "axios";

function StudentRegistrationForm() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [picture, setPicture] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Name: " + name +
      " Course: " + course +
      " ID Number: " + idNumber);

    const student = {
      name: name,
      course: course,
      picture: picture,
      idNumber: idNumber,
      dateOfBirth: dateOfBirth,
      expiryDate: expiryDate,
    };

    axios.post('http://localhost:4000/api/student', student)
      .then(response => {
        console.log(response.data);
        // You may want to redirect the user or perform other actions upon successful submission
      })
      .catch(error => {
        console.error(error);
        // Handle error, show a message, etc.
      });
  }

  return (
    <div>
      <h2>Hello from Create Component!</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Course: </label>
          <input
            type="text"
            className="form-control"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>ID Number: </label>
          <input
            type="text"
            className="form-control"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Picture URL: </label>
          <input
            type="text"
            className="form-control"
            value={picture}
            onChange={(e) => setPicture(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Date of Birth: </label>
          <input
            type="text"
            className="form-control"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Expiry Date: </label>
          <input
            type="text"
            className="form-control"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="Register Student" />
        </div>
      </form>
    </div>
  );
}

export default StudentRegistrationForm;