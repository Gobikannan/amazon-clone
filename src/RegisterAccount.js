import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./RegisterAccount.css";
import { auth } from "./firebase";
import Loader from "react-loader-spinner";

function RegisterAccount() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authResp) => {
        // if successfully created a new user
        history.push("/");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => setLoading(false));
  };

  const signin = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  return (
    <div className="register">
      <Link to="/">
        <img
          className="register__logo"
          alt="Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amzon_logo.svg.png"
        />
      </Link>
      <div className="register__container">
        <h1>Register</h1>
        <form>
          <h5>Full Name</h5>
          <input
            type="text"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={handleRegister}
            className="register__registerButton"
          >
            {!loading && "Register"}
            {loading && <Loader type="ThreeDots" color="#000" height={25} />}
          </button>
        </form>
        <p>Already have an account?</p>
        <button className="register__signInButton" onClick={signin}>
          Sign In
        </button>
      </div>
    </div>
  );
}

export default RegisterAccount;
