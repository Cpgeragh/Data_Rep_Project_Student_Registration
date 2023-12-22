import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function StudentItem(props) {

  const formatDate = (dateString) => {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(dateString).toLocaleDateString(undefined, options);

  };

  const handleDelete = async () => {

    try {

      /// Error checking
      console.log('Student ID:', props.myStudent.idNumber);
      await axios.delete(`http://localhost:4000/api/students/${props.myStudent.idNumber}`);

    } catch (error) {

      console.error(error);
      // Handle error, show a message, etc.

    }

  };

  return (

    // Display Student Information in a Card, Three Students per Row
    <div className="student-container">

      <Card className="student-card">

        <Card.Header className="student-card">{"Student"}</Card.Header>

        <Card.Body>

          <blockquote className="blockquote mb-0">
            <img src={props.myStudent.picture} alt="Image Not Found" style={{ width: '150px', height: '180px' }}/>

            <footer>
              <br />

              <p>Name: {props.myStudent.name}</p>
              <p>ID Number: {props.myStudent.idNumber}</p>
              <p>Course: {props.myStudent.course}</p>
              <p>Date of Birth: {formatDate(props.myStudent.dateOfBirth)}</p>
              <p>Expiry Date: {formatDate(props.myStudent.expiryDate)}</p>
              <Button variant="danger" onClick={handleDelete}>Delete</Button>

            </footer>

          </blockquote>

        </Card.Body>

      </Card>

    </div>

  );

}

export default StudentItem;