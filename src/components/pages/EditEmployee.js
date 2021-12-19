import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { EDIT_EMPLOYEE } from "../../store";

import EmployeeForm from "../Employees/EmployeeForm";

const EditEmployee = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const editUserHandler = (employee) => {
    dispatch({
      type: EDIT_EMPLOYEE,
      employee: { ...employee, id: props.formData.id },
    });
    history.push("/employee/list");
  };
  return (
    <EmployeeForm
      initialInputValues={props.formData}
      onSubmitForm={editUserHandler}
    />
  );
};

export default EditEmployee;
