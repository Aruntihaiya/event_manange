import React, { useState } from 'react'
import { Row, Col, Button, Container } from 'react-bootstrap';
import useForm from './useForm';
import axios from "axios";
import { toast } from "react-toastify";
import { NavLink , useNavigate} from "react-router-dom";
import { FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
import { BsArrowLeft, BsFillLockFill, BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
export default function Signup() {
  const navigate = useNavigate();
  // const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");
  // const [email, setemail] = useState("");
  // const [password, setpassword] = useState("");
  // const [confirmpassword, setconfirmpassword] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [valid, setvalid] = useState(false);
  const [mobilevalid, setmobilevalid] = useState(false);
  const [mobilevalidationerror, setmobilevalidationerror] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const { handleBlur, handleChange, values, errors, handleSubmit, resetForm, } = useForm(formRequest); //Final submit function
  const showToastMessage = (data) => {
    toast.success(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };

console.log(values.email, values.fname, values.lname, values.password, mobilenumber )
  const showToastMessageone = (data) => {
    toast.error(data, {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  function formRequest() {
    //  showToastMessage("okkkkk")

    // setButtonState(true);
    // setfname("");
    //   setemail("");
    //   setlname("");
    //   setpassword("");
    //   setconfirmpassword("");
    //   setmobilenumber("");
    axios.post("http://192.168.29.28:8080/api/public/registration",{
      firstname: values.fname,
      lastname: values.lname,
      email: values.email,
      password: values.password,
      mobile:mobilenumber,
  })

    .then((response) => {
      // if(response.data){
      if (response.data.data.status === 400) {
        showToastMessageone(response.data.data.message);
        // console.log(response.data.data.message, '4')
      }
     else if (response.data.status === 404) {
      showToastMessageone(response.data.message);
      // console.log(response.data.message)
     }
      else{
        // resetForm()
        showToastMessage(response.data.message);
        localStorage.removeItem("email");
      localStorage.removeItem("password");
      localStorage.removeItem("isCheck");
      navigate("/Signin");
      resetForm()
      setmobilenumber("")
        // console.log(response.data.message)
      }
    // }
    })
    .catch((error)=> {
      console.log(error)
     })
  }
  // const handlereset = (event) => {
  //   // alert("yes")
  //   event.preventDefault(); // 👈️ prevent page refres
  //   resetForm()
  //   // if (validate) {
  //   // setfname("");
  //   // setemail("");
  //   // setlname("");
  //   // setpassword("");
  //   // setconfirmpassword("");
  //   // setmobilenumber("");
  //   //   // alert('Form submitted');
  //   // }
  // };

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const eye = passwordShown ? (
    <FaRegEye icon={FaRegEye} />
  ) : (
    <FaRegEyeSlash icon={FaRegEyeSlash} />
  );
  const [passwordShown1, setPasswordShown1] = useState(false);
  const togglePasswordVisiblity1 = () => {
    setPasswordShown1(passwordShown1 ? false : true);
  };
  const eye1 = passwordShown1 ? (
    <FaRegEye icon={FaRegEye} />
  ) : (
    <FaRegEyeSlash icon={FaRegEyeSlash} />
  );


  const mobilevalidation = (mobile) => {
    if (!new RegExp(/^[0-9+].{6,12}$/).test(mobile)) {
      setmobilevalidationerror("Please Enter A valid Mobile Number");
      setmobilevalid(false);
    } else {
      setmobilevalidationerror("");
      setmobilevalid(true);
    }
  };
  return (
    <section className="account-section bg_img">
      <Container>
        <div className="pt-5 pb-3">
          <div className="account-area">
            <div className="section-header-3">
              {/* <span className="cate">hello</span> */}
              <h2 className="title">Sign Up Here</h2>
            </div>
            <form className="account-form" onSubmit={handleSubmit}>
              <Row>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="form-group">
                    <label className='label-section'>Full Name<span>*</span></label>
                    <span className="login-user-demo">
                      <FaUserAlt />
                    </span>
                    <input type="text"
                      placeholder="Enter Your Name"
                      name="fname"
                      value={values.fname || ""}
                      // value={fname}
                      // onChange={(event) => setfname(event.target.value)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                      autoComplete="off"
                    // autoFocus={true}
                    />
                    {/* <div className="errorMsg">{errors.username}</div> */}
                    {errors.fname && (
                      <p className="errorMsg">{errors.fname}</p>
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="form-group">
                    <label className='label-section'>Last Name<span>*</span></label>
                    <span className="login-user-demo">
                      <FaUserAlt />
                    </span>
                    <input type="text"
                      placeholder="Enter Your Last Name"
                      name="lname"
                      value={values.lname || ""}
                      // value={lname}
                      // onChange={(event) => setlname(event.target.value)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                      autoComplete="off"

                    // autoFocus={true} 
                    />
                    {/* <div className="errorMsg">{errors.lname}</div> */}
                    {errors.lname && (
                      <p className="errorMsg">{errors.lname}</p>
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="form-group">
                    <label className='label-section'>Mobile Number<span>*</span></label>
                    {/* <span className="login-user-demo">
                      <BsTelephoneFill />
                    </span> */}
                    {/* <input type="text" placeholder="Enter Your Mobile Number" name="mobileno" value={fields.mobileno} onChange={handleChange} /> */}


                    {/* <PhoneInput
                    country={"in"}
                    value={mobilenumber}
                    onChange={(phone, value) => {
                      setmobilenumber(phone);
                      mobilevalidation(phone);
                    }}
                    //  defaultErrorMessage="Please Enter Valid Number"
                    prefix="+"
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: false,
                      style: { marginLeft: "0px", width: "100%" },
                    }}
                    isValid={(validmobilenumber) => {
                      console.log(validmobilenumber);
                      if (
                        !new RegExp(/^[0-9+].{6,12}$/).test(validmobilenumber)
                      ) {
                        setvalid(false);

                        return false;
                      } else {
                        setvalid(true);

                        return true;
                      }
                    }}
                  />
                    <div className="errorMsg">{errors.mobileno}</div> */}
                    <PhoneInput
                      country={"us"}
                      value={mobilenumber}
                      onChange={(phone, value) => {
                        setmobilenumber(phone);
                        mobilevalidation(phone);
                      }}
                      //  defaultErrorMessage="Please Enter Valid Number"
                      prefix="+"
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: false,
                        style: { marginLeft: "0px", width: "100%" },
                      }}
                      isValid={(validmobilenumber) => {
                        // console.log(validmobilenumber);
                        if (
                          !new RegExp(/^[0-9+].{6,12}$/).test(validmobilenumber)
                        ) {
                          setvalid(false);

                          return false;
                        } else {
                          setvalid(true);

                          return true;
                        }
                      }}
                    />
                    <span>
                      {mobilevalid ? (
                        <></>
                      ) : (
                        <>
                          <p className="errorMsg">{mobilevalidationerror}</p>
                        </>
                      )}
                    </span>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="form-group">
                    <label className='label-section'>Email<span>*</span></label>
                    <span className="login-user-demo">
                      <MdEmail />
                    </span>
                    <input type="text"
                      placeholder="Enter Your Email"
                      name="email"
                      value={values.email || ""}
                      // value={email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                      // autoFocus={true} 
                      // onChange={(event) => setemail(event.target.value)}
                      autoComplete="off"
                    />
                    {/* <div className="errorMsg">{errors.emailid}</div> */}
                    {errors.email && (
                      <p className="errorMsg">{errors.email}</p>
                    )}
                  </div>
                </Col>

                <Col lg={6} md={6} sm={12} xs={12}>

                  <div className="form-group">
                    <label className='label-section'>Password<span>*</span></label>
                    <span className="login-user-demo">
                      <BsFillLockFill />
                    </span>
                    <input type={passwordShown ? "text" : "password"}
                      placeholder="Enter Your Password"
                      name="password"
                      value={values.password || ""}
                      // value={password}
                      // onChange={(event) => setpassword(event.target.value)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                      autoComplete="off"
                    />
                    <span className="password">
                      <i onClick={togglePasswordVisiblity}>{eye}</i>
                    </span>
                    {/* <div className="errorMsg">{errors.password}</div> */}
                    {errors.password && (
                      <p className="errorMsg">{errors.password}</p>
                    )}
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  <div className="form-group">
                    <label className='label-section'>Confirm Password<span>*</span></label>
                    <span className="login-user-demo">
                      <BsFillLockFill />
                    </span>
                    <input type={passwordShown1 ? "text" : "password"}
                      placeholder="Enter Your Confirm Password"
                      name="confirmpassword"
                      value={values.confirmpassword || ""}
                      // value={confirmpassword}
                      // onChange={(event) => setconfirmpassword(event.target.value)}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                      autoComplete="off"
                    />
                    <span className="password">
                      <i onClick={togglePasswordVisiblity1}>{eye1}</i>
                    </span>
                    {/* <div className="errorMsg">{errors.confirm_password}</div> */}
                    {errors.confirmpassword && (
                      <p className="errorMsg">{errors.confirmpassword}</p>
                    )}
                  </div>
                </Col>
                <Col lg={12} md={12} sm={12} xs={12}>
                  <div className="terms-title">
                    <input
                      type="checkbox"
                      className='checkbox-div'
                    />
                    <label htmlFor="remember_me" className='rember'>I Agree To The Terms, Privacy Policy And Fees</label>
                  </div>
                </Col>
              </Row>
              <div className='login-but-box'>
                <Button className='login-butt' 
                type="submit"
                  // onClick={handlereset}
                >SIGN UP</Button>
              </div>
            </form>
            <div className="option">
              Already have an account?<NavLink to="/Signin">Login</NavLink>
            </div>
            <div className='back-to-home'><span><BsArrowLeft /></span><NavLink to="/">Back</NavLink></div>
          </div>
        </div>
      </Container>
    </section>
  )
}
// // resetForm()


// import React, { useState } from 'react'
// import { Row, Col, Button, Container } from 'react-bootstrap';
// import useForm from './useForm';
// import { NavLink } from "react-router-dom";
// import { FaRegEye, FaRegEyeSlash, FaUserAlt } from "react-icons/fa";
// import { BsArrowLeft, BsFillLockFill, BsTelephoneFill } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
// import PhoneInput from "react-phone-input-2";
// import 'react-phone-input-2/lib/style.css'
// export default function Signup() {
//   const [fname, setfname] = useState("");
//   const [lname, setlname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [confirmpassword, setconfirmpassword] = useState("");
//   const [mobilenumber, setmobilenumber] = useState("");
//   const [valid, setvalid] = useState(false);
//   const [mobilevalid, setmobilevalid] = useState(false);
//   const [mobilevalidationerror, setmobilevalidationerror] = useState("");
//   const [buttonState, setButtonState] = useState(false);
//   const { handleBlur, handleChange, values, errors } = useForm(formRequest); //Final submit function
//   function formRequest() {
//     // console.log(values);
//     setButtonState(true);
//   }
//   const handleSubmit = (event) => {
//     console.log(values);
//     console.log(mobilenumber);
//     // console.log(phonenumber);

//     event.preventDefault(); // 👈️ prevent page refresh
//     // 👇️ clear all input values in the form
//     setfname("");
//     setemail("");
//     setlname("");
//     // setpassword("");
//     setmobilenumber("");
//   };
//   const mobilevalidation = (mobile) => {
//     if (!new RegExp(/^[0-9+].{6,12}$/).test(mobile)) {
//       setmobilevalidationerror("Please Enter A valid Mobile Number");
//       setmobilevalid(false);
//     } else {
//       setmobilevalidationerror("");
//       setmobilevalid(true);
//     }
//   };


//   const [passwordShown, setPasswordShown] = useState(false);
//   const togglePasswordVisiblity = () => {
//     setPasswordShown(passwordShown ? false : true);
//   };
//   const eye = passwordShown ? (
//     <FaRegEye icon={FaRegEye} />
//   ) : (
//     <FaRegEyeSlash icon={FaRegEyeSlash} />
//   );
//   const [passwordShown1, setPasswordShown1] = useState(false);
//   const togglePasswordVisiblity1 = () => {
//     setPasswordShown1(passwordShown1 ? false : true);
//   };
//   const eye1 = passwordShown1 ? (
//     <FaRegEye icon={FaRegEye} />
//   ) : (
//     <FaRegEyeSlash icon={FaRegEyeSlash} />
//   );

//   return (
//     <section className="account-section bg_img">
//       <Container>
//         <div className="pt-5 pb-3">
//           <div className="account-area">
//             <div className="section-header-3">
//               {/* <span className="cate">hello</span> */}
//               <h2 className="title">Sign Up Here</h2>
//             </div>
//             <form className="account-form" onSubmit={handleSubmit}>
//               <Row>
//                 <Col lg={6} md={6} sm={12} xs={12}>
//                   <div className="form-group">
//                     <label className='label-section'>Full Name<span>*</span></label>
//                     <span className="login-user-demo">
//                       <FaUserAlt />
//                     </span>
//                     <input type="text" placeholder="Enter Your Name" name="fname" value={fname}
//                       onChange={(event) => setfname(event.target.value)}
//                       onBlur={handleBlur}
//                       required={true}
//                       autoComplete="off"
//                     // autoFocus={true}
//                     />
//                     {/* <div className="errorMsg">{errors.username}</div> */}
//                     {errors.fname && (
//                       <p className="errorMsg">{errors.fname}</p>
//                     )}
//                   </div>
//                 </Col>
//                 <Col lg={6} md={6} sm={12} xs={12}>
//                   <div className="form-group">
//                     <label className='label-section'>Last Name<span>*</span></label>
//                     <span className="login-user-demo">
//                       <FaUserAlt />
//                     </span>
//                     <input type="text" placeholder="Enter Your Last Name" name="lname" value={lname}
//                       onChange={(event) => setlname(event.target.value)}
//                       onBlur={handleBlur}
//                       required={true}
//                       autoComplete="off"

//                     // autoFocus={true} 
//                     />
//                     {/* <div className="errorMsg">{errors.lname}</div> */}
//                     {errors.lname && (
//                       <p className="errorMsg">{errors.lname}</p>
//                     )}
//                   </div>
//                 </Col>
//                 <Col lg={6} md={6} sm={12} xs={12}>
//                   <div className="form-group">
//                     <label className='label-section'>Mobile Number<span>*</span></label>
//                     {/* <span className="login-user-demo">
//                       <BsTelephoneFill />
//                     </span> */}
//                     {/* <input type="text" placeholder="Enter Your Mobile Number" name="mobileno" value={fields.mobileno} onChange={handleChange} /> */}


//                     {/* <PhoneInput
//                     country={"in"}
//                     value={mobilenumber}
//                     onChange={(phone, value) => {
//                       setmobilenumber(phone);
//                       mobilevalidation(phone);
//                     }}
//                     //  defaultErrorMessage="Please Enter Valid Number"
//                     prefix="+"
//                     inputProps={{
//                       name: "phone",
//                       required: true,
//                       autoFocus: false,
//                       style: { marginLeft: "0px", width: "100%" },
//                     }}
//                     isValid={(validmobilenumber) => {
//                       console.log(validmobilenumber);
//                       if (
//                         !new RegExp(/^[0-9+].{6,12}$/).test(validmobilenumber)
//                       ) {
//                         setvalid(false);

//                         return false;
//                       } else {
//                         setvalid(true);

//                         return true;
//                       }
//                     }}
//                   />
//                     <div className="errorMsg">{errors.mobileno}</div> */}
//                     <PhoneInput
//                       country={"in"}
//                       value={mobilenumber}
//                       onChange={(phone, value) => {
//                         setmobilenumber(phone);
//                         mobilevalidation(phone);
//                       }}
//                       //  defaultErrorMessage="Please Enter Valid Number"
//                       prefix="+"
//                       inputProps={{
//                         name: "phone",
//                         required: true,
//                         autoFocus: false,
//                         style: { marginLeft: "0px", width: "100%" },
//                       }}
//                       isValid={(validmobilenumber) => {
//                         // console.log(validmobilenumber);
//                         if (
//                           !new RegExp(/^[0-9+].{6,12}$/).test(validmobilenumber)
//                         ) {
//                           setvalid(false);

//                           return false;
//                         } else {
//                           setvalid(true);

//                           return true;
//                         }
//                       }}
//                     />
//                     <span>
//                       {mobilevalid ? (
//                         <></>
//                       ) : (
//                         <>
//                           <p className="errorMsg">{mobilevalidationerror}</p>
//                         </>
//                       )}
//                     </span>
//                   </div>
//                 </Col>
//                 <Col lg={6} md={6} sm={12} xs={12}>
//                   <div className="form-group">
//                     <label className='label-section'>Email<span>*</span></label>
//                     <span className="login-user-demo">
//                       <MdEmail />
//                     </span>
//                     <input type="text" placeholder="Enter Your Email" name="email" value={email} onBlur={handleBlur}
//                       required={true}
//                       // autoFocus={true} 
//                       onChange={(event) => setemail(event.target.value)}
//                       autoComplete="off"
//                     />
//                     {/* <div className="errorMsg">{errors.emailid}</div> */}
//                     {errors.email && (
//                       <p className="errorMsg">{errors.email}</p>
//                     )}
//                   </div>
//                 </Col>

//                 {/* <Col lg={6} md={6} sm={12} xs={12}>

//                   <div className="form-group">
//                     <label className='label-section'>Password<span>*</span></label>
//                     <span className="login-user-demo">
//                       <BsFillLockFill />
//                     </span>
//                     <input type={passwordShown ? "text" : "password"} placeholder="Enter Your Password" name="password"
//                       value={password} onChange={(event) => setpassword(event.target.value)}
//                       onBlur={handleBlur}
//                       required={true}
//                       autoComplete="off"
//                     />
//                     <span className="password">
//                       <i onClick={togglePasswordVisiblity}>{eye}</i>
//                     </span>
//                     <div className="errorMsg">{errors.password}</div>
//                     {errors.password && (
//                       <p className="errorMsg">{errors.password}</p>
//                     )}
//                   </div>
//                 </Col>
//                 <Col lg={6} md={6} sm={12} xs={12}>
//                   <div className="form-group">
//                     <label className='label-section'>Confirm Password<span>*</span></label>
//                     <span className="login-user-demo">
//                       <BsFillLockFill />
//                     </span>
//                     <input type={passwordShown1 ? "text" : "password"} placeholder="Enter Your Confirm Password" name="confirmpassword"
//                       value={confirmpassword} onChange={(event) => setconfirmpassword(event.target.value)}
//                       onBlur={handleBlur}
//                       required={true}
//                       autoComplete="off"
//                     />
//                     <span className="password">
//                       <i onClick={togglePasswordVisiblity1}>{eye1}</i>
//                     </span>
//                     <div className="errorMsg">{errors.confirm_password}</div>
//                     {errors.confirmpassword && (
//                       <p className="errorMsg">{errors.confirmpassword}</p>
//                     )}
//                   </div>
//                 </Col> */}
//                 <Col lg={12} md={12} sm={12} xs={12}>
//                   <div className="terms-title">
//                     <input
//                       type="checkbox"
//                       className='checkbox-div'
//                     />
//                     <label htmlFor="remember_me" className='rember'>I Agree To The Terms, Privacy Policy And Fees</label>
//                   </div>
//                 </Col>
//               </Row>
//               <div className='login-but-box'>
//                 <Button className='login-butt' type="submit"
//                 //  onClick={handlereset}
//                  >SIGN UP</Button>
//               </div>
//             </form>
//             <div className="option">
//               Already have an account?<NavLink to="/Signin">Login</NavLink>
//             </div>
//             <div className='back-to-home'><span><BsArrowLeft /></span><NavLink to="/">Back</NavLink></div>
//           </div>
//         </div>
//       </Container>
//     </section>
//   )
// }
// // resetForm()