import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import '../assets/css/auth.css'
export default function Auth() {
  const [onShow, setOnShow] = useState(true);

  const changeStatus = setOnShow(onShow);

  if(onShow) {
  return (
    <div>
      <section className="forms-container">
        <Login/>
        <Signup />
      </section>
      <NewLetter />
    </div>
  );
  } else {
    r
  return (
    <div>
      <section className="forms-container">
        <Signup />
      </section>
      <NewLetter />
    </div>
  );
  }
}

export const NewLetter = () => {
  return (
      <section id="news-letter" className="section-p1 section-m1">
        <div className="news-text">
          <h4>Sign up for newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and
            <span> special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your email address" />
          <button>Sign Up</button>
        </div>
      </section>

  )
}

export const Login = () => {
  return (
    <div className="form login">
      <div className="form-content">
        <header>Login</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
            <i className="bx bx-hide eye-icon" />
          </div>
          <div className="form-link">
            <a href="#" className="forgot-pass">
              Forgot password?
            </a>
          </div>
          <div className="field button-field">
            <button>Login</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Don't have an account?
            <Link to={"#"} className="link signup-link" onClick={}>Sign up</Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export const Signup = () => {
  return (
    <div className="form signup">
      <div className="form-content">
        <header>Create account</header>
        <form action="#">
          <div className="field input-field">
            <input type="email" placeholder="Email" className="input" />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
            <i className="bx bx-hide eye-icon" />
          </div>
          <div className="field input-field">
            <input
              type="password"
              placeholder="Password"
              className="password"
            />
            <i className="bx bx-hide eye-icon" />
          </div>
          <div className="field button-field">
            <button>Create</button>
          </div>
        </form>
        <div className="form-link">
          <span>
            Already have an account?
            <a href="#" className="link signup-link">
              Log in
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}
