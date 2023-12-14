import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Container, Form } from 'react-bootstrap';
import { FaUserAlt } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Country, State, City } from "country-state-city";

export default function Sellticket() {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [mobilenumber, setmobilenumber] = useState("");
    const [countryname, setcountryname] = useState("");
    const [cityname, setcityname] = useState("");
    const [statename, setstatename] = useState("");
    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
 
    const [countryInfo, setcountryInfo] = useState([]);
    const [stateInfo, setstateInfo] = useState([]);
    const [cityInfo, setcityInfo] = useState([]);
    const [countrycode, setcountrycode] = useState("");
    const [selectedcountrycode, setselectedcountrycode] = useState("");
    const [selectedCountry, setSelectedCountry] = useState();

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
                username: '',
                lastname: '',
                emailid: '',
                mobileno: '',

            });
            alert('Form submitted');
        }
    };

    useEffect(() => {
        setcountryInfo(Country.getAllCountries());
    }, []);
    useEffect(() => {
        countryInfo.forEach((element) => {
            console.log(element,"element.......")
            if (element.name === selectedcountrycode) {
                setcountrycode(element.isoCode);
            }
        });
    }, [selectedcountrycode, countryInfo]);
    useEffect(() => {
        const country = countryInfo.find((c) => c.name === countryname);
        if (country) {
            setcountrycode(country.isoCode);
        }
    }, [countryname, countryInfo])
    console.log(countryInfo, "countryInfo")
    const validateForm = () => {
        let newErrors = {};
        let formIsValid = true;

        if (!fields['username']) {
            formIsValid = false;
            newErrors['username'] = '*Please enter your username.';
        }

        if (typeof fields['username'] !== 'undefined') {
            if (!fields['username'].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                newErrors['username'] = '*Please enter alphabet characters only.';
            }
        }

        if (!fields['lastname']) {
            formIsValid = false;
            newErrors['lastname'] = '*Please enter your last name.';
        }

        if (typeof fields['lastname'] !== 'undefined') {
            if (!fields['lastname'].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false;
                newErrors['lastname'] = '*Please enter alphabet characters only.';
            }
        }

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

        if (!fields['mobileno']) {
            formIsValid = false;
            newErrors['mobileno'] = '*Please enter your mobile no.';
        }

        if (typeof fields['mobileno'] !== 'undefined') {
            if (!fields['mobileno'].match(/^[0-9]{10}$/)) {
                formIsValid = false;
                newErrors['mobileno'] = '*Please enter a valid mobile no.';
            }
        }


        setErrors(newErrors);
        return formIsValid;
    };

    return (
        <div>
            <Container>
      
                <div className="pt-3 pb-3">
                    <div className="account-area event-ticket-sell-box">
                        <div className="section-header-3">
                            {/* <span className="cate">hello</span> */}
                            <h2 className="title">Custom Ticket Print/Quote Request</h2>
                        </div>
                        <form className="account-form" onSubmit={submitUserRegistrationForm}>
                            <Row>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Full Name<span>*</span></label>
                                        <span className="login-user-demo sell-ticket-icon-form">
                                            <FaUserAlt />
                                        </span>
                                        <input type="text" placeholder="Enter Your Name" name="username" value={fields.username} onChange={handleChange} />
                                        <div className="errorMsg">{errors.username}</div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Last Name<span>*</span></label>
                                        <span className="login-user-demo sell-ticket-icon-form">
                                            <FaUserAlt />
                                        </span>
                                        <input type="text" placeholder="Enter Your Last Name" name="lastname" value={fields.lastname} onChange={handleChange} />
                                        <div className="errorMsg">{errors.lastname}</div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Mobile Number<span>*</span></label>
                                        <span className="login-user-demo sell-ticket-icon-form">
                                            <BsTelephoneFill />
                                        </span>
                                        <input type="text" placeholder="Enter Your Mobile Number" name="mobileno" value={fields.mobileno} onChange={handleChange} />
                                        <div className="errorMsg">{errors.mobileno}</div>
                                    </div>
                                </Col>
                                <Col lg={6} md={6} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Email<span>*</span></label>
                                        <span className="login-user-demo sell-ticket-icon-form">
                                            <MdEmail />
                                        </span>
                                        <input type="text" placeholder="Enter Your Email" name="emailid" value={fields.emailid} onChange={handleChange} />
                                        <div className="errorMsg">{errors.emailid}</div>
                                    </div>
                                </Col>
                                {/* <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section'>Where is your event?<span>*</span></label>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">New York</lable>
                                        </div>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Other Caribbean Island</lable>
                                        </div>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Canada</lable>
                                        </div>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">USA</lable>
                                        </div>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Other</lable>
                                        </div>
                                    </div>
                                </Col> */}
                                {/* <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Where is your event?</label>
                                        <Row className="r">
                                        <Col lg={4} md={4} sm={12} xs={12}> 
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">New York</lable>
                                         </Col>
                                        <Col lg={4} md={4} sm={12} xs={12}> 
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Other Caribbean Island</lable>
                                        </Col>
                                        <Col lg={4} md={4} sm={12} xs={12}>
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Canada</lable>
                                        </Col>
                                        <Col lg={4} md={4} sm={12} xs={12}>
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">USA</lable>
                                        </Col>
                                        <Col lg={4} md={4} sm={12} xs={12}>
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Other</lable>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col> */}
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Event/Venue</label>
                                        <Row>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Name</label>
                                                <input type="text" placeholder="Enter your Event Name" name="" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={6} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Venue Name</label>
                                                <input type="text" placeholder="Enter your Venue Name" name="" className='events-input-sell-tickets' />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>Event/Venue Address</label>
                                        <input type="text" placeholder="Address" name="" className='events-input-sell-tickets' />
                                        <input type="text" placeholder="Address line 2" name="" className='events-input-sell-tickets mt-3' />
                                        <Row className='mt-3'>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                {/* <input type="text" placeholder="City" name="" className='events-input-sell-tickets' /> */}
                                                {/* <label>Country</label> */}
                                                {/* <select
                                                    placeholder="Country"
                                                    value={selectedCountry}
                                                    onChange={(e) => setSelectedCountry(e.target.value)}
                                                    className='sel-inp'
                                                >
                                                    <option>Country</option>
                                                    {countryInfo.map((value, key) => {
                                                        return (
                                                            <option value={value.name} key={key}>
                                                                {value.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select> */}
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <input type="text" placeholder="State Address" name="" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <input type="text" placeholder="Postal Code" name="" className='events-input-sell-tickets' />
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
                                                <input type="text" placeholder="Enter your date" name="" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Start Time</label>
                                                <input type="text" placeholder="Enter your start time" name="" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event End Time</label>
                                                <input type="text" placeholder="Enter your end time" name="" className='events-input-sell-tickets' />
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
                                                <input type="text" placeholder="Enter Your Event Website" className='events-input-sell-tickets mt-4' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Social Media Handle(s)</label>
                                                <input type="text" placeholder="Enter Your Social Media" className='events-input-sell-tickets' />
                                            </Col>
                                            <Col lg={4} md={6} sm={12} xs={12}>
                                                <label className='label-section-event'>Event Email</label>
                                                <input type="text" placeholder="Enter Your Event Email" className='events-input-sell-tickets mt-4' />
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                {/* <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section'>What ticket types are you requesting?</label>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Online Tickets Only</lable>
                                        </div>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Printed Tickets Only</lable>
                                        </div>
                                        <div className="radio-box">
                                            <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                            <lable className="radio-lable-head">Online & Printed Tickets</lable>
                                        </div>
                                    </div>
                                </Col> */}
                                <Col lg={12} md={12} sm={12} xs={12}>
                                    <div className="form-group">
                                        <label className='label-section-tickets'>What ticket types are you requesting?</label>
                                        <Row className="r">
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                                <lable className="radio-lable-head">Online Tickets Only</lable>
                                            </Col>
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
                                                <lable className="radio-lable-head">Printed Tickets Only</lable>
                                            </Col>
                                            <Col lg={4} md={4} sm={12} xs={12}>
                                                <input type="radio" name="filter" value="Interview" className="radio-checked" />
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
