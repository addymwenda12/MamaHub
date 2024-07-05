import { useContext } from "react";
import Logo from "../../components/logo/Logo";
import "./forms.css";
import { Link, useNavigate} from "react-router-dom";
import { GlobalContext } from "../../context/context";

export default function Form() {
  const {isSignup,setIsSignUp} = useContext(GlobalContext)
  const navigate = useNavigate()

  const changeForm=()=>{
    setIsSignUp(isSignup ? false : true)
    navigate('/account')
  }

  return (
    <div className="form">
      <div className="form-wrapper">
        <Logo/>
        <div className="form-container">
          <h1 className="form-title">Sign Up</h1>
          <p>Get started with us</p>
          <div className="form-input-container">
            <div className="wrapper">
              <img
                src="../../images/icons/devicon--google.svg"
                alt="google-icon"
                width={24}
                height={24}
              />
              <span>Continue with Google</span>
            </div>
            <div className="wrapper">
              <img
                src="../../images/icons/logos--apple.svg"
                alt="apple-icon"
                width={24}
                height={24}
              />
              <span>Continue with Apple</span>
            </div>
            <Link to={'/account'} className="toSignup">
                <div className="wrapper">
                  <span>Continue with Email</span>
                </div>
            </Link>
            <p>terms and conditions apply</p>
            <p>
              Already have an account?{" "}
              <span onClick={changeForm} className="link">
                Log in
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
