import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Signup = (props) => {
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
    if (json.success) {
      //redirect
      //save authtoken
      localStorage.setItem("token", json.authToken);
      history("/");
      props.showAlert("Account created successfully", "success");
      console.log("SignedUp successfully");
    } else {
      props.showAlert("Invalid details", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="small-middle-container my-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              <strong>Name</strong>
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
              <strong>Email Address</strong>
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
              <strong>Password</strong>
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
              <strong>Password</strong>
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
        <div className="container display-7 d-flex justify-content-center align-items-center my-3">
          <Link style={{ fontSize: "24px" }} to="/login">
            Already have an account? Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
