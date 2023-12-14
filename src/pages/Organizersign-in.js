import React, { useState } from 'react';
import { Row, Col, Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaRegEye, FaRegEyeSlash, FaUserAlt } from 'react-icons/fa';
import { BsArrowLeft, BsFillLockFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';

export default function Organizersignin() {
  const navigate = useNavigate();
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [user ,setuser] = useState('')
  const [passwordShown, setPasswordShown] = useState(false);

  const handleChange = (e) => {
    const updatedFields = {
      ...fields,
      [e.target.name]: e.target.value,
    };
    setFields(updatedFields);
  };

  const showToastMessage = (data) => {
    toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const showToastMessageone = (data) => {
    toast.error(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const responseGoogle = (response) => {
    console.log(response.credential, 'response');
      const decode_data = jwtDecode(response.credential)
      console.log(decode_data.email,'data')
      setuser(decode_data.email)
  };

  const submitUserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFields({
        emailid: user,
        password: '',
      });
      apicalling();
    }
  };

  const apicalling = () => {
    axios
      .post('http://192.168.29.28:8080/api/public/merchant/login', {
        email: fields.emailid,
        password: fields.password,
      })
      .then((response) => {
        console.log(response, 'rse......');

        if (response.status === 200) {
          showToastMessage(response.data.message);
          localStorage.setItem('organizertoken', JSON.stringify(response.data.data.token));
          localStorage.setItem('organizeremail', JSON.stringify(fields.emailid));
          localStorage.setItem('organizerpassword', JSON.stringify(fields.password));
          navigate('/');
        }
      })
      .catch((error) => {
        if (error.response.status === 422) {
          showToastMessageone(error.response.data.message);
        }
      });
  };

  const validateForm = () => {
    let newErrors = {};
    let formIsValid = true;
    if (!fields['emailid']) {
      formIsValid = false;
      newErrors['emailid'] = '*Please enter your email-ID.';
    }

    if (typeof fields['emailid'] !== 'undefined') {
      const pattern = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
      if (!pattern.test(fields['emailid'])) {
        formIsValid = false;
        newErrors['emailid'] = '*Please enter a valid email-ID.';
      }
    }
    if (!fields['password']) {
      formIsValid = false;
      newErrors['password'] = '*Please enter your password.';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const togglePasswordVisiblity = () => {
    setPasswordShown((prev) => !prev);
  };

  const eye = passwordShown ? <FaRegEye /> : <FaRegEyeSlash />;

  return (
    <section className="account-section bg_img sign-in-w">
      <Container>
        <div className="account-area">
          <div className="section-header-3">
            <span className="cate">hello</span>
            <h2 className="title">welcome back Organizer</h2>
          </div>
          <form className="account-form" onSubmit={submitUserRegistrationForm}>
            <Row>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="form-group">
                  <label className="label-section label-sign-in">
                    Email<span>*</span>
                  </label>
                  <span className="login-user-demo">
                    <MdEmail />
                  </span>
                  <input type="text" placeholder="Enter Your Email" name="emailid" value={user}  onChange={handleChange} />
                  <div className="errorMsg">{errors.emailid}</div>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
                <div className="form-group">
                  <label className="label-section label-sign-in">
                    Password<span>*</span>
                  </label>
                  <span className="login-user-demo">
                    <BsFillLockFill />
                  </span>
                  <input type={passwordShown ? 'text' : 'password'} placeholder="Password" name="password" value={fields.password} onChange={handleChange} />
                  <span className="password">
                    <i onClick={togglePasswordVisiblity}>{eye}</i>
                  </span>
                  <div className="errorMsg">{errors.password}</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={6} xs={6}>
                <div className="forgot">
                  <input type="checkbox" className="checkbox-div" />
                  <label htmlFor="remember_me" className="rember">
                    Remember Me!
                  </label>
                </div>
              </Col>
              <Col md={6} sm={6} xs={6}>
                <div className="forgot">
                  <NavLink to="/Organizerforgetpassword">Forgot Password</NavLink>
                </div>
              </Col>
            </Row>
            <div className="login-but-box">
              <Button className="login-butt" type="submit">
                LOG IN
              </Button>
            </div>
          </form>
          <div className="other-signin-box">
            {/* <Button className="sign-with-google" type="submit">
              <span>
                <FcGoogle />
              </span>{' '}
              <span className="sign-google-title"> Sign in with google </span>
            </Button> */}
          
     <GoogleLogin onSuccess={responseGoogle}   onError={(error) => console.error('Google login error:', error)}
 />

        

          
          </div>
          <div className="option mt-3">
            <NavLink to="/Organizersignup">sign up now</NavLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
