import StudentItem from "./studentItem";

function Students(props) {
  return props.myStudents.map(
    (student) => {
      return <StudentItem myStudent={student} key={student._id}></StudentItem>;
    }
  );
}

export default Students;