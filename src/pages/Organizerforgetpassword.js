import React, {useState} from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from "react-router-dom";
import { BsArrowLeft, BsFillLockFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import axios from "axios";
import { toast } from 'react-toastify';
export default function Organizerforgetpassword() {
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
        });
        // showToastMessage('Form submitted');
        apicalling()
      }
    };
    const apicalling = () => {
      axios.post("http://192.168.29.28:8080/api/public/merchant/forgetpassword",{
        email: fields.emailid,
    })
      .then((response) => {
        // console.log(response.status,"rse......" )
        // console.log(response.message,"damessageta......" )
        // console.log(response.data.status,"status......" )
        // console.log(response.data.data.status,"rse2......" )
        if (response.status === 200) {
          showToastMessage(response.data.message)
          navigate('/Organizerresetpassword')
        }
        // else{
        //   showToastMessageone(response.data.data.message);
        // }
     
      }).catch((error)=> {
        if (error.response.status === 422) {
          showToastMessageone(error.response.data.message)
        }
        // console.log(error.response.data)
        // console.log(error.response.data.message)

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
      setErrors(newErrors);
      return formIsValid;
    };
    
  return (
    <section className="account-section bg_img sign-in-w">
    <Container>
        <div className="account-area mt-5">
          <div className="section-header-3">
              <p ><BsFillLockFill className='forget-pass-icon'/></p>
            <span className="cate">Forget Your Password? Organizer</span>
            <h5 className="title-forget">Enter Your Email And We'll Send You a Link To Rest Your Password </h5>
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
