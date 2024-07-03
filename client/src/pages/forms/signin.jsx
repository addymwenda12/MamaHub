/* eslint-disable react/no-unescaped-entities */
import "./forms.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser, FaLock } from "react-icons/fa6";

export default function Login() {
  const { loginData, setLoginData, user, setUser } = useContext(GlobalContext);
  const [, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/login", {
        email: loginData.email,
        password: loginData.password,
      });
      const result = response.data;
      if (result) {
        setUser(result);
      }
      if (result && user) {
        Navigate("/");
      }
      console.log(user);
    } catch (err) {
      setLoading(false);
      console.log(err.response.data.message);
      setError(err.response.data.message);
    }
    setLoading(false);
  };

  return (
    <div className="form">
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <img src="../../images/logo.png" alt="logo" width={40} height={40} />
          <span>mamahub</span>
        </div>
        <div className="form-container">
          <h1 className="form-title">Sign in</h1>
          <div className="form-input-container">
            <div className="input-container">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <div className="input-wrapper">
                <FaRegUser size={16} className="user-icon icon" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="enter email"
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="input-container">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <div className="input-wrapper">
                <FaLock size={16} className="user-icon icon" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-input"
                  placeholder="enter password"
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
            </div>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              log in
            </button>
            <p className="t&c">terms and conditions apply</p>
            <div className="continueWrapper">
              <p className="continueWith">Or Continue with:</p>
              <div className="icon-btns">
                <img
                  src="../../images/icons/devicon--google.svg"
                  alt="google-icon"
                  width={22}
                  height={20}
                />
                <img
                  src="../../images/icons/logos--apple.svg"
                  alt="apple-icon"
                  width={22}
                  height={24}
                />
              </div>
            </div>
            <p>
              Don't have an account?
              <Link to="/accounts/create-account" className="link">
                Sign up
              </Link>
            </p>
            {error ? (
              <div className="error-message">
                <ul className="error-list">
                  {error.map((errorItem, index) => (
                    <li key={index}>{errorItem}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
