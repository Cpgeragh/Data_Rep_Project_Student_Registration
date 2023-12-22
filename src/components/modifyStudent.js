import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function ModifyStudent(props) {
  let { id } = useParams();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [picture, setPicture] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:4000/api/student/${id}`)
      .then(response => {
        const studentData = response.data;
        setName(studentData.name);
        setCourse(studentData.course);
        setPicture(studentData.picture);
        setIdNumber(studentData.idNumber);
        setDateOfBirth(studentData.dateOfBirth);
        setExpiryDate(studentData.expiryDate);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedStudent = {
      id: id,
      name: name,
      course: course,
      picture: picture,
      idNumber: idNumber,
      dateOfBirth: dateOfBirth,
      expiryDate: expiryDate,
    };

    axios.put(`http://localhost:4000/api/student/${id}`, updatedStudent)
      .then((res) => {
        console.log(res.data);
        navigate('/student-list'); // Assuming there's a route for the student list
      })
      .catch((error) => {
        console.error(error);
        // Handle error, show a message, etc.
      });
  }

  return (
    <div>
      <h2>Modify Student Information</h2>
      <form onSubmit={handleSubmit}>
        {/* Modify the form fields according to the student information */}
        {/* For example: */}
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        {/* Repeat similar blocks for other fields like course, picture, idNumber, etc. */}

        <div className="form-group">
          <input type="submit" value="Modify Student" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}