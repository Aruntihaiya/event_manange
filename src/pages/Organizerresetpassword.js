import React, {useState} from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import { BsArrowLeft, BsFillLockFill } from "react-icons/bs";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
export default function Organizerresetpassword() {
    const navigate = useNavigate();
    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const showToastMessageone = (data) => {
      toast.error(data, {
        position: toast.POSITION.TOP_CENTER,
      });
    };
    const showToastMessage = (data) => {
      toast.success(data, {
        position: toast.POSITION.TOP_CENTER,
      });
    };
    const handleChange = (e) => {
      const updatedFields = {
        ...fields,
        [e.target.name]: e.target.value,
      };
      setFields(updatedFields);
    };
  
    const submitUserRegistrationForm = (e) => {
      e.preventDefault();
      if (validateForm()) {
        setFields({
          emailid: '',
          otp:'',
          password:'',

        });
        // alert('Form submitted');
        apicalling()
      }
    };
    const apicalling = () => {
      axios.post("http://192.168.29.28:8080/api/public/merchant/resetpassword",{
        email: fields.emailid,
        otp: fields.otp,
        password: fields.password
    })
      .then((response) => {
        console.log(response,"rse......" )
        if (response.status === 200) {
          showToastMessage(response.data.message);
          navigate('/Organizersignin')
        }
     
      }).catch((error)=> {
        if (error.response.status === 422) {
          showToastMessageone(error.response.data.message)
        }
        console.log(error.response.data)
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
    if (!fields['otp']) {
        formIsValid = false;
        newErrors['otp'] = '*Please enter your OTP.';
      }
    if (!fields['password']) {
        formIsValid = false;
        newErrors['password'] = '*Please enter your password.';
      }
        if (typeof fields['password'] !== 'undefined') {
        const pattern = new RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/);
        if (!pattern.test(fields['password'])) {
          formIsValid = false;
          newErrors['password'] = '*Password must be 8 to 16 characters and contain at least one digit and one special character';
        }
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
        <div className="account-area mt-5">
          <div className="section-header-3">
              {/* <p ><BsFillLockFill className='forget-pass-icon'/></p> */}
            <span className="cate">Reset Your Password? Organizer</span>
            {/* <h5 className="title-forget">Enter Your Email And We'll Send You a Link To Rest Your Password </h5> */}
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
              <label className='label-section label-sign-in'>OTP<span>*</span></label>
              <span className="login-user-demo">
                    <MdEmail />
                  </span>
              <input type="text" placeholder="Enter Your OTP" name="otp" value={fields.otp} onChange={handleChange} />
              <div className="errorMsg">{errors.otp}</div>
            </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12}>
              <div className="form-group">
              <label className='label-section label-sign-in'>New Password<span>*</span></label>
              <span className="login-user-demo">
                    <BsFillLockFill />
                  </span>
              <input type={passwordShown ? "text" : "password"} placeholder="Enter Your New Password" name="password" value={fields.password} onChange={handleChange} />
              <span className="password">
                      <i onClick={togglePasswordVisiblity}>{eye}</i>
                    </span>
              <div className="errorMsg">{errors.password}</div>
            </div>
              </Col>
            </Row>
              <div className='login-but-box'>
              <Button className='login-butt' type="submit">SUBMIT</Button>
              </div>
          </form>
          <div className='back-to-home'><span><BsArrowLeft/></span><NavLink to="/Organizersignin">Back To Login</NavLink></div>
        </div>
    </Container>
  </section>
  )
}
