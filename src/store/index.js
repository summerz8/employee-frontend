import { createStore } from "redux";


export const INIT_EMPLOYEES = "initialise";
export const ADD_EMPLOYEE = "add";
export const EDIT_EMPLOYEE = "edit";
export const DELETE_EMPLOYEE = "delete";

const initialState = {
  employees: [],
};

const employeesReducer = (state = initialState, action) => {
  if (action.type === INIT_EMPLOYEES) {
    if (state.employees.length === 0) {
      console.log("INIT_EMPLOYEES in employeesReducer")
      console.log(action.employees);
      console.log("INIT_EMPLOYEES finished in employeesReducer")
      const updatedEmployees = [...action.employees];
      return {
        employees: updatedEmployees,
      };
    }
  }

  if (action.type === ADD_EMPLOYEE) {
    const maxId = Math.max(...state.employees.map((employee) => employee.id));
    const newEmployee = {
      ...action.employee,
      number: +action.employee.number,
      id: maxId + 1,
    };
    const updatedEmployees = state.employees.concat(newEmployee);
    return {
      employees: updatedEmployees,
    };
  }

  if (action.type === EDIT_EMPLOYEE) {
    const updatedEmployees = [...state.employees];
    const existingEmployeeIndex = state.employees.findIndex(
      (employee) => employee.id === action.employee.id
    );
    updatedEmployees[existingEmployeeIndex] = {
      ...action.employee,
      number: +action.employee.number,
    };

    return {
      employees: updatedEmployees,
    };
  }

  if (action.type === DELETE_EMPLOYEE) {
    const updatedEmployees = state.employees.filter(
      (employee) => employee.id !== action.id
    );
    return {
      employees: updatedEmployees,
    };
  }

  return { employees: state.employees };
};

const store = createStore(employeesReducer);

export default store;
