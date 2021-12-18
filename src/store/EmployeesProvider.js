import { useReducer } from "react";
import EmployeesContext from "./employees-context";

const defaultEmployeeState = {
  employees: [
    {
      firstName: "Lilliana",
      lastName: "Kertzmann",
      email: "Soledad39@hotmail.com",
      number: 6568945623,
      gender: "male",
      id: "1",
    },
  ],
};

const employeesReducer = (state, action) => {
  if (action.type === "ADD") {
    const maxId = Math.max(...state.employees.map((employee) => employee.id));
    const newEmployee = { ...action.employee, number:  +action.employee.number, id: maxId + 1 };
    console.log("Adding new employee: ", newEmployee);
    const updatedEmployees = state.employees.concat(newEmployee);
    return {
      employees: updatedEmployees,
    };
  }
  
  if (action.type === "EDIT") {
    const updatedEmployees = [...state.employees];
    const existingEmployeeIndex = state.employees.findIndex(
      (employee) => employee.id === action.employee.id
    );
    console.log(existingEmployeeIndex);
    updatedEmployees[existingEmployeeIndex] = {...action.employee, number:  +action.employee.number, };
    console.log("Edited!")
    console.log(updatedEmployees);
    return {
      employees: updatedEmployees,
    };
  }

  if (action.type === "DELETE") {
    const updatedEmployees = state.employees.filter(
      (employee) => employee.id !== action.id
    );
    return {
      employees: updatedEmployees,
    };
  }
  
  return { employees: state.employees };
};

const EmployeesProvider = (props) => {
  // const [employeesData, setEmployeesData] = useState([]);

  // useEffect(() => {
  //   console.log("loading data");
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       'https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees'
  //     );
  //     const responseData = await response.json();
  //     setEmployeesData(...responseData);
  //   };
  //   fetchData();
  //   console.log("Fetched Data: ");
  //   console.log(employeesData);
  // }, []);

  const [employeesState, dispatchEmployeesAction] = useReducer(
    employeesReducer,
    defaultEmployeeState
  );

  const addEmployeeHandler = (employee) => {
    dispatchEmployeesAction({ type: "ADD", employee: employee });
  };

  const editEmployeeHandler = (employee) => {
    dispatchEmployeesAction({ type: "EDIT", employee: employee });
  };

  const deleteEmployeeHandler = (id) => {
    dispatchEmployeesAction({ type: "DELETE", id: id });
  };

  const employeesCtx = {
    employees: employeesState.employees,
    addEmployee: addEmployeeHandler,
    editEmployee: editEmployeeHandler,
    deleteEmployee: deleteEmployeeHandler,
  };

  return (
    <EmployeesContext.Provider value={employeesCtx}>
      {props.children}
    </EmployeesContext.Provider>
  );
};

export default EmployeesProvider;
