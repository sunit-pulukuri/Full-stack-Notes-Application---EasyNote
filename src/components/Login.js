import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = (props) => {
  localStorage.setItem("trial", "trial23");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let history = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // localStorage.setItem("trial","trial23");
    console.log("this is what json gives in login" + json);
    if (json.success) {
      //redirect
      //save authtoken
      localStorage.setItem("token", json.authToken);
      history("/");
      props.showAlert("Logged in successfully", "success");
      console.log("Logged in successfully");
    } else {
      props.showAlert(
        "Check your credentials or create a new account",
        "danger"
      );
    }
  };
  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="small-middle-container">
        <div className="container d-flex align-items-center justify-content-center my-4">
          <h1 style={{ color: "black" }}>Login to easyNote :)</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                value={credentials.email}
                onChange={onChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <strong>Password</strong>
              </label>
              <input
                value={credentials.password}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="password"
                onChange={onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
          <div className="container display-7 d-flex justify-content-center align-items-center my-3">
            <Link style={{ fontSize: "24px" }} to="/signup">
              Don't have an account? Sign Up to easyNote!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
