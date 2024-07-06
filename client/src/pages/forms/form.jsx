import "./forms.css";
import { useContext, useState} from "react";
import axios from "axios";
import { FaRegUser, FaLock } from "react-icons/fa6";
import Logo from "../../components/logo/Logo";
import { GlobalContext } from "../../context/context";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";

const cookies = new Cookies();
const initialState = {
  email: "",
  password: "",
  confirmPassword: "",
};

export default function Signup() {
  const [form, setForm] = useState(initialState);
  const { isSignup, switchForm } = useContext(GlobalContext);
  const [, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate()


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form);
  };

  const reloadWindow=()=>{
    isSignup ? 
    navigate('/create-profile')
    : navigate('/')
    window.location.reload()
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email,password, confirmPassword } = form;

    try {
      setLoading(true);
      const response = await axios.post(
        `http://localhost:5000/api/${isSignup ? "signup" : "login"}`,
        {
          email,
          password,
          confirmPassword,
        }
      );
      const result = await response.data

      cookies.set("token", result.token);
      cookies.set("email", result.email);
      cookies.set("userId", result.userId);
      if (isSignup) {
        cookies.set("hashedPassword",result.hashedPassword);
      }

    reloadWindow()

    } catch (err) {
      setLoading(false);
      console.log(err);
      setError(err.response?.data?.message || err.name);
    }
    setLoading(false);
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
                  placeholder="enter email"
                  onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>
              </div>
            )}
            <button type="submit" className="submit-btn" onClick={handleSubmit}>
              {isSignup ? "create account" : "log in"}
            </button>
            <p className="form-text">terms and conditions apply</p>
            <p className="form-text">
              {isSignup ? "Already have an account?" : "Don't have an account?"}
              <span onClick={switchForm} className="link">
                {isSignup ? "Log in" : "sign up"}
              </span>
            </p>
            {error ? (
              <div className="error-message">
                {error}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
