import "./forms.css";
// eslint-disable-next-line no-unused-vars
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegUser, FaLock } from "react-icons/fa6";
import Logo from "../../components/logo/Logo";
import { GlobalContext } from "../../context/context";

export default function Signup() {
  useNavigate();
  const {
    isSignup,
    switchForm,
    signupData,
    setSignupData,
    loginData,
    setLoginData,
    handleSignup,
    handleLogin,
    error,
  } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (isSignup) {
      setSignupData({ ...signupData, [name]: value });
    } else {
      setLoginData({ ...loginData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSignup) {
      await handleSignup();
    } else {
      await handleLogin();
    }
  };

  return (
    <div className="form">
      <div className="form-wrapper">
        <Logo />
        <div className="form-container">
          <h1 className="form-title">{isSignup ? "Sign Up" : "Sign In"}</h1>
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
                  placeholder="Enter email"
                  value={isSignup ? signupData.email : loginData.email}
                  onChange={handleChange}
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
                  placeholder=""
                  value={isSignup ? signupData.password : loginData.password}
                  onChange={handleChange}
                />
              </div>
            </div>
            {isSignup && (
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
                    value={signupData.confirmPassword}
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              {isSignup ? "Create Account" : "Log In"}
            </button>
            <p>Terms and conditions apply</p>
            <p>
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchForm} className="link">
                {isSignup ? "Log in" : "Sign up"}
              </span>
            </p>
            {error && (
              <div className="error-message">
                <ul className="error-list">
                  <li>{error}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
