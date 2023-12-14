import { useState, useEffect } from "react";
import { omit } from "lodash";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const useForm = (callback) => {
  //Form values
  const [values, setValues] = useState({});
  const [password, setPassword] = useState();
  const [formname, setformname] = useState("");
  useEffect(() => {}, [password]);
  //Errors
  const [errors, setErrors] = useState({});
  const isValidFileUploaded = (file) => {
    console.log(file, "file");
    const validExtensions = ["pdf", "plain", "doc"];
    const fileExtension = file.type.split("/")[1];
    return validExtensions.includes(fileExtension);
  };
  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      case "mobilenumber":
        if (!new RegExp(/^[0-9+].{6,12}$/).test(value)) {
          // we will set the error state

          setErrors({
            ...errors,
            mobilenumber: "Mobile Number Should Be  7 To 12 digit number",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "mobilenumber");
          setErrors(newObj);
        }
        break;
      case "phonenumber":
        if (!new RegExp(/^[0-9+].{6,12}$/).test(value)) {
          // we will set the error state

          setErrors({
            ...errors,
            phonenumber: "Phone Number Should Be  7 To 12 digit number",
          });
        } else {
          // set the error state empty or remove the error for username input

          //omit function removes/omits the value from given object and returns a new object
          let newObj = omit(errors, "phonenumber");
          setErrors(newObj);
        }
        break;

      case "email":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            email: "Please Enter Your Email Address",
          });
        } else if (
          !new RegExp(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            email: "Enter a valid email address",
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;
      case "fname":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            fname: "Please Enter Your First Name",
          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            fname: "Only Enter Alphabet",
          });
        } else {
          let newObj = omit(errors, "fname");
          setErrors(newObj);
        }
        break;

      // case "businessName":
      //   if (value.trim().length <= 0) {
      //     setErrors({
      //       ...errors,
      //       businessName: "Please Enter Your Company Name",
      //     });
      //   } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
      //     setErrors({
      //       ...errors,
      //       businessName: "Only Enter Alphabet",
      //     });
      //   } else {
      //     let newObj = omit(errors, "businessName");
      //     setErrors(newObj);
      //   }
      //   break;

      case "businessType":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            businessType: "Please Enter Your Service Requires",
          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            businessType: "Only Enter Alphabet",
          });
        } else {
          let newObj = omit(errors, "businessType");
          setErrors(newObj);
        }
        break;
      // case "skype":
      //   if (value.trim().length <= 0) {
      //     setErrors({
      //       ...errors,
      //       skype: "Please Enter Your skype id",
      //     });
      //   } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
      //     setErrors({
      //       ...errors,
      //       skype: "Please Enter Your skype id",
      //     });
      //   } else {
      //     let newObj = omit(errors, "skype");
      //     setErrors(newObj);
      //   }
      //   break;
    
      case "country":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            country: "Please Enter Your country",
          });
        } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
          setErrors({
            ...errors,
            country: "Please Enter country",
          });
        } else {
          let newObj = omit(errors, "country");
          setErrors(newObj);
        }
        break;

      case "startdate":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            startdate: "Please select a date",
          });
        } else {
          let newObj = omit(errors, "startdate");
          setErrors(newObj);
        }
        break;
        case "endDate":
          if (value.trim().length <= 0) {
            setErrors({
              ...errors,
              endDate: "Please select a date",
            });
          } else {
            let newObj = omit(errors, "endDate");
            setErrors(newObj);
          }
          break;

      case "businessdesc":
        if (value.trim().length <= 50) {
          setErrors({
            ...errors,
            businessdesc: "Please Enter Description More then 50 character",
          });
        } else {
          let newObj = omit(errors, "businessdesc");
          setErrors(newObj);
        }
        break;
      case "businessfile":
        console.log(event.target.files.length);
        if (event.target.files.length < 1) {
          setErrors({
            ...errors,
            businessfile: "Please select a file",
          });
        } else if (!isValidFileUploaded(event.target.files[0])) {
          setErrors({
            ...errors,
            businessfile: "Please select only .pdf, .txt, .doc",
          });
        } else {
          let newObj = omit(errors, "businessfile");
          setErrors(newObj);
        }
        break;
      default:
        break;
    }
  };

  //A method to handle form inputs
  const handleChange = (event) => {
    console.log(event.target.required, "event");

    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;
    if (event.target.required === true) {
      validate(event, name, val);
    } else {
      console.error("inside");

      let newObj = omit(errors, name);
      setErrors(newObj);
    }
    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
      [name + "event"]: event,
      event: event,
    });
  };

  //A method to handle form inputs
  const handleBlur = (event) => {
    console.log(event.target.required, "event");
    //To stop default events
    event.persist();

    let name = event.target.name;
    let val = event.target.value;
    if (event.target.required === true) {
      validate(event, name, val);
    } else {
      let newObj = omit(errors, name);
      setErrors(newObj);
    }

    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
      [name + "event"]: event,
      event: event,
    });
  };
  // useEffect(() => {
  //   if (Object.keys(errors).length === 0) {
  //     callback();
  //   }
  // }, [errors]);
  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setformname(event.target.name);
    // if(values.event.target.required===true){
    //   validate(values.event, values.event.target.name, values.event.target.value);
    // }else{
    //   let newObj = omit(errors, values.event.target.name);
    //       setErrors(newObj);
    // }
    // validate(values)
    callback();
    // if(event.target.name==='kycform' &&  Object.keys(values).length !== 2)
    // {
    //   toast.warn("Please Fill/Update Required Fields",{position: "top-center"});
    // } else if(((event.target.name==='register') &&  ((Object.keys(values).length < 26)))){
    //   toast.warn("Please Fill/Update Required Fields",{position: "top-center"});
    // } else if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
    //   setformname(event.target.name);
    //   callback();
    // } else {
    //   toast.warn("Please Fill/Update Required Fields",{position: "top-center"});
    //   // alert("Please Fill Required Fields");
    // }
  };

  return {
    formname,
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};

export default useForm;
