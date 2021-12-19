import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { DELETE_EMPLOYEE } from "../../store";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

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
        <Button
          onClick={editHandler.bind(null, props.data)}
          variant="contained"
          size="small"
        >
          Edit
        </Button>
      </Link>
      <> </>
      <Button
        onClick={deleteHandler.bind(null, props.data.id)}
        variant="outlined"
        startIcon={<DeleteIcon />}
        size="small"
      >
        Delete
      </Button>
    </div>
  );
};

export default BtnCellRenderer;
