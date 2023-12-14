import React,  { useState, useEffect } from 'react'
// import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Row, Col, Button, Container } from 'react-bootstrap';
import { NavLink , useNavigate } from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
import { BsArrowLeft, BsFillLockFill , BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import useForm from './useForm';
import axios from "axios";
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
export default function Signin() {
  const navigate = useNavigate();
  const [fields, setFields] = useState({});
  const [errors, setErrors] = useState({});
  const [rememberme, setrememberme] = useState(false);
  const getItem_Checked = JSON.parse(localStorage.getItem("isCheck"));
  const getItem_email = JSON.parse(localStorage.getItem("email"));
  const getItem_password = JSON.parse(localStorage.getItem("password"));

 console.log(fields['emailid'],'email')
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
  useEffect(()=>{
    if(getItem_Checked===undefined || getItem_Checked===null || getItem_Checked===false){
      setrememberme(false)
    }else{
      setFields({
        emailid: getItem_email,
        password: getItem_password,
      });
      setrememberme(true)
      // setgetuser(getItem_User);
      // setgetpassword(getItem_Password)
    }
  },[getItem_Checked])
  const submitUserRegistrationForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setFields({
        emailid: '',
        password: '',
      });
      // alert('Form submitted');
      apicalling()
    }
  };
  const apicalling = () => {
    axios.post("http://192.168.29.28:8080/api/public/login",{
      email: fields.emailid,
      password: fields.password,
  })
    .then((response) => {
      console.log(response,"rse......" )
      console.log(response.data.token,"rse......" )

      if (response.status === 200 && rememberme === true) {
        showToastMessage(response.data.message);
        localStorage.setItem(
          "token",
          JSON.stringify(response.data.data.token)
          );
          localStorage.setItem("email", JSON.stringify(fields.emailid));
          localStorage.setItem("password", JSON.stringify(fields.password));
          localStorage.setItem("isCheck", JSON.stringify(rememberme));
          navigate("/");
      }else if(response.status === 200 && rememberme===false){
        localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("isCheck");
      localStorage.setItem(
        "token",
        JSON.stringify(response.data.data.token)
        );
        navigate("/");
        // localStorage.setItem("isCheck", JSON.stringify(rememberme));
      }
      // else{
      //   showToastMessage(response.data.message);
      // }
   
    }).catch((error)=> {
      console.log(error.response.data)
      if (error.response.status === 422) {
        showToastMessageone(error.response.data.message)
      }
    })

  }

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
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = passwordShown ? (
    <FaRegEye icon={FaRegEye} />
  ) : (
    <FaRegEyeSlash icon={FaRegEyeSlash} />
  );
  
  return (
    <section className="account-section bg_img sign-in-w">
      <Container>
        {/* <div className="padding-top padding-bottom"> */}
          <div className="account-area">
            <div className="section-header-3">
              <span className="cate">hello</span>
              <h2 className="title">welcome back</h2>
            </div>
            <form className="account-form" onSubmit={submitUserRegistrationForm}>
              <Row>
                <Col lg={12} md={12} sm={12} xs={12}>
                <div className="form-group">
                <label className='label-section label-sign-in'>Email<span>*</span></label>
                <span className="login-user-demo">
                      <MdEmail />
                    </span>
                <input type="text" placeholder="Enter Your Email" name="emailid" value={fields.emailid} onChange={handleChange} />
                <div className="errorMsg">{errors.emailid}</div>
              </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                <div className="form-group">
                <label className='label-section label-sign-in'>Password<span>*</span></label>
                <span className="login-user-demo">
                      <BsFillLockFill />
                    </span>
                <input type={passwordShown ? "text" : "password"} placeholder="Password" name="password" value={fields.password} onChange={handleChange} />
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
                    <input
                      type="checkbox"
                      className='checkbox-div'
                      checked={rememberme}
                      value={rememberme}
                      onChange={(e)=>{
                        setrememberme(!rememberme)
                      }}
                    />
                    <label htmlFor="remember_me" className='rember'>Remember Me!</label>
                  </div>
                </Col>
                <Col md={6} sm={6} xs={6}>
                  <div className="forgot">
                    <NavLink to="/Forgetpassword">Forgot Password</NavLink>
                  </div>
                </Col>
              </Row>
                <div className='login-but-box'>
                <Button className='login-butt' type="submit">LOG IN</Button>
                </div>
                {/* <ToastContainer/> */}
            </form>
            <div className="option">
              Don't have an account?
               <NavLink to="/Signup">sign up now</NavLink>
            </div>
            <div className='back-to-home'><span><BsArrowLeft/></span><NavLink to="/">Back</NavLink></div>
          </div>
        {/* </div> */}
      </Container>
    </section>
  )
}
