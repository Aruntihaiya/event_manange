import React, { useState, useEffect } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import CryptoJS from 'crypto-js'; // Import CryptoJS
import { omit } from "lodash";

const useForm = (callback) => {

  //Form values
  const [values, setValues] = useState({});
  const [password, setPassword] = useState();
  const [pswd, setPswd] = useState();

  const [formname, setformname] = useState("");


  const { t } = useTranslation();
  // Get encrypted language from localStorage & convert into decrypted language
  const encryptedLanguageValue = localStorage.getItem('selectedLanguage');
  const bytes = CryptoJS.AES.decrypt(String(encryptedLanguageValue), process.env.REACT_APP_LANG_SECRET_KEY);
  const decryptedLanguageValue = bytes.toString(CryptoJS.enc.Utf8);

  useEffect(() => {
    const selectLanguage = (decryptedLanguageValue) => {
      i18next.changeLanguage(decryptedLanguageValue, (err, t) => {
        if (err) return console.error('something went wrong loading', err);
      });
    };
    selectLanguage(decryptedLanguageValue);
  }, [decryptedLanguageValue]);


  useEffect(() => {
  }, [password, t]);

  //Errors
  const [errors, setErrors] = useState({});
  const isValidFileUploaded = (file) => {
    try {
        if (!file || !file.type) {
            throw new Error("Invalid file object or file type is undefined.");
        }

        const validExtensions = ['png', 'jpeg', 'jpg', 'pdf'];
        const fileExtension = file.type.split('/')[1];

        if (!fileExtension) {
            throw new Error("Unable to determine file extension.");
        }

        return validExtensions.includes(fileExtension.toLowerCase());
    } catch (error) {
        console.error("Error in isValidFileUploaded:", error.message);
        return false;
    }
};

  const validate = (event, name, value) => {
    //A function to validate each input values

    switch (name) {
      case "mobilenumber":
        if (!/^[0-9+].{6,13}$/.test(value)) {
          // Set the error state
          setErrors({
            ...errors,
            mobilenumber: t("main.useFormValidationError.Mobile number must be 7 to 13 digits and may contain numbers and '+'"),
          });
        } else {
          // Clear the error state for mobilenumber input
          let newObj = omit(errors, "mobilenumber");
          setErrors(newObj);
        }
        break;

      case "phonenumber":
        if (!/^[0-9+].{6,13}$/.test(value)) {
          // Set the error state
          setErrors({
            ...errors,
            phonenumber: t("main.useFormValidationError.Phone number must be 7 to 13 digits and may contain numbers and '+'"),
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
            email: t("main.useFormValidationError.Email is required"),
          });
        } else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
        ) {
          setErrors({
            ...errors,
            email: t("main.useFormValidationError.Invalid email format"),
          });
        } else {
          let newObj = omit(errors, "email");
          setErrors(newObj);
        }
        break;

      case "password":
        if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
        ) {
          setErrors({
            ...errors,
            password: t("main.useFormValidationError.Password must be 8 to 16 characters and contain at least one digit and one special character"),
          });
        } else {
          let newObj = omit(errors, "password");
          setErrors(newObj);
          setPassword(value);
        }
        break;

      case "passwordlogin":
        if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
        ) {
          setErrors({
            ...errors,
            passwordlogin: t("main.useFormValidationError.Password must be 8 to 16 characters and contain at least one digit and one special character"),
          });
        } else {
          let newObj = omit(errors, "passwordlogin");
          setErrors(newObj);
        }
        break;

      case "confirmpassword":
        if (password !== value) {
          setErrors({
            ...errors,
            confirmpassword: t("main.useFormValidationError.Passwords do not match"),
          });
        } else {
          let newObj = omit(errors, "confirmpassword");
          setErrors(newObj);
        }
        break;


      case "textarea":
        // Textarea validation
        if (value.trim().length === 0) {
          setErrors({
            ...errors,
            [name]: t("main.useFormValidationError.Textarea cannot be empty"),
          });
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;

      case "url":
        // URL validation
        if (
          !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(value)
        ) {
          setErrors({
            ...errors,
            [name]: t("main.useFormValidationError.Invalid URL format"),
          });
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;


      case "selectbox":
        // Select box validation
        if (!value) {
          setErrors({
            ...errors,
            [name]: t("main.useFormValidationError.Please select an option"),
          });
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;

      case "date":
        // Date validation (assuming a simple date format like YYYY-MM-DD)
        if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
          setErrors({
            ...errors,
            [name]: t("main.useFormValidationError.Invalid date format (YYYY-MM-DD)"),
          });
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;

      case "range":
        // Range input validation (assuming a range between 1 and 100)
        if (value < 1 || value > 100) {
          setErrors({
            ...errors,
            [name]: t("main.useFormValidationError.Value must be between 1 and 100"),
          });
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;


      case "email_checkbox":

        if (!value) {
          setErrors({
            ...errors,
            [name]: t("main.useFormValidationError.Please select at least one checkbox"),
          });
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;


      case "phonecheckbox":

        if (!value) {
          setErrors({
            ...errors,
            [name]: t("main.useFormValidationError.Please select at least one checkbox"),
          });
        } else {
          let newObj = omit(errors, name);
          setErrors(newObj);
        }
        break;

      case "offline_status":
        if (!value) {
          setErrors({
            ...errors,
            offline_status: "Please select an option for offline status",
          });
        } else {
          let newObj = omit(errors, "offline_status");
          setErrors(newObj);
        }
        break;



      case "verifycode":
        if (value.trim().length === 0) {
          setErrors({
            ...errors,
            verifycode: t('main.forgotPasswordCode.Verification_code_required'),
          });
        } else if (value.trim().length < 4) {
          setErrors({
            ...errors,
            verifycode: "Verification code must be at least 4 characters long",
          });
        } else {
          let newObj = omit(errors, "verifycode");
          setErrors(newObj);
        }
        break;


      case "businessName":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            businessName: t('main.profile.Business_Name_is_Required')

          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            businessName: t('main.profile.Invalid_Business_Name'),
          });
        } else {
          let newObj = omit(errors, "businessName");
          setErrors(newObj);
        }
        break;

      case "businessType":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            businessType: t('main.profile.Business_Type_is_Required')

          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            businessType: t('main.profile.Invalid_Business_Type'),

          });
        } else {
          let newObj = omit(errors, "businessType");
          setErrors(newObj);
        }
        break;

      case "websiteLink":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            websiteLink: t('main.profile.Website_Link_is_Required'),

          });
        } else if (
          !new RegExp(
            "^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$"
          ).test(value)
        ) {
          setErrors({
            ...errors,
            websiteLink: t('main.profile.Invalid_Website_Link'),

          });
        } else {
          let newObj = omit(errors, "websiteLink");
          setErrors(newObj);
        }
        break;
      case "employeelength":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            employeelength: t('main.profile.Employee_strength_empty'),
          });
        } else if (!new RegExp(/^[0-9]+$/).test(value)) {
          setErrors({
            ...errors,
            employeelength: t('main.profile.Employee_strength_numeric_characters'),
          });
        } else {
          let newObj = omit(errors, "employeelength");
          setErrors(newObj);
        }
        break;
      case "startdate":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            startdate: t('main.profile.Start_date_empty'),
          });
        } else {
          let newObj = omit(errors, "startdate");
          setErrors(newObj);
        }
        break;


      case "businessdesc":
        if (value.trim().length <= 50) {
          setErrors({
            ...errors,
            businessdesc: t('main.profile.Business_description_characters_long'),

          });
        } else {
          let newObj = omit(errors, "businessdesc");
          setErrors(newObj);
        }
        break;
      case "fname":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            fname: t('main.profile.First_name_empty'),
          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            fname: t('main.profile.First_name_letters_spaces'),
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
            lname: t('main.profile.Last_name_empty'),
          });
        } else if (!new RegExp(/^[A-Za-z\s]+$/).test(value)) {
          setErrors({
            ...errors,
            lname: t('main.profile.Last_name_letters_spaces'),
          });
        } else {
          let newObj = omit(errors, "lname");
          setErrors(newObj);
        }
        break;
      case "Line1":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            Line1: t('main.profile.Add_Line1_required'), // Custom error message for empty input
          });
        } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
          setErrors({
            ...errors,
            Line1: t('main.profile.Add_Line1_regEx'), // Custom error message for invalid input
          });
        } else {
          let newObj = omit(errors, "Line1");
          setErrors(newObj);
        }
        break;

      case "Line2":
        // if (value.trim().length <= 0) {
        //   setErrors({
        //     ...errors,
        //     Line2: t('main.profile.Add_Line2_required'), // Custom error message for empty input
        //   });
        // } else
        if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
          setErrors({
            ...errors,
            Line2: t('main.profile.Add_Line2_regEx'), // Custom error message for invalid input
          });
        } else {
          let newObj = omit(errors, "Line2");
          setErrors(newObj);
        }
        break;
      case "postalcode":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            postalcode: t('main.profile.Postal_Code_required'), // Custom error message for empty input
          });
        } else if (
          !new RegExp(
            /(^\d{5}$)|(^\d{5}-\d{4}$)|(^\d{6}$)|(^\d{6}-\d{4}$)/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            postalcode: t('main.profile.enter_valid_Postal_Code'), // Custom error message for invalid input
          });
        } else {
          let newObj = omit(errors, "postalcode");
          setErrors(newObj);
        }
        break;
      case "Landmark":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            Landmark: t('main.profile.Landmark_required'), // Custom error message for empty input
          });
        } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
          setErrors({
            ...errors,
            Landmark: t('main.profile.enter_valid_Landmark'), // Custom error message for invalid input
          });
        } else {
          let newObj = omit(errors, "Landmark");
          setErrors(newObj);
        }
        break;
      case "country":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            country: t('main.profile.Country_required'), // Custom error message for empty input
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
            State: t('main.profile.State_required'), // Custom error message for empty input
          });
        } else if (!new RegExp(/^[A-Za-zÀ-ÿ\s-]+$/).test(value)) {
          setErrors({
            ...errors,
            State: t('main.profile.enter_valid_State'), // Custom error message for invalid input
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
            city: t('main.profile.City_required'), // Custom error message for empty input
          });
        } else if (!new RegExp(/^[A-Za-zÀ-ÿ\s-]+$/).test(value)) {
          setErrors({
            ...errors,
            city: t('main.profile.enter_valid_City'), // Custom error message for invalid input
          });
        } else {
          let newObj = omit(errors, "city");
          setErrors(newObj);
        }
        break;

      case "countryName":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            countryName: t("main.CountryTable.AddCountry.Country_Name_required")
          });
        } else {
          let newObj = omit(errors, "countryName");
          setErrors(newObj);
        }
        break;
      case "currencyName":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            currencyName: t("main.CountryTable.AddCountry.Currency_Name_required")
          });
        } else {
          let newObj = omit(errors, "currencyName");
          setErrors(newObj);
        }
        break;

      case "countryCode":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            countryCode: "Country Code is required."
          });
        } else {
          let newObj = omit(errors, "countryCode");
          setErrors(newObj);
        }
        break;

      case "currencyCode":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            currencyCode: "Currency Code is required."
          });
        } else {
          let newObj = omit(errors, "currencyCode");
          setErrors(newObj);
        }
        break;

      case "timeZone":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            timeZone: "Time Zone is required."
          });
        } else {
          let newObj = omit(errors, "timeZone");
          setErrors(newObj);
        }
        break;

      case "currencySymbol":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            currencySymbol: t("main.CountryTable.AddCountry.Currency_Symbol_required")
          });
        } else {
          let newObj = omit(errors, "currencySymbol");
          setErrors(newObj);
        }
        break;

      case "countryFlag":
        if (!isValidFileUploaded(value)) {
          setErrors({
            ...errors,
            countryFlag: "Invalid File Format. Please upload a valid file."
          });
        } else {
          let newObj = omit(errors, 'countryFlag');
          setErrors(newObj);
        }
        break;
      case "business_category_name":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            business_category_name: t('main.BusinessCategoryTable.AddBusinessCategory.Business_category_Name_required')
          });
        } else if (!new RegExp(/^[a-zA-Z0-9\s,.'-]{3,}$/).test(value)) {
          setErrors({
            ...errors,
            business_category_name: t('main.BusinessCategoryTable.AddBusinessCategory.Business_category_Name_invalid')
          });
        } else {
          let newObj = omit(errors, "business_category_name");
          setErrors(newObj);
        }
        break;
      case "site_name":
        if (value.trim().length === 0) {
          setErrors({
            ...errors,
            site_name: "Site Name is required.",
          });
        } else if (/\d/.test(value)) {
          setErrors({
            ...errors,
            site_name: "Site Name should not contain numbers.",
          });
        } else {
          let newObj = omit(errors, "site_name");
          setErrors(newObj);
        }
        break;
      case "old_password":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            old_password: t('main.PasswordChange.Old_password_required')
          });
        } else {
          let newObj = omit(errors, "old_password");
          setErrors(newObj);
        }
        break;
      case "admin_name":
        if (value.trim().length === 0) {
          setErrors({
            ...errors,
            admin_name: "Admin Name is required.",
          });
        } else if (/\d/.test(value)) {
          setErrors({
            ...errors,
            admin_name: "Admin Name should not contain numbers.",
          });
        } else {
          let newObj = omit(errors, "admin_name");
          setErrors(newObj);
        }
        break;
      case "admin_email":
        if (value.trim().length === 0) {
          setErrors({
            ...errors,
            admin_email: "Admin Email is required.",
          });
        } else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        ) {
          setErrors({
            ...errors,
            admin_email: "Invalid admin email format.",
          });
        } else {
          let newObj = omit(errors, "admin_email");
          setErrors(newObj);
        }
        break;

      case "contact_email":
        if (value.trim().length === 0) {
          setErrors({
            ...errors,
            contact_email: "Contact Email is required.",
          });
        } else if (
          !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            value
          )
        ) {
          setErrors({
            ...errors,
            contact_email: "Invalid contact email format.",
          });
        } else {
          let newObj = omit(errors, "contact_email");
          setErrors(newObj);
        }
        break;

      case "contact_phone":
        if (!/^[0-9+].{6,13}$/.test(value)) {
          setErrors({
            ...errors,
            contact_phone: "Contact Phone must be 7 to 13 digits and may contain numbers and '+'.",
          });
        } else {
          let newObj = omit(errors, "contact_phone");
          setErrors(newObj);
        }
        break;

      case "logo_image":
        if (!isValidFileUploaded(value)) {
          setErrors({
            ...errors,
            logo_image: "Invalid File Format. Please upload a valid image file (png, jpeg, jpg, pdf).",
          });
        } else {
          let newObj = omit(errors, "logo_image");
          setErrors(newObj);
        }
        break;
      case "site_favicon":
        if (!isValidFileUploaded(value)) {
          setErrors({
            ...errors,
            site_favicon: "Invalid File Format. Please upload a valid image file (png, jpeg, jpg, or pdf).",
          });
        } else {
          let newObj = omit(errors, "site_favicon");
          setErrors(newObj);
        }
        break;
      case "new_password":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            new_password: t('main.PasswordChange.New_password_required')
          });
        } else if (
          !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/.test(value)
        ) {
          setErrors({
            ...errors,
            new_password: t('main.PasswordChange.password_long_and_makeHard')
          });
        } else {
          let newObj = omit(errors, "new_password");
          setErrors(newObj);
          setPswd(value);
        }
        break;

      case "confirm_password":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            confirm_password: t('main.PasswordChange.Confirm_password_required')
          });
        } else if (pswd !== value) {
          setErrors({
            ...errors,
            confirm_password: t('main.PasswordChange.is_Confirm_password')
          });
        } else {
          let newObj = omit(errors, "confirm_password");
          setErrors(newObj);
        }
        break;

      case "countryforadmincommision":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            countryforadmincommision: "Country for Admin Commission is required.",
          });
        } else {
          let newObj = omit(errors, "countryforadmincommision");
          setErrors(newObj);
        }
        break;

      case "topupwallet_commision_type":
        if (!value) {
          setErrors({
            ...errors,
            topupwallet_commision_type: "Top-Up Wallet Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "topupwallet_commision_type");
          setErrors(newObj);
        }
        break;

      case "withdrawl_commision_type":
        if (!value) {
          setErrors({
            ...errors,
            withdrawl_commision_type: "Withdrawal Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "withdrawl_commision_type");
          setErrors(newObj);
        }
        break;

      case "transfer_commision_type":
        if (!value) {
          setErrors({
            ...errors,
            transfer_commision_type: "Transfer Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "transfer_commision_type");
          setErrors(newObj);
        }
        break;

      case "utilitypayment_commision_type":
        if (!value) {
          setErrors({
            ...errors,
            utilitypayment_commision_type: "Utility Payment Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "utilitypayment_commision_type");
          setErrors(newObj);
        }
        break;
      case "withdrawl_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            withdrawl_amount: value ? "Withdrawal Amount must be a valid number with up to 2 decimal places." : "Withdrawal Amount is required.",
          });
        } else {
          let newObj = omit(errors, "withdrawl_amount");
          setErrors(newObj);
        }
        break;

      case "transfer_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            transfer_amount: value ? "Transfer Amount must be a valid number with up to 2 decimal places." : "Transfer Amount is required.",
          });
        } else {
          let newObj = omit(errors, "transfer_amount");
          setErrors(newObj);
        }
        break;

      case "topupwallet_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            topupwallet_amount: value ? "Top-Up Wallet Amount must be a valid number with up to 2 decimal places." : "Top-Up Wallet Amount is required.",
          });
        } else {
          let newObj = omit(errors, "topupwallet_amount");
          setErrors(newObj);
        }
        break;

      case "utilitypayment_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            utilitypayment_amount: value ? "Utility Payment Amount must be a valid number with up to 2 decimal places." : "Utility Payment Amount is required.",
          });
        } else {
          let newObj = omit(errors, "utilitypayment_amount");
          setErrors(newObj);
        }
        break;


      // Validation for withdrawal fee
      case "merchant_instant_withdrawal_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            merchant_instant_withdrawal_fee: value ? "Instant Withdrawal Fee must be a valid number with up to 2 decimal places." : "Instant Withdrawal Fee Type is required.",
          });
        } else {
          let newObj = omit(errors, "merchant_instant_withdrawal_fee");
          setErrors(newObj);
        }
        break;

      case "merchant_normal_withdrawal_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            merchant_normal_withdrawal_fee: value ? "Normal Withdrawal Fee must be a valid number with up to 2 decimal places." : "Normal Withdrawal Fee Type is required.",
          });
        } else {
          let newObj = omit(errors, "merchant_normal_withdrawal_fee");
          setErrors(newObj);
        }
        break;

      case "customer_instant_withdrawal_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            customer_instant_withdrawal_fee: value ? "Instant Withdrawal Fee must be a valid number with up to 2 decimal places." : "Instant Withdrawal Fee Type is required.",
          });
        } else {
          let newObj = omit(errors, "customer_instant_withdrawal_fee");
          setErrors(newObj);
        }
        break;

      case "customer_normal_withdrawal_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            customer_normal_withdrawal_fee: value ? "Normal Withdrawal Fee must be a valid number with up to 2 decimal places." : "Normal Withdrawal Fee Type is required.",
          });
        } else {
          let newObj = omit(errors, "customer_normal_withdrawal_fee");
          setErrors(newObj);
        }
        break;

      case "merchant_instant_withdrawal_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            merchant_instant_withdrawal_fee_type: "Instant Withdrawal Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "merchant_instant_withdrawal_fee_type");
          setErrors(newObj);
        }
        break;

      case "merchant_normal_withdrawal_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            merchant_normal_withdrawal_fee_type: "Normal Withdrawal Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "merchant_normal_withdrawal_fee_type");
          setErrors(newObj);
        }
        break;

      case "customer_instant_withdrawal_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            customer_instant_withdrawal_fee_type: "Instant Withdrawal Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "customer_instant_withdrawal_fee_type");
          setErrors(newObj);
        }
        break;

      case "customer_normal_withdrawal_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            customer_normal_withdrawal_fee_type: "Normal Withdrawal Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "customer_normal_withdrawal_fee_type");
          setErrors(newObj);
        }
        break;


      // Validation for transaction fee
      case "bctWalletToMomo_transaction_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            bctWalletToMomo_transaction_fee: value ? "Transaction Fee must be a valid number with up to 2 decimal places." : "Transaction Fee is required.",
          });
        } else {
          let newObj = omit(errors, "bctWalletToMomo_transaction_fee");
          setErrors(newObj);
        }
        break;

      case "bctWalletToBank_transaction_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            bctWalletToBank_transaction_fee: value ? "Transaction Fee must be a valid number with up to 2 decimal places." : "Transaction Fee is required.",
          });
        } else {
          let newObj = omit(errors, "bctWalletToBank_transaction_fee");
          setErrors(newObj);
        }
        break;

      case "momoToMomo_transaction_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            momoToMomo_transaction_fee: value ? "Transaction Fee must be a valid number with up to 2 decimal places." : "Transaction Fee is required.",
          });
        } else {
          let newObj = omit(errors, "momoToMomo_transaction_fee");
          setErrors(newObj);
        }
        break;

      case "momoToBank_transaction_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            momoToBank_transaction_fee: value ? "Transaction Fee must be a valid number with up to 2 decimal places." : "Transaction Fee is required.",
          });
        } else {
          let newObj = omit(errors, "momoToBank_transaction_fee");
          setErrors(newObj);
        }
        break;

      case "bankToMomo_transaction_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            bankToMomo_transaction_fee: value ? "Transaction Fee must be a valid number with up to 2 decimal places." : "Transaction Fee is required.",
          });
        } else {
          let newObj = omit(errors, "bankToMomo_transaction_fee");
          setErrors(newObj);
        }
        break;

      case "bankToBank_transaction_fee":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            bankToBank_transaction_fee: value ? "Transaction Fee must be a valid number with up to 2 decimal places." : "Transaction Fee is required.",
          });
        } else {
          let newObj = omit(errors, "bankToBank_transaction_fee");
          setErrors(newObj);
        }
        break;

      case "bctWalletToMomo_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            bctWalletToMomo_fee_type: "Transaction fee type is required.",
          });
        } else {
          let newObj = omit(errors, "bctWalletToMomo_fee_type");
          setErrors(newObj);
        }
        break;

      case "bctWalletToBank_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            bctWalletToBank_fee_type: "Transaction fee type is required.",
          });
        } else {
          let newObj = omit(errors, "bctWalletToBank_fee_type");
          setErrors(newObj);
        }
        break;

      case "momoToMomo_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            momoToMomo_fee_type: "Transaction fee type is required.",
          });
        } else {
          let newObj = omit(errors, "momoToMomo_fee_type");
          setErrors(newObj);
        }
        break;

      case "momoToBank_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            momoToBank_fee_type: "Transaction fee type is required.",
          });
        } else {
          let newObj = omit(errors, "momoToBank_fee_type");
          setErrors(newObj);
        }
        break;

      case "bankToMomo_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            bankToMomo_fee_type: "Transaction fee type is required.",
          });
        } else {
          let newObj = omit(errors, "bankToMomo_fee_type");
          setErrors(newObj);
        }
        break;

      case "bankToBank_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            bankToBank_fee_type: "Transaction fee type is required.",
          });
        } else {
          let newObj = omit(errors, "bankToBank_fee_type");
          setErrors(newObj);
        }
        break;

      case "withdrawl_commision_type":
        if (!value) {
          setErrors({
            ...errors,
            withdrawl_commision_type: "Withdrawal Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "withdrawl_commision_type");
          setErrors(newObj);
        }
        break;

      case "transfer_commision_type":
        if (!value) {
          setErrors({
            ...errors,
            transfer_commision_type: "Transfer Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "transfer_commision_type");
          setErrors(newObj);
        }
        break;

      case "utilitypayment_commision_type":
        if (!value) {
          setErrors({
            ...errors,
            utilitypayment_commision_type: "Utility Payment Commission Type is required.",
          });
        } else {
          let newObj = omit(errors, "utilitypayment_commision_type");
          setErrors(newObj);
        }
        break;
      case "withdrawl_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            withdrawl_amount: value ? "Withdrawal Amount must be a valid number with up to 2 decimal places." : "Withdrawal Amount is required.",
          });
        } else {
          let newObj = omit(errors, "withdrawl_amount");
          setErrors(newObj);
        }
        break;

      case "transfer_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            transfer_amount: value ? "Transfer Amount must be a valid number with up to 2 decimal places." : "Transfer Amount is required.",
          });
        } else {
          let newObj = omit(errors, "transfer_amount");
          setErrors(newObj);
        }
        break;

      case "topupwallet_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            topupwallet_amount: value ? "Top-Up Wallet Amount must be a valid number with up to 2 decimal places." : "Top-Up Wallet Amount is required.",
          });
        } else {
          let newObj = omit(errors, "topupwallet_amount");
          setErrors(newObj);
        }
        break;

      case "utilitypayment_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            utilitypayment_amount: value ? "Utility Payment Amount must be a valid number with up to 2 decimal places." : "Utility Payment Amount is required.",
          });
        } else {
          let newObj = omit(errors, "utilitypayment_amount");
          setErrors(newObj);
        }
        break;
      // for transactonlimit 
      case "countryfortransactionlimit":
        if (value.trim().length <= 0) {
          setErrors({
            ...errors,
            countryfortransactionlimit: "Country for Admin Commission is required.",
          });
        } else {
          let newObj = omit(errors, "countryfortransactionlimit");
          setErrors(newObj);
        }
        break;

      case "topupwallet_monthly_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            topupwallet_monthly_amount: value ? "Top-Up Wallet Monthly Amount must be a valid number with up to 2 decimal places." : "Top-Up Wallet Monthly Amount is required.",
          });
        } else {
          let newObj = omit(errors, "topupwallet_monthly_amount");
          setErrors(newObj);
        }
        break;

      case "topupwallet_daily_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            topupwallet_daily_amount: value ? "Top-Up Wallet Daily Amount must be a valid number with up to 2 decimal places." : "Top-Up Wallet Daily Amount is required.",
          });
        } else {
          let newObj = omit(errors, "topupwallet_daily_amount");
          setErrors(newObj);
        }
        break;

      case "topupwallet_per_trasaction_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            topupwallet_per_trasaction_amount: value ? "Top-Up Wallet Per Transaction Amount must be a valid number with up to 2 decimal places." : "Top-Up Wallet Per Transaction Amount is required.",
          });
        } else {
          let newObj = omit(errors, "topupwallet_per_trasaction_amount");
          setErrors(newObj);
        }
        break;

      case "withdrawl_monthly_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            withdrawl_monthly_amount: value ? "Withdrawal Monthly Amount must be a valid number with up to 2 decimal places." : "Withdrawal Monthly Amount is required.",
          });
        } else {
          let newObj = omit(errors, "withdrawl_monthly_amount");
          setErrors(newObj);
        }
        break;

      case "withdrawl_daily_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            withdrawl_daily_amount: value ? "Withdrawal Daily Amount must be a valid number with up to 2 decimal places." : "Withdrawal Daily Amount is required.",
          });
        } else {
          let newObj = omit(errors, "withdrawl_daily_amount");
          setErrors(newObj);
        }
        break;

      case "withdrawl_per_transaction_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            withdrawl_per_transaction_amount: value ? "Withdrawal Per Transaction Amount must be a valid number with up to 2 decimal places." : "Withdrawal Per Transaction Amount is required.",
          });
        } else {
          let newObj = omit(errors, "withdrawl_per_transaction_amount");
          setErrors(newObj);
        }
        break;

      case "transfer_monthly_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            transfer_monthly_amount: value ? "Transfer Monthly Amount must be a valid number with up to 2 decimal places." : "Transfer Monthly Amount is required.",
          });
        } else {
          let newObj = omit(errors, "transfer_monthly_amount");
          setErrors(newObj);
        }
        break;

      case "transfer_daily_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            transfer_daily_amount: value ? "Transfer Daily Amount must be a valid number with up to 2 decimal places." : "Transfer Daily Amount is required.",
          });
        } else {
          let newObj = omit(errors, "transfer_daily_amount");
          setErrors(newObj);
        }
        break;

      case "transfer_per_trasaction_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            transfer_per_trasaction_amount: value ? "Transfer Per Transaction Amount must be a valid number with up to 2 decimal places." : "Transfer Per Transaction Amount is required.",
          });
        } else {
          let newObj = omit(errors, "transfer_per_trasaction_amount");
          setErrors(newObj);
        }
        break;

        // for wallettopupfee 
        
        case "countryforwallettopupfee":
          if (value.trim().length <= 0) {
            setErrors({
              ...errors,
              countryforwallettopupfee: "Country for Admin Commission is required.",
            });
          } else {
            let newObj = omit(errors, "countryforwallettopupfee");
            setErrors(newObj);
          }
          break;

      case "wallet_fee_type":
        if (!value) {
          setErrors({
            ...errors,
            wallet_fee_type: "Please select a Wallet Fee Type.",
          });
        } else {
          let newObj = omit(errors, "wallet_fee_type");
          setErrors(newObj);
        }
        break;

      case "topup_fee_amount":
        if (!value || !/^\d+(\.\d{1,2})?$/.test(value)) {
          setErrors({
            ...errors,
            topup_fee_amount: value ? "Top-Up Fee Amount must be a valid number with up to 2 decimal places." : "Top-Up Fee Amount is required.",
          });
        } else {
          let newObj = omit(errors, "topup_fee_amount");
          setErrors(newObj);
        }
        break;


        case "countryforsettlement":
          if (value.trim().length <= 0) {
            setErrors({
              ...errors,
              countryforsettlement: "Country for Admin Commission is required.",
            });
          } else {
            let newObj = omit(errors, "countryforsettlement");
            setErrors(newObj);
          }
          break;

      case "min_customer_settlement_days":
        if (!value || !/^\d+$/.test(value)) {
          setErrors({
            ...errors,
            min_customer_settlement_days: value ? "Minimum Customer Settlement Days must be a positive whole number." : "Minimum Customer Settlement Days is required.",
          });
        } else {
          let newObj = omit(errors, "min_customer_settlement_days");
          setErrors(newObj);
        }
        break;

      case "max_customer_settlement_days":
        if (!value || !/^\d+$/.test(value)) {
          setErrors({
            ...errors,
            max_customer_settlement_days: value ? "Maximum Customer Settlement Days must be a positive whole number." : "Maximum Customer Settlement Days is required.",
          });
        } else {
          let newObj = omit(errors, "max_customer_settlement_days");
          setErrors(newObj);
        }
        break;

      case "min_merchant_settlement_days":
        if (!value || !/^\d+$/.test(value)) {
          setErrors({
            ...errors,
            min_merchant_settlement_days: value ? "Minimum Merchant Settlement Days must be a positive whole number." : "Minimum Merchant Settlement Days is required.",
          });
        } else {
          let newObj = omit(errors, "min_merchant_settlement_days");
          setErrors(newObj);
        }
        break;

      case "max_merchant_settlement_days":
        if (!value || !/^\d+$/.test(value)) {
          setErrors({
            ...errors,
            max_merchant_settlement_days: value ? "Maximum Merchant Settlement Days must be a positive whole number." : "Maximum Merchant Settlement Days is required.",
          });
        } else {
          let newObj = omit(errors, "max_merchant_settlement_days");
          setErrors(newObj);
        }
        break;

      default:
        break;
    }
  };


  //A method to handle form inputs
  const handleChange = (event) => {

    //To stop default events
    event.persist();

    let name = event.target.name;
    const val = event.target.type === 'checkbox' ? event.target.checked : event.target.type === 'file' ? event.target.files[0] : event.target.value;


    if (event.target.required === true) {
      validate(event, name, val);
    } // Handle checkbox and radio button separately 
    else if (event.target.type === "checkbox" || event.target.type === "radio") {

      validate(event, name, val);
      setValues({
        ...values,
        [name]: val,
      });
    }
    else if (event.target.type === 'file') {
      validate(event, name, val);
      setValues({
        ...values,
        [name]: val,
      });
      // console.log(val)
      // if (val) {
      //   displayImage(val);
      // }
    }
    else {
      console.error("inside");
      let newObj = omit(errors, name);
      setErrors(newObj);
    }
    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
      [name + 'event']: event,
      event: event
    });
  };

  //A method to handle form inputs
  const handleBlur = (event) => {
    event.persist();

    let name = event.target.name;
    let val = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    if (event.target.required === true) {
      validate(event, name, val);
    }  // Handle checkbox and radio button separately 
    else if (event.target.type === "checkbox" || event.target.type === "radio") {
      validate(event, name, val);
      setValues({
        ...values,
        [name]: val,
      });
    }
    else {
      let newObj = omit(errors, name);
      setErrors(newObj);
    }

    //Let's set these values in state
    setValues({
      ...values,
      [name]: val,
      [name + 'event']: event,
      event: event
    });
  };

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    setformname(event.target.name);
    callback()
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