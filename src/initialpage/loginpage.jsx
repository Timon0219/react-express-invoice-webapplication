/**
 * Signin Firebase
 */

import React, { useState, useCallback } from 'react';
import { Helmet } from "react-helmet";
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import {
  FacebookLoginButton,
  GoogleLoginButton,
  MicrosoftLoginButton,
  TwitterLoginButton
} from "react-social-login-buttons";

import { Applogo } from '../Entryfile/imagepath.jsx'

import { userActions } from '../store/actions'

const Loginpage = () => {
  const dispatch = useDispatch()

  // component states
  const [submitted, setSubmitted] = useState(false)
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const { email, password } = state;
  // form handlers
  const loginclick = useCallback(
    () => {
      // this.props.history.push("/maroon/app/main/dashboard")
      setSubmitted(true);
      if (email && password) {
        dispatch(userActions.login(email, password));
      }
    },
    [email, password],
  )

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target
      setState(prevState => ({
        ...prevState,
        [name]: value
      }))
    },
    [],
  )

  // render
  return (


    <div className="main-wrapper">
      <Helmet>
        <title>Login - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        {/* <a href="/purple/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a> */}
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <a href="/purple/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Email Address</label>
                  <input onChange={handleChange} className="form-control" type="text" name="email" />
                  {submitted && !email &&
                    <div className="text-danger">Email is required</div>
                  }
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                    <div className="col-auto">
                      <a className="text-muted" href="/purple/forgotpassword">
                        Forgot password?
                        </a>
                    </div>
                  </div>
                  <input onChange={handleChange} className="form-control" type="password" name="password" />
                  {submitted && !password &&
                    <div className="text-danger">Password is required</div>
                  }
                </div>
                <div className="form-group text-center">
                  <a className="btn btn-primary account-btn" onClick={loginclick}>
                    Login</a>
                  <div className="row social-button-wrapper">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <GoogleLoginButton onClick={() => { alert("Google") }}>
                        <span>Google</span>
                      </GoogleLoginButton>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <TwitterLoginButton onClick={() => alert("Twitter")}>
                        <span>Twitter</span>
                      </TwitterLoginButton>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <MicrosoftLoginButton onClick={() => alert("Microsoft")}>
                        <span>Microsoft</span>
                      </MicrosoftLoginButton>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <FacebookLoginButton onClick={() => alert("Facebook")}>
                        <span>Facebook</span>
                      </FacebookLoginButton>
                    </div>
                  </div>
                </div>
                <div className="account-footer">
                  <p>Don't have an account yet?  <a href="/purple/register">Register</a></p>
                </div>
              </form>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Loginpage;
