import React, { useState } from "react";

function LoginForm({ onLogin }) {

  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    onLogin(password);

  };

  return (

    <div className="login-form-container">

      <form onSubmit={handleSubmit}>
        <label className="login-form-input">
          Please Enter Administrator Password
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-form-input"
          />
        </label>
        <br />
        <button type="submit" className="login-form-button">Submit</button>
      </form>
      
    </div>

  );

}

export default LoginForm;