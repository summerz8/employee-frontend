import { useContext } from "react";
import { useHistory } from "react-router-dom";
import EmployeeForm from "../Employees/EmployeeForm";
import EmployeesContext from "../../store/employees-context";


const AddEmployee = props => {
    const employeesCtx = useContext(EmployeesContext);
    const history = useHistory();
    const addUserHandler = (employee) =>{
        employeesCtx.addEmployee(employee);
        history.push("/employee/list");
    };
    return  (<EmployeeForm actionType="Add" onSubmitForm={addUserHandler}/>);
};

export default AddEmployee;