import { useEffect, useState } from "react";
import useInput from "../hooks/use-input";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import InputField from "../UI/InputField";
import SelectionField from "../UI/SelectField";
import classes from "./EmployeeForm.module.css";


const defaultInputValues = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  number: "",
  gender: "",
};

const isValidName = (value) =>
  value.trim().length >= 6 && value.trim().length <= 10;
const isValidEmail = (value) =>
  /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value.trim());
const isValidPhoneNumber = (value) => /65(6|8|9)\d{7}/g.test(value.trim());
const isNotEmpty = (value) => value.trim().length > 0;

const nameValidationMessage =
  "Please enter valid name (name length between 6 to 10 characthers).";
const emailValidationMessage = "Please enter valid email address.";
const phoneNumberValidationMessage =
  "Please enter valid Singapore phone number (starting with 65).";
const isNotEmptyValidationMessage = "Please select a value.";

const EmployeeForm = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const initialInputValues = props.initialInputValues
    ? props.initialInputValues
    : defaultInputValues;
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(initialInputValues.firstName, isValidName);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(initialInputValues.lastName, isValidName);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(initialInputValues.email, isValidEmail);

  const {
    value: phoneNumberValue,
    isValid: phoneNumberIsValid,
    hasError: phoneNumberHasError,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumber,
  } = useInput("" + initialInputValues.number, isValidPhoneNumber);

  const {
    value: genderValue,
    isValid: genderIsValid,
    hasError: genderHasError,
    valueChangeHandler: genderChangeHandler,
    inputBlurHandler: genderBlurHandler,
    reset: resetGender,
  } = useInput(initialInputValues.gender, isNotEmpty);

  useEffect(() => {
    const inputTimer = setTimeout(() => {
      setFormIsValid(
        firstNameIsValid &&
          lastNameIsValid &&
          emailIsValid &&
          phoneNumberIsValid &&
          genderIsValid
      );
    }, 300);

    return () => {
      clearTimeout(inputTimer);
    };
  }, [
    firstNameIsValid,
    lastNameIsValid,
    emailIsValid,
    phoneNumberIsValid,
    genderIsValid,
  ]);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhoneNumber();
    resetGender();

    props.onSubmitForm({
      firstName: firstNameValue.trim(),
      lastName: lastNameValue.trim(),
      email: emailValue.trim(),
      number: phoneNumberValue.trim(),
      gender: genderValue,
    });
  };

  return (
    <>
      <Card className={classes.fields}>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <form onSubmit={submitHandler}>
            <Grid container rowSpacing={2}>
              <InputField
                value={firstNameValue}
                isValid={firstNameIsValid}
                hasError={firstNameHasError}
                htmlFor="firstname"
                name="First Name"
                type="text"
                id="firstname"
                onChangeHandler={firstNameChangeHandler}
                onBlurHandler={firstNameBlurHandler}
                validationMessage={nameValidationMessage}
              />
            
              <InputField
                value={lastNameValue}
                isValid={lastNameIsValid}
                hasError={lastNameHasError}
                htmlFor="lastname"
                name="Last Name"
                type="text"
                id="lastname"
                onChangeHandler={lastNameChangeHandler}
                onBlurHandler={lastNameBlurHandler}
                validationMessage={nameValidationMessage}
              />
            
              <InputField
                value={emailValue}
                isValid={emailIsValid}
                hasError={emailHasError}
                htmlFor="email"
                name="E-Mail"
                type="text"
                id="email"
                onChangeHandler={emailChangeHandler}
                onBlurHandler={emailBlurHandler}
                validationMessage={emailValidationMessage}
              />
            
              <InputField
                value={phoneNumberValue}
                isValid={phoneNumberIsValid}
                hasError={phoneNumberHasError}
                htmlFor="number"
                name="Phone Number"
                type="number"
                id="number"
                onChangeHandler={phoneNumberChangeHandler}
                onBlurHandler={phoneNumberBlurHandler}
                validationMessage={phoneNumberValidationMessage}
              />
            
              <SelectionField
                value={genderValue}
                isValid={genderIsValid}
                hasError={genderHasError}
                htmlFor="gender"
                name="Gender"
                type="radio"
                id="gender"
                onChangeHandler={genderChangeHandler}
                onBlurHandler={genderBlurHandler}
                validationMessage={isNotEmptyValidationMessage}
              />
            </Grid>
            <div className={classes.actions}>
              <Button
                type="submit"
                disabled={!formIsValid}
                variant="contained"
                size="large"
              >
                Submit
              </Button>
            </div>
          </form>
        </Box>
      </Card>
    </>
  );
};

export default EmployeeForm;
