import { useState, useEffect } from "react";
import { omit } from "lodash";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const useForm = (callback) => {
    //Form values
   
    const [values, setValues] = useState({});
    const [isFormReset, setIsFormReset] = useState(false);
    const [password, setPassword] = useState();
    const [errors, setErrors] = useState({});

    // const [pswd, setPswd] = useState();
    const [formname, setformname] = useState("");
    // console.log(values, "values.............")
    // console.log(formname, "formname.............")

    const resetForm = () => {
      setValues({});
      setErrors({});
      setIsFormReset(true);
    //   alert("helo")
    };
    //Errors
    // const isValidFileUploaded = (file) => {
    //     console.log(file, "file");
    //     const validExtensions = ["pdf", "plain", "doc"];
    //     const fileExtension = file.type.split("/")[1];
    //     return validExtensions.includes(fileExtension);
    // };
    const validate = (event, name, value) => {
        const trimmedValue = typeof value === 'string' ? value.trim() : value;

        //A function to validate each input values
        switch (name) {

            case "mobilenumber":
                if (!new RegExp(/^[0-9+].{6,12}$/).test(value)) {
                    setErrors({
                        ...errors,
                        mobilenumber: "Mobile Number Should Be  7 To 12 digit number",
                    });
                } else {
                    let newObj = omit(errors, "mobilenumber");
                    setErrors(newObj);
                }
                break;

                  case "phonenumber":
                if (!/^[0-9+].{6,13}$/.test(value)) {
          // Set the error state
                 setErrors({
                   ...errors,
                phonenumber: "Phone number must be 7 to 13 digits and may contain numbers and '+'",
                });
                } else {
          // Clear the error state for phonenumber input
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
                case "eventemail":
                  if (value.trim().length <= 0) {
                      setErrors({
                          ...errors,
                          eventemail: "Please Enter Your Event Email Address",
                      });
                  } else if (
                      !new RegExp(
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                      ).test(value)
                  ) {
                      setErrors({
                          ...errors,
                          eventemail: "Enter a valid event email address",
                      });
                  } else {
                      let newObj = omit(errors, "eventemail");
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
               case "lname":
                if (value.trim().length <= 0) {
                    setErrors({
                        ...errors,
                        lname: 'Please Enter Your Last Name',
                    });
                } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
                    setErrors({
                        ...errors,
                        lname: 'Only Enter Alphabet',
                    });
                } else {
                    let newObj = omit(errors, "lname");
                    setErrors(newObj);
                }
                break;
                case "eventname":
                  if (value.trim().length <= 0) {
                      setErrors({
                          ...errors,
                          eventname: "Please Enter Your Event Name",
                      });
                  } 
                  // else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
                  //     setErrors({
                  //         ...errors,
                  //         fname: "Only Enter Alphabet",
                  //     });
                  // } 
                  else {
                      let newObj = omit(errors, "eventname");
                      setErrors(newObj);
                  }
                  break;
                  case "venuename":
                    if (value.trim().length <= 0) {
                        setErrors({
                            ...errors,
                            venuename: "Please Enter Your Venue Name",
                        });
                    } 
                    // else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
                    //     setErrors({
                    //         ...errors,
                    //         fname: "Only Enter Alphabet",
                    //     });
                    // } 
                    else {
                        let newObj = omit(errors, "venuename");
                        setErrors(newObj);
                    }
                    break;
                   case "password":
                       if (
                    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
                       ) {
                    setErrors({
                        ...errors,
                        password: "Password must be 8 to 16 characters and contain at least one digit and one special character",
                    });
                    } else {
                    let newObj = omit(errors, "password");
                    setErrors(newObj);
                    setPassword(value);
                     }
                    break;
                   case "confirmpassword":
                   if (password !== value) {
                    setErrors({
                        ...errors,
                        confirmpassword: "Passwords do not match",
                    });
                } else {
                    let newObj = omit(errors, "confirmpassword");
                    setErrors(newObj);
                }
                break;

         case "country":
        // Validate the country dropdown selection
        if (!trimmedValue || !trimmedValue.value) {
            setErrors({
              ...errors,
              country: 'Country required',
            });
          } else {
            let newObj = omit(errors, "country");
            setErrors(newObj);
          }
          break;
          case "State":
            if (value.trim().length <= 0) {
              setErrors({
                ...errors,
                State: 'State required', // Custom error message for empty input
              });
            } else if (!new RegExp(/^[A-Za-zÀ-ÿ\s-]+$/).test(value)) {
              setErrors({
                ...errors,
                State: 'enter valid State', // Custom error message for invalid input
              });
            } else {
              let newObj = omit(errors, "State");
              setErrors(newObj);
            }
            break;
    
          case "city":
            if (value.trim().length <= 0) {
              setErrors({
                ...errors,
                city: 'City required', // Custom error message for empty input
              });
            } else if (!new RegExp(/^[A-Za-zÀ-ÿ\s-]+$/).test(value)) {
              setErrors({
                ...errors,
                city: 'enter valid City', // Custom error message for invalid input
              });
               } else {
              let newObj = omit(errors, "city");
              setErrors(newObj);
                }
                 break;
                 case "Line1":
                if (value.trim().length <= 0) {
                  setErrors({
                    ...errors,
                    Line1: 'Add Line1 required', // Custom error message for empty input
                  });
                } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
                  setErrors({
                    ...errors,
                    Line1: 'Add Line1 regEx', // Custom error message for invalid input
                  });
                } else {
                  let newObj = omit(errors, "Line1");
                  setErrors(newObj);
                }
                break;
        
                case "Line2":
                    if (value.trim().length <= 0) {
                      setErrors({
                        ...errors,
                        Line2: 'Add Line2 required', // Custom error message for empty input
                      });
                    } else
                    if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
                      setErrors({
                        ...errors,
                        Line2: 'Add Line2 regEx', // Custom error message for invalid input
                      });
                    } else {
                      let newObj = omit(errors, "Line2");
                      setErrors(newObj);
                    }
                    break;
       
                    case "date":
                      if (value.trim().length <= 0) {
                        setErrors({
                          ...errors,
                          date: 'Start date required',
                        });
                      } else {
                        let newObj = omit(errors, "date");
                        setErrors(newObj);
                      }
                      break;

                      case "starttime":
                      if (value.trim().length <= 0) {
                        setErrors({
                          ...errors,
                          starttime: 'Start time required',
                        });
                      } else {
                        let newObj = omit(errors, "starttime");
                        setErrors(newObj);
                      }
                      break;

                      case "endtime":
                        if (value.trim().length <= 0) {
                          setErrors({
                            ...errors,
                            endtime: 'End time required',
                          });
                        } else {
                          let newObj = omit(errors, "endtime");
                          setErrors(newObj);
                        }
                        break;
                  
                      case "postalcode":
                        if (value.trim().length <= 0) {
                          setErrors({
                            ...errors,
                            postalcode: 'PostalCode required', // Custom error message for empty input
                          });
                        } else if (
                          !new RegExp(
                            /(^\d{5}$)|(^\d{5}-\d{4}$)|(^\d{6}$)|(^\d{6}-\d{4}$)/
                          ).test(value)
                        ) {
                          setErrors({
                            ...errors,
                            postalcode: 'enter valid PostalCode', // Custom error message for invalid input
                          });
                        } else {
                          let newObj = omit(errors, "postalcode");
                          setErrors(newObj);
                        }
                        break;

                        case "eventwebsiteLink":
                          if (value.trim().length <= 0) {
                            setErrors({
                              ...errors,
                              eventwebsiteLink: 'Event Website Link is Required',
                  
                            });
                          } else if (
                            !new RegExp(
                              "^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
                            ).test(value)
                          ) {
                            setErrors({
                              ...errors,
                              eventwebsiteLink: 'Invalid Website Link',
                  
                            });
                          } else {
                            let newObj = omit(errors, "eventwebsiteLink");
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
        // alert("yse")
        // if(values.event.target.required===true){
        //   validate(values.event, values.event.target.name, values.event.target.value);
        // }else{
        //   let newObj = omit(errors, values.event.target.name);
        //       setErrors(newObj);
        // }
        // validate(values)
          if (Object.keys(errors).length === 0) {
        callback();
      }
        // callback();
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


    useEffect(() => {
        if (isFormReset) {
          setValues({});
          setErrors({});
          setIsFormReset(false);
        }
      }, [isFormReset]);


    return {
        formname,
        values,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        // validate,
        resetForm,
    };
};

export default useForm;






// import { useState, useEffect } from "react";
// import { omit } from "lodash";
// // import { toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";
// const useForm = (callback) => {
//   //Form values
//   const [values, setValues] = useState({});
//   const [password, setPassword] = useState();
//   const [formname, setformname] = useState("");
//   useEffect(() => {}, [password]);

//   //Errors
//   const [errors, setErrors] = useState({});
//   const isValidFileUploaded = (file) => {
//     console.log(file, "file");
//     const validExtensions = ["pdf", "plain", "doc"];
//     const fileExtension = file.type.split("/")[1];
//     return validExtensions.includes(fileExtension);
//   };
//   const validate = (event, name, value) => {
//     //A function to validate each input values

//     switch (name) {
//     //   case "mobilenumber":
//     //     if (!new RegExp(/^[0-9+].{6,12}$/).test(value)) {
//     //       // we will set the error state

//     //       setErrors({
//     //         ...errors,
//     //         mobilenumber: "Mobile Number Should Be  7 To 12 digit number",
//     //       });
//     //     } else {
//     //       // set the error state empty or remove the error for username input

//     //       //omit function removes/omits the value from given object and returns a new object
//     //       let newObj = omit(errors, "mobilenumber");
//     //       setErrors(newObj);
//     //     }
//     //     break;
//       case "phonenumber":
//         if (!new RegExp(/^[0-9+].{6,12}$/).test(value)) {
//           // we will set the error state

//           setErrors({
//             ...errors,
//             phonenumber: "Phone Number Should Be  7 To 12 digit number",
//           });
//         } else {
//           // set the error state empty or remove the error for username input

//           //omit function removes/omits the value from given object and returns a new object
//           let newObj = omit(errors, "phonenumber");
//           setErrors(newObj);
//         }
//         break;

//       case "email":
//         if (value.trim().length <= 0) {
//           setErrors({
//             ...errors,
//             email: "Please Enter Your Email Address",
//           });
//         } else if (
//           !new RegExp(
//             /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//           ).test(value)
//         ) {
//           setErrors({
//             ...errors,
//             email: "Enter a valid email address",
//           });
//         } else {
//           let newObj = omit(errors, "email");
//           setErrors(newObj);
//         }
//         break;
//       case "fname":
//         if (value.trim().length <= 0) {
//           setErrors({
//             ...errors,
//             fname: "Please Enter Your First Name",
//           });
//         } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
//           setErrors({
//             ...errors,
//             fname: "Only Enter Alphabet",
//           });
//         } else {
//           let newObj = omit(errors, "fname");
//           setErrors(newObj);
//         }
//         break;
//         case "lname":
//             if (value.trim().length <= 0) {
//               setErrors({
//                 ...errors,
//                 lname: "Please Enter Your Last Name",
//               });
//             } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
//               setErrors({
//                 ...errors,
//                 lname: "Only Enter Alphabet",
//               });
//             } else {
//               let newObj = omit(errors, "lname");
//               setErrors(newObj);
//             }
//             break;
//       // case "businessName":
//       //   if (value.trim().length <= 0) {
//       //     setErrors({
//       //       ...errors,
//       //       businessName: "Please Enter Your Company Name",
//       //     });
//       //   } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
//       //     setErrors({
//       //       ...errors,
//       //       businessName: "Only Enter Alphabet",
//       //     });
//       //   } else {
//       //     let newObj = omit(errors, "businessName");
//       //     setErrors(newObj);
//       //   }
//       //   break;

//     //   case "businessType":
//     //     if (value.trim().length <= 0) {
//     //       setErrors({
//     //         ...errors,
//     //         businessType: "Please Enter Your Service Requires",
//     //       });
//     //     } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
//     //       setErrors({
//     //         ...errors,
//     //         businessType: "Only Enter Alphabet",
//     //       });
//     //     } else {
//     //       let newObj = omit(errors, "businessType");
//     //       setErrors(newObj);
//     //     }
//     //     break;
//       // case "skype":
//       //   if (value.trim().length <= 0) {
//       //     setErrors({
//       //       ...errors,
//       //       skype: "Please Enter Your skype id",
//       //     });
//       //   } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
//       //     setErrors({
//       //       ...errors,
//       //       skype: "Please Enter Your skype id",
//       //     });
//       //   } else {
//       //     let newObj = omit(errors, "skype");
//       //     setErrors(newObj);
//       //   }
//       //   break;
    
//     //   case "country":
//     //     if (value.trim().length <= 0) {
//     //       setErrors({
//     //         ...errors,
//     //         country: "Please Enter Your country",
//     //       });
//     //     } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
//     //       setErrors({
//     //         ...errors,
//     //         country: "Please Enter country",
//     //       });
//     //     } else {
//     //       let newObj = omit(errors, "country");
//     //       setErrors(newObj);
//     //     }
//     //     break;

//     //   case "startdate":
//     //     if (value.trim().length <= 0) {
//     //       setErrors({
//     //         ...errors,
//     //         startdate: "Please select a date",
//     //       });
//     //     } else {
//     //       let newObj = omit(errors, "startdate");
//     //       setErrors(newObj);
//     //     }
//     //     break;
//     //     case "endDate":
//     //       if (value.trim().length <= 0) {
//     //         setErrors({
//     //           ...errors,
//     //           endDate: "Please select a date",
//     //         });
//     //       } else {
//     //         let newObj = omit(errors, "endDate");
//     //         setErrors(newObj);
//     //       }
//     //       break;

//     //   case "businessdesc":
//     //     if (value.trim().length <= 50) {
//     //       setErrors({
//     //         ...errors,
//     //         businessdesc: "Please Enter Description More then 50 character",
//     //       });
//     //     } else {
//     //       let newObj = omit(errors, "businessdesc");
//     //       setErrors(newObj);
//     //     }
//     //     break;
//     //   case "businessfile":
//     //     console.log(event.target.files.length);
//     //     if (event.target.files.length < 1) {
//     //       setErrors({
//     //         ...errors,
//     //         businessfile: "Please select a file",
//     //       });
//     //     } else if (!isValidFileUploaded(event.target.files[0])) {
//     //       setErrors({
//     //         ...errors,
//     //         businessfile: "Please select only .pdf, .txt, .doc",
//     //       });
//     //     } else {
//     //       let newObj = omit(errors, "businessfile");
//     //       setErrors(newObj);
//     //     }
//     //     break;
//       default:
//         break;
//     }
//   };

//   //A method to handle form inputs
//   const handleChange = (event) => {
//     console.log(event.target.required, "event");

//     //To stop default events
//     event.persist();

//     let name = event.target.name;
//     let val = event.target.value;
//     if (event.target.required === true) {
//       validate(event, name, val);
//     } else {
//       console.error("inside");

//       let newObj = omit(errors, name);
//       setErrors(newObj);
//     }
//     //Let's set these values in state
//     setValues({
//       ...values,
//       [name]: val,
//       [name + "event"]: event,
//       event: event,
//     });
//   };

//   //A method to handle form inputs
//   const handleBlur = (event) => {
//     console.log(event.target.required, "event");
//     //To stop default events
//     event.persist();

//     let name = event.target.name;
//     let val = event.target.value;
//     if (event.target.required === true) {
//       validate(event, name, val);
//     } else {
//       let newObj = omit(errors, name);
//       setErrors(newObj);
//     }

//     //Let's set these values in state
//     setValues({
//       ...values,
//       [name]: val,
//       [name + "event"]: event,
//       event: event,
//     });
//   };
//   // useEffect(() => {
//   //   if (Object.keys(errors).length === 0) {
//   //     callback();
//   //   }
//   // }, [errors]);
//   const handleSubmit = (event) => {
//     if (event) event.preventDefault();
//     setformname(event.target.name);
//     // if(values.event.target.required===true){
//     //   validate(values.event, values.event.target.name, values.event.target.value);
//     // }else{
//     //   let newObj = omit(errors, values.event.target.name);
//     //       setErrors(newObj);
//     // }
//     // validate(values)
//     callback();
//     // if(event.target.name==='kycform' &&  Object.keys(values).length !== 2)
//     // {
//     //   toast.warn("Please Fill/Update Required Fields",{position: "top-center"});
//     // } else if(((event.target.name==='register') &&  ((Object.keys(values).length < 26)))){
//     //   toast.warn("Please Fill/Update Required Fields",{position: "top-center"});
//     // } else if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
//     //   setformname(event.target.name);
//     //   callback();
//     // } else {
//     //   toast.warn("Please Fill/Update Required Fields",{position: "top-center"});
//     //   // alert("Please Fill Required Fields");
//     // }
//   };

//   return {
//     formname,
//     values,
//     errors,
//     handleChange,
//     handleBlur,
//     handleSubmit,
//   };
// };

// export default useForm;
