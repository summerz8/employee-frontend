import { useContext } from "react";
import { Link } from "react-router-dom";
import EmployeesContext from "../../store/employees-context";

const BtnCellRenderer = (props) => {
  const employeesCtx = useContext(EmployeesContext);

  const editHandler = (employee) => {
    props.onEditData(employee);
  };

  const deleteHandler = (id) => {
    const confirm = window.confirm("Are you sure to delete this employee?", id);
    if (confirm) {
      employeesCtx.deleteEmployee(id);
    }
  };

  return (
    <div>
      <Link to="/employee/edit">
        <button onClick={editHandler.bind(null, props.data)}>Edit</button>
      </Link>
      <button onClick={deleteHandler.bind(null, props.data.id)}>
        Delete
      </button>
    </div>
  );
};

export default BtnCellRenderer;
