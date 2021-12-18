import { useContext } from "react";
import { useHistory } from "react-router-dom";
import EmployeeForm from "../Employees/EmployeeForm";
import EmployeesContext from "../../store/employees-context";

const EditEmployee = (props) => {
  const employeesCtx = useContext(EmployeesContext);
  const history = useHistory();

  const editUserHandler = (employee) => {
    employeesCtx.editEmployee({...employee, id: props.formData.id});
    history.push("/employee/list");
  };
  return (
    <EmployeeForm
      initialInputValues={props.formData}
      actionType="Edit"
      onSubmitForm={editUserHandler}
    />
  );
};

export default EditEmployee;
