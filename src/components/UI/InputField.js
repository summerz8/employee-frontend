import React from "react";
import TextField from '@mui/material/TextField';


const InputField = (props) => {
  return (
    <TextField
        variant="outlined"
        name={props.name}
        label={props.name}
        value={props.value}
        onChange={props.onChangeHandler}
        onBlur={props.onBlurHandler}
        {...(props.hasError && {error:true, helperText:props.validationMessage})}
    />
)
};

export default InputField;

