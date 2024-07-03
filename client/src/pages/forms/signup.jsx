import "./forms.css";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/context";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser, FaLock } from "react-icons/fa6";

export default function Signup() {
  const { signupData, setSignupData } = useContext(GlobalContext);
  const [, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/api/signup", {
        email: signupData.email,
        password: signupData.password,
        confirmPassword: signupData.confirmPassword,
      });
      const result = response.data;
      if (result) {
        Navigate("/accounts/login");
        console.log("user created successfully");
      }
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
          <h1 className="form-title">Sign Up</h1>
          <p>Get started with us</p>
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
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="input-container">
              <label className="form-label" htmlFor="passowrd">
                Password
              </label>
              <div className="input-wrapper">
                <FaLock size={16} className="user-icon icon" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-input"
                  placeholder=""
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="input-container">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <div className="input-wrapper">
                <FaLock size={16} className="user-icon icon" />
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-input"
                  placeholder=""
                  onChange={(e) =>
                    setSignupData({
                      ...signupData,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              create account
            </button>
            <p>terms and conditions apply</p>
            <p>
              Already have an account?{" "}
              <Link to="/accounts/login" className="link">
                Log in
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
