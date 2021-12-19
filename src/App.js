import { Link, Redirect, Route } from "react-router-dom";
import Button from "./components/UI/Button";
import EmployeeGrid from "./components/pages/EmployeeGrid";
import AddEmployee from "./components/pages/AddEmployee";
import EditEmployee from "./components/pages/EditEmployee";
import { Fragment, useState } from "react";

function App() {
  const [editFormData, setEditFormData] = useState(null);
  const editDataHandler = (employee) => {
    setEditFormData(employee);
  };

  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/employee/list" />
      </Route>
      <Route path="/employee" exact>
        <Redirect to="/employee/list" />
      </Route>

      <Route path="/employee/list">
        <Link to="/employee/add">
          <Button buttonName="Add Employee" />
        </Link>
        <EmployeeGrid onEditData={editDataHandler} />
      </Route>
      <Route path="/employee/add">
        <AddEmployee />
      </Route>

      <Route path="/employee/edit">
        <EditEmployee formData={editFormData} />
      </Route>
    </Fragment>
  );
}

export default App;
