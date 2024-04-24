import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();

    console.log(json);
    //redirect
    //save authtoken
    localStorage.setItem("token", json.authtoken);
    history("/");
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Name
          </label>
          <input
            onChange={onChange}
            type="text"
            className="form-control"
            name="name"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            onChange={onChange}
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={onChange}
            type="password"
            className="form-control"
            id="password"
            name="password"
            minLength={4}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            onChange={onChange}
            className="form-control"
            id="confirmpassword"
            name="confirmpassword"
            minLength={4}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
