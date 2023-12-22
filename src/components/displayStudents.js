import React, { useState } from "react";
import axios from "axios";
import Students from "./students";
import LoginForm from "./loginForm";

function DisplayStudents() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const fetchData = async () => {

    try {

      const response = await axios.get('http://localhost:4000/api/students');
      setData(response.data);
      setLoading(false);

    } catch (error) {

      console.error(error);
      setError('Error fetching student data');
      setLoading(false);

    }

  };

  // Checks if Password is Correct
  const handleLogin = (password) => {

    // Set Admin Password
    const adminPassword = 'admin123';

    if (password === adminPassword) {

      setLoggedIn(true);
      fetchData(); // Fetch data after login

    } 
    
    else {

      alert('Invalid password');

    }

  };

  return (

    <div>

      {loggedIn ? (

        <div>

          {/* Loading Screen and Error Checking */}
          <h2>Current Students</h2>
          {loading && <p>Loading...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && !error && <Students myStudents={data}></Students>}

        </div>

      ) : (

        <LoginForm onLogin={handleLogin} />

      )}

    </div>

  );

}

export default DisplayStudents;