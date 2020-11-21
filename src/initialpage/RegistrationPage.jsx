/**
 * Signin Firebase
 */

import React, { useState, useCallback } from 'react';
import { Helmet } from "react-helmet";
import { Applogo } from '../Entryfile/imagepath.jsx'


const Registrationpage = (props) => {

  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('test#123');
  const [repeatpassword, setRepeatpassword] = useState('');

  /**
   * On User Login
   */
  const onUserLogin = e => {
    e.preventDefault();

    if (email !== '' && password !== '') {
      props.signinUserInFirebase({ email, password, repeatpassword }, props.history);
    }
  }

  const onApplyJob = e => {
    e.preventDefault();
    localStorage.removeItem('jobview')
    props.history.push('/applyjob/joblist')
  }

  const { loading } = props;
  return (

    <div className="main-wrapper">
      <Helmet>
        <title>Register - HRMS Admin Template</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <a href="/purple/applyjob/joblist" className="btn btn-primary apply-btn">Apply Job</a>
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <a href="/purple/app/main/dashboard"><img src={Applogo} alt="Dreamguy's Technologies" /></a>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Create Account</h3>
              <p className="account-subtitle">Access to our dashboard</p>
              {/* Account Form */}
              <form action="/purple/app/main/dashboard">
                <div className="form-group">
                  <label>First Name</label>
                  <input name="firstName" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input name="lastName" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input name="email" className="form-control" type="email" />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input name="phone" className="form-control" type="text" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input name="password" className="form-control" type="password" />
                </div>
                <div className="form-group">
                  <label>Password Confirm</label>
                  <input name="passwordConfirm" className="form-control" type="password" />
                </div>
                <div className="form-group text-center">
                  <button className="btn btn-primary account-btn" type="submit">Create Account</button>
                </div>
                <div className="account-footer">
                  <p>Already have an account? <a href="/purple/login">Login</a></p>
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


export default Registrationpage;
