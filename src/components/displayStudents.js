import { useEffect, useState } from "react";
import axios from "axios";
import Students from "./students"; // Assuming you have a component named Students

function DisplayStudents() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/api/students')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError('Error fetching student data');
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Hello from ReadStudents Component!</h2>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && <Students myStudents={data}></Students>}
    </div>
  );
}

export default DisplayStudents;