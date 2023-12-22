import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ModifyStudent() {

  const [idNumber, setIdNumber] = useState('');
  const [student, setStudent] = useState(null);

  const [updatedStudent, setUpdatedStudent] = useState({

    name: '',
    course: '',
    picture: '',
    dateOfBirth: '',
    expiryDate: '',

  });

  const handleSearch = () => {

    axios.get(`/api/students/${idNumber}`)
    
      .then((response) => {

        setStudent(response.data);
        setUpdatedStudent(response.data);

      }) .catch((error) => {

        console.error(error);

      });

  };

  const handleUpdate = () => {

    axios.put(`/api/students/${idNumber}`, updatedStudent)

      .then((response) => {

        console.log(response.data);
        // Update the student state with the updated information
        setStudent(response.data);

      }).catch((error) => {

        console.error(error);

      });

  };

  useEffect(() => {

    if (student) {

      setUpdatedStudent(student);

    }

  }, [student]);

  return (

    <div>
      
      <h2>Modify Student</h2>

      <div>
        <label>Enter ID Number:</label>
        <input type="text" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>

      {student && (
        <div>
          <h3>Student Information</h3>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={updatedStudent.name}
              onChange={(e) => setUpdatedStudent({ ...updatedStudent, name: e.target.value })}
            />
          </div>

          <div>
            <label>Course:</label>
            <input
              type="text"
              value={updatedStudent.course}
              onChange={(e) => setUpdatedStudent({ ...updatedStudent, course: e.target.value })}
            />
          </div>

          <div>
            <label>Picture:</label>
            <input
              type="text"
              value={updatedStudent.picture}
              onChange={(e) => setUpdatedStudent({ ...updatedStudent, picture: e.target.value })}
            />
          </div>

          <div>
            <label>Date of Birth:</label>
            <input
              type="text"
              value={updatedStudent.dateOfBirth}
              onChange={(e) => setUpdatedStudent({ ...updatedStudent, dateOfBirth: e.target.value })}
            />
          </div>

          <div>
            <label>Expiry Date:</label>
            <input
              type="text"
              value={updatedStudent.expiryDate}
              onChange={(e) => setUpdatedStudent({ ...updatedStudent, expiryDate: e.target.value })}
            />
          </div>

          <button onClick={handleUpdate}>Update</button>
        </div>

      )}

    </div>

  );

}