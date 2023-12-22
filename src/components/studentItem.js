import Card from 'react-bootstrap/Card';

function StudentItem(props) {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
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
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StudentItem;