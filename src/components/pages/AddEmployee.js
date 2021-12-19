import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD_EMPLOYEE } from "../../store";
import EmployeeForm from "../Employees/EmployeeForm";

const AddEmployee = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const addUserHandler = (employee) => {
    dispatch({ type: ADD_EMPLOYEE, employee: employee });
    history.push("/employee/list");
  };
  return <EmployeeForm onSubmitForm={addUserHandler} />;
};

export default AddEmployee;
