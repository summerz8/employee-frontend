import React from "react";

const EmployeesContext = React.createContext({
  employees: [],
  addEmployee: (employee) => {},
  editEmployee: (employee) => {},
  deleteEmployee: (id) => {},
});

export default EmployeesContext;
