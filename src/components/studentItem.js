import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

// StudentItem Function
function StudentItem(props) {
  return (
    <div>
      {/* Utilizes Card component from react-bootstrap representing a styled card */}
      <Card>
        <Card.Header>{props.myStudent.name}</Card.Header> {/* accesses the name from the properties passed to the component */}
        <Card.Body>
          {/* HTML element used to indicate that the enclosed text is a block of a quotation from another source
                    and to visually distinguish quoted or cited text from the surrounding content */}
          <blockquote className="blockquote mb-0">
            <img src={props.myStudent.picture} alt={props.myStudent.name} /> {/* accessing the picture URL from the properties */}
            <footer>
              {props.myStudent.course} {/* accessing the course information from the properties */}
            </footer>
          </blockquote>
        </Card.Body>
        {/* button link to the edit page for the current student */}
        <Link to={`/edit/${props.myStudent._id}`} className='btn btn-primary'>Edit</Link>{' '}
        {/* The to prop is constructed using props.myStudent._id to form the URL */}
      </Card>
    </div>
  );
}

// the default export is a way to export a primary item from a module,
// and it provides flexibility in naming when importing that item into other parts of your code
export default StudentItem;