import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { FaEnvelopeOpenText } from "react-icons/fa";
import MultiRangeSlider from "./multiRangeSlider/MultiRangeSlider";
import useForm from "./useForm";
import "react-toastify/dist/ReactToastify.css";
import swal from "sweetalert";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
const RequestStyles = styled.section``;
function Request() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [fname, setfname] = useState("");
  const [range, setrange] = useState("");
  const [email, setemail] = useState("");
  const [businessType, setbusinessType] = useState("");
  const [country, setcountry] = useState("");
  const [startdate, setstartdate] = useState("");
  const [businessdesc, setbusinessdesc] = useState("");
  const [businessfile, setbusinessfile] = useState("");
  const [mobilenumber, setmobilenumber] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [valid, setvalid] = useState(false);
  const [mobilevalid, setmobilevalid] = useState(false);
  const [phonevalid, setphonevalid] = useState(false);
  const [mobilevalidationerror, setmobilevalidationerror] = useState("");
  const [phonevalidationerror, setphonevalidationerror] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const { handleBlur, handleChange, values, errors } = useForm(formRequest); //Final submit function
  function formRequest() {
    // console.log(values);
    setButtonState(true);
  }
  const handleSubmit = (event) => {
    console.log(values);
    console.log(mobilenumber);
    console.log(phonenumber);

    console.log(values.businessfileevent.target.files[0]);
    event.preventDefault(); // 👈️ prevent page refresh
    // 👇️ clear all input values in the form
    setfname("");
    setemail("");
    setbusinessType("");
    setcountry("");
    setstartdate("");
    setbusinessdesc("");
    setbusinessfile("");
    setmobilenumber("");
    setphonenumber("");
  };
  const mobilevalidation = (mobile) => {
    if (!new RegExp(/^[0-9+].{6,12}$/).test(mobile)) {
      setmobilevalidationerror("Please Enter A valid Mobile Number");
      setmobilevalid(false);
    } else {
      setmobilevalidationerror("");
      setmobilevalid(true);
    }
  };
  const phonevalidation = (mobile) => {
    if (!new RegExp(/^[0-9+].{6,12}$/).test(mobile)) {
      setphonevalidationerror("Please Enter A valid Mobile Number");
      setphonevalid(false);
    } else {
      setphonevalidationerror("");
      setphonevalid(true);
    }
  };

  const [value, onChange] = useState(1);
  useEffect(() => {
    const ele = document.querySelector(".buble");
    if (ele) {
      ele.style.left = `${Number(value / 4)}px`;
    }
  });
  return (
    <RequestStyles>
      <div className="contactrequest-12">
        <Container>
          <div className="form-t11">
            <div className="form-t12">
              <FaEnvelopeOpenText />
            </div>

            <p>
              Write us a few words about your project and we'll prepare a
              proposal for you within <strong>24</strong> hours.
            </p>
          </div>
          <div className="form-contact">
            <form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <lable className="form_contact_field">Enter Full Name</lable>

                  <input
                    type="text"
                    className="form-control"
                    name="fname"
                    // onChange={handleChange}
                    value={fname}
                    onChange={(event) => setfname(event.target.value)}
                    onBlur={handleBlur}
                    required={true}
                    autoFocus={true}
                  />
                  {errors.fname && (
                    <p className="errormessage">{errors.fname}</p>
                  )}
                </Col>
                <Col md={6}>
                  <lable className="form_contact_field">
                    Enter Email Address
                  </lable>

                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    // onChange={handleChange}
                    onBlur={handleBlur}
                    value={email}
                    onChange={(event) => setemail(event.target.value)}
                    required={true}
                  />
                  {errors.email && (
                    <p className="errormessage">{errors.email}</p>
                  )}
                </Col>

                <Col md={6}>
                  <lable className="form_contact_field">
                    Enter Mobile Number
                  </lable>

                  <PhoneInput
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
                  <span>
                    {mobilevalid ? (
                      <></>
                    ) : (
                      <>
                        <p className="errormessage">{mobilevalidationerror}</p>
                      </>
                    )}
                  </span>
                </Col>

                <Col md={6}>
                  <lable className="form_contact_field">
                    Enter Whatsaap Number
                  </lable>
                  <PhoneInput
                    country={"in"}
                    value={phonenumber}
                    onChange={(phone, value) => {
                      setphonenumber(phone);
                      phonevalidation(phone);
                    }}
                    //  defaultErrorMessage="Please Enter Valid Number"
                    prefix="+"
                    inputProps={{
                      name: "phone",
                      required: true,
                      autoFocus: false,
                      style: { marginLeft: "0px", width: "100%" },
                    }}
                    isValid={(validphonenumber) => {
                      if (
                        !new RegExp(/^[0-9+].{6,12}$/).test(validphonenumber)
                      ) {
                        // setvalid(false);
                        return false;
                      } else {
                        // setvalid(true);
                        return true;
                      }
                    }}
                  />
                  <span>
                    {phonevalid ? (
                      <></>
                    ) : (
                      <>
                        <p className="errormessage">{phonevalidationerror}</p>
                      </>
                    )}
                  </span>
                </Col>

                <Col md={6}>
                  <lable className="form_contact_field">
                    Enter Service Type
                  </lable>
                  <select
                    id="service"
                    autoComplete="off"
                    className="form-select"
                    name="businessType"
                    onChange={(event) => setbusinessType(event.target.value)}
                    value={businessType}
                    onBlur={handleBlur}
                    required={true}
                  >
                    <option></option>
                    <option value="Ecommerce" id={1}>
                      Other Discussion
                    </option>
                    <option value="Health Care" id={2}>
                      Website/UI Design & Redesign
                    </option>
                    <option value="Real Estate" id={3}>
                      Concord ERP
                    </option>
                    <option value="Education" id={4}>
                      Custom Web Development
                    </option>
                    <option value="Financial services" id={5}>
                      Mobile Applications
                    </option>
                    <option value="Petroleum" id={6}>
                      eCommerce Solutions
                    </option>
                    <option value="Event" id={7}>
                      Human Resource Managment
                    </option>
                    <option value="Grocery" id={8}>
                      C&F (Carry & Forward System)
                    </option>
                    <option value="Transport" id={9}>
                      Sales Managment System
                    </option>
                    <option value="On-Deamand services" id={10}>
                      Township Social Managment
                    </option>
                  </select>
                  {errors.businessType && (
                    <p className="errormessage">{errors.businessType}</p>
                  )}
                </Col>
                <Col md={6} className="industrytype-text">
                  <Row>
                    <Col md={6}>
                      <div className="start_date">
                        <label className="form_contact_field-end">
                          Start Date
                        </label>
                        <DatePicker
                          className="form-control"
                          selectsStart
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          startDate={startDate}
                          required={true}
                        />
                         {errors.startDate && (
                    <p className="errormessage">{errors.startDate}</p>
                  )}
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="end_date">
                        <label className="form_contact_field-end">
                          End Date
                        </label>

                        <DatePicker
                          className="form-control"
                          selectsEnd
                          selected={endDate}
                          onChange={(date) => setEndDate(date)}
                          endDate={endDate}
                          startDate={endDate}
                          minDate={endDate}
                          required={true}
                        />
                        {errors.endDate && (
                    <p className="errormessage">{errors.endDate}</p>
                  )}
                      </div>
                    </Col>
               
                  </Row>
                </Col>

                <Col md={6}>
                  <lable className="form_contact_field">Choose Country</lable>
                  <select
                    id="country"
                    autoComplete="off"
                    className="form-select"
                    name="country"
                    onChange={(event) => setcountry(event.target.value)}
                    value={country}
                    onBlur={handleBlur}
                    required={true}
                  >
                    <option></option>
                    <option value="Ecommerce" id={1}>
                      india
                    </option>
                    <option value="Health Care" id={2}>
                      United States
                    </option>
                    <option value="Real Estate" id={3}>
                      Japan
                    </option>
                    <option value="Education" id={4}>
                      Oman
                    </option>
                    <option value="Financial services" id={5}>
                      Qatar
                    </option>
                    <option value="Petroleum" id={6}>
                      United Kingdom
                    </option>
                    <option value="Event" id={7}>
                      Zimbabwe
                    </option>
                    <option value="Grocery" id={8}>
                      Italy
                    </option>
                    <option value="Transport" id={9}>
                      Brazil
                    </option>
                    <option value="On-Deamand services" id={10}>
                      France
                    </option>
                  </select>
                  {errors.country && (
                    <p className="errormessage">{errors.country}</p>
                  )}
                </Col>
                <Col md={6}>
                  <div className="field file-upload">
                    <lable className="form_contact_field">
                      Enter Upload File
                    </lable>
                    <input
                      type="file"
                      name="businessfile"
                      placeholder="Upload file"
                      className="form-control"
                      // acceptType={["pdf", "txt", "doc", "docx"]}
                      id="businessfile"
                      value={businessfile}
                      onChange={(event) => setbusinessfile(event.target.value)}
                      // onChange={handleChange}
                      onBlur={handleBlur}
                      required={true}
                      multiple
                    />
                    {errors.businessfile && (
                      <p className="errormessage">{errors.businessfile}</p>
                    )}
                  </div>
                </Col>
                <Col md={12}>
                  
                  <lable className="form_contact_field">Enter Budget</lable>
                  <div className="slider-parent">
                    <input
                      type="range"
                      min="1"
                      max="5000"
                      onBlur={handleBlur}
                      required={true}
                      value={value}
                      onChange={({ target: { value: radius } }) => {
                        onChange(radius);
                      }}
                    />
                   <div className="bubble">${value}</div>
                  </div>
                </Col>

                <Col md={12}>
                  <lable className="form_contact_field"> Project Details</lable>
                  <textarea
                    type="text"
                    style={{ height: "100px" }}
                    name="businessdesc"
                    className="form-control"
                    onChange={(event) => setbusinessdesc(event.target.value)}
                    value={businessdesc}
                    onBlur={handleBlur}
                    required={true}
                  />

                  {errors.businessdesc && (
                    <p className="errormessage">{errors.businessdesc}</p>
                  )}
                </Col>
                <Col md={12}>
                  <div className="contact-7 ">
                    <button
                      type="submit"
                      // disabled={buttonState}
                      className="main-btn-resuest"
                    >
                      Send Your Message
                    </button>
                  </div>
                </Col>
              </Row>
            </form>
          </div>
        </Container>
      </div>
    </RequestStyles>
  );
}

export default Request;
