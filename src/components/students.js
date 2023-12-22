import StudentItem from "./studentItem";


function Students(props) {

  // Display Student Information in a Card
  return props.myStudents.map(

    (student) => {

      return <StudentItem myStudent={student} key={student._id}></StudentItem>;

    }

  );

}

// Export Students
export default Students;