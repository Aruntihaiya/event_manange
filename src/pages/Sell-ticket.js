import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import useForm from './useForm';
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Country, State, City } from "country-state-city";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import moment from "moment";

export default function Sellticket() {
    const [isDisabled, setIsDisabled] = useState(true);
    const [valid, setvalid] = useState(true);
    // const [fname, setfname] = useState("");
    // const [lname, setlname] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setpassword] = useState("");
    // const [confirmpassword, setconfirmpassword] = useState("");
    // const [addressline1, setaddressline1] = useState("");
    // const [addressline2, setaddressline2] = useState("");
    const [buttonState, setButtonState] = useState(false);
    const [phone, setphone] = useState("");

    const [mobilenumber, setmobilenumber] = useState("");
    const [countryname, setcountryname] = useState("");
    const [cityname, setcityname] = useState("");
    const [statename, setstatename] = useState("");
    const [countryInfo, setcountryInfo] = useState([]);
    const [stateInfo, setstateInfo] = useState([]);
    const [cityInfo, setcityInfo] = useState([]);
    const [statecode, setstatecode] = useState("");
    const [countrycode, setcountrycode] = useState("");
    const [selectedstatecode, setselectedstatecode] = useState("");
    const [selectedcountrycode, setselectedcountrycode] = useState("");
    const [SearchType, setSearchType] = useState("0")
    console.log(mobilenumber, "mobilenumber...........")
    const {
        handleBlur,
        handleChange,
        values,
        errors,
        handleSubmit,
        formname,
    } = useForm(formProfile); //Final submit function

    console.log(values.fname, values.lname, values.email, values, mobilenumber, "selltickets")
    useEffect(() => {
        setcountryInfo(Country.getAllCountries());
    }, []);


    useEffect(() => {
        countryInfo.forEach((element) => {
            if (element.name === selectedcountrycode) {
                setcountrycode(element.isoCode);
            }
        });
    }, [selectedcountrycode, countryInfo]);

    //  get country ISOcode by countryname   for fetch states
    useEffect(() => {
        const country = countryInfo.find((c) => c.name === countryname);
        if (country) {
            setcountrycode(country.isoCode);
        }
    }, [countryname, countryInfo])



    useEffect(() => {
        setstateInfo(State.getStatesOfCountry(countrycode));
    }, [countrycode]);


    //  get state ISOcode by statename for fetch cities
    useEffect(() => {
        const state = stateInfo.find((s) => s.name === statename);
        if (state) {
            setstatecode(state.isoCode)
        }
    }, [stateInfo, statename])

    useEffect(() => {
        stateInfo.forEach((element) => {
            if (element.name === selectedstatecode) {
                setstatecode(element.isoCode);
            }
        });
    }, [selectedstatecode, stateInfo]);


    useEffect(() => {
        setcityInfo(
            City.getCitiesOfState(
                countrycode.toUpperCase(),
                statecode
            )
        );
    }, [statecode, countrycode]);

    function formProfile() {
        setButtonState(true);
    }
    return (
        <div>
            <Container>
                <div className="pt-3 pb-3">
                    <div className="account-area event-ticket-sell-box">
                        <div className="section-header-3">
                            {/* <span className="cate">hello</span> */}
                            <h2 className="title">Custom Ticket Print/Quote Request</h2>
                        </div>
                        <form className="account-form" onSubmit={handleSubmit}>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Full Name<span>*</span></label>
                                        <span className="login-user-demo sell-ticket-icon-form">
                                            <FaUserAlt />
                                        </span>
                                        <input type="text"
                                            placeholder="Enter Your Name"
                                            name="fname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required={true}
                                        />
                                        {errors.fname && (
                                            <h6 className="errorMsg">
                                                {errors.fname}
                                            </h6>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Last Name<span>*</span></label>
                                        <span className="login-user-demo sell-ticket-icon-form">
                                            <FaUserAlt />
                                        </span>
                                        <input type="text"
                                            placeholder="Enter Your Last Name"
                                            name="lname"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required={true}
                                        />
                                        {errors.lname && (
                                            <h6 className="errorMsg">
                                                {errors.lname}
                                            </h6>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Mobile Number<span>*</span></label>
                                        {/* <span className="login-user-demo sell-ticket-icon-form">
                                            <BsTelephoneFill />
                                        </span>
                                        <input type="text" placeholder="Enter Your Mobile Number" name="mobileno" value={fields.mobileno} onChange={handleChange} />
                                        <div className="errorMsg">{errors.mobileno}</div> */}
                                        {/* {isDisabled ? (
                                              <PhoneInput
                                           country={"gh"}
                                            value={phone}
                                             prefix="+"
                                             disabled={true}
                                             disableDropdown={true}
                                              inputProps={{
                                              name: "phone",
                                              required: true,
                                             autoFocus: true,
                                            className: "phoneinput"
                                                    }}
                                                       />
                                                       ) : (
                                                   <> */}

                                        <PhoneInput
                                            country={"in"}
                                            value={phone}
                                            onChange={(phone) => setphone(phone)}
                                            defaultErrorMessage="Please Enter Valid Number"
                                            prefix="+"
                                            inputProps={{
                                                name: "phone",
                                                required: true,
                                                autoFocus: true,
                                                className: "phoneinput",

                                            }}
                                            isValid={(validmobilenumber) => {
                                                if (
                                                    !new RegExp(
                                                        /^[0-9+].{6,12}$/
                                                    ).test(validmobilenumber)
                                                ) {
                                                    setvalid(false);
                                                    return false;
                                                } else {
                                                    setvalid(true);
                                                    return true;
                                                }
                                            }}
                                        />
                                        {/* </>
                      )} */}
                                        {errors.phonenumber && (
                                            <h6 className="error">
                                                {errors.phonenumber}
                                            </h6>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Email<span>*</span></label>
                                        <span className="login-user-demo sell-ticket-icon-form">
                                            <MdEmail />
                                        </span>
                                        <input
                                            type="text"
                                            placeholder="Enter Your Email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required={true}
                                        />
                                        {errors.email && (
                                            <h6 className="errorMsg">
                                                {errors.email}
                                            </h6>
                                        )}
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Event/Venue</label>
                                        <Row>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Name</label>
                                                <input type="text"
                                                    placeholder="Enter your Event Name"
                                                    name="eventname"
                                                    className='events-input-sell-tickets'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />
                                                {errors.eventname && (
                                                    <h6 className="errorMsg">
                                                        {errors.eventname}
                                                    </h6>
                                                )}
                                            </Col>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Venue Name</label>
                                                <input type="text"
                                                    placeholder="Enter your Venue Name"
                                                    name="venuename"
                                                    className='events-input-sell-tickets'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />
                                                {errors.venuename && (
                                                    <h6 className="errorMsg">
                                                        {errors.venuename}
                                                    </h6>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Event/Venue Address</label>
                                        <input
                                            type="text"
                                            placeholder="Address"
                                            name="Line1"
                                            className='events-input-sell-tickets'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required={true}
                                        />
                                        {errors.Line1 && (
                                            <h6 className="errorMsg">
                                                {errors.Line1}
                                            </h6>
                                        )}
                                        <input type="text"
                                            placeholder="Address line 2"
                                            name="Line2"
                                            className='events-input-sell-tickets mt-3'
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            required={true}
                                        />
                                        {errors.Line2 && (
                                            <h6 className="errorMsg">
                                                {errors.Line2}
                                            </h6>
                                        )}
                                        <Row className='mt-3'>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                {/* <input type="text" placeholder="City" name="" className='events-input-sell-tickets' /> */}
                                                {/* <label>Country</label> */}
                                                <select
                                                    name='country'
                                                    onBlur={handleBlur}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        setselectedcountrycode(e.target.value);
                                                    }}
                                                    required={true}
                                                    className='sel-inp'
                                                >
                                                    <option>Country</option>
                                                    {countryInfo.map((value, key) => {
                                                        return (
                                                            <option value={value.name} key={key} >
                                                                {value.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                {errors.country && (
                                                    <h6 className="errorMsg">
                                                        {selectedcountrycode ? "" : errors.country}
                                                    </h6>
                                                )}
                                            </Col>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                {/* <input type="text" placeholder="State Address" name="" className='events-input-sell-tickets' /> */}
                                                <select
                                                    name='State'
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        setselectedstatecode(e.target.value);
                                                    }}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                    className='sel-inp'

                                                >
                                                    <option>State</option>
                                                    {stateInfo.map((value, key) => {
                                                        return (
                                                            <option value={value.name} key={key}>
                                                                {value.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                {errors.State && (
                                                    <h6 className="errorMsg">
                                                        {errors.State}
                                                    </h6>
                                                )}
                                            </Col>
                                            <Col lg={6} md={6} sm={12} xs={12} className='mt-2'>
                                                {/* <input type="text" placeholder="Postal Code" name="" className='events-input-sell-tickets' /> */}
                                                <select
                                                    name='city'
                                                    placeholder="city"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                    className='sel-inp'

                                                >
                                                    <option>City</option>
                                                    {cityInfo.map((value, key) => {
                                                        return (
                                                            <option value={value.name} key={key}>
                                                                {value.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                                {errors.city && (
                                                    <h6 className="errorMsg">
                                                        {errors.city}
                                                    </h6>
                                                )}
                                            </Col>
                                            <Col lg={6} md={6} sm={12} xs={12} className='mt-2'>
                                                <input type="text"
                                                    placeholder="Postalcode"
                                                    name="postalcode"
                                                    className='events-input-sell-tickets'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />

                                                {errors.postalcode && (
                                                    <h6 className="errorMsg">
                                                        {errors.postalcode}
                                                    </h6>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Event Date & Time</label>
                                        <Row>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Date (MM/DD/YYYY)</label>
                                                <input type="date"
                                                    placeholder="Enter your date"
                                                    name="date"
                                                    className='events-input-sell-tickets'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    //  value={moment().format(
                                                    //    "YYYY-MM-DD"
                                                    //  )}
                                                    required={true}
                                                />
                                                {errors.date && (
                                                    <h6 className="errorMsg">
                                                        {errors.date}
                                                    </h6>
                                                )}
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Start Time</label>
                                                <input type="time"
                                                    placeholder="Enter your start time"
                                                     name="starttime" 
                                                    className='events-input-sell-tickets'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                     />
                                                        {errors.starttime && (
                                                    <h6 className="errorMsg">
                                                        {errors.starttime}
                                                    </h6>
                                                )}
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event End Time</label>
                                                <input type="time"
                                                    placeholder="Enter your end time"
                                                      name="endtime"
                                                    className='events-input-sell-tickets' 
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                    />
                                                       {errors.endtime && (
                                                    <h6 className="errorMsg">
                                                        {errors.endtime}
                                                    </h6>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Event Online Info</label>
                                        <Row>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Website</label>
                                                <input type="text"
                                                    placeholder="Enter Your Event Website"
                                                    className='events-input-sell-tickets mt-4'
                                                    name='eventwebsiteLink'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />
                                                {errors.eventwebsiteLink && (
                                                    <h6 className="errorMsg">
                                                        {errors.eventwebsiteLink}
                                                    </h6>
                                                )}
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Social Media Handle(s)</label>
                                                <input type="text"
                                                    placeholder="Enter Your Social Media"
                                                    className='events-input-sell-tickets'
                                                    name='eventwebsiteLink'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />
                                                {/* {errors.eventwebsiteLink && (
                                                    <h6 className="errorMsg">
                                                        {errors.eventwebsiteLink}
                                                    </h6>
                                                )} */}
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Email</label>
                                                <input type="text"
                                                    placeholder="Enter Your Event Email"
                                                    className='events-input-sell-tickets mt-4'
                                                    name='eventemail'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    required={true}
                                                />
                                                {errors.eventemail && (
                                                    <h6 className="errorMsg">
                                                        {errors.eventemail}
                                                    </h6>
                                                )}
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>

                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>What ticket types are you requesting?</label>
                                        <Row className="r">
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <input type="radio"
                                                    name="filter"
                                                    value="1"
                                                    className="radio-checked"
                                                    onChange={(e) => setSearchType(e.target.value)} checked={(SearchType === "1") ? true : false} />
                                                <lable className="radio-lable-head">Online Tickets Only</lable>
                                            </Col>
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <input type="radio"
                                                    name="filter"
                                                    value="2"
                                                    className="radio-checked"
                                                    onChange={(e) => setSearchType(e.target.value)} checked={(SearchType === "2") ? true : false}
                                                />
                                                <lable className="radio-lable-head">Printed Tickets Only</lable>
                                            </Col>
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter"
                                                    value="3"
                                                    className="radio-checked"
                                                    onChange={(e) => setSearchType(e.target.value)} checked={(SearchType === "3") ? true : false}
                                                />
                                                <lable className="radio-lable-head">Online & Printed Tickets</lable>
                                            </Col>
                                        </Row>
                                        {/* <div className="errorMsg">{errors.emailid}</div> */}
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>ONLINE Event Ticket Info</label>
                                        <Row>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Section (Example: GA / VIP / CABANA)</label>
                                                <input type="text" placeholder="GA / VIP / CABANA" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Type (Example: Early Bird, Presold, Advance)</label>
                                                <input type="text" placeholder="Early Bird, Presold, Advance" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Online Ticket Price (USD)</label>
                                                <input type="text" placeholder="Enter your Online Ticket Price" className='events-input-sell-tickets mt-3' />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>PRINTED Event Ticket Info</label>
                                        <Row>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Section (Example: GA / VIP / CABANA)</label>
                                                <input type="text" placeholder="GA / VIP / CABANA" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Type (Example: Early Bird, Presold, Advance)</label>
                                                <input type="text" placeholder="Early Bird, Presold, Advance" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Online Ticket Price (USD)</label>
                                                <input type="text" placeholder="Enter your Online Ticket Price " className='events-input-sell-tickets mt-3' />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Other Event Services</label>
                                        <Row className="r">
                                            <Col lg={6} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                                <lable className="radio-lable-head">Event Staffing</lable>
                                            </Col>
                                            <Col lg={6} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                                <lable className="radio-lable-head">Data Collection Solution</lable>
                                            </Col>
                                            <Col lg={6} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                                <lable className="radio-lable-head">Custom Tyvek Wristband Printing</lable>
                                            </Col>
                                            <Col lg={6} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                                <lable className="radio-lable-head">Custom ID Card/​Badge Printing</lable>
                                            </Col>
                                            <Col lg={6} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                                <lable className="radio-lable-head">Equipment Rental (iPads, POS, Square, Etc.)</lable>
                                            </Col>
                                        </Row>
                                        {/* <div className="errorMsg">{errors.emailid}</div> */}
                                    </div>
                                </Col>
                            </Row>
                            <div className='login-but-box'>
                                <Button className='login-butt' type="submit">Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    )
}
