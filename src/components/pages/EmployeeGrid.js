import { useContext } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import EmployeesContext from "../../store/employees-context";
import BtnCellRenderer from "../Grid/BtnCellRenderer";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const EmployeeGrid = (props) => {

  const employeesCtx = useContext(EmployeesContext);
  
  return (
    <div>
      <section>
        <h1>Employee List</h1>
      </section>
      <div className="ag-theme-alpine" style={{ height: 600, width: 1200 }}>
        <AgGridReact
          rowData={employeesCtx.employees}
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
          <AgGridColumn field="actions" cellRenderer="actionCellRenderer" cellRendererParams={{onEditData: props.onEditData}} />
        </AgGridReact>
      </div>
    </div>
  );
};

export default EmployeeGrid;
