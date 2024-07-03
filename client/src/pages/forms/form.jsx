import "./forms.css";
import { Link} from "react-router-dom";

export default function Form() {
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
            <Link to={'/accounts/create-account'} className="toSignup">
                <div className="wrapper">
                  <span>Continue with Email</span>
                </div>
            </Link>
            <p>terms and conditions apply</p>
            <p>
              Already have an account?{" "}
              <Link to="/accounts/login" className="link">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="background"></div>
    </div>
  );
}
