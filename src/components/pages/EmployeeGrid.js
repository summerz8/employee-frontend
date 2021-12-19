import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { AgGridColumn, AgGridReact } from "ag-grid-react";
import BtnCellRenderer from "../Grid/BtnCellRenderer";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  INIT_EMPLOYEES,
} from "../../store";

let isInitial = true;

const EmployeeGrid = (props) => {
  const employeesData = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isInitial && localStorage.getItem("employeesData") === null) {
      isInitial = false;
      const fetchData = async () => {
        const response = await fetch(
          "https://6164f6e709a29d0017c88ed9.mockapi.io/fetest/employees"
        );
        const initialData = await response.json();
        dispatch({ type: INIT_EMPLOYEES, employees: initialData });
        localStorage.setItem("employeesData", JSON.stringify(initialData));
      };
      fetchData();
      console.log("fetchData");
      console.log(employeesData);
    } else {
      if (employeesData.length === 0) {
        const initialData = JSON.parse(localStorage.getItem("employeesData"));
        dispatch({ type: INIT_EMPLOYEES, employees: initialData });
      }
      localStorage.setItem("employeesData", JSON.stringify(employeesData));
    }
  }, [employeesData, dispatch]);

  return (
    <div>
      <section>
        <h1>Employee List</h1>
      </section>
      <div className="ag-theme-alpine" style={{ height: 600, width: 1200 }}>
        <AgGridReact
          rowData={employeesData}
          pagination={true}
          frameworkComponents={{
            actionCellRenderer: BtnCellRenderer,
          }}
        >
          <AgGridColumn field="firstName"></AgGridColumn>
          <AgGridColumn field="lastName"></AgGridColumn>
          <AgGridColumn field="email"></AgGridColumn>
          <AgGridColumn field="number"></AgGridColumn>
          <AgGridColumn field="gender"></AgGridColumn>
          <AgGridColumn
            field="actions"
            cellRenderer="actionCellRenderer"
            cellRendererParams={{ onEditData: props.onEditData }}
          />
        </AgGridReact>
      </div>
    </div>
  );
};

export default EmployeeGrid;
