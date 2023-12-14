import { Fragment, forwardRef, useCallback, useState, useEffect } from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import InputField from '../../components/fields/InputField';
import TextArea from '../../components/fields/TextField';
import moment from "moment";
import CustomSelect from '../../components/fields/CustomSelectBox';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import AvatarUploader from "./components/ImageUpload";
import { BiCalendar, BiTime } from "react-icons/bi";
import "./flag.css";
import useForm from 'hooks/useForm';
import { Country, State, City } from "country-state-city";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import CryptoJS from 'crypto-js'; // Import CryptoJS
import { ImSpinner6 } from "react-icons/im";
import useLocalStorage from 'hooks/useLocalStorage';
import useLctoken from 'hooks/useLctoken';
import HelmetWrapper from 'common/Loader/HelmetWrapper';

// /* SelectBox*/


const options = [
  { name: 'option1', label: 'Option 1' },
  { name: 'option2', label: 'Option 2' },
  { name: 'option3', label: 'Option 3' },
];


const bussinesstypes = [
  { name: 'Software', label: 'Software' },
  { name: 'AdditionalResources', label: 'Additional Resources' },
  { name: 'SoleProprietorship', label: 'Sole Proprietorship' },
  { name: 'Partnership', label: 'Partnership' },
  { name: 'LimitedLiabilityCompany', label: 'Limited Liability Company' },
  { name: 'Corporation', label: 'Corporation' }
];





const ProfileEdit = (props) => {
  const { label, id, extra, type, placeholder, variant, state, disabled, onChange, onBlur, name, value, required } =
    props;

  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = useState([0]);

  // Using the custom hook to get and set a value in localStorage
  const myValue = useLocalStorage('selectedLanguage');

  const { t } = useTranslation();

  useEffect(() => {
    const selectLanguage = (decryptedValue) => {
      i18next.changeLanguage(decryptedValue, (err, t) => {
        if (err) return console.error('something went wrong loading', err);
      });
    };
    selectLanguage(myValue.value);
  }, [myValue.value]);

  const CustomInputField = forwardRef(
    (
      {
        name,
        value,
        label,
        onClick,
        disabled,
        inputClassName,
        icon = <BiCalendar size="1rem" />,
      },
      ref
    ) => (
      <button className="w-full " onClick={onClick} ref={ref} disabled={disabled}>
        <InputGroup6
          name={name}
          value={value}
          onChange={() => null}
          label={label}
          decoration={icon}
          disabled={disabled}
          inputClassName={inputClassName}
        />
      </button>
    )
  );
  function DatepickerPresentationGroup({ caption, children }) {
    return (
      <div className="space-y-2">
        <div className="font-semibold text-sm text-gray-700">{caption}</div>
        {children}
      </div>
    );
  }

  function InputGroup6({
    className = "w-full ",
    label,
    name,
    value,
    onChange,
    type = "text",
    decoration,
    inputClassName = "",
    decorationClassName = "",
    disabled,
  }) {
    return (
      <div className="flex flex-row items-stretch w-full">
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={label}
          aria-label={label}
          className={`peer block w-full p-3 text-gray-600 bg-gray-100 border border-r-0 focus:border-red-400 focus:bg-white focus:outline-none focus:ring-0 appearance-none rounded-tr-none rounded-br-none rounded transition-colors duration-300 ${disabled ? "bg-gray-200" : ""
            } ${inputClassName}`}
          disabled={disabled}
        />
        <div
          className={`flex items-center rounded-tl-none rounded-bl-none rounded pr-3 py-3 text-gray-600 bg-gray-100 border border-l-0 peer-focus:border-red-400 peer-focus:bg-white transition-colors duration-300 ${disabled ? "bg-gray-200" : ""
            } ${decorationClassName}`}
        >
          {decoration}
        </div>
      </div>
    );
  }

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onRangeChange = useCallback(
    (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    },
    [setStartDate, setEndDate]
  );

  const [fistname, setfisrtname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [mobile, setmobile] = useState("");
  const [cityname, setcityname] = useState("");
  const [statename, setstatename] = useState("");
  const [countryname, setcountryname] = useState("");
  const [postalcode, setpostalcode] = useState("");
  const [landmark, setlandmark] = useState("");
  const [addressline1, setaddressline1] = useState("");
  const [addressline2, setaddressline2] = useState("");
  const [businessname, setbusinessname] = useState("");
  const [businesstype, setbusinesstype] = useState("");
  const [businessdesc, setbusinessdesc] = useState("");
  const [websitelink, setwebsitelink] = useState("");
  const [directorname, setdirectorname] = useState("");
  const [emailstatus, setemailstatus] = useState("0");
  const [totalemployee, settotalemployee] = useState("");
  const [propsstate, setpropsstate] = useState("other");
  const [isDisabled, setIsDisabled] = useState(true);
  const [showeditbutton, setshoweditbutton] = useState(true);
  const [showupdatebutton, setshowupdatebutton] = useState(false);
  const [valid, setvalid] = useState(true);
  const [statecode, setstatecode] = useState("");
  const [countrycode, setcountrycode] = useState("");
  const [countryInfo, setcountryInfo] = useState([]);
  const [stateInfo, setstateInfo] = useState([]);
  const [cityInfo, setcityInfo] = useState([]);
  const [selectedstatecode, setselectedstatecode] = useState("");
  const [selectedcountrycode, setselectedcountrycode] = useState("");
  const [getrefresh, setrefresh] = useState(false);
  const [buttonState, setButtonState] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");



  const handleEditbutton = () => {
    setIsDisabled(isDisabled ? false : true);
    setshoweditbutton(showeditbutton ? false : true);
    setshowupdatebutton(showupdatebutton ? false : true);
  };

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


  const [originalToken, setOriginalToken] = useState('');

  // Using the custom hook to get and set a value in localStorage
  const myToken = useLctoken('token');

  useEffect(() => {
    const encryptedToken = myToken.token;
    if (encryptedToken) {
      setOriginalToken(myToken.token);
    }
  }, [myToken.token]);

  function getProfile() {
    if (originalToken) {
      axios
        .post(
          process.env.REACT_APP_PRIVATE_URL + "getprofile",
          {},
          {
            headers: {
              "x-token": originalToken,
            },
          }
        )
        .then((response) => {
          const outlook = response;

          // console.log("getprofile",outlook)
          if (outlook.data.code === 200) {
            // navigate(`/admin/account`, { replace: true });
            setbusinessname(response.data.data.businessname);
            setbusinesstype(response.data.data.businesstype);
            setcityname(response.data.data.city);
            // setcompanyregistrationdate(response.data.data.companyregitrationdate);
            setcountryname(response.data.data.country);
            setemail(response.data.data.email);
            setfisrtname(response.data.data.firstname);
            setlandmark(response.data.data.landmark);
            setlastname(response.data.data.lastname);
            setaddressline1(response.data.data.line1);
            setaddressline2(response.data.data.line2);
            setmobile(response.data.data.phonenumber);
            setphone(response.data.data.phonenumber);
            setpostalcode(response.data.data.postalcode);
            setstatename(response.data.data.state);
            setwebsitelink(response.data.data.weblink);
            setbusinessdesc(response.data.data.businessdescription);
            setdirectorname(response.data.data.directorname);
            settotalemployee(response.data.data.totolemployee);
            setemailstatus(response.data.data.email_verify_status);
            setImagePreview(response.data.data.profilepic)
          } else if (outlook.data.code === 401) {
            toast.error(outlook.data.message);
            localStorage.removeItem("token");
            navigate(`/login`, { replace: true });
          } else {
            toast.error(outlook.data.message);
          }
        });
    }

  }

  useEffect(() => {
    getProfile()
    setrefresh(false)
  }, [originalToken, getrefresh])

  const {
    handleBlur,
    handleChange,
    values,
    errors,
    handleSubmit,
    formname,
  } = useForm(formProfile); //Final submit function

  function formProfile() {

    let update = {};
    if (values.fname !== undefined) {
      update["firstname"] = values.fname;
    }

    if (values.lname !== undefined) {
      update["lastname"] = values.lname;
    }

    if (values.email !== undefined) {
      update["email"] = values.email;
    }


    if (phone !== undefined) {
      update["phonenumber"] = phone;
    }

    if (values.mobilenumber !== undefined) {
      update["mobilenumber"] = values.mobilenumber;
    }


    if (values.Line1 !== undefined) {
      update["line1"] = values.Line1;
    }

    if (values.Line2 !== undefined) {
      update["line2"] = values.Line2;
    }

    if (values.postalcode !== undefined) {
      update["postalcode"] = values.postalcode;
    }

    if (values.Landmark !== undefined) {
      update["landmark"] = values.Landmark;
    }

    if (values.websiteLink !== undefined) {
      update["weblink"] = values.websiteLink;
    }

    if (values.country !== undefined) {
      update["country"] = values.country;
    }

    if (values.State !== undefined) {
      update["state"] = values.State;
    }

    if (values.city !== undefined) {
      update["city"] = values.city;
    }

    if (values.businessName !== undefined) {
      update["businessname"] = values.businessName;
    }

    if (values.businessType !== undefined) {
      update["businesstype"] = values.businessType;
    }

    if (values.businessdesc !== undefined) {
      update["businessdescription"] = values.businessdesc;
    }

    if (values.employeelength !== undefined) {
      update["totalemployee"] = values.employeelength;
    }

    if (values.startdate !== undefined) {
      update["comapanyregistereddate"] = values.startdate;
    }

    if (values.directorname !== undefined) {
      update["director"] = values.directorname;
    }
    // trackPromise(

    axios
      .post(process.env.REACT_APP_PRIVATE_URL + "updateprofile", update, {
        headers: {
          "x-token": originalToken,
        },
      })
      .then((response) => {
        const outlook = response;
        setButtonState(true)
        if (outlook.data.code === 200) {
          setTimeout(() => setButtonState(false),1000);

          getProfile()
          setrefresh(true)
          setTimeout(() =>  setIsDisabled(isDisabled ? false : true),1000);
          setTimeout(() =>  setshoweditbutton(showeditbutton ? false : true),1000);
          setshowupdatebutton(showupdatebutton ? false : true);
          // navigate(`/admin/account`, { state: { responce: response } });
          toast.success(outlook.data.message);
        } else {
          toast.error(outlook.data.message);
        }
      });
    // )

  }

  
  
  function getimage(image) {
    // Reset the error message
    setErrorMessage(null);
    
    if (!image) {
        setErrorMessage("No image provided.");
        return;
    }
    if (!image.type || !image.type.startsWith("image/")) {
        setErrorMessage("Invalid image format.");
        return;
    }
    if (image.size > 5 * 1024 * 1024) { // 5MB in bytes
        setErrorMessage("Image size exceeds the maximum allowed size.");
        return;
    }

    // console.log("Image is valid and can be used:", image);
   
    // axios 
    const bodyFormData = new FormData();
    bodyFormData.append('profilepic', image);
    if (originalToken) {
      axios.post(process.env.REACT_APP_PRIVATE_URL + "uploadprofile", bodyFormData, {
        'Content-Type': 'multipart/form-data', headers: {
          'x-token': originalToken,
        }
      })
        .then((response) => {
          const outlook = response;
     
          if (outlook.data.code === 200) {
       
            toast.success(outlook.data.message);
             getProfile()
            setIsDisabled(isDisabled ? false : true);
            setshoweditbutton(showeditbutton ? false : true);
            setshowupdatebutton(showupdatebutton ? false : true);
            
          } else if (outlook.data.code === 401) {
            toast.error(outlook.data.message);
            setTimeout(() => {
            setButtonState(false)

            }, 2000);
            // localStorage.removeItem("token");
            // navigate(`/login`, { replace: true });
          } else {
            if (outlook.data.code === 404) {
              setTimeout(() => {
                setButtonState(false)

              }, 2000);
              toast.error(outlook.data.message);
            } else {
              toast.error(outlook.data.message);
              setTimeout(() => {
                setButtonState(false)

              }, 2000);
            }
          }
        });
    }

}


  return (
    <>
      <HelmetWrapper
        title={t("main.Page_Titles.profileedit")}
      />
      <ToastContainer />
      <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="col-span-1 h-fit w-full xl:col-span-1 2xl:col-span-2">
          <form onSubmit={handleSubmit} name="profile">
            <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none mt-3 !z-5 overflow-hidden">
              <div className="px-5 py-5">
                <div className="w-full mb-4 ">
                  <h3 className="font-medium text-black dark:text-[#f3a11f]">
                    {t('main.profile.CompanyDetails')}
                  </h3>
                </div>
                <div className="p-6.5">
                  <div className=" mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
                    <div className="w-full xl:w-full relative">
                      <InputField
                        label={t('main.profile.Business_Name')}
                        labelstyle={true}
                        name="businessName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={businessname}
                        disabled={isDisabled}
                        placeholder={t('main.profile.Enter_business_name')}
                        id="Bname"
                        type="text"
                        required={true}
                      />
                      {errors.businessName && (
                        <h6 className="error">
                          {errors.businessName}
                        </h6>
                      )}
                    </div>
                  </div>
                  <div className=" mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-2">
                    <div className="w-full xl:w-full relative">
                      {isDisabled ? (
                        <InputField
                          label={t("main.profile.Business_Type_is_Required") + "*"}
                          labelstyle={true}
                          className="form-control"
                          type="text"
                          name="businessType"
                          placeholder={t("main.profile.Business_Type_is_Required")}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={businesstype}
                          disabled={isDisabled}
                          required={true}
                        />
                      ) : (
                        <CustomSelect
                          options={bussinesstypes}
                          label={t('main.profile.Business_Type')}
                          labelstyle={true}
                          name="businessType"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                          defaultValue={businesstype}
                        />
                      )}
                      {errors.businessType && (
                        <h6 className="error">
                          {errors.businessType}
                        </h6>
                      )}
                    </div>
                    <div className="w-full xl:w-full relative">
                      <InputField
                        label={t('main.profile.Website_Link') + "*"}
                        labelstyle={true}
                        id="Wlink"
                        type="text"
                        required={true}
                        name="websiteLink"
                        placeholder={t('main.profile.Website_Link')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={websitelink}
                        disabled={isDisabled}
                      />
                      {errors.websiteLink && (
                        <h6 className="error">
                          {errors.websiteLink}
                        </h6>
                      )}
                    </div>
                    {/* <div className="mb-4.5 flex flex-col gap-6 xl:flex-row"> */}
                    <div className="w-full xl:w-full relative">
                      <InputField
                        label={t('main.profile.Company_started_date') + "*"}
                        labelstyle={true}
                        type="date"
                        name="startdate"
                        placeholder={t('main.profile.Company_started_date')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={moment().format(
                          "YYYY-MM-DD"
                        )}
                        disabled={isDisabled}
                        required={true}
                      />
                      {errors.startdate && (
                        <h6 className="error">
                          {errors.startdate}
                        </h6>
                      )}
                    </div>
                    <div className="w-full xl:w-full relative">
                      <InputField
                        extra="mb-3"
                        label={t('main.profile.Enter_Total_Employee_strength') + "*"}
                        labelstyle={true}
                        placeholder={t('main.profile.Enter_Total_Employee_strength')}
                        id="Enumber"
                        type="text"
                        required={true}
                        name="employeelength"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={totalemployee}
                        disabled={isDisabled}
                      />
                      {errors.employeelength && (
                        <h6 className="error">
                          {errors.employeelength}
                        </h6>
                      )}
                    </div>
                  </div>
                  <div className=" grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
                    <div className="w-full xl:w-full relative">
                      <TextArea
                        label={t('main.profile.Business_description') + "*"}
                        labelstyle={true}
                        className='TextArea'
                        id="Bdescription"
                        type="text"
                        rows="4"
                        name="businessdesc"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required={true}
                        defaultValue={businessdesc}
                        disabled={isDisabled}
                      />
                      {errors.businessdesc && (
                        <h6 className="error">
                          {errors.businessdesc}
                        </h6>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none mt-3 !z-5 overflow-hidden">
              <div className="px-5 py-5">
                <div className="w-full mb-4 ">
                  <h3 className="font-medium text-black dark:text-[#f3a11f]">
                    {t('main.profile.User_Details')}
                  </h3>
                </div>
                <div className="p-6.5">
                  <div className=" mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-2">
                    <div className="w-full xl:w-full relative">
                      <InputField
                        label={t('main.profile.First_Name')}
                        labelstyle={true}
                        placeholder={t('main.profile.Enter_first_name')}
                        id="Fname"
                        type="text"
                        name="fname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={fistname}
                        disabled={isDisabled}
                        required={true}

                      />
                      {errors.fname && (
                        <h6 className="error">
                          {errors.fname}
                        </h6>
                      )}
                    </div>
                    <div className="w-full xl:w-full relative">
                      <InputField
                        label={t('main.profile.Last_Name')}
                        labelstyle={true}
                        placeholder={t('main.profile.Enter_last_name')}
                        id="Lname"
                        type="text"
                        name="lname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={lastname}
                        disabled={isDisabled}
                        required={true}
                      />
                      {errors.lname && (
                        <h6 className="error">
                          {errors.lname}
                        </h6>
                      )}
                    </div>
                    {/* <div className="mb-4.5 flex flex-col gap-6 xl:flex-row"> */}
                    <div className="w-full xl:w-full relative">
                      <InputField
                        label={t('main.profile.Email')}
                        labelstyle={true}
                        placeholder={t('main.profile.Enter_email_address')}
                        id="Email"
                        type="text"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={email}
                        disabled={isDisabled}
                        required={true}
                      />
                      {errors.email && (
                        <h6 className="error">
                          {errors.email}
                        </h6>
                      )}
                    </div>

                   
                    <div className="w-full xl:w-full relative">
                      <label htmlFor="phone" className="block text-sm text-gray-600 dark:text-white font-medium">{t('main.profile.phone_number') + "*"}</label>
                      {isDisabled ? (
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
                        <>
                        
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
                        </>
                      )}
                      {errors.phonenumber && (
                        <h6 className="error">
                          {errors.phonenumber}
                        </h6>
                      )}
                    </div>
                    {/* ------------- */}
                    <div className="w-full xl:w-full relative">

                      {isDisabled ? (
                        <InputField
                          label={t('main.profile.country') + "*"}
                          labelstyle={true}
                          // className="form-control"
                          type="text"
                          name="countryname"
                          placeholder={t('main.profile.country')}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={countryname}
                          disabled={isDisabled}
                          required={true}
                        />
                      ) : (
                        <CustomSelect
                          options={countryInfo}
                          // onChange={handleSelectChange} 
                          label="Country*"
                          labelstyle={true}
                          name="country"
                          onChange={(e) => {
                            handleChange(e);
                            setselectedcountrycode(e.target.value);
                          }}
                          onBlur={handleBlur}
                          required={true}
                          defaultValue={countryname}
                        />
                      )}
                      {errors.country && (
                        <h6 className="error">
                          {errors.country}
                        </h6>
                      )}
                    </div>
                    {/* ------------ */}
                    <div className="w-full xl:w-full relative">
                      {isDisabled ? (
                        <InputField
                          // className="form-control"
                          type="text"
                          name="State"
                          label={t('main.profile.State')}
                          labelstyle={true}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={statename}
                          disabled={isDisabled}
                          required={true}
                        />
                      ) : (
                        <CustomSelect
                          options={stateInfo}
                          // onChange={handleSelectChange}  
                          label={t('main.profile.State')}
                          labelstyle={true}
                          name="State"
                          onChange={(e) => {
                            handleChange(e);
                            setselectedstatecode(e.target.value);
                          }}
                          onBlur={handleBlur}
                          required={true}
                          defaultValue={statename}
                        />
                      )}
                      {errors.State && (
                        <h6 className="error">
                          {errors.State}
                        </h6>
                      )}
                    </div>
                    <div className="w-full xl:w-full relative">
                      {isDisabled ? (
                        <InputField
                          label={t('main.profile.City') + "*"}
                          labelstyle={true}
                          // className="form-control"
                          type="text"
                          name="city"
                          placeholder={t('main.profile.City')}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={cityname}
                          disabled={isDisabled}
                          required={true}
                        />
                      ) : (
                        <CustomSelect
                          options={cityInfo}
                          // onChange={handleSelectChange} 
                          label={t('main.profile.City')}
                          labelstyle={true}
                          name="city"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          required={true}
                          defaultValue={cityname}
                          
                        />
                      )}
                      {errors.city && (
                        <h6 className="error">
                          {errors.city}
                        </h6>
                      )}
                    </div>
                    <div className="w-full xl:w-full relative">
                      <InputField
                        label={t('main.profile.Postal_Code')}
                        labelstyle={true}
                        id="postalcode"
                        type="text"
                        name="postalcode"
                        placeholder={t('main.profile.Enter_Postal_Code')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={postalcode}
                        disabled={isDisabled}
                        required={true}
                      />
                      {errors.postalcode && (
                        <h6 className="error">
                          {errors.postalcode}
                        </h6>
                      )}
                    </div> 
                    <div className="w-full xl:w-full relative">
                      <TextArea
                        label={t('main.profile.Address_Line1')}
                        labelstyle={true}
                        id="Line1"
                        type="text"
                        name="Line1"
                        placeholder={t('main.profile.Address_Line1')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={addressline1}
                        disabled={isDisabled}
                        required={true}
                      />
                      {errors.Line1 && (
                        <h6 className="error">
                          {errors.Line1}
                        </h6>
                      )}
                    </div>
                    <div className="w-full xl:w-full relative">
                      <TextArea
                        label={t('main.profile.Address_Line2')}
                        labelstyle={true}
                        id="AddressLine2"
                        type="text"
                        name="Line2"
                        placeholder={t('main.profile.Address_Line2')}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        disabled={isDisabled}
                        defaultValue={addressline2}
                      // required={true}
                      />
                      {errors.Line2 && (
                        <h6 className="error">
                          {errors.Line2}
                        </h6>
                      )}
                    </div>
                  </div>
                  <div className="mt-3 grid h-full grid-cols-1 gap-5 xl:grid-cols-1 2xl:grid-cols-1">
                    <div className="w-full xl:w-full relative">
                      <TextArea
                        label={t('main.profile.Landmark')}
                        labelstyle={true}
                        placeholder={t('main.profile.Enter_Landmark')}
                        id="Landmark"
                        type="text"
                        name="Landmark"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        defaultValue={landmark}
                        disabled={isDisabled}
                        required={true}
                        className="TextArea"
                      />
                      {errors.Landmark && (
                        <h6 className="error">
                          {errors.Landmark}
                        </h6>
                      )}
                    </div>
                  </div>
             
             
                  {isDisabled && valid ? (
                    ""
                  ) : (
                    <div className="flex w-full justify-center mt-5">
                    <button type="submit"
                      // disabled={Object.keys(errors).length > 0}
                      style={{
                        display: showeditbutton ? "none" : "",
                      }} className="btn_sm mt-5 w-72">
              
                      <span className="flex items-center">
                      {t('main.profile.Update_Profile')}
                          {buttonState && (
                            <ImSpinner6 className="text-2xl ml-2 mr-2 top-2 animate-spin inline-block w-4 h-4  border-blue-500 border-solid rounded-full" color={'white'} />
                          )}
                        </span>
                    </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-span-1 h-full w-full rounded-xl 2xl:col-span-1">
        <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none mt-3 !z-5 overflow-hidden">
            <div className='w-full px-5 py-5 grid justify-center text-center'
              style={{ display: showupdatebutton ? "none" : "" }}>
              <button
                onClick={handleEditbutton}
                className="flex w-full justify-center rounded bg-primary p-3 font-medium text-gray">
                {t('main.profile.edit_Profile')}
              </button>
            </div>
          </div>
          <div className="!z-5 relative flex flex-col rounded-[20px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 dark:!bg-navy-800 dark:text-white dark:shadow-none mt-3 !z-5 overflow-hidden">
            {/* <AvatarUploader /> */}
            <AvatarUploader disabled={isDisabled} props={getimage} imagePreview={`http://3.110.182.164/BCFINTECH/impetrosysserver/images/profile/${imagePreview}`}/>
                        {errorMessage && (
                            <h6 className="mt-1 text-center text-sm text-red-500">
                                {errorMessage}
                            </h6>
                        )}
            <div className='w-full px-10 py-10 grid justify-center text-center'>
              <h2 className='className="text-sm font-medium text-navy-700 dark:text-white mt-2'>BCT Pay</h2>
              <h3 className="text-md font-bold text-navy-700 dark:text-white mt-2">{fistname}</h3>
              <Link className="text-md font-medium text-navy-700 dark:text-white mt-2" to="/about">{email}</Link>
              <p className='text-md font-regular text-navy-700 dark:text-white mt-2'>{phone}</p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default ProfileEdit