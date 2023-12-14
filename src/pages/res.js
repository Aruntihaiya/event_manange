import React, { useState, useEffect } from "react";
import logo4 from "../../src/assest/images/logo3.png";
import logo3 from "../../src/assest/images/logo3.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import Page from "../component/Page";
import useForm from "../hooks/useForm";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { trackPromise, usePromiseTracker } from "react-promise-tracker";
import { Spinner } from "../component/Spinner/index";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Button, Spinner as Spn } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { Country, State, City } from "country-state-city";
import { PublicWrapperStyled } from "./../pages/PublicStyle";
import { useTranslation } from "react-i18next";
const Register = () => {
  const { i18n, t } = useTranslation();
  
  const [buttonState, setButtonState] = useState(false);
  const [showmodelState, setShowmodelState] = useState(false);
  const [showmodelcontent, setShowmodelcontent] = useState("");
  const [countryInfo, setcountryInfo] = useState("");
  const [stateInfo, setstateInfo] = useState([]);
  const [cityInfo, setcityInfo] = useState([]);
  const [selectedstatecode, setselectedstatecode] = useState("");
  const [statecode, setstatecode] = useState("");

  const { promiseInProgress } = usePromiseTracker();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [phonenumber, setphonenumber] = useState();
  const [line2, setline2] = useState();
  useEffect(() => {
    setphonenumber(state.mobilenumber);
    setcountryInfo(state.countrycode.countryCode.toUpperCase());
  }, [state]);
  useEffect(() => {
    setstateInfo(State.getStatesOfCountry(countryInfo));
  }, [countryInfo]);

  useEffect(() => {
    stateInfo.forEach((element) => {
      if (element.name === selectedstatecode) {
        setstatecode(element.isoCode);
      }
    });
  }, [selectedstatecode]);
  useEffect(() => {
    setcityInfo(
      City.getCitiesOfState(
        state.countrycode.countryCode.toUpperCase(),
        statecode
      )
    );
  }, [statecode]);
  const { handleBlur, handleChange, values, errors, handleSubmit } =
    useForm(formRegistration); //Final submit function
  function formRegistration() {
    // trackPromise(
    setButtonState(true);
    
    axios
      .post(process.env.REACT_APP_PUBLIC_URL + "signup", {
        firstname: values.fname,
        lastname: values.lname,
        email: values.email,
        phonenumber: phonenumber,
        businessname: values.businessName,
        businesstype: values.businessType,
        weblink: values.websiteLink,
        line1: values.Line1,
        line2: line2,
        landmark: values.Landmark,
        postalcode: values.postalcode,
        state: values.State,
        city: values.city,
        country: state.countrycode.name,
        password: values.password,
      })
      .then((response) => {
        if (response.data) {
          setTimeout(() => setButtonState(false), 1000);
          if (response.data.code === 200) {
            navigate("/login", { replace: true });
            toast.success(response.data.message);
          } else if (response.data.code === 400) {
            // navigate("/register", { replace: true });
            toast.error(response.data.message, { autoClose: 5000 });
          } else {
            // navigate("/register", { replace: true });
            toast.error(response.data.message, { autoClose: 5000 });
          }
        }
      })
      .catch((error)=> {
        console.log(error)
      })
    // )
  }

  ///
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
  const [categorylist, setcategorylist] = useState([]);

  useEffect(() => {
    axios
      .post(process.env.REACT_APP_PUBLIC_URL + "getcategory", {})
      .then((response) => {
        const outlook = response;
        if (outlook.data.code === 200) {
          setcategorylist(outlook.data.data);
          // navigate(`/admin/account`, { state: { responce: response } });
          // toast.success(outlook.data.message);
        } else {
          toast.error(outlook.data.message);
        }
      });
  }, []);

  return (
    <Page title="Register">
      <PublicWrapperStyled>
        <div className="container">
          {/* {promiseInProgress === true ? (
            <Spinner />
          ) : ( */}
          <div className="row">
            <div className="mx-auto my-auto col-12 col-md-11">
              <div className="form-side login">
                <div className="card">
                  <div className="card-header">
                    <div className="row">
                      <div className="col-12 col-md-8 col-lg-8">
                        <h5 className="mb-2 mt-2 register-t1">
                          {t("register.register_title")}
                        </h5>
                      </div>
                      <div className="col-12 col-md-2 col-lg-4">
                        <div className="register-logo">
                          <img src={logo3} alt="logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="register-scroll">
                    <div className="card-body-register">
                      <form
                        action="#"
                        className="av-tooltip tooltip-label-bottom"
                        onSubmit={handleSubmit}
                        name="register"
                      >
                        <div className="row">
                          <div className="col-12 col-md-4 col-lg-4 mb-2 mt-2">
                            <div className="form-group has-float-label form-group">
                              <label className="register-star">
                                {t("register.register_First_Name")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="fname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.fname && (
                                <h6 className="text-danger">{errors.fname}</h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2 mt-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Last_Name")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="lname"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.lname && (
                                <h6 className="text-danger">{errors.lname}</h6>
                              )}
                            </div>
                          </div>

                          <div className="col-12 col-md-4 col-lg-4 mb-2 mt-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Email")}

                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.email && (
                                <h6 className="text-danger">{errors.email}</h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Mobile_Number")}
                                <span className="text-danger">*</span>
                              </label>
                              <PhoneInput
                                country={"in"}
                                value={phonenumber}
                                // onChange={(phone) => setmobilenumber(phone)}
                                // defaultErrorMessage="Please Enter Valid Number"
                                prefix="+"
                                disabled={true}
                                disableDropdown={true}
                                inputProps={{
                                  name: "phone",
                                  required: true,
                                  autoFocus: true,
                                  style: {
                                    marginLeft: "13%",
                                    width: "90%",
                                    paddingLeft: "23px '!important'",
                                  },
                                }}
                              />
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Business_Name")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="businessName"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.businessName && (
                                <h6 className="text-danger">
                                  {errors.businessName}
                                </h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Business_Type")}
                                <span className="text-danger">*</span>
                              </label>
                              <select
                                name="businessType"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              >
                                <option value="">
                                  {t("register.register_Select_Business_Type")}
                                </option>
                                {categorylist &&
                                  categorylist.map((listitem, index) => {
                                    return (
                                      <>
                                        <option
                                          value={
                                            listitem.business_category_name
                                          }
                                          key={index}
                                        >
                                          {listitem.business_category_name}
                                        </option>
                                      </>
                                    );
                                  })}
                              </select>
                              {errors.businessType && (
                                <h6 className="text-danger">
                                  {errors.businessType}
                                </h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_State_provision")}

                                <span className="text-danger">*</span>
                              </label>
                              <select
                                name="State"
                                className="form-control"
                                onChange={(e) => {
                                  handleChange(e);
                                  setselectedstatecode(e.target.value);
                                }}
                                onBlur={handleBlur}
                                required={true}
                              >
                                <option value="">
                                  {t(
                                    "register.register_Select_State_Provision"
                                  )}
                                </option>
                                {stateInfo &&
                                  stateInfo.map((state, index) => {
                                    return (
                                      <>
                                        <option value={state.name} key={index}>
                                          {state.name}
                                        </option>
                                      </>
                                    );
                                  })}
                              </select>
                              {errors.State && (
                                <h6 className="text-danger">{errors.State}</h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_City")}
                                <span className="text-danger">*</span>
                              </label>

                              <select
                                name="city"
                                className="form-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              >
                                <option value="">
                                  {t("register.register_Select_City")}
                                </option>
                                {cityInfo &&
                                  cityInfo.map((city, index) => {
                                    return (
                                      <>
                                        <option value={city.name} key={index}>
                                          {city.name}
                                        </option>
                                      </>
                                    );
                                  })}
                              </select>
                              {errors.city && (
                                <h6 className="text-danger">{errors.city}</h6>
                              )}
                            </div>
                          </div>

                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Website_Link")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="websiteLink"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.websiteLink && (
                                <h6 className="text-danger">
                                  {errors.websiteLink}
                                </h6>
                              )}
                            </div>
                          </div>

                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Postal_Code")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="postalcode"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.postalcode && (
                                <h6 className="text-danger">
                                  {errors.postalcode}
                                </h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Landmark")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="Landmark"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.Landmark && (
                                <h6 className="text-danger">
                                  {errors.Landmark}
                                </h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Address_Line1")}{" "}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="Line1"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                required={true}
                              />
                              {errors.Line1 && (
                                <h6 className="text-danger">{errors.Line1}</h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Address_Line2")}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                name="Line2"
                                onChange={(event) => {
                                  setline2(event.target.value);
                                }}
                              />
                            </div>
                          </div>

                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Password")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={passwordShown ? "text" : "password"}
                                required={true}
                              />
                              <p className="login-eye">
                                <i onClick={togglePasswordVisiblity}>{eye}</i>
                              </p>
                              {errors.password && (
                                <h6 className="text-danger">
                                  {errors.password}
                                </h6>
                              )}
                            </div>
                          </div>
                          <div className="col-12 col-md-4 col-lg-4 mb-2">
                            <div className="form-group has-float-label form-group">
                              <label className="">
                                {t("register.register_Confirm_Pasword")}
                                <span className="text-danger">*</span>
                              </label>
                              <input
                                className="form-control"
                                name="confirmpassword"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                type={passwordShown1 ? "text" : "password"}
                                required={true}
                              />
                              <p className="login-eye">
                                <i onClick={togglePasswordVisiblity1}>{eye1}</i>
                              </p>
                              {errors.confirmpassword && (
                                <h6 className="text-danger">
                                  {errors.confirmpassword}
                                </h6>
                              )}
                            </div>
                          </div>
                          <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="registeration-back-submit">
                              <Link to="/Sendotp" className="text-white">
                                <button
                                  className="mr-2"
                                  style={{ backgroundColor: "#602008" }}
                                >
                                  {t("button.Cancle")}
                                </button>
                              </Link>
                              <button
                                type="submit"
                                disabled={buttonState}
                                className="submit-btn"
                              >
                                {buttonState ? (
                                  <>
                                    <Spn
                                      as="span"
                                      variant="warning"
                                      size="sm"
                                      role="status"
                                      aria-hidden="true"
                                      animation="grow"
                                    />
                                    <>
                                    {t("button.loadng")}
                                   </>
                                  </>
                                ) : (
                                  <> {t("button.register")}</>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* )} */}
        </div>
      </PublicWrapperStyled>
    </Page>
  );
};

export default Register;
