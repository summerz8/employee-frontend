import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_EMPLOYEE } from "../../store";

const BtnCellRenderer = (props) => {
  const dispatch = useDispatch();
  const editHandler = (employee) => {
    props.onEditData(employee);
  };

  const deleteHandler = (id) => {
    const confirm = window.confirm("Are you sure to delete this employee?", id);
    if (confirm) {
      dispatch({ type: DELETE_EMPLOYEE, id: id });
    }
  };

  return (
    <div>
      <Link to="/employee/edit">
        <button onClick={editHandler.bind(null, props.data)}>Edit</button>
      </Link>
      <button onClick={deleteHandler.bind(null, props.data.id)}>Delete</button>
    </div>
  );
};

export default BtnCellRenderer;
